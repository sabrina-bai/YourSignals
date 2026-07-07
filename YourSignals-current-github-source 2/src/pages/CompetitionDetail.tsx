import { useParams } from "wouter";
import redIcon from "@/assets/red-icon.png";
import { findCompetitionBySlug } from "@/data/competitions";

function getReasonParagraphs(notes: string) {
  return notes
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function DetailListSection({ items, title }: { items: string[]; title: string }) {
  if (!items.length) return null;

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function DetailTextSection({ children, title }: { children: string; title: string }) {
  if (!children) return null;

  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default function CompetitionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const competition = findCompetitionBySlug(slug);

  if (!competition) {
    return (
      <main className="ys-page ys-detail-page">
        <section className="ys-detail-empty">
          <a href="/" className="ys-detail-back">← 返回首页 / BACK TO SIGNALS</a>
          <strong>NO SIGNAL FOUND</strong>
          <p>没有找到这条赛事信号。</p>
        </section>
      </main>
    );
  }

  return (
    <main className="ys-page ys-detail-page">
      <nav className="ys-nav" aria-label="Detail navigation">
        <a className="ys-brand" href="/" aria-label="YourSignals home">
          <img className="ys-brand-mark" src={redIcon} alt="" aria-hidden="true" />
          <span>
            <strong>YOURSIGNALS</strong>
            <small>SIGNAL_ARCHIVE_DETAIL</small>
          </span>
        </a>

        <div className="ys-nav-links">
          <a className="is-active" href="/">SIGNALS</a>
          <a href="/#about">MANIFESTO</a>
          <a href="/#community">CONNECT</a>
        </div>

        <div className="ys-live" aria-label="Signal detail">
          <span>SIGNAL FILE</span>
          <strong>{competition.id}</strong>
          <i aria-hidden="true" />
        </div>
      </nav>

      <section className={`ys-detail-hero tone-${competition.accent}`}>
        <div className="ys-detail-poster">
          <div className="ys-detail-tag-stack">
            {competition.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="ys-detail-title">
          <a href="/" className="ys-detail-back">← 返回首页 / BACK TO SIGNALS</a>
          <p>// SIGNAL DOSSIER</p>
          <h1>{competition.title}</h1>
          <span>{competition.participation} / {competition.region}</span>
        </div>
      </section>

      <section className="ys-detail-grid">
        <aside className="ys-detail-panel">
          <h2>基础信息</h2>
          <dl>
            <div>
              <dt>主办方</dt>
              <dd>{competition.organizer}</dd>
            </div>
            <div>
              <dt>截止日期</dt>
              <dd>{competition.deadline}</dd>
            </div>
            <div>
              <dt>参赛费用</dt>
              <dd>{competition.entryFee}</dd>
            </div>
            <div>
              <dt>结果周期</dt>
              <dd>{competition.resultCycle.join("；")}</dd>
            </div>
            <div>
              <dt>地区</dt>
              <dd>{competition.region}</dd>
            </div>
          </dl>

          {competition.officialUrls.map((officialUrl) => (
            <a className="ys-official-link" href={officialUrl.url} key={officialUrl.url} rel="noreferrer" target="_blank">
              {officialUrl.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </aside>

        <article className="ys-detail-content">
          <section>
            <h2>推荐理由</h2>
            {getReasonParagraphs(competition.notes).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <DetailTextSection title="赛事定位">{competition.positioning}</DetailTextSection>

          <DetailListSection title="投稿类别" items={competition.categories} />

          {competition.awardDetails && (
            <section>
              <h2>奖金与资源</h2>
              <ul>
                {competition.awardDetails.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </section>
          )}

          <DetailListSection title="作品要求" items={competition.requirements} />

          <DetailListSection title="Ethics Notebook｜伦理笔记" items={competition.ethicsNotebook} />

          <DetailTextSection title="评审机制">{competition.evaluation}</DetailTextSection>

          <DetailTextSection title="版权与授权提示">{competition.rights}</DetailTextSection>

          <DetailListSection title="配套活动与在场价值" items={competition.presenceValue} />

          {competition.suitableFor && (
            <section>
              <h2>适合人群</h2>
              <div className="ys-detail-tags">
                {competition.suitableFor.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          )}

          {competition.notSuitableFor.length > 0 && (
            <section>
              <h2>不太适合人群</h2>
              <div className="ys-detail-tags">
                {competition.notSuitableFor.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          )}

          {competition.timelineNotes.length > 0 && (
            <section>
              <h2>关键节点</h2>
              <div className="ys-timeline">
                {competition.timelineNotes.map((item) => (
                  <div key={item}>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </section>
    </main>
  );
}
