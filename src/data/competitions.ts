export type CompetitionAccent = "red" | "violet" | "cyan" | "gold" | "green";

export type Competition = {
  id: number;
  slug: string;
  title: string;
  tags: string[];
  filterTags: string[];
  organizer: string;
  deadline: string;
  prize: string;
  participation: string;
  region: string;
  accent: CompetitionAccent;
  entryFee: string;
  officialUrls: Array<{
    label: string;
    url: string;
  }>;
  resultCycle: string[];
  suitableFor: string[];
  notSuitableFor: string[];
  notes: string;
  awardDetails: string[];
  categories: string[];
  requirements: string[];
  ethicsNotebook: string[];
  presenceValue: string[];
  timelineNotes: string[];
  positioning: string;
  evaluation: string;
  rights: string;
};

export const competitions: Competition[] = [
  {
    "id": 1,
    "slug": "chroma-awards-2026-s2",
    "title": "Chroma AI 影像、音乐与游戏创作大奖｜Chroma Awards 2026 S2",
    "tags": [
      "AI影像",
      "AI音乐",
      "游戏创作",
      "广告创意",
      "超高奖金"
    ],
    "organizer": "Chroma Awards / ElevenLabs 生态孵化",
    "deadline": "Season 2 预计 2026年11月中旬，最终以 Devpost 官方提交页为准",
    "prize": "$250,000+ 现金奖励",
    "participation": "个人 / 团队",
    "region": "全球",
    "accent": "red",
    "entryFee": "免费",
    "officialUrls": [
      {
        "label": "Chroma Awards 官方网站",
        "url": "https://chromaawards.com/"
      },
      {
        "label": "Devpost 投稿页",
        "url": "https://chromaawards.devpost.com/details/dates"
      }
    ],
    "resultCycle": [
      "若按 2026年11月中旬截止、2027年1月公布结果计算，约 1个半月 - 2个月"
    ],
    "suitableFor": [
      "AI短片导演",
      "AI动画创作者",
      "AI广告创作者",
      "AI MV创作者",
      "AI音乐创作者",
      "AI游戏创作者",
      "AI短剧创作者",
      "数字人 / 虚拟角色创作者",
      "品牌内容创作者",
      "想获得全球 AI 创作者社区曝光的人",
      "想冲击现金奖金、工具资源、赞助商奖项和好莱坞线下颁奖机会的人"
    ],
    "notSuitableFor": [
      "作品使用了未授权 IP、名人肖像、明星声音或版权音乐的人",
      "对公开发布作品有顾虑的人",
      "只有单一镜头测试、没有完整作品结构的人"
    ],
    "awardDetails": [
      "$250,000+ 现金奖励",
      "$1M+ 工具试用与资源包",
      "好莱坞颁奖典礼机会",
      "发行 / 开发合作机会",
      "AI Film Studio 工作与实习机会"
    ],
    "categories": [
      "Film Division：动作冒险、动画、喜剧、纪录、剧情、实验、家庭、幻想、恐怖、微短剧、爱情、科幻、社交短片、预告片等",
      "Advertising Division：汽车、金融、教育、时尚、食品、公益、体育、旅行等广告方向",
      "Music Video Division：Asia Pop、EDM、Hip-hop、Pop、R&B、Rock 等音乐视频方向",
      "Song / Game / Behind-the-Scenes：原创歌曲、Remix、互动叙事、音乐节奏、移动游戏、幕后制作等"
    ],
    "requirements": [
      "可使用任意 AI 或创意工具，不强制使用赞助商工具",
      "若要角逐 Sponsor Awards，需要显著使用对应赞助工具",
      "作品需为 2025年2月1日之后完成",
      "可多次投稿，也可投多个类别，但同一项目不能重复投多个类别",
      "投稿方式为 YouTube、Vimeo、Instagram 或 TikTok 链接",
      "参赛者需年满 18 岁",
      "Film 推荐长度 90秒以上、22分钟以内；Music Video 推荐长度 60秒以上、11分钟以内",
      "有对白或旁白的作品需英文字幕或英文配音"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "全球 AI 创作者社区与线上传播",
      "Winner Announcement Livestream",
      "获奖者有机会前往 Hollywood 参加 Awards Ceremony Gala",
      "连接 AI 工具公司、创作者社区、影像产业和好莱坞资源"
    ],
    "timelineNotes": [
      "2026年9月：投稿期开始",
      "2026年12月：评审期",
      "2027年1月：获奖直播公布",
      "2027年上半年：Awards Ceremony Gala",
      "FAQ 页面显示投稿时间为 9月1日 - 11月17日，但与 Devpost 页面存在日期细节差异，建议以 Season 2 正式 Devpost 页面开放后的时间为准"
    ],
    "positioning": "全球 AI Film & Media Competition，覆盖 AI电影、广告、音乐视频、歌曲、游戏、幕后制作等方向。官网称其为 “World’s Largest AI Film & Media Competition”，并显示过往累计超过 6500 份投稿、5500+ 参与者、300+ 获奖者与入围者。",
    "evaluation": "评审标准包括主题契合、叙事设计、情感共鸣、原创性、AI 使用是否有意义、制作完成度、音乐与声音设计等。整体上更关注叙事、情绪、世界观、原创性和完成度，而不是单纯技术炫技。",
    "rights": "Chroma 对 IP、音乐、肖像和 deepfake 授权要求较严格。创作者保留作品所有权，但需授权赛事及赞助商进行线上展示和营销露出。投稿前务必清理音乐、素材、角色、品牌、真人肖像和声音使用权。",
    "notes": "Chroma Awards 是 AIGC 领域的顶流赛事，第一季就席卷全球 6,500+ 部作品提报。Google Cloud 作为首席联合主办方之一，它的评委和赞助商名单本身就连接硅谷技术圈与好莱坞影视工业。Season 2 有 $250,000+ 现金奖励、$1M+ 工具试用与资源包，并有好莱坞颁奖典礼、发行 / 开发合作、AI Film Studio 工作与实习机会，这些都是真正能转化为创作者下一站的资源。\n\n作为全球顶级 AI 创作综合赛事，它的类型覆盖非常强。电影、广告、音乐视频、歌曲、游戏、幕后制作全部开放，而且每个大类下面都有细分类型。\n\n从评审标准看，Chroma 极度看重人类美学主权，明确关注叙事、情绪、世界观、原创性，以及 AI 的使用是否真正打开新的可能性。\n\n它还提供明显的算力红利。投稿季开启后，创作者可以领取 Chroma Pack 相关工具权益。对于预算有限、但创意拉满的独立创作者或学生团队来说，这是很适合以赛代练的机会。",
    "filterTags": [
      "多元类型",
      "国际赛事",
      "商业创意",
      "超高奖金"
    ]
  },
  {
    "id": 2,
    "slug": "sparknify-human-vs-ai-film-festival-2026",
    "title": "Sparknify 人类 vs AI 电影节｜2026 Sparknify Human vs. AI Film Festival",
    "tags": [
      "人机对照",
      "情绪表达",
      "AI短片",
      "旧金山展映"
    ],
    "organizer": "Sparknify",
    "deadline": "2026.08.31",
    "prize": "Grand Prize $3,000",
    "participation": "个人 / 团队",
    "region": "全球",
    "accent": "violet",
    "entryFee": "Early Bird 免费；FilmFreeway 当前显示免费，但官网 FAQ 提到 Regular fee 从 $5 起，投稿前建议二次确认",
    "officialUrls": [
      {
        "label": "赛事官网",
        "url": "https://www.sparknify.com/human-vs-ai-film-festival"
      }
    ],
    "resultCycle": [
      "从 2026.08.31 截止到 2026.09.15 通知结果，约 15天",
      "从截止到 2026.09.26 旧金山线下首映，约 26天"
    ],
    "suitableFor": [
      "AI短片创作者",
      "AI剧情短片创作者",
      "AI实验影像创作者",
      "AI概念片创作者",
      "传统短片导演",
      "关注 AI 与人类情感、作者性、未来叙事关系的创作者",
      "有 30分钟以内完整短片，想快速获得海外线下放映机会的人",
      "对旧金山 / 硅谷科技文化场域感兴趣的人"
    ],
    "notSuitableFor": [
      "作品主要价值是视觉层面，但情绪表达较弱的人",
      "对旧金山线下场域、AI与人类情感议题不感兴趣的人"
    ],
    "awardDetails": [
      "Sparknify Humanity Award Grand Prize：USD $3,000",
      "七个 Emotion Awards：官方证书 / recognition certificate"
    ],
    "categories": [
      "Human-Produced Short Films：人类制作短片，禁止在任何制作阶段使用生成式 AI 工具",
      "AI-Generated Short Films：整部作品使用 AI 生成工具完成，后期剪辑软件可以使用",
      "情绪类别：Joy、Rage、Sorrow、Contentment、Love、Aversion、Desire"
    ],
    "requirements": [
      "面向全球创作者开放",
      "作品必须为 30分钟以内短片",
      "提交时必须是已完成作品",
      "非英语作品需要英文字幕",
      "参赛者需要拥有音乐、视觉、AI生成内容、肖像等全部权利",
      "AI 生成类作品不限制具体 AI 工具或技术",
      "电影节可在活动和官方放映中放映作品，并可使用片段、剧照、标题和描述进行宣传",
      "创作者保留作品完整所有权"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "2026.09.26 在旧金山 Delancey Street Screening Room 首映",
      "影片放映",
      "未来电影摄影 / storytelling panel discussion",
      "前沿科技创业公司产品展示",
      "networking",
      "颁奖典礼"
    ],
    "timelineNotes": [
      "2026.02.01：投稿开启",
      "2026.08.31：Regular Deadline / Final Deadline",
      "2026.09.15：Notification Date",
      "2026.09.26：旧金山线下首映 / 活动日期"
    ],
    "positioning": "围绕“人类创作 vs AI生成影像”的短片电影节，核心不是比较工具炫技，而是用“情绪”作为评判维度，讨论 AI 是否能够真正触达人类情感。",
    "evaluation": "由来自电影、AI、人类感知等方向的学术与创意专业人士评审。评审重点是情绪冲击力、情绪意图是否清晰、表达是否有效、是否真正触动观众。最终阶段采用 blind judging，评委不知道作品是传统人类制作还是 AI 生成。",
    "rights": "版权条款相对清晰，创作者保留所有权，但需要确认音乐、视觉素材、AI生成内容和肖像授权完整。",
    "notes": "Sparknify Human vs. AI Film Festival 最有意思的地方，是它像一场 AI 电影的“图灵测试”。人类制作短片和 AI 生成短片同台竞争，最高奖 Sparknify Humanity Award 不按创作来源区分，而是奖励最能激发人类情感反应的作品。\n\n它把评判核心放在 emotion / 情绪上。它真正想问的问题不是“AI 能不能生成更酷的画面”，而是“AI 生成的电影能不能像人类电影一样触动观众”。\n\n它非常接近硅谷和湾区科技文化，线下活动在旧金山举办，并配套 panel、科技创业公司展示和 networking。它的行业价值不是传统电影节权威，而是更偏硅谷科技文化、AI 创作讨论和创作者现场连接。",
    "filterTags": [
      "国际赛事",
      "社会议题",
      "情绪表达"
    ]
  },
  {
    "id": 3,
    "slug": "marbella-international-film-festival-2026",
    "title": "马贝拉国际电影节 MIFF｜Marbella International Film Festival 2026",
    "tags": [
      "国际影展",
      "AI内容",
      "传统电影节",
      "产业对接"
    ],
    "organizer": "New World Trust",
    "deadline": "主要影片投稿截止 2026.07.01；Shorter Short 短片单元最晚截止 2026.08.01",
    "prize": "暂无明确现金奖金",
    "participation": "个人 / 团队",
    "region": "全球",
    "accent": "cyan",
    "entryFee": "否。AI Content 费用随阶段变化：Early Bird £7，Standard £15，Late £40，Extended £60",
    "officialUrls": [
      {
        "label": "官方链接",
        "url": "https://www.marbellafilmfestival.com/submissions-2026/"
      }
    ],
    "resultCycle": [
      "从主要截止 2026.07.01 到 2026.08.20 前通知入选，约 7周",
      "若按 Extended Deadline 2026.08.01 计算，到通知结果约 20天",
      "从 2026.07.01 截止到 2026.09.30 开幕，约 3个月"
    ],
    "suitableFor": [
      "AI电影创作者",
      "AI短片导演",
      "AI概念片创作者",
      "AI + 真人混合影像创作者",
      "欧洲电影节投递者",
      "独立电影创作者",
      "项目 pitch 创作者",
      "想在海外进行线下 networking 的创作者",
      "有预算前往西班牙马贝拉线下参加电影节的人"
    ],
    "notSuitableFor": [
      "只想低成本线上投递、拿结果、不打算出国到场的人",
      "作品版权清晰度不足的人",
      "只追求现金奖金的创作者"
    ],
    "awardDetails": [
      "现金奖金：暂无明确现金奖金信息",
      "奖项价值：MIFF 奖项、红毯展映、马贝拉线下电影节履历、行业 networking 与 Pitch Your Vision 项目发展机会",
      "Pitch Your Vision 入选项目可向制片人、投资人和行业专业人士现场 pitch；获胜项目有机会获得 New World Films / Clique 相关执行制片支持"
    ],
    "categories": [
      "Feature Film",
      "Documentary",
      "Short Film，30分钟以内",
      "Shorter Short，5分钟以内",
      "AI Generated Film / AI Content",
      "Pitch Your Vision"
    ],
    "requirements": [
      "作品需在电影节前 18个月内完成",
      "Short Film 不超过 30分钟",
      "Shorter Short 不超过 5分钟",
      "AI created content 无明确时长限制",
      "非英语影片需提供英文字幕",
      "英语影片最终展映版本原则上需提供西班牙语字幕，但可申请豁免",
      "可提交 rough cut 或 work in progress，但需说明",
      "入选后不能撤片",
      "入选后需提供 DCP / 数字放映文件、宣传物料、海报、预告片等",
      "入选创作者原则上需要自费参加电影节，并可能需要提供旅行证明或购买 festival accreditation / industry pass"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "Networking events",
      "Expert panel discussions and workshops",
      "Support for pre-production of next project",
      "Nightly VIP theme parties",
      "Red carpet screening opportunities",
      "MIFF award 竞争机会",
      "Pitch Your Vision 项目提案机会"
    ],
    "timelineNotes": [
      "2026.07.01：主要影片投稿截止",
      "2026.08.01：Shorter Short 短片单元最晚截止",
      "2026.08.20 前：通知入选",
      "2026.09.30 - 2026.10.05：电影节举办"
    ],
    "positioning": "成熟综合型国际电影节，2026 年为第 21 届，接受长片、纪录片、短片、AI 内容与项目提案。2026 年电影节举办时间为 9月30日 - 10月5日。",
    "evaluation": "评审团由电影节董事会选择，每位评委以秘密投票方式投票；参与某部竞赛影片制作或推广的人，不能担任该片相关评审。评审结果为最终决定，且评委没有义务提供反馈。整体透明度中等。",
    "rights": "投稿者需确认拥有影片完整权利，包括音乐、素材、演员、工作人员和第三方贡献者授权。入选后，电影节可在电影节、world tour 和相关宣传活动中放映作品，并可将创作者姓名、照片、logo、肖像用于宣传。作品放映不支付额外费用。AIGC 创作者需额外确认 AI 素材、音乐、声音、肖像、参考图、seed image 和训练素材使用权。",
    "notes": "Marbella International Film Festival 不是一个纯 AI 电影节，而是一个已经举办到第 21 届的综合性国际电影节。它的价值在于：AI 内容被纳入一个更传统的国际电影节框架中，并且单独设置了 Best AI Generated Film 奖项。\n\nMIFF 位于西班牙马贝拉，强调红毯放映、networking、专家 panel、workshop、VIP theme parties，以及创作者与行业人士之间的连接。相比纯线上 AI 征集，它更适合愿意亲自到场、希望拓展欧洲电影节社交网络和潜在合作资源的创作者。\n\n比较特别的是，它还有 Pitch Your Vision 项目提案单元。这个单元允许创作者向制片人、投资人和行业专业人士 pitch 项目，获胜项目有机会获得后续开发支持。\n\n但需要注意，MIFF 的投稿和参与成本不低。AI Content 早鸟费用很友好，但 Late 和 Extended 阶段会明显上涨；更重要的是，入选后创作者原则上需要自费到场参加电影节，并提供放映文件和宣传材料。",
    "filterTags": [
      "国际赛事",
      "多元类型",
      "产业对接"
    ]
  },
  {
    "id": 4,
    "slug": "mgtv-romantic-growth-ai-video-contest",
    "title": "芒果TV「浪漫疯长」AI影像创作大赛",
    "tags": [
      "情感影像",
      "平台IP",
      "AI短片",
      "产业对接"
    ],
    "organizer": "芒果TV",
    "deadline": "2026.07.15",
    "prize": "总奖金池 80万元",
    "participation": "个人 / 团队",
    "region": "中国大陆",
    "accent": "green",
    "entryFee": "暂无报名费信息，投稿前以官方活动页 / 芒果TV App 规则为准",
    "officialUrls": [
      {
        "label": "芒果TV官方活动视频页",
        "url": "https://www.mgtv.com/b/868734/24347319.html"
      },
      {
        "label": "公开赛事信息页",
        "url": "https://www.aitop100.cn/infomation/details/33775.html"
      }
    ],
    "resultCycle": [
      "从 2026.07.15 截止到 2026.07.30 入围公示，约 15天",
      "从截止到 2026.08.19 最终结果公示，约 1个月"
    ],
    "suitableFor": [
      "AI短片创作者",
      "AI短剧创作者",
      "AI爱情影像创作者",
      "AI预告片创作者",
      "AI角色设定创作者",
      "AI MV / 情绪向影像创作者",
      "言情 / 现偶 / 古偶 / 奇幻爱情内容创作者",
      "擅长情绪、人物关系、浪漫氛围的 AI 影像创作者",
      "想获得平台曝光、现金奖金和内容生态合作机会的创作者"
    ],
    "notSuitableFor": [
      "纯科幻、实验影像、作者电影方向创作者",
      "只想做技术展示、工具炫技型作品的人",
      "对 IP 授权、肖像权、平台授权条款比较敏感的人",
      "不擅长情感内容和人物关系表达的人"
    ],
    "awardDetails": [
      "总奖金池 80万元",
      "芒果TV站内推荐资源",
      "全媒体矩阵曝光",
      "官方深度合作机会",
      "AI工具算力奖励"
    ],
    "categories": [
      "原创 IP 赛道：围绕浪漫、爱情、情感关系进行原创 AI 影像表达",
      "芒系 IP 赛道：基于芒果经典情感 IP 进行衍生创作"
    ],
    "requirements": [
      "作品需要围绕浪漫 / 爱情 / 情感内容展开，并使用 AI 工具完成核心创作",
      "音频和视频画面需有 70% 或以上内容由 AI 生成",
      "作品标题前缀需要标明赛道，如【原创IP赛道】或【芒系IP赛道】",
      "若标题前缀无标记，可能不符合参赛标准",
      "芒系 IP 赛道禁止使用任何主创人物形象进行 AI 创作",
      "入围及获奖作品有机会在芒果TV平台、官方新媒体账号进行展播和推广"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "芒果TV全端首页推荐",
      "移动端内容专区",
      "芒果TV全媒体矩阵曝光",
      "官方深度合作机会",
      "AI工具算力奖励",
      "长视频平台内容生态连接"
    ],
    "timelineNotes": [
      "2026.05.07 - 2026.07.15：征集阶段",
      "2026.07.16 - 2026.07.25：初评阶段",
      "2026.07.30：入围作品公示",
      "2026.07.31 - 2026.08.12：线上投票 + 专家终审",
      "2026.08.19：最终结果公示"
    ],
    "positioning": "围绕“浪漫 / 爱情 / 情感内容”的 AI 影像创作大赛，鼓励创作者用 AIGC 方式创作原创言情 IP 或芒果系情感 IP 衍生影像。",
    "evaluation": "原文未展示完整评分标准。可标注为平台命题型比赛，包含初评、入围公示、线上投票 + 专家终审、最终结果公示。",
    "rights": "投稿即授权主办方在宣传、展览等非商业场景免费使用作品；芒系 IP 赛道禁止使用真人主创形象进行 AI 创作。创作者需特别注意肖像权、音乐版权、IP 改编边界和 AI 素材合规。",
    "notes": "芒果TV「浪漫疯长」AI影像创作大赛最大的价值，是把 AIGC 创作放进了一个非常明确的平台内容生态里：爱情、言情、情感综艺、古偶现偶、女性向内容和芒果TV的长视频 IP 体系。对很多 AIGC 创作者来说，这类比赛的意义在于，它不是让你孤零零做一支 AI 短片，而是让作品有机会进入长视频平台和更大市场的视野。\n\n它的奖金和传播扶持都比较强。80万元总奖金池本身已经能制造关注度，而芒果TV站内首页推荐、移动端内容专区、全媒体矩阵曝光和官方深度合作机会，才是更重要的行业资源。\n\n它也很适合验证一个方向：AI 影像也可以进入爱情、偶像、情绪内容和女性向叙事。情感内容要求创作者处理人物、关系、氛围和情绪节奏，这反而能筛出真正懂叙事的人。\n\n但这场比赛也有明显边界。它更偏平台命题型创作，而不是自由作者表达；芒系 IP 赛道还涉及 IP 改编边界和真人肖像权限制。投稿前一定要看清楚规则。",
    "filterTags": [
      "情绪表达",
      "商业创意",
      "产业对接"
    ]
  },
  {
    "id": 5,
    "slug": "lifeart-ai-global-film-festival-2026",
    "title": "LifeArt 全球 AI 电影节｜LifeArt AI Global Film Festival 2026",
    "tags": [
      "国际影展",
      "AI电影",
      "动画短片",
      "公益议题"
    ],
    "organizer": "LifeArt Festival",
    "deadline": "Regular Deadline：2026.08.01；Late Deadline：2026.09.01",
    "prize": "最高 €50,000",
    "participation": "个人 / 团队",
    "region": "全球",
    "accent": "red",
    "entryFee": "否。常见 AI 类别 Regular 大多在 $30 左右，Late 到 $42 左右；EyeMix AI Award 更高",
    "officialUrls": [
      {
        "label": "官网 AI 页面",
        "url": "https://www.lifeartfestival.com/ai"
      },
      {
        "label": "投稿页面",
        "url": "https://www.lifeartfestival.com/submit"
      },
      {
        "label": "FilmFreeway 投稿页",
        "url": "https://filmfreeway.com/LifeArt"
      }
    ],
    "resultCycle": [
      "从 2026.09.01 Late Deadline 到 2026.09.03 Notification Date，约 2天",
      "从 Late Deadline 到 2026.09.09 Event Date，约 8天"
    ],
    "suitableFor": [
      "AI短片创作者",
      "AI动画创作者",
      "AI音乐视频创作者",
      "AI广告创作者",
      "AI实验影像创作者",
      "AI艺术 / 视觉设计创作者",
      "AI声音与语音合成创作者",
      "AI社会议题创作者",
      "AI微短剧创作者",
      "AI长片创作者",
      "想获得 IMDb 可记录节展履历的人"
    ],
    "notSuitableFor": [
      "只想免费投稿的人",
      "非常看重传统电影节评审透明度的人",
      "希望清晰知道每个奖项对应现金奖金和展映权益的人",
      "对“媒体曝光、全球平台、IMDb资格”等宣传语较敏感、需要强验证的人"
    ],
    "awardDetails": [
      "官方页面显示 1st Place Cash Award €50,000",
      "€5,000 goods and services",
      "IMDb 记录、全球媒体曝光、官方证书 / 奖杯、平台推荐与行业资源",
      "具体奖项对应奖金需投稿前二次确认"
    ],
    "categories": [
      "AI-Generated Films & Animation，Short",
      "AI-Generated Films & Animation，Feature",
      "AI Commercial & Advertising Project",
      "AI Music Video",
      "AI Soundtracks & Voice Synthesis",
      "AI Art & Visual Design",
      "Humanitarian AI Award，AI & Society",
      "AI Visionary Award",
      "AI Micro Drama Award",
      "EyeMix AI Award"
    ],
    "requirements": [
      "通过 FilmFreeway 或官方指定平台提交",
      "每个项目需单独缴纳投稿费",
      "同一项目可投多个类别，但需分别付费",
      "需提交有效在线链接，如 Vimeo、YouTube 或安全服务器链接",
      "非英语对白作品必须提供清晰英文字幕",
      "入选后需提交剧照、导演简介、EPK、完整 credits 等资料",
      "投稿者保留 100% 知识产权",
      "不限制具体 AI 工具",
      "完全 AI 生成作品和 AI + 传统影像混合作品均可投稿"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "IMDb-qualifying status",
      "国际媒体曝光",
      "LifeArt 社媒推广",
      "全球场地放映",
      "与 NY Film Academy、FWICE、Delhi Technological University、China Film Archive 等机构相关的行业 / 学术连接",
      "EyeMix 平台 featured placement 与加入 EyeMix 创意团队的工作机会"
    ],
    "timelineNotes": [
      "2026.01.13：Opening Date",
      "2026.08.01：Regular Deadline",
      "2026.09.01：Late Deadline",
      "2026.09.03：Notification Date",
      "2026.09.09：Event Date"
    ],
    "positioning": "LifeArt Festival 旗下 AI 电影与数字创作单元，面向 AI 电影、AI动画、AI广告、AI音乐视频、AI艺术、AI社会议题和实验影像等作品。LifeArt 官方介绍其为成立于 2016 年的国际平台，横跨电影、AI、艺术、音乐和人道主义叙事，并强调其 IMDb-Qualifying 属性。",
    "evaluation": "EyeMix AI Award 明确关注 storytelling quality、creative use of AI、emotional resonance 和 production excellence。其他类别具体评审机制需以官方页面为准。",
    "rights": "投稿者保留 100% 知识产权，但需确保在线链接、音乐、素材、声音、肖像、AI 生成内容和第三方资产授权清晰。",
    "notes": "LifeArt AI Global Film Festival 的最大优势，是国际化曝光和类别覆盖完整。它不是只面向 AI 短片，而是覆盖 AI短片、AI长片、AI动画、AI音乐视频、AI广告、AI声音、AI视觉设计、AI社会议题和实验作品。\n\n官方明确表示 LifeArt AI Global Film Festival 是 IMDb-Qualifying，获奖和官方入选可以被记录到影片页面及个人 IMDb profile 上。对于希望积累国际履历的 AIGC 创作者来说，有一定价值。\n\nLifeArt 的全球曝光较广，放映和活动覆盖 Hollywood、Miami、Mumbai、Athens 等地，并强调媒体曝光、行业合作和全球场地放映。\n\n但投稿需要注意：费用不低，且官网关于奖金与权益的表述比较宏观，具体到每个 AI 子类别的现金奖金、展映权益和传播支持需要二次确认。",
    "filterTags": [
      "国际赛事",
      "多元类型",
      "社会议题"
    ]
  },
  {
    "id": 6,
    "slug": "red-rocks-ai-film-festival-2026",
    "title": "红岩 AI 电影节｜Red Rocks AI Film Festival 2026",
    "tags": [
      "国际影展",
      "AI短片",
      "音乐视频",
      "情绪表达"
    ],
    "organizer": "Red Rocks AI Film Festival",
    "deadline": "Extended Deadline：2026.08.10",
    "prize": "暂无明确现金奖金",
    "participation": "个人 / 团队",
    "region": "全球",
    "accent": "violet",
    "entryFee": "否。主类别 Extended 为 Standard $49 / Gold Members $43；学生类别 Extended 为 Standard $39 / Gold Members $34",
    "officialUrls": [
      {
        "label": "官方链接",
        "url": "https://filmfreeway.com/RedRocksAIFilmFestival"
      }
    ],
    "resultCycle": [
      "从 2026.08.10 Extended Deadline 到 2026.09.03 Notification Date，约 24天",
      "从 Extended Deadline 到 2026.09.24 活动日，约 1个半月"
    ],
    "suitableFor": [
      "AI短片创作者",
      "AI动画创作者",
      "AI广告创作者",
      "AI喜剧创作者",
      "AI自然 / 动物主题影像创作者",
      "AI正能量 / 励志主题创作者",
      "学生 AI 影像创作者",
      "作品风格偏温暖、积极、启发性、治愈或 uplifting 的创作者"
    ],
    "notSuitableFor": [
      "追求高额奖金的人",
      "需要强行业背书、知名评委或传统电影节履历的人",
      "投稿预算有限、但想拿明确现金回报的人",
      "作品偏黑暗、先锋、冷峻实验、强作者性，和 Illuminate and Uplift 气质不匹配的人"
    ],
    "awardDetails": [
      "现金奖金：暂无明确现金奖金信息",
      "奖项价值：官方证书 / 桂冠 / 官网展示 / Red Rocks AIFF 推广曝光 / AI电影创作者网络露出"
    ],
    "categories": [
      "Best AI Film：20分钟以上 AI 影片",
      "Best AI Short Film：3 - 20分钟 AI 短片",
      "Best AI Short Short Film：1 - 3分钟 AI 超短片",
      "Best AI Ad / Commercial",
      "Best AI Nature or Animals Film",
      "Best AI Animation",
      "Best AI Comedy",
      "Most Uplifting AI Film",
      "Most Inspiring AI Film",
      "Best AI Student Film"
    ],
    "requirements": [
      "参赛作品必须是原创 AI 生成作品",
      "投稿者需要提供所使用的 AI 工具",
      "音乐、视频、图片等内容需要无版权风险，或拥有 royalty-free 授权 / 正式许可",
      "投稿者需年满 18 岁",
      "过去两年内完成的 AI 影片均可投稿",
      "非英语作品需英文字幕",
      "仅通过 FilmFreeway 接收投稿",
      "投稿费不可退",
      "可投递多个类别和多部作品",
      "创作者保留作品所有权，但授权电影节在活动和宣传中放映、使用片段和剧照"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "美国犹他州线下 AI 电影节现场",
      "获奖作品展映 / streaming",
      "AI电影创作者社群曝光",
      "可能参与 networking、press release 或 Q&A",
      "创作者需自理差旅住宿"
    ],
    "timelineNotes": [
      "2026.01.02：Opening Date",
      "2026.02.23：Earlybird Deadline",
      "2026.05.25：Regular Deadline",
      "2026.07.06：Late Deadline",
      "2026.08.10：Extended Deadline",
      "2026.09.03：Notification Date",
      "2026.09.24：Event Date"
    ],
    "positioning": "面向 AI 生成影像创作者的垂直 AI 电影节，主题是 Illuminate and Uplift，强调用 AI 电影讲述具有启发性、积极性和人类连接感的故事。电影节采用线下 + streaming 结合形式。",
    "evaluation": "每部影片会收到评审团评分，最高得分作品决定获奖；评委由电影节选择，评审决定为最终结果，不接受申诉。评委阵容和具体评分标准公开信息有限。",
    "rights": "它明确要求所有素材版权清晰，对 AI 作品里的音乐、图像、视频素材授权要提前整理。创作者保留作品所有权，但授权电影节进行活动放映和宣传使用。",
    "notes": "Red Rocks AI Film Festival 是一个定位很明确的 AI 垂类电影节，适合已有成片、希望快速获得 AI 电影节履历和线上线下展示机会的创作者。它的核心特征不是传统影展体系，也不是高额奖金，而是围绕 Illuminate and Uplift 建立一种更积极、明亮、鼓励人类连接的 AI 影像场域。\n\n它的类型覆盖很广，既有 AI Film、AI Short、AI Short Short，也有 AI Ad、AI Animation、AI Comedy、AI Nature、AI Student 等类别。尤其是 AI 广告、AI喜剧、自然主题和学生作品，常常在其他 AI 电影节里没有单独赛道，这里反而有更明确的位置。",
    "filterTags": [
      "国际赛事",
      "多元类型",
      "情绪表达"
    ]
  },
  {
    "id": 7,
    "slug": "ai-london-film-festival-2026",
    "title": "伦敦 AI 电影节｜AI London Film Festival 2026",
    "tags": [
      "国际影展",
      "AI短片",
      "AI音乐视频",
      "伦敦展映"
    ],
    "organizer": "AI London Film Festival",
    "deadline": "Final Deadline：2026.10.07",
    "prize": "暂无明确现金奖金",
    "participation": "个人 / 团队",
    "region": "全球",
    "accent": "cyan",
    "entryFee": "否。投稿费用约 $15 - $40，具体按类别计算",
    "officialUrls": [
      {
        "label": "官方链接",
        "url": "https://filmfreeway.com/ailondon"
      }
    ],
    "resultCycle": [
      "从 2026.10.07 Final Deadline 到 2026.10.16 Notification Date，约 9天",
      "从 Final Deadline 到 2026.11.06 - 2026.11.08 线下活动，约 1个月"
    ],
    "suitableFor": [
      "AI短片创作者",
      "AI MV 创作者",
      "AI动画创作者",
      "AI科幻 / 奇幻创作者",
      "AI类型片创作者",
      "AI长片创作者",
      "科幻 / 奇幻编剧",
      "想快速获得结果反馈和伦敦线下展映可能的人"
    ],
    "notSuitableFor": [
      "追求高额奖金的人",
      "需要强产业对接、投资人连接或大规模 networking 的创作者",
      "非常看重评审阵容公开透明度的人",
      "想获得传统权威电影节履历的人"
    ],
    "awardDetails": [
      "现金奖金：暂无明确现金奖金信息",
      "奖项价值：伦敦线下展映 / AI London Film Festival 奖项 / Audience Awards / 官方桂冠与电影节履历"
    ],
    "categories": [
      "AI Short Film，10分钟以内",
      "Music Video",
      "AI Short Film，20分钟以内",
      "AI Short Film，30分钟以内",
      "AI Feature Film，30分钟以上",
      "Sci-Fi Screenplay",
      "Fantasy Screenplay"
    ],
    "requirements": [
      "接受使用 AI 工具参与写作、视觉生成、动画或制作流程的短片",
      "全球作品均可投稿",
      "非英语作品必须提供英文字幕",
      "入选后需要提供高质量数字放映文件",
      "所有作品需通过 FilmFreeway 提交",
      "投稿费不可退",
      "创作者需确认拥有影片所需全部权利，包括音乐和图像",
      "电影节可使用作品片段、剧照和预告片进行宣传",
      "入选后创作者授权电影节在活动期间放映作品"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "伦敦中心 Close-Up Cinema 线下展映",
      "现场聚集电影人、艺术家、技术人和对未来电影感兴趣的观众",
      "放映后创作者与观众交流",
      "networking 资源和行业对接强度需谨慎期待"
    ],
    "timelineNotes": [
      "2026.06.08：Opening Date",
      "2026.07.15：Early Deadline",
      "2026.08.12：Regular Deadline",
      "2026.09.09：Late Deadline",
      "2026.10.07：Final Deadline",
      "2026.10.16：Notification Date",
      "2026.11.06 - 2026.11.08：Event Date"
    ],
    "positioning": "聚焦 AI-assisted 与 AI-generated cinema 的 AI 电影节，展示使用生成式工具、机器学习工作流和数字叙事方式创作的电影作品。FilmFreeway 页面显示该节已举办 10年。",
    "evaluation": "影片由电影节 programming team 选择，所有关于入选和奖项的决定均为最终决定。具体评委阵容和评分标准公开信息有限。",
    "rights": "版权条款属于常规电影节授权，但 AIGC 创作者仍需特别确认音乐、素材、人物肖像、参考图和 AI 生成内容的商业 / 展映授权。",
    "notes": "AI London Film Festival 的定位很清晰：专门展示 AI-assisted 与 AI-generated cinema，并且在伦敦 Close-Up Cinema 做线下展映。\n\n它的类别设置比较友好。除了不同长度的 AI 短片和 AI Feature，也单独设置了 Music Video、Sci-Fi Screenplay、Fantasy Screenplay。对已有作品的创作者来说，是一个相对轻量的英国试投窗口。\n\n它的结果周期也比较短。从最终截止到通知结果约 9 天，从截止到线下活动约 1 个月，入选创作者能获得比较快的反馈。\n\n但需要注意的是，它目前没有明确现金奖金，评委阵容和评分标准还没有完全披露。",
    "filterTags": [
      "国际赛事",
      "多元类型"
    ]
  },
  {
    "id": 8,
    "slug": "shot-on-camon-contest-2026",
    "title": "TECNO CAMON 全球影像大赛｜Shot On CAMON Contest 2026",
    "tags": [
      "AI摄影",
      "移动影像",
      "人像创作",
      "品牌赛事"
    ],
    "organizer": "TECNO × Lonely Planet",
    "deadline": "2026.10.11",
    "prize": "总奖金与奖品约 $38,000",
    "participation": "个人",
    "region": "全球",
    "accent": "gold",
    "entryFee": "免费",
    "officialUrls": [
      {
        "label": "官方链接",
        "url": "https://www.tecno-mobile.com/shotoncamon/"
      }
    ],
    "resultCycle": [
      "官方暂未明确公布。比赛截止时间为 2026年10月11日，获奖公布时间需关注 TECNO 官方网站 / Instagram 后续通知。"
    ],
    "suitableFor": [
      "手机摄影创作者",
      "旅行摄影师",
      "人像摄影师",
      "街头摄影创作者",
      "夜景摄影创作者",
      "AI 图像风格化创作者",
      "TECNO CAMON 用户",
      "海外社媒创作者",
      "想获得现金奖励、手机奖品、旅行奖励和品牌传播资源的人"
    ],
    "notSuitableFor": [
      "AI短片 / AI视频创作者",
      "没有 TECNO CAMON 设备的人",
      "对品牌方免费使用作品授权比较敏感的人",
      "追求电影节履历、线下展映或产业创投资源的 AIGC 创作者"
    ],
    "awardDetails": [
      "总奖金与奖品约 $38,000",
      "TECNO Photography Master：1名，奖金 $8,000",
      "Gold Prize：5名，每人 $3,000",
      "Silver Prize：5名，每人 $2,000",
      "Bronze Prize：5名，每人 $1,000",
      "TECNO Friend：10名，获得 CAMON 50 Series Smartphone",
      "TECNO Photography Master 和 5 位 Gold Prize 获奖者将获得 Lonely Planet 菲律宾定制旅行"
    ],
    "categories": [
      "Faces·Unfiltered｜真实人像",
      "Night·Unveiled｜夜色揭幕",
      "Culture·Unscripted｜文化即兴",
      "Snapshot·Unspotted｜远距发现 / 长焦特别单元",
      "AI·Unimagined｜AI 想象特别单元"
    ],
    "requirements": [
      "使用 TECNO CAMON 50 Series 拍摄作品",
      "在 Instagram 发布作品",
      "照片需带有可见的 TECNO 设备水印",
      "使用话题 #ShotOnCAMON2026 和 #TECNOCAMON50Series",
      "通过邮箱 shotoncamon@tecnomobile.com 或 TECNO 官网 ShotOnCAMON Gallery 提交高清版本",
      "作品必须为原创",
      "重复投稿会被取消资格",
      "AI·Unimagined 类别需要同时提交原始照片和 AI 风格化后的作品，并提交 EXIF 信息"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "全球媒体展览",
      "TECNO 年度摄影书",
      "TECNO 官方平台展示",
      "TECNO × Lonely Planet 联合内容传播",
      "Lonely Planet 菲律宾定制旅行奖励"
    ],
    "timelineNotes": [
      "2026.05.15：征集开始",
      "2026.10.11：征集截止",
      "获奖公布时间需关注 TECNO 官方网站 / Instagram 后续通知"
    ],
    "positioning": "全球手机摄影比赛，面向 TECNO CAMON 用户征集真实生活、旅行、人像、夜景、文化和 AI 风格化影像作品。2026 年主题为 Seeing is Believing，设置基于真实照片再进行 AI 风格化处理的 AI 类别。",
    "evaluation": "官方公开页面暂未看到完整评审机制。Lonely Planet 摄影师参与内容创作和终审评审是传播与评审资源上的加分项。",
    "rights": "投稿前务必确认授权条款。官网报名表显示，参赛即同意 TECNO 免费使用提交作品及作品中相关肖像权、知识产权。若作品涉及真人肖像、旅行人物、第三方地点或 AI 风格化素材，需要提前确认授权边界。",
    "notes": "Shot On CAMON Contest 2026 的核心价值不在于“AI影像赛事”，而在于它是一个有全球品牌传播资源的手机摄影 + AI风格化影像比赛。TECNO 与 Lonely Planet 联合发起，连接的是移动影像、旅行叙事、真实世界观察和全球内容展示。\n\n它的奖金和奖品也比较明确：最高奖 $8,000，另有 Gold / Silver / Bronze 现金奖励、CAMON 50 系列手机，以及 Lonely Planet 定制旅行。对于手机摄影创作者来说，这个奖励体系有吸引力。\n\nAI·Unimagined 类别不是鼓励创作者从零生成一张 AI 图，而是要求先拍摄真实世界照片，再用 TECNO AI Gallery 做艺术化转化。这一点和主题 Seeing is Believing 很一致：AI 在这里不是替代现实，而是从现实观察出发，扩展视觉表达。",
    "filterTags": [
      "国际赛事",
      "AI图像",
      "商业创意"
    ]
  },
  {
    "id": 9,
    "slug": "ai-media-award-2026",
    "title": "AMA AI 媒体奖｜AI Media Award 2026",
    "tags": [
      "AI广告",
      "AI动画",
      "数字时尚",
      "商业创意"
    ],
    "organizer": "SSIA Smile Swiss Influence Award × AMA AI Media Agency",
    "deadline": "2026.08.31｜Regular Deadline",
    "prize": "每个类别获奖者 CHF 500",
    "participation": "个人 / 团队",
    "region": "全球",
    "accent": "green",
    "entryFee": "否。FilmFreeway 当前类别费用为 40 CHF / Gold Members 30 CHF；规则正文另提到 processing fee 50 CHF，投稿前建议以结算页为准",
    "officialUrls": [
      {
        "label": "官方链接",
        "url": "https://filmfreeway.com/AIMediaAward"
      }
    ],
    "resultCycle": [
      "从 2026.08.31 截止到 2026.09.30 通知结果，约 1个月",
      "从截止到 2026.10.27 线下活动，约 2个月"
    ],
    "suitableFor": [
      "AI广告创作者",
      "AI品牌短片创作者",
      "AI动画创作者",
      "AI时尚影像创作者",
      "AI MV创作者",
      "AI叙事短片创作者",
      "AI艺术影像创作者",
      "创意代理公司",
      "广告公司",
      "品牌内容团队",
      "有 5分钟以内 AI广告、AI MV、AI时尚片、AI动画或AI叙事短片的人"
    ],
    "notSuitableFor": [
      "追求传统电影节履历的人",
      "只做长片、中片或超过5分钟叙事作品的人",
      "投稿预算很低、但希望奖金覆盖成本的人",
      "不希望作品参与 public vote 或品牌宣传展示的人"
    ],
    "awardDetails": [
      "每个类别获奖者 CHF 500",
      "瑞士线下颁奖",
      "国际展示平台",
      "广告、媒体、设计和 AI 创意产业曝光机会"
    ],
    "categories": [
      "AI Advertising",
      "AI Animation",
      "AI Art",
      "AI Fashion",
      "AI Narration",
      "AI Music Clip",
      "Swiss AI Content Creator 特别类别"
    ],
    "requirements": [
      "面向使用 AI-powered tools 制作视听内容的创作者、公司和 agency",
      "作品需 predominantly AI-generated",
      "每次提交必须是一个独立作品，不能是整个 campaign",
      "时长上限 5分钟",
      "画幅 16:9",
      "文件格式 .MOV 或 .MP4",
      "最大文件大小 2GB",
      "接受分辨率 HD / QHD / 4K",
      "不能提交系列作品，每次提交必须是 standalone piece",
      "投稿者需确认拥有作品发布与使用所需全部权利"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "瑞士广告 / 媒体 / 创意产业现场",
      "AI内容创作者国际展示",
      "品牌、设计、广告和媒体行业 networking",
      "SSIA / SIA 平台生态曝光",
      "高规格行业活动中的颁奖典礼"
    ],
    "timelineNotes": [
      "2026.03.04：Opening Date",
      "2026.08.31：Regular Deadline",
      "2026.09.30：Notification Date",
      "2026.10.27：Event Date"
    ],
    "positioning": "面向 AI 生成媒体内容的国际奖项，连接 AI 创作者、广告、设计、媒体与创意产业。赛事已举办 2年，FilmFreeway 页面显示预计观众 3,500 人、预计投稿 500 件、入选项目约 18 个、颁发奖项 6 个。",
    "evaluation": "采用组织方预选 + 专家评审 + 社区投票 + 最终评审会。AI、广告和设计领域专家评审 shortlist；部分类别会加入线上社区投票；最终由评委会联合会议决定获奖者。",
    "rights": "投稿者需要确认拥有参赛作品发布和使用所需全部权利。如果作品获得提名或获奖，参赛者同意作品可在颁奖典礼、AMA Award 官网、SSIA Smile Swiss Influence Award 官网等场景发布。AIGC 创作者需特别确认音乐、肖像、品牌素材、参考图和 AI 工具许可。",
    "notes": "这是一个适合 AI广告、AI时尚、AI音乐影像和商业创意内容创作者投递的瑞士 AI 媒体奖项，优势在类别精准和创意产业 networking。对 AIGC 创作者来说，这类机会更接近商业创意行业真正会购买、传播和使用的内容形态。\n\n它的类别设置很多元。AI Advertising、AI Fashion、AI Music Clip、AI Narration、AI Animation、AI Art 刚好覆盖 AIGC 创作者最容易产生商业机会的几个方向：广告片、时尚片、MV、动画短片和艺术影像。\n\n颁奖典礼嵌入 AMA Award Event，并强调电影、广告、媒体和 AI 技术专业人士的 networking。如果作品是强叙事、作者表达或电影节向短片，可能不太匹配；但如果作品是 AI广告、AI时尚片、AI MV 或商业创意短片，AI Media Award 是值得关注的欧洲创意产业机会。",
    "filterTags": [
      "国际赛事",
      "商业创意",
      "多元类型"
    ]
  },
  {
    "id": 10,
    "slug": "ai-movie-awards-2026",
    "title": "AIMA AI 电影奖｜AI Movie Awards 2026",
    "tags": [
      "AI电影",
      "AI音乐视频",
      "商业创意",
      "国际奖项"
    ],
    "organizer": "AIMA Productions / AI Movie Awards",
    "deadline": "Extended Deadline：2026.09.19",
    "prize": "暂无明确现金奖金",
    "participation": "个人 / 团队",
    "region": "全球",
    "accent": "red",
    "entryFee": "否。大部分影视、音乐、广告类别 €25 - €35；AI Art 类别 €15 - €25，具体按阶段和 Gold Member 身份计算",
    "officialUrls": [
      {
        "label": "官方链接",
        "url": "https://filmfreeway.com/AIMovieAwards"
      }
    ],
    "resultCycle": [
      "从 2026.09.19 Extended Deadline 到 2026.10.24 通知结果，约 5周",
      "从截止到 2026.11.07 - 2026.11.08 伦敦线下活动，约 7周"
    ],
    "suitableFor": [
      "AI短片创作者",
      "AI中长片 / 长片创作者",
      "AI动画创作者",
      "AI纪录片创作者",
      "AI科幻 / 奇幻 / 剧情 / 惊悚创作者",
      "AI MV创作者",
      "AI音乐创作者",
      "AI广告创作者",
      "AI图像 / 动态艺术创作者",
      "希望接触 AI电影创作者网络、娱乐工业和音乐视频方向评委的人",
      "不追求现金奖金，更看重奖项、线下活动、评委背书和国际曝光的人"
    ],
    "notSuitableFor": [
      "只想免费投稿的人",
      "追求明确现金奖金的人",
      "只有 trailer、demo reel 或单纯视觉测试片的人",
      "作品版权、音乐和声音授权不清晰的人",
      "对 distribution deal 条款敏感、但不愿二次确认合同细节的人"
    ],
    "awardDetails": [
      "现金奖金：暂无明确现金奖金信息",
      "奖项价值：伦敦线下展映 + AIMA奖项 / 奖杯 / 证书 + distribution deal + 合作伙伴奖品 + AI电影创作者网络",
      "官方写到 winners receive a distribution deal，但当前页面未详细说明发行合作范围、平台、期限和权利结构，投稿前建议二次确认"
    ],
    "categories": [
      "AI Films：Best Short、Best Movie、Best Animation、Best Drama、Best Documentary、Best Fantasy、Best Planet Consciousness、Best Cultural Heritage、Best Diversity & Inclusion、Best Sci-Fi、Best Vertical Short",
      "AI Music Videos：Best Music Video",
      "AI Music：Best Music",
      "AI Art：Best Art｜Image、Best Art｜Motion / Video",
      "AI Ads：Best Ad"
    ],
    "requirements": [
      "作品必须主要使用 AI 工具创作",
      "AI 可以用于图像、视频、动画、声音生成等",
      "传统后期工具可以用于少量后期",
      "剧本可以使用 AI，也可以不使用 AI",
      "影片时长需 2分钟以上，广告、图像和动态艺术类别不受此限制",
      "不接受 trailer 或 demo reel，重点是 storytelling",
      "不接受政治、极端主义、暴力或宣传内容",
      "不接受低质量作品，例如声音差、缺字幕、低清晰度",
      "非英语影片必须提供英文字幕",
      "最低分辨率 1920×1080 Full HD",
      "帧率 23.976、24 或 25 fps，需为 constant frame rate",
      "推荐画幅 16:9，也接受 4:3、2.35:1 等有艺术理由的格式",
      "文件格式 MP4 / MOV",
      "创作者需拥有影片中图像、音乐、声音等全部权利或取得授权",
      "已经参加过其他电影节的作品也可以投稿"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "伦敦 IET London 线下放映",
      "finalist films 影院放映",
      "入围创作者可获得 1 张 festival pass",
      "可参与 screenings、networking 和 opening events",
      "有一定娱乐工业和流行文化评委背书",
      "实体奖杯 / finalist 露出"
    ],
    "timelineNotes": [
      "2026.06.15：Opening Date",
      "2026.07.18：Earlybird Deadline",
      "2026.08.15：Regular Deadline",
      "2026.09.19：Extended Deadline",
      "2026.10.24：Notification Date",
      "2026.11.07 - 2026.11.08：Event Date",
      "FilmFreeway 规则正文中有一处写投稿期为 6月15日 - 10月17日，但页面日期栏显示 Extended Deadline 为 9月19日，建议优先采用页面日期栏，并在投稿前以 FilmFreeway 结算页为准"
    ],
    "positioning": "面向 AI 驱动电影、AI音乐视频、AI音乐、AI艺术与AI广告的国际奖项平台，强调用 AI 探索新的电影语言、叙事方式和艺术表达。伦敦站将与 JD Media 合作展示 AI 短片、长片和实验作品。",
    "evaluation": "评审分为预选委员会初筛和 AIMA jury 终审。评审标准包括 storytelling、artistic vision、AI integration、aesthetic quality。页面确认的评审包括 Tommy Harper、Fab Morvan、Mike Day、Mike Ho、Zack London / Gossip Goblin 等，完整受邀评委名单待公布。",
    "rights": "投稿者必须拥有影片中所有内容的权利，包括图像、音乐、声音等，或已获得正式授权。投稿即授权 AIMA 在影院和电影节期间放映作品，在官网、平台、YouTube playlist 和社交媒体展示作品，并使用短片段、海报、剧照、synopsis 等进行宣传。AIGC 创作者需特别注意音乐、声音、肖像、参考图、seed image 和 AI 工具商业使用许可。",
    "notes": "AIMA 是一个适合 AI电影、AI MV、AI广告和AI艺术创作者投递的英国 AI 影像奖项，优势在类型开放、跨界资深评委和线下 networking。\n\n它的评审阵容有一定吸引力。Tommy Harper、Mike Day、Mike Ho 等人的背景连接电影制片、剧集工业、音乐视频和流行文化，影响力不仅是在 AI 影像圈。\n\n伦敦站将在 IET London 举办，入围影片有线下放映，finalist 创作者可获得 festival pass 并参与 networking 和 opening events。\n\n需要注意的是，AIMA 没有明确现金奖金，distribution deal 的具体范围和权利结构需要二次确认。它更适合看重国际展示、奖项履历、评委背书和 AI 创作者网络的人。",
    "filterTags": [
      "国际赛事",
      "多元类型",
      "商业创意"
    ]
  },
  {
    "id": 11,
    "slug": "we-are-human-festival-2026",
    "title": "We Are Human Festival 2026｜Film & AI International Open Call",
    "tags": [
      "人权议题",
      "AI电影",
      "伦理笔记",
      "巴黎展映"
    ],
    "organizer": "We Are Human Foundation",
    "deadline": "2026.09.30 23:59 CEST",
    "prize": "Grand Prix €5,000",
    "participation": "个人 / 团队",
    "region": "全球",
    "accent": "violet",
    "entryFee": "免费。官方明确写到 Free submission / Free to enter",
    "officialUrls": [
      {
        "label": "Open Call 页面",
        "url": "https://wearehuman.foundation/en/call-for-films/"
      },
      {
        "label": "Rules & Terms 页面",
        "url": "https://wearehuman.foundation/en/rules-terms/"
      }
    ],
    "resultCycle": [
      "从 2026.09.30 截止到 2026.10.20 官方入选公布，约 20天",
      "从截止到 2026.11.24 巴黎展映与颁奖，约不到 2个月"
    ],
    "suitableFor": [
      "AI短片创作者",
      "AI实验影像创作者",
      "AI纪录片创作者",
      "AI动画创作者",
      "AI艺术影像创作者",
      "AI社会议题创作者",
      "公共议题创作者",
      "人权 / 伦理 / 科技反思方向创作者",
      "关注 AI 与人类尊严、平等、自由、偏见、表征、算法权力的人",
      "作品偏诗性、实验、纪录、社会议题或人文表达的人",
      "想进入欧洲艺术 / 公共议题 / 文化机构语境的创作者",
      "愿意公开说明 AI 使用方式和伦理思考的人"
    ],
    "notSuitableFor": [
      "只做视觉奇观或工具 demo 的创作者",
      "作品与人权、尊严、自由、平等、兄弟情谊等主题完全无关的人",
      "不愿提交 AI 使用说明和伦理反思的人",
      "追求商业广告、平台流量或高额奖金的人"
    ],
    "awardDetails": [
      "Grand Prix：€5,000，表彰综合维度最优秀的视听作品",
      "Best Screenplay：€3,000，表彰叙事质量、写作和原创视野",
      "Ethics Award：€2,000，表彰最清晰地提出 AI 与人类关系问题的作品，也会结合 Ethics Notebook 评估创作者的伦理思考"
    ],
    "categories": [
      "剧情短片",
      "纪录片",
      "动画",
      "实验影像",
      "电影论文 / audiovisual essay",
      "音乐视频",
      "影像艺术",
      "诗性影像 / video poem",
      "人机混合创作短片"
    ],
    "requirements": [
      "面向全球创作者开放，个人、团队、工作室、独立创作者均可",
      "参赛者需年满 18岁",
      "作品完成时间需在 2025年6月1日之后",
      "作品时长为 1 - 10分钟",
      "必须使用 AI 参与创作，可以是构思、实现、形式、图像、声音、音乐、文字等环节",
      "必须体现可识别的人类艺术意图",
      "纯 AI 自动生成、没有人类创作方向的作品不符合资格",
      "任意语言均可，入选后需提供英文字幕",
      "通过 FilmFreeway 提交，可上传文件或提交 Vimeo / YouTube 密码链接",
      "每个投稿作品都必须提交 Ethics Notebook"
    ],
    "ethicsNotebook": [
      "使用了哪些 AI 工具？",
      "人类创作者在过程中扮演了什么角色？",
      "创作过程中遇到了哪些伦理张力，例如偏见、表征、碳足迹、训练数据疑虑等？",
      "作品如何回应本届人权主题？"
    ],
    "presenceValue": [
      "20部官方入选作品将在巴黎 Forum des Images 展映",
      "2026年12月 - 2027年3月进行国际巡展",
      "巡展覆盖 Paris、São Paulo、New York、Johannesburg、Geneva 等城市和文化机构",
      "电影节日程包括 finalist films 展映、conference、workshops、创作者交流与颁奖典礼",
      "作品将进入真实观众、文化机构和公共议题现场，而不只是线上链接"
    ],
    "timelineNotes": [
      "2026.06.01：开放投稿",
      "2026.09.30：投稿截止",
      "2026.10.13：公布评审团构成",
      "2026.10.20：公布官方入选",
      "2026.11.24：巴黎 Forum des Images 展映与颁奖",
      "2026.12 - 2027.03：国际巡展，覆盖 São Paulo、New York、Johannesburg、Geneva 等城市"
    ],
    "positioning": "面向全球创作者的 AI + 电影 + 人权主题国际影像征集。2026 首届聚焦《世界人权宣言》第1条：“人人生而自由，在尊严和权利上一律平等。”它不是技术展示型 AI 影展，而是一个强调艺术表达、社会议题、人类尊严与 AI 伦理反思的影像节。",
    "evaluation": "独立艺术委员会将确定 20 部官方入选作品；评审团来自创作、媒体与创新领域；评审团构成将于 2026年10月13日公布；三个奖项将在 2026年11月24日巴黎 Forum des Images 颁奖典礼上公布。机制方向清晰，但当前阶段具体评委尚未公开。",
    "rights": "创作者保留作品所有权；入选后需授权电影节进行 24个月非独占展映与宣传使用。许可范围包括官方合作场地线下放映、非商业安全在线放映，以及用于宣传的片段使用；宣传片段最多为作品的 20%，且最长不超过 2分钟。条款整体较友好，但创作者仍需自行确认 AI 素材、音乐、肖像和第三方素材权利。",
    "notes": "We Are Human Festival 是面向全球创作者的 AI + 电影 + 人权主题国际影像征集。2026 首届聚焦《世界人权宣言》第1条：“人人生而自由，在尊严和权利上一律平等。”它不是技术展示型 AI 影展，而是一个强调艺术表达、社会议题、人类尊严与 AI 伦理反思的影像节。\n\n它的核心价值，是把 AI 影像创作、艺术表达和人权议题放在同一个严肃框架里。它明确强调自己不是 AI 技术 demo 展，而是一个 committed artistic festival，把 AI 当成反思社会、尊严、平等和人类未来的艺术途径。\n\n它的国际展映也很有价值。20部入选作品不只在巴黎 Forum des Images 展映，还会进入 São Paulo、New York、Johannesburg、Geneva 等城市的合作场地巡展，并配合公共讨论和文化机构展示。作品会被带到真实观众、文化机构和公共议题现场，而不是只停留在线上链接。\n\nEthics Notebook 的设计很有辨识度。它要求创作者回答 AI 工具、人类角色、伦理张力和人权主题之间的关系，但又明确说这不是审查机制，而是作品的一部分。这一点非常符合 AIGC 影像进入下一阶段的趋势：创作者不只是展示结果，也需要展示自己如何与工具合作、如何意识到偏见、如何保留人类判断。\n\n当然，它不是所有创作者都适合。它更偏艺术、公共议题、人文表达和社会反思，不适合纯商业广告、娱乐工业、MV炫技或平台流量型作品。适合有社会思考、人文关怀和 AI 伦理意识的影像创作者投递。",
    "filterTags": [
      "国际赛事",
      "社会议题"
    ]
  },
  {
    "id": 12,
    "slug": "aaiff-2026-astana-ai-film-festival",
    "title": "阿斯塔纳 AI 电影节｜AAIFF 2026｜Astana AI Film Festival",
    "tags": [
      "国际影展",
      "超高奖金",
      "多元类型"
    ],
    "organizer": "AAIFF / Astana AI Film Festival",
    "deadline": "2026.08.15",
    "prize": "总奖金池 $1,000,000",
    "participation": "个人 / 团队",
    "region": "全球 / 哈萨克斯坦",
    "accent": "cyan",
    "entryFee": "免费，官网FAQ明确说明AAIFF 2026对所有人免费开放投稿",
    "officialUrls": [
      {
        "label": "AAIFF官网",
        "url": "https://aaiff.ai/"
      }
    ],
    "resultCycle": [
      "从投稿截止到官方入围公布约1个月",
      "从投稿截止到最终颁奖约1个半月"
    ],
    "suitableFor": [
      "AI短片导演",
      "AI电影创作者",
      "AI动画创作者",
      "AI实验影像创作者",
      "AI视觉叙事创作者",
      "AI剧情短片创作者",
      "AI概念片创作者",
      "AI影像工作室",
      "独立创作者友好",
      "团队和工作室友好"
    ],
    "awardDetails": [
      "总奖金池：$1,000,000",
      "Thematic Competition 主题竞赛奖金池：$750,000",
      "Grand Prize：$450,000",
      "Second Prize：$200,000",
      "Third Prize：$100,000",
      "Open Competition 开放竞赛奖金池：$250,000",
      "Best Character / Direction / Visual / Story / Concept：各 $50,000"
    ],
    "timelineNotes": [
      "投稿开放：2026.05.25 - 2026.08.15",
      "官方入围公布：2026.09.15",
      "电影节开幕：2026.10.01",
      "颁奖典礼：2026.10.03",
      "作品时长：3分钟以上",
      "生成式AI必须是创作核心，不能只是VFX或画质提升",
      "投稿时需披露模型和创作pipeline",
      "投稿方式：YouTube 或 Google Drive 链接"
    ],
    "notes": "AAIFF 的总奖金池达到100万美元，是目前AI原生电影领域中非常高规格的奖金池之一。对于仍处于早期建立行业标准的赛道来说，这种奖金规模本身就意味着主办方希望把它做成一个高关注度、高行业声量的标志性赛事。\n\n它的赛制相对友好：主题竞赛鼓励围绕年度主题“The Future Worth Living In”进行作者表达；开放竞赛则允许已经完成、已经参加过其他比赛或电影节的作品继续投稿。\n\nAAIFF 不是单纯线上征集，而是在阿斯塔纳举办线下电影节，包括开幕、展映、讨论、Community Salon 和颁奖典礼。入选创作者、评委和行业嘉宾会在同一空间交流，也有机会被制片人、平台和投资人看到。\n\n需要注意的是，评审阵容尚未公布。因此它目前的确定优势是奖金规模、国际化定位、线下电影节形态和AI原生电影节定位；评审权威性需要等后续名单公布后再判断。\n\n此外，我们觉得这是一个“新兴但值得提前卡位”的赛事。因为它背后代表的是：中亚正在尝试建立新的AI文化节点。现在很多AI赛事都集中在：中国，美国，欧洲。但未来一定会出现新兴的AIGC文化市场。而这种在文化后进地区的赛事，很容易形成早期身份红利。",
    "notSuitableFor": [],
    "categories": [],
    "requirements": [],
    "ethicsNotebook": [],
    "presenceValue": [],
    "positioning": "",
    "evaluation": "",
    "rights": "",
    "filterTags": [
      "国际赛事",
      "超高奖金",
      "多元类型"
    ]
  },
  {
    "id": 13,
    "slug": "hong-kong-aigc-cultural-digital-content-competition",
    "title": "香港国际 AIGC 文化数字内容创作大赛",
    "tags": [
      "香港高校",
      "多元类型",
      "学生友好"
    ],
    "organizer": "香港科技大学 / 香港国际音乐节",
    "deadline": "选拔赛 2026.08.30 / 决赛 2026.09.30",
    "prize": "最高 HK$10,000 + 奖杯证书",
    "participation": "个人 / 团队",
    "region": "中国香港",
    "accent": "green",
    "entryFee": "暂无明确，官网首页未清晰标注参赛费用，需进入报名系统进一步确认",
    "officialUrls": [
      {
        "label": "赛事官网",
        "url": "https://aigc.eduhk.org/"
      }
    ],
    "resultCycle": [
      "官网首页暂未明确公布；赛事整体周期为2026年5月至10月，决赛阶段集中在9月至10月"
    ],
    "suitableFor": [
      "AIGC绘画创作者",
      "AI视频创作者",
      "AI音乐创作者",
      "AI潮玩 / IP形象创作者",
      "学生创作者",
      "青少年创作者",
      "文化数字内容创作者",
      "教育场景创作者",
      "中华文化主题创作者",
      "学生友好",
      "团队友好",
      "文化教育方向友好"
    ],
    "awardDetails": [
      "绘画创作第一名：HK$5,000 + 奖杯 + 证书",
      "绘画创作第二名：HK$3,000 + 奖杯 + 证书",
      "绘画创作第三名：HK$1,500 + 奖杯 + 证书",
      "视频创作第一名：HK$10,000 + 奖杯 + 证书",
      "视频创作第二名：HK$5,000 + 奖杯 + 证书",
      "视频创作第三名：HK$2,500 + 奖杯 + 证书",
      "音乐创作第一名：HK$10,000 + 奖杯 + 证书",
      "音乐创作第二名：HK$5,000 + 奖杯 + 证书",
      "音乐创作第三名：HK$2,500 + 奖杯 + 证书",
      "潮玩单元具体奖项需以后续细则为准"
    ],
    "timelineNotes": [
      "2026.05.01 - 2026.08.30：选拔赛报名",
      "2026.09.15 - 2026.09.30：决赛报名",
      "2026.10：中国香港总活动",
      "核心单元：绘画创作、视频创作、音乐创作、潮玩创作",
      "团队人数不超过5人",
      "工具不限"
    ],
    "notes": "这个比赛的核心价值在于它处在香港高校资源、AIGC教育普及和中华文化数字内容创作的交叉点上。香港科技大学与香港国际音乐节作为主办方，让它更偏教育、文化、音乐和青年创作场景，而不是纯商业AIGC比赛。\n\n它的类型设置适合AIGC的多元形态：绘画、视频、音乐、潮玩都能参加，不要求创作者必须做成传统短片或标准MV。潮玩方向尤其值得关注，可能连接AI角色设计、IP形象、文创产品和青年消费文化。\n\n它还有一个实用优势：工具限制较少。官网明确说明不限AI工具、模型或平台，也允许AI与传统创作方式结合。对于刚入门的学生创作者或非专业团队来说，这降低了技术门槛。\n\n但需要注意：目前官网公开页面对参赛费用、结果公布周期、评审机制、版权条款、潮玩单元具体奖项等信息展示还不够完整。它更偏教育文化活动和AIGC普及型赛事，行业影像履历价值未必最强。",
    "notSuitableFor": [],
    "categories": [],
    "requirements": [],
    "ethicsNotebook": [],
    "presenceValue": [],
    "positioning": "",
    "evaluation": "",
    "rights": "",
    "filterTags": [
      "国际赛事",
      "多元类型"
    ]
  },
  {
    "id": 14,
    "slug": "riff-awards-revolution-ai",
    "title": "罗马独立电影节｜RIFF Awards｜Rome Independent Film Festival",
    "tags": [
      "国际影展",
      "传统背书"
    ],
    "organizer": "Rome Independent Film Festival / RIFF",
    "deadline": "2026.07.31｜Late Deadline",
    "prize": "(r)evolution AI Award",
    "participation": "个人 / 团队",
    "region": "意大利罗马",
    "accent": "red",
    "entryFee": "否。AI单元Standard €10；Student €10；Gold Members €8",
    "officialUrls": [
      {
        "label": "RIFF官网",
        "url": "https://riff.it/"
      },
      {
        "label": "FilmFreeway报名页",
        "url": "https://filmfreeway.com/RomeIndependentFilmFestival-RIFFAwards-1"
      }
    ],
    "resultCycle": [
      "从2026.07.31截止到2026.10.15通知结果，约2个半月",
      "从截止到2026.11.25 - 12.04罗马电影节举办，约4个月"
    ],
    "suitableFor": [
      "AI短片导演",
      "AI电影创作者",
      "AI实验影像创作者",
      "AI动画创作者",
      "AI视觉叙事创作者",
      "AI纪录片创作者",
      "AI + 真人实拍混合创作者",
      "想进入欧洲独立电影节体系的AIGC创作者",
      "适合已有完整作品、且未充分公开发布的独立创作者"
    ],
    "awardDetails": [
      "现金奖金：AI单元暂无明确现金奖金信息",
      "(r)evolution AI Award / RIFF 25年独立电影节履历 / 罗马线下展映与电影节曝光",
      "AI相关奖项：RIFF Awards for the Best Film Using AI Technology、(r)evolution AI Award"
    ],
    "timelineNotes": [
      "投稿开启：2026.02.02",
      "Earlybird：2026.05.29",
      "Regular Deadline：2026.06.30",
      "Late Deadline：2026.07.31",
      "Notification Date：2026.10.15",
      "Event Date：2026.11.25 - 12.04",
      "作品需在2025年1月之后完成",
      "所有竞赛项目需要意大利首映",
      "作品不能已有全球电视或Web发行"
    ],
    "notes": "RIFF 的价值在于它不是一个新成立的AI赛事，而是一个已经举办25年的罗马独立电影节，在传统电影节体系中加入了(r)evolution AI单元。这说明AI影像正在从技术展示进入更正式的独立电影节语境。\n\nAI单元投稿成本很低，Standard仅€10，Gold Members €8，适合作为低成本欧洲电影节投递窗口。尤其如果作品偏叙事、实验影像、动画、AI + 真人混合影像，而不是纯技术炫技，它会比一些纯线上AI比赛更有履历价值。\n\n电影节在罗马举办，有万人级观众规模和多个影院场地；官网也提到入选作品会进入线上catalog，方便发行方、代理、web content buyers等行业人士联系创作者。\n\n需要注意的是，RIFF更接近传统电影节规则，对首映状态和发行状态有要求。所有竞赛项目需要意大利首映，作品不能已有全球电视或Web发行。已经公开上线传播的AIGC作品可能不适合投竞赛单元。",
    "notSuitableFor": [],
    "categories": [],
    "requirements": [],
    "ethicsNotebook": [],
    "presenceValue": [],
    "positioning": "",
    "evaluation": "",
    "rights": "",
    "filterTags": [
      "国际赛事"
    ]
  },
  {
    "id": 15,
    "slug": "vita-shorts-2026-oasis-ai-short-film",
    "title": "绿洲：AI短片竞赛单元｜VITA SHORTS 2026",
    "tags": [
      "短片节展",
      "多元类型",
      "行业背书"
    ],
    "organizer": "VITA SHORTS",
    "deadline": "2026.07.20｜北京时间24:00截止",
    "prize": "即梦积分 + 线下展映",
    "participation": "个人 / 团队",
    "region": "中国上海",
    "accent": "violet",
    "entryFee": "免费",
    "officialUrls": [
      {
        "label": "即梦AI活动页",
        "url": "https://jimeng.jianying.com/ai-tool/activity-detail/2026-176-dreamina-weekly-challenge"
      }
    ],
    "resultCycle": [
      "从2026.07.20截止到9月入围通知，约1个半月",
      "从截止到10月线下活动，约2个半月至3个月"
    ],
    "suitableFor": [
      "AI短片导演",
      "AI动画创作者",
      "AI实验影像创作者",
      "AI剧情短片创作者",
      "AI MV / 视觉影像创作者",
      "AI概念片创作者",
      "独立创作者",
      "学生创作者",
      "已有作品复投友好"
    ],
    "awardDetails": [
      "现金奖金：暂无明确现金奖金信息",
      "30部入围作品：每部获得10000即梦积分",
      "5部获奖作品：额外获得50000即梦积分",
      "从30部入围作品中评选5项荣誉：最佳AI短片、最佳导演、先锋探索荣誉、数字生态荣誉、特别提及",
      "入围者可参与线下展映、颁奖、酒会、大师班、行业论坛等活动"
    ],
    "timelineNotes": [
      "报名时间：2026.05.21 - 2026.07.20",
      "入围通知：2026年9月",
      "线下活动：2026年10月",
      "作品时长：30秒 - 30分钟",
      "横屏 / 竖屏均可",
      "作品需为2026年1月及以后完成",
      "无首映限制，已经在网络平台发布的作品也可以报名",
      "不得带AI工具水印"
    ],
    "notes": "VITA SHORTS 2026「绿洲：AI短片竞赛单元」把AI短片放进了相对专业的短片节展体系里，而不是停留在平台流量活动或工具挑战赛层面。VITA SHORTS 本身已有5年积累，并且与奥伯豪森、日本亚洲短片、釜山短片、UCCA、北京电影学院等机构有合作关系。\n\n这场比赛对AIGC创作者非常友好：免费投稿，接受30秒到30分钟作品，横屏竖屏都可以，且无首映限制，已经公开发布的作品也能报名。对于已经完成AI短片、但还没有进入正式展映场域的创作者来说，这是一个很适合把作品从社交平台带到影展现场的入口。\n\n它的奖励不是现金奖金型，而是即梦积分、线下展映、行业交流和专家指导。如果创作者目标是高额现金奖励，它未必是最强选择；但如果目标是节展履历、线下放映、创作者连接和工具资源，这个比赛性价比很高。",
    "notSuitableFor": [],
    "categories": [],
    "requirements": [],
    "ethicsNotebook": [],
    "presenceValue": [],
    "positioning": "",
    "evaluation": "",
    "rights": "",
    "filterTags": [
      "多元类型",
      "产业对接"
    ]
  },
  {
    "id": 16,
    "slug": "austin-ai-film-festival-2026",
    "title": "Austin AI Film Festival 2026｜奥斯汀 AI 电影节",
    "tags": [
      "国际影展",
      "AI电影",
      "多元类型",
      "线下展映",
      "创作者工作坊"
    ],
    "filterTags": [
      "国际赛事",
      "多元类型",
      "产业对接",
      "商业创意"
    ],
    "organizer": "Austin AI Film Festival / AAIFF",
    "deadline": "2026.08.15",
    "prize": "现金奖与赞助商支持奖项将在入围评选前公布",
    "participation": "个人 / 团队 / 学生",
    "region": "全球 / 美国奥斯汀",
    "accent": "gold",
    "entryFee": "普通投稿 $20；学生投稿 $10",
    "officialUrls": [
      {
        "label": "Austin AI Film Festival 官网",
        "url": "https://www.austinaifilmfest.com/"
      },
      {
        "label": "投稿页面",
        "url": "https://www.austinaifilmfest.com/submission"
      }
    ],
    "resultCycle": [
      "2026.04.15：投稿开启",
      "2026.08.15：投稿截止",
      "2026.10.16 - 2026.10.17：线下电影节，地点为 Austin Zach Theater",
      "从投稿截止到线下电影节约 2个月；官方页面未明确写出入围通知日期，建议后续二次确认"
    ],
    "suitableFor": [
      "AI电影创作者",
      "AI短片导演",
      "AI纪录片创作者",
      "AI MV 创作者",
      "AI广告 / 品牌影像创作者",
      "AI实验影像创作者",
      "AI影视学生创作者",
      "希望进入北美 AI 电影节现场、与平台和创作者交流的人",
      "已经有完整作品，而不是只有单镜头测试的人"
    ],
    "notSuitableFor": [
      "只想投纯线上比赛、不考虑线下放映和海外交流的人",
      "作品存在版权、肖像、品牌授权风险的人",
      "完全依赖 AI 自动生成剧本和故事、缺少人类作者意图的人",
      "希望明确现金奖金金额后再决定投稿的人"
    ],
    "awardDetails": [
      "现金奖与赞助商支持奖项将在入围评选前公布",
      "具体奖金金额暂未公布"
    ],
    "categories": [
      "AI Feature Film：20 - 90分钟",
      "AI Short Film：5分钟 - 19分59秒",
      "AI Micro-Short Film：1分钟 - 4分59秒",
      "Hybrid AI / Live-Action Film：不限时长",
      "AI Series Episode：不限时长",
      "AI Music Video：不限时长",
      "AI Avant-Garde Film：不限时长",
      "AI Documentary：不限时长",
      "AI Movie or Series Trailer：不限时长",
      "AI Student Film：不限时长，面向在读大学 / 学院学生",
      "AI Commercial / Brand Film：不限时长"
    ],
    "requirements": [
      "作品不得侵犯隐私权、公开权、版权、商标、商业秘密、专利或其他知识产权",
      "不得未经许可使用公众人物肖像",
      "大多数视觉镜头必须使用 AI 软件创作；非 AI 图像或素材可作为参考、源素材或训练输入，但最终视觉输出应主要由 AI 辅助生成或转化",
      "剧本、改编源材料或故事基础应主要由人类创作者完成；AI 工具可以辅助，但不允许整体性替代人类完成剧本或故事创作",
      "品牌 / 商业作品若并非真实委托或授权项目，应明确标识为 speculative work；主办方可能要求补充授权说明"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "线下地点为美国奥斯汀 Zach Theater",
      "Day One 聚焦创作流程、平台工具和行业讨论",
      "Day Two 聚焦作品放映、创作者访谈和颁奖",
      "两天均设有 creator hackathon、工作坊、live build、peer learning 和 mentor 交流",
      "适合希望进入国际 AI 电影创作者社区、获得线下放映和同行交流的创作者"
    ],
    "timelineNotes": [
      "2026.04.15：投稿开启",
      "2026.08.15：投稿截止",
      "2026.10.16 - 2026.10.17：Austin Zach Theater 线下电影节",
      "入围通知日期暂未找到",
      "AI Short Film 的展示字段为 5分钟 - 19分59秒，但规则描述中出现过 19分29秒的文字，建议投稿前以表单最终提示为准"
    ],
    "positioning": "Austin AI Film Festival 是一个面向 AI 电影创作者的线下电影节，强调由人类创作者使用 AI 软件讲述故事。它的重点不是单纯展示工具，而是把 AI 影像放回电影叙事、创作者表达、现场交流和产业讨论之中。",
    "evaluation": "官方页面强调竞赛入围作品、年度代表作品放映和颁奖环节。具体评委名单、评分细则、入围通知日期暂未在已抓取页面中明确公布，建议后续关注官网更新。",
    "rights": "Austin AI Film Festival 对原创权利和授权要求较明确。创作者投稿前需要确认音乐、素材、角色、品牌、肖像、商标和 AI 生成素材均不存在权利风险。尤其是涉及公众人物、品牌广告、商业项目或二创元素时，需要提前准备授权证明。",
    "notes": "Austin AI Film Festival 是一个专注于AI的垂类电影，同时配套线下放映、访谈、panel、workshop、hackathon 和创作者社区。并且奥斯汀是美国中部的大城市，传媒相关资源非常丰富。\n\n它的投稿类别覆盖非常广，除了常规的AI长片、短片、微短片、MV、广告之外，还有AI纪录片、AI系列剧、AI混合实拍等等类别，几乎所有的AI创作者都可以找到可以投稿的类目。\n\n它的评审规则也比较清晰：视觉上要使用 AI，但故事上仍然强调人类作者性，说明它看重创作者拿 AI 服务于叙事、情绪和作者表达。\n\n需要注意的是，官网目前没有明确写出现金奖金额，奖项和赞助商支持会在入围评选前公布。如果创作者最看重确定性的奖金回报，需要后续再确认。"
  },
  {
    "id": 17,
    "slug": "hundred-flowers-awards-aigc-recommendation-2026",
    "title": "第38届大众电影百花奖配套活动 · AIGC推优单元",
    "tags": [
      "AI影像",
      "国内奖项",
      "百花奖",
      "线下展映",
      "产业对接",
      "即梦AI"
    ],
    "filterTags": [
      "产业对接",
      "AI图像",
      "多元类型"
    ],
    "organizer": "中国文学艺术界联合会 / 中国电影家协会；即梦 AI 为 AIGC 技术合作伙伴",
    "deadline": "2026.07.20 23:59，北京时间",
    "prize": "30部入围作品各获1万即梦积分；6部推优作品额外获5万即梦积分",
    "participation": "个人 / 团队",
    "region": "全球 / 中国北京",
    "accent": "red",
    "entryFee": "官方活动规则未提及报名费，建议页面上线前再确认是否完全免费",
    "officialUrls": [
      {
        "label": "即梦AI活动页",
        "url": "https://jimeng.jianying.com/ai-tool/activity-detail/2026-630-dreamina-weekly-challenge"
      },
      {
        "label": "活动细则",
        "url": "https://bytedance.larkoffice.com/docx/RIXQdZWczor8k7xg7IFcjtAOnNb?from=from_copylink"
      },
      {
        "label": "报名问卷",
        "url": "https://bytedance.larkoffice.com/share/base/form/shrcnECMeY445oB7QbjytcfixVg"
      }
    ],
    "resultCycle": [
      "征集时间：2026.06.30 - 2026.07.20",
      "评审时间：2026.07.21 - 2026.07.30",
      "入围作品公示：2026年7月底 - 8月初",
      "线下活动及最终获奖作品公示：2026年8月",
      "从投稿截止到初步入围公示约 1 - 2周，结果周期较短"
    ],
    "suitableFor": [
      "AI短片创作者",
      "AI影像导演",
      "AI动画创作者",
      "AI视效创作者",
      "AI电影语言探索者",
      "希望借传统电影奖项体系获得背书和线下曝光的人",
      "已经能完成 1 - 20分钟横屏短片，并能提交完整创作阐述和 AI 工作流的人"
    ],
    "notSuitableFor": [
      "只有竖屏短视频或单镜头测试的人",
      "作品没有使用即梦 AI 的人",
      "不能公开作品或不能同步抖音发布的人",
      "作品版权、音乐、素材、角色或肖像授权不清晰的人",
      "不愿提交 AI 创作流程、prompt、参数和工作流截图的人"
    ],
    "awardDetails": [
      "30部入围作品：每部获得 1万即梦积分",
      "6部推优作品：在入围权益基础上额外获得 5万即梦积分，合计 6万即梦积分",
      "推优作品将在第38届大众电影百花奖线下荣誉颁发仪式中获得荣誉授予，并在官方渠道公布",
      "获奖作品将在影展期间线下专场放映会中展映，有机会受邀参与映后交流和影展活动",
      "百花奖系列活动期间，有机会与头部影视公司面对面沟通商业合作"
    ],
    "categories": [
      "类型不限的 AI 影像短片",
      "作品须为可独立观看的完整单部短片",
      "如为系列作品，应选取其中一集作为参赛作品提交"
    ],
    "requirements": [
      "作品建议于 2025.10.31 后完成制作",
      "作品时长：1分钟以上，20分钟以下，含片头片尾",
      "参赛者需要以 AI 工具作为视频作品的主要创作工具，且 AI 工具须包含即梦 AI",
      "对白、旁白需包含字幕，建议中英双语",
      "本次征片仅面向横屏作品",
      "提交格式为 MOV / MP4，分辨率不低于 1920 x 1080，编码 H.264；网站上传作品最大 1GB",
      "作品须为参赛者原创，参赛者需拥有完整知识产权，并确保作品及其任何要素均取得合法权利或充分可商用授权",
      "同一作者可提交多部不同作品，但每部作品仅限投递一次",
      "完成即梦上传、抖音发布、报名问卷三步，方视为投递成功",
      "参赛作品需提交完整创作阐述，包括 AI 工具名称及版本、内容生成全流程、核心提示词、关键参数配置和工作流截图"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "入围和推优作品有机会获得百花奖系列活动线下曝光",
      "推优作品有线下荣誉授予、官方渠道公布、专场展映、映后交流机会",
      "活动明确提到可在百花奖系列活动期间与头部影视公司面对面沟通商业合作"
    ],
    "timelineNotes": [
      "2026.06.30 - 2026.07.20：作品征集",
      "2026.07.21 - 2026.07.30：评审",
      "2026年7月底 - 8月初：入围作品公示",
      "2026年8月：线下活动及最终获奖作品公示",
      "评委名单尚未公布，线下活动具体时间和地点需关注百花奖及即梦 AI 官方信息"
    ],
    "positioning": "这是第38届大众电影百花奖系列活动中的 AIGC 推优单元，联合即梦 AI 发起，面向全球征集 AI 影像短片。它带有传统电影奖项背书、线下荣誉授予、影展专场展映和影视行业交流机会。",
    "evaluation": "评委会由来自百花电影节的行业专家与即梦 AI 共同组成。评委名单后续公布。评审维度包括叙事与情感表达完整度、视听艺术表现力、人工智能影像技术应用深度、技术创新性等。",
    "rights": "参赛作品须为原创，参赛者需确认作品知识产权完整归属于参赛者。即梦 AI 承诺提交资料仅用于本次活动评选、展映和宣传用途；参赛即视为授权主办方将作品用于活动相关宣传，未经作者授权不会作其他用途。",
    "notes": "这个单元最大的价值，是它把 AIGC 影像放进了大众电影百花奖这样的传统电影奖项语境里。对创作者来说，这不只是一次平台挑战赛，而是一次被电影行业语境看见的机会。\n\n它的奖励不只是积分。真正重要的是 6 部推优作品可以获得线下荣誉授予、官方渠道公布、影展专场展映和映后交流机会，并且有机会在百花奖系列活动期间与头部影视公司面对面沟通商业合作。这对想从 AIGC 作品走向影视产业连接的创作者很有吸引力。\n\n从评审标准看，它关注叙事、情感、视听艺术、AI 技术应用深度和技术创新性，不是只看画面奇观。对有电影表达意识、能完成完整叙事短片的 AI 创作者来说，这是一个值得认真投入的国内机会。\n\n需要注意的是，它对投稿流程要求比较完整：即梦上传、抖音发布、问卷申报三步缺一不可，还需要提交创作阐述和工作流截图。适合准备较充分的创作者，不太适合临时用单条短视频轻量投递。"
  },
  {
    "id": 18,
    "slug": "college-ai-art-season-ai-video-2026",
    "title": "2026大学生AI艺术季 · AI影像创作单元",
    "tags": [
      "学生友好",
      "AI影像",
      "青年创作",
      "夏令营",
      "现金奖金",
      "线下展映"
    ],
    "filterTags": [
      "AI图像",
      "多元类型",
      "产业对接"
    ],
    "organizer": "北京师范大学 / 北京师范大学艺术与传媒学院",
    "deadline": "2026.07.15 24:00，北京时间",
    "prize": "一等荣誉作品 20,000元；二等 10,000元/名；三等 8,000元/名；创意荣誉 5,000元/名",
    "participation": "个人 / 团队",
    "region": "全球高校 / 中国",
    "accent": "green",
    "entryFee": "官方活动规则未提及报名费，建议页面上线前再确认是否完全免费",
    "officialUrls": [
      {
        "label": "即梦AI活动页",
        "url": "https://jimeng.jianying.com/ai-tool/activity-detail/2026-288-dreamina-weekly-challenge"
      },
      {
        "label": "大学生AI艺术季官网",
        "url": "https://aaia.1zp.top"
      },
      {
        "label": "活动细则",
        "url": "https://bytedance.larkoffice.com/docx/NOJkd5FEqoFJ20xceotcEcrFneh"
      }
    ],
    "resultCycle": [
      "初选征集：2026.06.05 - 2026.07.15 24:00",
      "初评结果公布：2026年7月底",
      "AI艺术创作夏令营：2026.08.01 - 2026.08.31，线上 + 线下结合",
      "终选提交：2026.08.31 24:00",
      "终评与颁授：2026.09.15",
      "从初选截止到初评结果约 2周；从初选截止到终评约 2个月"
    ],
    "suitableFor": [
      "在校大学生 AI 影像创作者",
      "毕业三年内的青年创作者",
      "高校影像、动画、数字媒体、设计、艺术科技方向学生",
      "有团队协作能力、愿意提交制作报告和工程文件的人",
      "希望获得导师辅导、夏令营打磨和展览展示机会的人",
      "想用 AI 影像作品连接高校、艺术季和青年创作平台的人"
    ],
    "notSuitableFor": [
      "非学生且毕业超过三年的创作者",
      "主创人员中大学生比例低于 50% 的团队作品",
      "无法提交工程文件、制作报告或 AI 工作流说明的人",
      "只想投一个成片、不愿意进入夏令营继续打磨的人",
      "作品版权、素材、音乐或 AI 生成内容授权不清晰的人"
    ],
    "awardDetails": [
      "一等荣誉作品：1名，奖金 20,000元",
      "二等荣誉作品：3名，奖金 10,000元/名",
      "三等荣誉作品：5名，奖金 8,000元/名",
      "创意荣誉作品：2名，奖金 5,000元/名",
      "所有 AI影像创作单元入围创作者可获得即梦 AI 夏令营专属权益",
      "40部优秀入围作品各获即梦 AI 创作积分 20,000分",
      "优胜作品团队优先推荐入驻中关村科学城相关专业园区，给予创业孵化相关优惠政策支持"
    ],
    "categories": [
      "征集 - 初赛",
      "AI艺术创作夏令营",
      "终赛 / 终评与颁授",
      "展览及嘉年华公开展示"
    ],
    "requirements": [
      "全球各大高等院校正式注册的在校学生，包括专科生、本科生、研究生、进修生均可参加",
      "毕业三年之内的青年创作者可参加，但需提交毕业证书电子版",
      "合作作品需保证主创人员中大学生比例不低于 50%",
      "影片时长需在 1分钟 - 30分钟之间",
      "作品可融入各种人工智能技术进行影像创作，允许在情节设计、场景设计、剪辑、特效处理、语音合成、数字角色设计等环节运用 AI 工具",
      "官网提交视频需为 MP4 / H.264，码率不低于 2Mbps，大小不超过 1GB，分辨率不低于 720p，帧率不低于 24fps，如有旁白需设置字幕",
      "需提交 AI 参与制作报告，PDF 不超过 50MB",
      "需提交完整工程文件 zip，大小不超过 1.5GB，并包含 AI 工具代表性提示词、参数和 AI 工作流相关文件",
      "大学生AI艺术季官网提交与即梦官方活动页提交均为必选，缺一不可"
    ],
    "ethicsNotebook": [],
    "presenceValue": [
      "入围团队可进入 AI 艺术创作夏令营，获得高校和行业专家辅导",
      "荣誉作品将在展览和嘉年华活动中展示",
      "优胜作品团队有机会连接中关村科学城相关专业园区和创业孵化资源",
      "对学生创作者来说，这个比赛同时具有作品履历、导师反馈、平台曝光和高校资源连接价值"
    ],
    "timelineNotes": [
      "2026.06.05 - 2026.07.15：初选征集",
      "2026年7月底：初评结果公布",
      "2026.08.01 - 2026.08.31：AI艺术创作夏令营",
      "2026.08.31：终选提交",
      "2026.09.15：终评与颁授",
      "线下夏令营具体城市、线下活动地点和评委名单需以后续官方通知为准"
    ],
    "positioning": "2026大学生AI艺术季由北京师范大学主办，北京师范大学艺术与传媒学院承办，并联合 30余所国内高校协办。AI影像创作单元由即梦 AI 作为专业支持方，面向全球高校学子发起作品征集，聚焦人工智能技术与数字影像艺术的融合。",
    "evaluation": "初赛阶段由评审团评选入围作品。入围团队进入夏令营阶段，在导师辅导后提交优化作品参与终评。终评结果于 2026大学生AI艺术季开幕大会公布。具体评委名单和评分细则需以后续组委会官方通知为准。",
    "rights": "官方规则要求提交制作报告、工程文件、AI 工作流说明、代表性提示词和参数。创作者应确保作品原创性、素材授权、音乐授权、人物肖像和 AI 生成内容权利清晰。由于该单元涉及官网提交、即梦提交和可能的抖音同步投稿，建议投稿前确认各平台的授权范围和公开展示要求。",
    "notes": "这个单元的优势是“学生友好”非常明确。它面向全球高校学子和毕业三年内青年创作者，不只是收片评奖，还设置了初赛、夏令营、终赛的递进式赛制。对很多正在成长阶段的 AI 影像创作者来说，导师反馈和二次打磨机会可能比一次性评奖更有价值。\n\n它的奖励结构也比较实在：有现金奖金、即梦 AI 创作积分、优秀大学生创作者证书，还有双导师辅导和夏令营资源。对于预算有限但创作欲望很强的学生团队来说，这类支持能直接降低创作成本。\n\n从字段看，它不只鼓励“做出 AI 画面”，也要求创作者提交制作报告、工程文件、提示词、参数和工作流说明。这意味着比赛更重视过程透明度和创作方法，也更适合有系统创作流程的团队。\n\n它还连接大学生AI艺术季的展览、嘉年华、项目创投和中关村科学城相关资源。对想把 AI 影像作品变成履历、展览机会、学术 / 产业连接的高校创作者来说，这是值得投入的一个赛事。"
  }
];

export const filters = [
  "ALL",
  "多元类型",
  "国际赛事",
  "社会议题",
  "情绪表达",
  "产业对接",
  "AI图像",
  "商业创意",
  "超高奖金",
  "奥斯卡资格",
];

export const filterLabels = filters.reduce<Record<string, string>>((labels, filter) => {
  labels[filter] = filter;
  return labels;
}, {});

export function findCompetitionBySlug(slug?: string) {
  return competitions.find((competition) => competition.slug === slug);
}
