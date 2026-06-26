import React, { useEffect, useMemo, useState } from "react";
import redIcon from "@/assets/red-icon.png";
import wechatOfficialQr from "@/assets/wechat-official-qr.jpg";
import wechatPersonalQr from "@/assets/wechat-personal-qr.jpg";
import { competitions, filterLabels, filters } from "@/data/competitions";

const navItems = [
  { href: "#competitions", label: "SIGNALS" },
  { href: "#about", label: "MANIFESTO" },
  { href: "#community", label: "CONNECT" },
];

const spectrumBands = [15, 33, 23, 54, 76, 44, 68, 31, 87, 57, 38, 72, 49, 94, 62, 28];
const reasonPreviewLength = 72;
const manifestoPreviewCount = 3;

const manifestoParagraphs = [
  "我们不收录所有比赛。我们只精选那些值得创作者投入时间、心力与身份成本的机会。",
  "我们关注它是否真的有行业价值：评审是否专业，机制是否清晰，获奖是否能带来下一次机会。",
  "我们相信“在场”仍然重要。一次真实的展映、一场线下交流、一个被行业看见的瞬间，有时比一串线上浏览量更能改变创作者的位置。",
  "我们偏爱开放的创作场域。你可以是短片、长片、MV、广告、时尚影像、数字人、概念片、游戏PV、实验作品......AI 不该被塞进旧类型的盒子里。",
  "我们也看重奖金、工具支持与传播扶持。不是因为数字本身耀眼，而是它们往往代表主办方的投入、诚意与行业注意力。",
  "我们关心结果周期。创作者需要正反馈，需要回声，需要与更多同频者共振。",
  "在浪潮之上，我们寻找真正能让创作者走向下一站的信号。",
  "See the signals, create the future.",
];

