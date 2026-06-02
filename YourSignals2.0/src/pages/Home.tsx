import React, { useEffect, useMemo, useState } from "react";
import redIcon from "@/assets/red-icon.png";

type Competition = {
  id: number;
  title: string;
  category: string;
  label: string;
  organizer: string;
  deadline: string;
  prize: string;
  format: string;
  region: string;
  signal: number;
  accent: "red" | "violet" | "cyan" | "gold" | "green";
  notes: string;
};

const competitions: Competition[] = [
  {
    id: 1,
    title: "第二届全国AI影像艺术大赛",
    category: "AI FILM",
    label: "国际影展",
    organizer: "中国传媒大学",
    deadline: "2026.05.31",
    prize: "¥50,000",
    format: "个人 / 团队",
    region: "中国大陆",
    signal: 5,
    accent: "violet",
    notes: "聚焦 AI 影像与视觉叙事的创作表达，评委阵容由学界与行业资深创作者组成。",
  },
  {
    id: 2,
    title: "未来感知·AI短片节",
    category: "AI FILM",
    label: "短片创投",
    organizer: "FIRST 青年电影展",
    deadline: "2026.06.30",
    prize: "¥80,000",
    format: "项目提案",
    region: "全球",
    signal: 5,
    accent: "cyan",
    notes: "面向 AI 影像项目的早期提案，优质项目将获得创投资金与制作支持。",
  },
  {
    id: 3,
    title: "AI音乐创作公开赛 2026",
    category: "AI MUSIC",
    label: "声音星港",
    organizer: "独立音乐联盟",
    deadline: "2026.05.20",
    prize: "¥30,000 + 发行合同",
    format: "个人 / 组合",
    region: "全球",
    signal: 4,
    accent: "gold",
    notes: "提供后续商业发行路径与版权法务支持，适合探索 AI 音乐工作流的创作者。",
  },
  {
    id: 4,
    title: "Adobe x 创意中国 AI艺术挑战赛",
    category: "VISUAL ARTS",
    label: "视觉艺术",
    organizer: "Adobe Creative China",
    deadline: "2026.06.15",
    prize: "$10,000 USD",
    format: "个人 / 团队",
    region: "全球",
    signal: 5,
    accent: "red",
    notes: "国际大厂背书，侧重 AI 在商业设计工作流中的真实应用与视觉完成度。",
  },
  {
    id: 5,
    title: "AIGC创意写作公开赛 Season 3",
    category: "DIGITAL HUMAN",
    label: "虚拟偶像",
    organizer: "Future Publishing Lab",
    deadline: "2026.04.30",
    prize: "¥20,000",
    format: "长篇构思",
    region: "中国大陆",
    signal: 4,
    accent: "green",
    notes: "专注人机协同写作，优秀作品可进入出版孵化流程，适合有成熟文本企划的创作者。",
  },
  {
    id: 6,
    title: "独立游戏+AI赛道 · Global Game Jam China",
    category: "COMPETITION",
    label: "交互艺术",
    organizer: "GGJ China",
    deadline: "2026.07.01",
    prize: "Exhibition + Award",
    format: "Demo / 原型",
    region: "全球",
    signal: 4,
    accent: "cyan",
    notes: "直接接触独立游戏发行圈与投资人，适合验证 AI 游戏管线和互动叙事概念。",
  },
  {
    id: 7,
    title: "ByteDance Creative AI Track",
    category: "PITCHING",
    label: "创投计划",
    organizer: "ByteDance Creative Lab",
    deadline: "2026.05.10",
    prize: "¥100,000",
    format: "团队项目",
    region: "中国大陆",
    signal: 3,
    accent: "red",
    notes: "奖金池丰厚，但需要关注平台生态绑定与作品后续权利边界，适合短平快打法。",
  },
];

const filters = ["ALL", "AI FILM", "AI MUSIC", "DIGITAL HUMAN", "VISUAL ARTS", "COMPETITION", "PITCHING"];

const filterLabels: Record<string, string> = {
  ALL: "ALL",
  "AI FILM": "AI FILM",
  "AI MUSIC": "AI MUSIC",
  "DIGITAL HUMAN": "DIGITAL HUMAN",
  "VISUAL ARTS": "VISUAL ARTS",
  COMPETITION: "COMPETITION",
  PITCHING: "PITCHING",
};

const navItems = [
  { href: "#competitions", label: "SIGNALS" },
  { href: "#about", label: "MANIFESTO" },
  { href: "#community", label: "CONNECT" },
];

const spectrumBands = [15, 33, 23, 54, 76, 44, 68, 31, 87, 57, 38, 72, 49, 94, 62, 28];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  const filteredCompetitions = useMemo(() => {
    if (activeFilter === "ALL") return competitions;
    return competitions.filter((competition) => competition.category === activeFilter);
  }, [activeFilter]);

  const handleScan = () => {
    setIsScanning(true);
    window.setTimeout(() => {
      document.getElementById("competitions")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => setIsScanning(false), 900);
    }, 560);
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
          <strong>61</strong>
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
              <option>DEADLINE SOONEST</option>
              <option>SIGNAL HIGHEST</option>
              <option>REWARD HIGHEST</option>
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
            {filteredCompetitions.map((competition, index) => (
              <article className={`ys-card tone-${competition.accent}`} key={competition.id}>
                <div className="ys-card-poster">
                  <span>{competition.label}</span>
                  <small>{competition.category}</small>
                </div>

                <div className="ys-card-main">
                  <p className="ys-card-tag">
                    // {index === 0 && activeFilter === "ALL" ? "TOP PICK" : competition.category}
                  </p>
                  <h2>{competition.title}</h2>
                  <p className="ys-card-org">{competition.organizer}</p>
                  <p className="ys-card-taxonomy">{competition.category} / {competition.format} / {competition.region}</p>

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
                    <div>
                      <dt>信号强度</dt>
                      <dd>
                        {Array.from({ length: 5 }).map((_, signalIndex) => (
                          <span className={signalIndex < competition.signal ? "is-lit" : ""} key={signalIndex} />
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="ys-card-reason">
                  <button aria-label={`收藏 ${competition.title}`} type="button" />
                  <h3>推荐理由</h3>
                  <p>{competition.notes}</p>
                  <a href="#community">LEARN MORE <span aria-hidden="true">→</span></a>
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
          <h2>YourSignals 用 AI 在创作噪声中寻找真信号。</h2>
          <p>
            我们相信，值得的位置，来自创造者的选择。这里关注赛事含金量、版权边界、曝光资源和长期舞台，
            帮你把时间投向真正值得投入的机会。
          </p>
          <a href="#competitions">READ OUR MANIFESTO <span aria-hidden="true">→</span></a>
        </div>

        <ul>
          <li>
            <strong>人工筛选，拒绝无效信息</strong>
            <span>由行业编辑与资深观察员层层筛选。</span>
          </li>
          <li>
            <strong>深度洞察，掌握趋势先机</strong>
            <span>从赛道强度到评审取向，提前布局。</span>
          </li>
          <li>
            <strong>连接创作者，拓展更多可能</strong>
            <span>加入全球 AIGC 创作者网络与合作机会。</span>
          </li>
        </ul>
      </section>

      <section className="ys-community" id="community">
        <div>
          <span>CONNECT</span>
          <h2>接入创作者雷达网络</h2>
          <p>每周获取高优赛事简报、未公开创作机会和版权风险提示。</p>
        </div>
        <a href="mailto:hello@yoursignals.ai">REQUEST ACCESS</a>
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