function getReasonParagraphs(notes: string) {
  return notes
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function getReasonPreview(notes: string, expanded: boolean) {
  if (expanded || notes.length <= reasonPreviewLength) return notes;
  return `${notes.slice(0, reasonPreviewLength)}...`;
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);
  const [expandedReasons, setExpandedReasons] = useState<Record<string, boolean>>({});
  const [isManifestoExpanded, setIsManifestoExpanded] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const filteredCompetitions = useMemo(() => {
    if (activeFilter === "ALL") return competitions;
    return competitions.filter((competition) => competition.tags.includes(activeFilter));
  }, [activeFilter]);

  const handleScan = () => {
    setIsScanning(true);
    window.setTimeout(() => {
      document.getElementById("competitions")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => setIsScanning(false), 900);
    }, 560);
  };

  const toggleReason = (slug: string) => {
    setExpandedReasons((current) => ({
      ...current,
      [slug]: !current[slug],
    }));
  };

  useEffect(() => {
    const updateActiveSignal = () => {
      const cards = Array.from(document.querySelectorAll<HTMLElement>(".ys-card"));
      if (!cards.length) {
        setActiveSignalIndex(0);
        return;
      }

      const targetLine = window.innerHeight * 0.46;
      const closestIndex = cards.reduce((bestIndex, card, index) => {
        const currentDistance = Math.abs(card.getBoundingClientRect().top - targetLine);
        const bestDistance = Math.abs(cards[bestIndex].getBoundingClientRect().top - targetLine);
        return currentDistance < bestDistance ? index : bestIndex;
      }, 0);

      setActiveSignalIndex(closestIndex);
    };

    updateActiveSignal();
    window.addEventListener("scroll", updateActiveSignal, { passive: true });
    window.addEventListener("resize", updateActiveSignal);

    return () => {
      window.removeEventListener("scroll", updateActiveSignal);
      window.removeEventListener("resize", updateActiveSignal);
    };
  }, [filteredCompetitions.length]);

  return (
    <main className="ys-page">
      <div
        className="ys-spectrum-rail"
        aria-hidden="true"
        style={{ "--active-spectrum-offset": `${activeSignalIndex * 74}px` } as React.CSSProperties}
      >
        <div className="ys-spectrum-bars">
          {spectrumBands.map((width, index) => (
            <span key={`${width}-${index}`} style={{ "--band-width": `${width}%` } as React.CSSProperties} />
          ))}
        </div>
        <div className="ys-spectrum-cursor">
          <span />
        </div>
      </div>

      <nav className="ys-nav" aria-label="Primary navigation">
        <a className="ys-brand" href="#top" aria-label="YourSignals home">
          <img className="ys-brand-mark" src={redIcon} alt="" aria-hidden="true" />
          <span>
            <strong>YOURSIGNALS</strong>
            <small>CURATED_AIGC_OPPORTUNITIES</small>
          </span>
        </a>

        <div className="ys-nav-links">
          {navItems.map((item, index) => (
            <a className={index === 0 ? "is-active" : ""} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="ys-live" aria-label="Live signals">
          <span>LIVE SIGNALS</span>
          <strong>10</strong>
          <i aria-hidden="true" />
        </div>
      </nav>

      <section className={`ys-hero ${isScanning ? "is-scanning" : ""}`} id="top">
        <div className="ys-hero-frame">
          <div className="ys-space-scene" aria-hidden="true">
            <div className="ys-star ys-star-a" />
            <div className="ys-star ys-star-b" />
            <div className="ys-aurora" />
            <div className="ys-planet" />
            <div className="ys-horizon" />
            <div className="ys-hero-console-bed" />
          </div>

          <div className="ys-hero-copy">
            <p className="ys-kicker">为 AIGC 创作者精选值得投入的机会与舞台。</p>
            <h1>
              浪潮之上，
              <br />
              看到
              <span>信号</span>
            </h1>
            <p className="ys-hero-subline">See the signals, create the future.</p>
          </div>

          <button className="ys-scan-console" onClick={handleScan} type="button" aria-label="扫描信号并跳转到赛事卡片">
            <span className="ys-scan-label">START SCAN</span>
            <span className="ys-radar" aria-hidden="true">
              <span className="ys-radar-sweep" />
            </span>
            <strong>信号扫描</strong>
            <span className="ys-scan-label">START SCAN</span>
          </button>
        </div>
      </section>

      <section className="ys-signals" id="competitions">
        <div className="ys-filter-row" aria-label="Competition filters">
          <div className="ys-filter-buttons">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? "is-selected" : ""}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter === "ALL" && <span aria-hidden="true">+</span>}
                {filterLabels[filter]}
              </button>
            ))}
          </div>

          <label className="ys-sort">
            <span>SORT BY</span>
            <select aria-label="Sort competitions">
              <option>CATEGORIES</option>
            </select>
          </label>
        </div>

        <div className="ys-list-shell">
          <aside className="ys-side-note">
            <span />
            <p>
              WE FILTER NOISE
              <br />
              YOU CREATE FUTURE
            </p>
          </aside>

          <div className="ys-competition-list">
            {filteredCompetitions.map((competition) => (
              <article className={`ys-card tone-${competition.accent}`} key={competition.id}>
                <div className="ys-card-poster">
                  <div className="ys-card-tags">
                    {competition.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="ys-card-main">
                  <div className="ys-card-heading">
                    <div>
                      <p className="ys-card-tag">
                        // {competition.tags[0]}
                      </p>
                      <h2>{competition.title}</h2>
                    </div>
                    <a className="ys-card-learn" href={`/competitions/${competition.slug}`}>更多详情 <span aria-hidden="true">→</span></a>
                  </div>
                  <p className="ys-card-taxonomy">{competition.participation} / {competition.region}</p>

                  <dl className="ys-card-meta">
                    <div>
                      <dt>主办方</dt>
                      <dd>{competition.organizer}</dd>
                    </div>
                    <div>
                      <dt>提交截止</dt>
                      <dd>{competition.deadline}</dd>
                    </div>
                    <div>
                      <dt>奖励</dt>
                      <dd>{competition.prize}</dd>
                    </div>
                  </dl>
                </div>

                <div className="ys-card-reason">
                  <button className="ys-bookmark" aria-label={`收藏 ${competition.title}`} type="button" />
                  <h3>推荐理由</h3>
                  <div className="ys-reason-copy">
                    {getReasonParagraphs(getReasonPreview(competition.notes, Boolean(expandedReasons[competition.slug]))).map(
                      (paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ),
                    )}
                  </div>
                  {competition.notes.length > reasonPreviewLength && (
                    <button
                      className="ys-reason-toggle"
                      onClick={() => toggleReason(competition.slug)}
                      type="button"
                    >
                      {expandedReasons[competition.slug] ? "收起" : "展开"}
                    </button>
                  )}
                </div>
              </article>
            ))}

            {filteredCompetitions.length === 0 && (
              <div className="ys-empty">
                <strong>NO SIGNAL FOUND</strong>
                <p>当前标签下暂无赛事信号。</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="ys-manifesto" id="about">
        <div className="ys-orbit-map" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div>
          <p className="ys-section-kicker">WE FILTER NOISE, YOU CREATE FUTURE.</p>
          <h2>Manifesto｜我们如何筛选信号</h2>
          <div className="ys-manifesto-copy">
            {(isManifestoExpanded ? manifestoParagraphs : manifestoParagraphs.slice(0, manifestoPreviewCount)).map(
              (paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ),
            )}
          </div>
          <button
            className="ys-manifesto-toggle"
            onClick={() => setIsManifestoExpanded((current) => !current)}
            type="button"
          >
            {isManifestoExpanded ? "收起" : "展开"}
          </button>
        </div>

        <div className="ys-manifesto-credit">
          <span>Curated by</span>
          <strong>像素时间PixelTime</strong>
        </div>
      </section>

      <section className="ys-community" id="community">
        <div>
          <span>CONNECT</span>
          <h2>接入创作者雷达网络</h2>
          <p>链接更多创作者，获取更多精选赛事更新。</p>
        </div>
        <div className="ys-community-qrs" aria-label="公众号和微信二维码">
          <figure>
            <img src={wechatOfficialQr} alt="像素时间公众号二维码" />
            <figcaption>公众号</figcaption>
          </figure>
          <figure>
            <img src={wechatPersonalQr} alt="像素时间微信二维码" />
            <figcaption>微信</figcaption>
          </figure>
        </div>
      </section>

      <footer className="ys-footer">
        <span>YOURSIGNALS</span>
        <span>© 2026 YOURSIGNALS. ALL RIGHTS RESERVED.</span>
        <nav aria-label="Footer navigation">
          <a href="#about">ABOUT</a>
          <a href="#top">TERMS</a>
          <a href="#top">PRIVACY</a>
          <a href="#community">CONTACT</a>
        </nav>
      </footer>
    </main>
  );
}
