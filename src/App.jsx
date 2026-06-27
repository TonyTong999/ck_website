import { useState, useEffect } from "react";
import rangerLabel from "../ranger_label.webp";
import badgeLion from "../BADGE-LION.webp";
import badgeSimba from "../BADGE-SIMBA.webp";
import patchImg from "../PATCH.webp";
import scarfFb from "../SCARF-FB.webp";
import tsEagle from "../TS_EAGLE.webp";

// ─── Translations ─────────────────────────────────────────────────────────────

const T = {
  en: {
    navShop: "Shop", navMission: "Our Mission", navStories: "Wild Stories", navAbout: "About Us",
    heroTagline: "Wear the Wild, Protect Nature",
    heroHeading1: "Every Purchase", heroHeading2: "Builds a Better Future",
    heroBody: "10% of every product sold goes directly to wildlife conservation. Not a tagline — it's written into our articles of incorporation.",
    heroCta: "View Collection", heroCta2: "Our Mission",
    statDonated: "Of Every Sale Donated", statAnimals: "Animals Protected",
    statReserves: "Partner Reserves", statCountries: "Countries",
    missionSectionLabel: "Our Mission",
    missionPreviewSub: "Of every product sold\ngoes directly to conservation",
    missionPreviewHeading: "Design that funds a better future for nature and the people who live with it",
    missionPreviewQuote: "A lion is only safe when the farmer who lost a cow last night has another way to feed his family.",
    missionPreviewBody: "We work with Habitat Watcher to fund programs that give local communities real alternatives — livestock insurance, ranger jobs, eco-tourism training — so wildlife becomes worth more alive than gone.",
    missionPreviewBtn: "Read the Full Story",
    featuredLabel: "Featured Products",
    featuredHeading1: "Each Product,", featuredHeading2: "Protects a Species",
    featuredViewAll: "View All →",
    storiesLabel: "Wild Stories", storiesHeading: "The Lives You're Protecting",
    storiesMore: "More Stories →",
    shopLabel: "Featured Collections", shopHeading: "Each Product, Protects a Species",
    shopBody: "Every product is tied to a real animal and a real conservation project. 10% of every sale goes directly to our partners at Habitat Watcher.",
    filterAll: "All",
    missionLabel: "Our Mission",
    missionHeading: "When Communities Thrive,",
    missionHeadingEm: "Wildlife Survives",
    missionSubheading: "CK Safari Culture Goods was built on a simple belief: protecting wildlife means protecting the communities that live alongside it.",
    missionQuote: "A garment is more than fabric. It's a thread connecting the person wearing it to the communities and creatures who share the land it came from.",
    missionFounder: "— Founder",
    missionWhy10Title: "Why 10%?",
    missionWhy10Body: "The industry standard is 1–2%. We chose 10% because real community transformation — building alternative livelihoods, funding ranger programs, running livestock compensation schemes — requires sustained, meaningful investment. This commitment is written into our articles of incorporation.",
    missionPartnersTitle: "Our Approach",
    missionPartnersBody: "Human-wildlife conflict is the leading cause of poaching and habitat loss. When a family loses livestock to a lion, the lion loses. We fund programs that flip this dynamic — compensation schemes, alternative income, and community ranger roles that give local people a direct stake in wildlife's survival.",
    missionPartnersLabel: "Conservation Partners",
    missionPartnersHeading: "Our Frontline Partners",
    missionPartnerDesc: "Our primary conservation partner. Habitat Watcher monitors wildlife habitats worldwide and channels funds to frontline community and protection programs. We donate 10% of every sale directly to their work.",
    missionPartnerPlaceholder: "Coming soon — we are building our conservation partnerships.",
    missionTransLabel: "How We Allocate Revenue",
    missionTransHeading: "Our Commitment on Paper",
    missionFundLabels: ["Wildlife Conservation", "Production & Materials", "Operations & Logistics", "Marketing & Growth", "Team & Management"],
    storiesPageLabel: "Wild Stories",
    storiesPageHeading: "The Lives You're", storiesPageHeadingEm: "Protecting",
    storiesPageBody: "Every animal has a name, every habitat has a story. Meet the lives you're helping.",
    storiesReadMore: "Read More →", storiesBack: "← Back to Stories",
    storiesSupportLabel: "Support This Species",
    storiesSupportBody: "Purchase the corresponding series and your donation will go directly to this conservation project.",
    aboutLabel: "About Us",
    aboutHeading: "We believe", aboutHeadingEm: "consumption can be conservation",
    aboutSubheading: "CK Safari Culture Goods was founded in 2022 by a group of designers and conservationists passionate about nature.",
    aboutValuesHeading: "Our Values",
    aboutValues: [
      { icon: "🌿", title: "Community First", body: "Conservation that ignores local communities always fails. We fund programs where people and wildlife win together." },
      { icon: "🤝", title: "Frontline Partnerships", body: "We work directly with Habitat Watcher and on-the-ground organizations — not intermediaries — so funds reach where they matter." },
      { icon: "🎨", title: "Aesthetics-Driven", body: "We believe beautiful products create greater impact. Design and purpose — we never compromise on either." },
    ],
    aboutContactHeading: "Contact Us",
    aboutContacts: [["Partnerships & Media", "hello@cksafari.com"], ["Customer Service", "support@cksafari.com"], ["Donation Inquiries", "impact@cksafari.com"]],
    aboutSocialLabel: "Social Media",
    footerTagline: "Every product: 10% directly supports wildlife conservation. Not a promise — a commitment.",
    footerCols: [
      { title: "Shop", items: [["All Products", "shop"], ["Lion Series", "shop"], ["Eagle Series", "shop"]] },
      { title: "Brand", items: [["Our Mission", "mission"], ["Wild Stories", "stories"], ["Partners", "about"]] },
      { title: "More", items: [["Donation Policy", "about"], ["Privacy Policy", "about"], ["Contact Us", "about"]] },
    ],
    footerCopy: "© 2025 CK Safari Culture Goods. All rights reserved.",
    footerBadge: "10% Donation Commitment · Registered Conservation Brand",
  },

  zh: {
    navShop: "商店", navMission: "我们的使命", navStories: "野生故事", navAbout: "关于我们",
    heroTagline: "穿上野性，守护自然",
    heroHeading1: "每一次购买", heroHeading2: "共创更好的未来",
    heroBody: "每件产品售价的10%直接用于野生动物保护。这不是宣传语——它已写入我们的公司章程。",
    heroCta: "浏览系列", heroCta2: "我们的使命",
    statDonated: "每笔销售捐出", statAnimals: "受保护动物",
    statReserves: "合作保护区", statCountries: "覆盖国家",
    missionSectionLabel: "我们的使命",
    missionPreviewSub: "每件产品售价\n直接用于保护",
    missionPreviewHeading: "用设计为自然和与它共存的人们创造更好的未来",
    missionPreviewQuote: "「只有当昨晚失去牛的农民还有另一种养家方式，那头狮子才是安全的。」",
    missionPreviewBody: "我们与Habitat Watcher合作，资助让当地社区获得真实替代生计的项目——牲畜保险、巡护员工作、生态旅游培训——让野生动物活着比消失更有价值。",
    missionPreviewBtn: "阅读完整故事",
    featuredLabel: "精选产品",
    featuredHeading1: "每件产品，", featuredHeading2: "守护一个物种",
    featuredViewAll: "查看全部 →",
    storiesLabel: "野生故事", storiesHeading: "您正在守护的生命",
    storiesMore: "更多故事 →",
    shopLabel: "精选系列", shopHeading: "每件产品，守护一个物种",
    shopBody: "每件产品都与真实动物和真实保护项目相连。每笔销售的10%直接捐给我们在Habitat Watcher的合作伙伴。",
    filterAll: "全部",
    missionLabel: "我们的使命",
    missionHeading: "当社区兴旺，",
    missionHeadingEm: "野生动物才能生存",
    missionSubheading: "CK Safari文化产品建立在一个简单的信念上：保护野生动物，意味着保护与它们共同生活的社区。",
    missionQuote: "「一件服装不只是布料，它是连接穿着者与那片土地上的社区和生灵的纽带。」",
    missionFounder: "— 创始人",
    missionWhy10Title: "为什么是10%？",
    missionWhy10Body: "行业标准为1–2%。我们选择10%，因为真正改变社区——建立替代生计、资助巡护员项目、运行牲畜赔偿机制——需要持续、有意义的投入。这一承诺已写入我们的公司章程。",
    missionPartnersTitle: "我们的方式",
    missionPartnersBody: "人与野生动物的冲突是盗猎和栖息地丧失的主要原因。当一个家庭失去牲畜时，狮子也输了。我们资助扭转这一局面的项目——赔偿机制、替代收入和社区巡护员岗位，让当地人直接从野生动物的存续中受益。",
    missionPartnersLabel: "保护合作伙伴",
    missionPartnersHeading: "我们的一线合作伙伴",
    missionPartnerDesc: "我们的主要保护合作伙伴。Habitat Watcher在全球范围内监测野生动物栖息地，并将资金引导至一线社区和保护项目。我们将每笔销售的10%直接捐给他们的工作。",
    missionPartnerPlaceholder: "即将推出——我们正在建立更多保护合作关系。",
    missionTransLabel: "收益分配",
    missionTransHeading: "我们的书面承诺",
    missionFundLabels: ["野生动物保护", "生产与材料", "运营与物流", "市场与增长", "团队与管理"],
    storiesPageLabel: "野生故事",
    storiesPageHeading: "您正在守护的", storiesPageHeadingEm: "生命",
    storiesPageBody: "每只动物都有名字，每片栖息地都有故事。认识您正在帮助的生命。",
    storiesReadMore: "阅读更多 →", storiesBack: "← 返回故事",
    storiesSupportLabel: "支持这个物种",
    storiesSupportBody: "购买相应系列，您的捐款将直接用于该保护项目。",
    aboutLabel: "关于我们",
    aboutHeading: "我们相信", aboutHeadingEm: "消费可以成为保护",
    aboutSubheading: "CK Safari文化产品由一群热爱自然的设计师和保护人士于2022年创立。",
    aboutValuesHeading: "我们的价值观",
    aboutValues: [
      { icon: "🌿", title: "社区优先", body: "忽视当地社区的保护永远会失败。我们资助人与野生动物共赢的项目。" },
      { icon: "🤝", title: "一线合作", body: "我们直接与Habitat Watcher和一线组织合作——而非中间机构——确保资金真正到达需要的地方。" },
      { icon: "🎨", title: "美学驱动", body: "我们相信美丽的产品能创造更大的影响力。设计与目的——我们从不妥协。" },
    ],
    aboutContactHeading: "联系我们",
    aboutContacts: [["合作与媒体", "hello@cksafari.com"], ["客户服务", "support@cksafari.com"], ["捐赠咨询", "impact@cksafari.com"]],
    aboutSocialLabel: "社交媒体",
    footerTagline: "每件产品：10%直接支持野生动物保护。不是承诺——是义务。",
    footerCols: [
      { title: "商店", items: [["全部产品", "shop"], ["狮子系列", "shop"], ["鹰系列", "shop"]] },
      { title: "品牌", items: [["我们的使命", "mission"], ["野生故事", "stories"], ["合作伙伴", "about"]] },
      { title: "更多", items: [["捐赠政策", "about"], ["隐私政策", "about"], ["联系我们", "about"]] },
    ],
    footerCopy: "© 2025 CK Safari文化产品。保留所有权利。",
    footerBadge: "10%捐赠承诺 · 注册保护品牌",
  },

  tw: {
    navShop: "商店", navMission: "我們的使命", navStories: "野生故事", navAbout: "關於我們",
    heroTagline: "穿上野性，守護自然",
    heroHeading1: "每一次購買", heroHeading2: "共創更好的未來",
    heroBody: "每件產品售價的10%直接用於野生動物保護。這不是宣傳語——它已寫入我們的公司章程。",
    heroCta: "瀏覽系列", heroCta2: "我們的使命",
    statDonated: "每筆銷售捐出", statAnimals: "受保護動物",
    statReserves: "合作保護區", statCountries: "覆蓋國家",
    missionSectionLabel: "我們的使命",
    missionPreviewSub: "每件產品售價\n直接用於保護",
    missionPreviewHeading: "用設計為自然和與它共存的人們創造更好的未來",
    missionPreviewQuote: "「只有當昨晚失去牛的農民還有另一種養家方式，那頭獅子才是安全的。」",
    missionPreviewBody: "我們與Habitat Watcher合作，資助讓當地社區獲得真實替代生計的項目——牲畜保險、巡護員工作、生態旅遊培訓——讓野生動物活著比消失更有價值。",
    missionPreviewBtn: "閱讀完整故事",
    featuredLabel: "精選產品",
    featuredHeading1: "每件產品，", featuredHeading2: "守護一個物種",
    featuredViewAll: "查看全部 →",
    storiesLabel: "野生故事", storiesHeading: "您正在守護的生命",
    storiesMore: "更多故事 →",
    shopLabel: "精選系列", shopHeading: "每件產品，守護一個物種",
    shopBody: "每件產品都與真實動物和真實保護項目相連。每筆銷售的10%直接捐給我們在Habitat Watcher的合作夥伴。",
    filterAll: "全部",
    missionLabel: "我們的使命",
    missionHeading: "當社區興旺，",
    missionHeadingEm: "野生動物才能生存",
    missionSubheading: "CK Safari文化產品建立在一個簡單的信念上：保護野生動物，意味著保護與它們共同生活的社區。",
    missionQuote: "「一件服裝不只是布料，它是連接穿著者與那片土地上的社區和生靈的紐帶。」",
    missionFounder: "— 創辦人",
    missionWhy10Title: "為什麼是10%？",
    missionWhy10Body: "行業標準為1–2%。我們選擇10%，因為真正改變社區——建立替代生計、資助巡護員項目、運行牲畜賠償機制——需要持續、有意義的投入。這一承諾已寫入我們的公司章程。",
    missionPartnersTitle: "我們的方式",
    missionPartnersBody: "人與野生動物的衝突是盜獵和棲息地喪失的主要原因。當一個家庭失去牲畜時，獅子也輸了。我們資助扭轉這一局面的項目——賠償機制、替代收入和社區巡護員崗位，讓當地人直接從野生動物的存續中受益。",
    missionPartnersLabel: "保護合作夥伴",
    missionPartnersHeading: "我們的一線合作夥伴",
    missionPartnerDesc: "我們的主要保護合作夥伴。Habitat Watcher在全球範圍內監測野生動物棲息地，並將資金引導至一線社區和保護項目。我們將每筆銷售的10%直接捐給他們的工作。",
    missionPartnerPlaceholder: "即將推出——我們正在建立更多保護合作關係。",
    missionTransLabel: "收益分配",
    missionTransHeading: "我們的書面承諾",
    missionFundLabels: ["野生動物保護", "生產與材料", "營運與物流", "市場與增長", "團隊與管理"],
    storiesPageLabel: "野生故事",
    storiesPageHeading: "您正在守護的", storiesPageHeadingEm: "生命",
    storiesPageBody: "每只動物都有名字，每片棲息地都有故事。認識您正在幫助的生命。",
    storiesReadMore: "閱讀更多 →", storiesBack: "← 返回故事",
    storiesSupportLabel: "支持這個物種",
    storiesSupportBody: "購買相應系列，您的捐款將直接用於該保護項目。",
    aboutLabel: "關於我們",
    aboutHeading: "我們相信", aboutHeadingEm: "消費可以成為保護",
    aboutSubheading: "CK Safari文化產品由一群熱愛自然的設計師和保護人士於2022年創立。",
    aboutValuesHeading: "我們的價值觀",
    aboutValues: [
      { icon: "🌿", title: "社區優先", body: "忽視當地社區的保護永遠會失敗。我們資助人與野生動物共贏的項目。" },
      { icon: "🤝", title: "一線合作", body: "我們直接與Habitat Watcher和一線組織合作——而非中間機構——確保資金真正到達需要的地方。" },
      { icon: "🎨", title: "美學驅動", body: "我們相信美麗的產品能創造更大的影響力。設計與目的——我們從不妥協。" },
    ],
    aboutContactHeading: "聯絡我們",
    aboutContacts: [["合作與媒體", "hello@cksafari.com"], ["客戶服務", "support@cksafari.com"], ["捐款諮詢", "impact@cksafari.com"]],
    aboutSocialLabel: "社群媒體",
    footerTagline: "每件產品：10%直接支持野生動物保護。不是承諾——是義務。",
    footerCols: [
      { title: "商店", items: [["全部產品", "shop"], ["獅子系列", "shop"], ["鷹系列", "shop"]] },
      { title: "品牌", items: [["我們的使命", "mission"], ["野生故事", "stories"], ["合作夥伴", "about"]] },
      { title: "更多", items: [["捐款政策", "about"], ["隱私政策", "about"], ["聯絡我們", "about"]] },
    ],
    footerCopy: "© 2025 CK Safari文化產品。保留所有權利。",
    footerBadge: "10%捐贈承諾 · 註冊保護品牌",
  },
};

const SERIES_LABEL = {
  zh: { "All": "全部", "Lion Series": "狮子系列", "Eagle Series": "鹰系列", "Ranger Collection": "巡护员系列", "Safari Collection": "狩猎系列" },
  tw: { "All": "全部", "Lion Series": "獅子系列", "Eagle Series": "鷹系列", "Ranger Collection": "巡護員系列", "Safari Collection": "狩獵系列" },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: 1, emoji: "🦁", bg: "#f0e8d8", series: "Lion Series",
    animal: "African Lion", animalZh: "非洲狮", animalTw: "非洲獅",
    nameEn: "Lion Badge", nameZh: "狮子胸章", nameTw: "獅子胸章",
    image: badgeLion, org: "Habitat Watcher",
    descEn: "Each piece protects the last lion prides on Kenya's savanna.",
    descZh: "每件产品守护肯尼亚草原上最后的狮群。",
    descTw: "每件產品守護肯亞草原上最後的獅群。",
  },
  {
    id: 6, emoji: "🦅", bg: "#e0e8f0", series: "Eagle Series",
    animal: "Eagle", animalZh: "鹰", animalTw: "鷹",
    nameEn: "Cloud Tee", nameZh: "云端T恤", nameTw: "雲端T恤",
    image: tsEagle, org: "Habitat Watcher",
    descEn: "Soaring above boundaries. Each garment funds one field survey.",
    descZh: "翱翔于边界之上。每件服装资助一次野外调查。",
    descTw: "翱翔於邊界之上。每件服裝資助一次野外調查。",
  },
  {
    id: 7, emoji: "🦁", bg: "#f0e8d8", series: "Lion Series",
    animal: "African Lion", animalZh: "非洲狮", animalTw: "非洲獅",
    nameEn: "Simba Badge", nameZh: "星巴徽章", nameTw: "星巴徽章",
    image: badgeSimba, org: "Habitat Watcher",
    descEn: "Wear Simba's legacy. Every badge supports lion conservation in the Maasai Mara.",
    descZh: "佩戴星巴的传承。每枚徽章支持马赛马拉的狮子保护。",
    descTw: "佩戴星巴的傳承。每枚徽章支持馬賽馬拉的獅子保護。",
  },
  {
    id: 8, emoji: "🌿", bg: "#e8f0e8", series: "Ranger Collection",
    animal: "Multi-Species", animalZh: "多物种", animalTw: "多物種",
    nameEn: "Ranger Patch", nameZh: "巡护员徽章", nameTw: "巡護員徽章",
    image: patchImg, org: "Habitat Watcher",
    descEn: "A collectible ranger patch honoring the frontline rangers who protect wildlife every day.",
    descZh: "收藏版巡护员徽章，致敬每天守护野生动物的一线巡护员。",
    descTw: "收藏版巡護員徽章，致敬每天守護野生動物的一線巡護員。",
  },
  {
    id: 9, emoji: "🌍", bg: "#e8ede0", series: "Safari Collection",
    animal: "Multi-Species", animalZh: "多物种", animalTw: "多物種",
    nameEn: "Safari Scarf", nameZh: "狩猎围巾", nameTw: "狩獵圍巾",
    image: scarfFb, org: "Habitat Watcher",
    descEn: "A statement scarf inspired by the wilderness. Wear it, protect it.",
    descZh: "灵感源自荒野的围巾。穿上它，守护它。",
    descTw: "靈感源自荒野的圍巾。穿上它，守護它。",
  },
];

const STORIES = [
  {
    id: 1, emoji: "🦁",
    tagEn: "African Lion · Kenya", tagZh: "非洲狮 · 肯尼亚", tagTw: "非洲獅 · 肯亞",
    titleEn: "Simba's Kingdom", titleZh: "星巴的王国", titleTw: "星巴的王國",
    summaryEn: "Lion populations in the Maasai Mara have dropped 40% over 20 years. Your purchase funds anti-poaching patrols protecting 22 prides.",
    summaryZh: "马赛马拉的狮子数量20年间下降了40%。您的购买资助反盗猎巡逻，守护22个狮群。",
    summaryTw: "馬賽馬拉的獅子數量20年間下降了40%。您的購買資助反盜獵巡邏，守護22個獅群。",
    fullEn: "In Kenya's Maasai Mara, Simba and his pride once ruled a vast savanna. But as human activity expanded, lion habitat shrank. Over the past 20 years, the lion population here has fallen by 40%.\n\nThe root cause isn't poachers — it's conflict. When a lion kills a farmer's cattle, that farmer reaches for a spear. Our conservation partner funds livestock compensation programs and community ranger roles, giving local families a reason to protect lions instead of fighting them.\n\nYou're not just buying a badge — you're buying a future for the savanna.",
    fullZh: "在肯尼亚的马赛马拉，星巴和他的狮群曾经统治着广阔的草原。但随着人类活动的扩张，狮子的栖息地不断缩小。过去20年间，这里的狮子数量已下降了40%。\n\n根本原因不是盗猎者——而是冲突。当一头狮子咬死了农民的牛，那个农民就会拿起矛。我们的保护合作伙伴资助牲畜赔偿项目和社区巡护员岗位，让当地家庭有理由保护狮子，而不是与它们为敌。\n\n您不只是在买一枚徽章——您是在为草原的未来而购买。",
    fullTw: "在肯亞的馬賽馬拉，星巴和他的獅群曾經統治著廣闊的草原。但隨著人類活動的擴張，獅子的棲息地不斷縮小。過去20年間，這裡的獅子數量已下降了40%。\n\n根本原因不是盜獵者——而是衝突。當一頭獅子咬死了農民的牛，那個農民就會拿起矛。我們的保護合作夥伴資助牲畜賠償項目和社區巡護員崗位，讓當地家庭有理由保護獅子，而不是與它們為敵。\n\n您不只是在買一枚徽章——您是在為草原的未來而購買。",
  },
  {
    id: 2, emoji: "🐘",
    tagEn: "African Elephant · Amboseli", tagZh: "非洲象 · 安博塞利", tagTw: "非洲象 · 安博塞利",
    titleEn: "Echo's Family", titleZh: "艾可的家族", titleTw: "艾可的家族",
    summaryEn: "Echo led her family for 45 years. Her descendants are monitored around the clock — your purchase helps fund GPS tracking for elephant herds.",
    summaryZh: "艾可带领家族走过45年。她的后代被全天候监测——您的购买帮助资助象群的GPS追踪。",
    summaryTw: "艾可帶領家族走過45年。她的後代被全天候監測——您的購買幫助資助象群的GPS追蹤。",
    fullEn: "Echo is one of the most studied elephants in history. She led the largest herd in Amboseli through 45 years of life. She passed in 2009, but her descendants carry on.\n\nElephants and farmers share the same land — and often clash over it. When elephants raid crops, communities suffer. Our conservation work funds GPS tracking collars that help communities anticipate elephant movement, reducing conflict and protecting both families and herds.\n\nWhen people and elephants can coexist, both thrive.",
    fullZh: "艾可是历史上研究最深入的大象之一。她带领安博塞利最大的象群走过了45年。她于2009年离世，但她的后代延续着这个故事。\n\n大象和农民共享同一片土地——并且常常为此发生冲突。当大象闯入农田时，社区就会受害。我们的保护工作资助GPS追踪项圈，帮助社区预判大象的行动路线，减少冲突，同时保护家庭和象群。\n\n当人与大象能够共存时，双方都能繁荣。",
    fullTw: "艾可是歷史上研究最深入的大象之一。她帶領安博塞利最大的象群走過了45年。她於2009年離世，但她的後代延續著這個故事。\n\n大象和農民共享同一片土地——並且常常為此發生衝突。當大象闖入農田時，社區就會受害。我們的保護工作資助GPS追蹤項圈，幫助社區預判大象的行動路線，減少衝突，同時保護家庭和象群。\n\n當人與大象能夠共存時，雙方都能繁榮。",
  },
  {
    id: 3, emoji: "🦏",
    tagEn: "White Rhino · South Africa", tagZh: "白犀牛 · 南非", tagTw: "白犀牛 · 南非",
    titleEn: "Only Two Left", titleZh: "只剩两头", titleTw: "只剩兩頭",
    summaryEn: "Northern white rhinos are functionally extinct. We support Ol Pejeta Conservancy in protecting the last southern white rhino population.",
    summaryZh: "北方白犀牛功能性灭绝。我们支持奥尔佩杰塔自然保护区，保护最后的南方白犀牛种群。",
    summaryTw: "北方白犀牛功能性滅絕。我們支持奧爾佩杰塔自然保護區，保護最後的南方白犀牛種群。",
    fullEn: "In 2018, the last male northern white rhino, Sudan, left this world. Now only two northern white rhinos remain on Earth — both female, both unable to reproduce naturally.\n\nRhino horn's black-market value drives poaching. But the deeper crisis is that communities surrounding rhino habitats have historically received little benefit from conservation — and so have little reason to protect them.\n\nOl Pejeta Conservancy is changing that, employing local community members as rangers and building a tourism economy that makes wildlife worth protecting. Scientists are also attempting IVF techniques to pull the species back from extinction. This isn't just conservation — it's resurrection.",
    fullZh: "2018年，最后一头雄性北方白犀牛苏丹离开了这个世界。现在地球上只剩两头北方白犀牛——都是雌性，都无法自然繁殖。\n\n犀牛角的黑市价值驱动着盗猎。但更深层的危机在于，犀牛栖息地周边的社区历来从保护中获益甚少——因此几乎没有理由去保护它们。\n\n奥尔佩杰塔自然保护区正在改变这一局面，雇用当地社区成员担任巡护员，并建立起让野生动物值得保护的旅游经济。科学家们也在尝试用IVF技术将这个物种从灭绝边缘拉回来。这不只是保护——这是复育。",
    fullTw: "2018年，最後一頭雄性北方白犀牛蘇丹離開了這個世界。現在地球上只剩兩頭北方白犀牛——都是雌性，都無法自然繁殖。\n\n犀牛角的黑市價值驅動著盜獵。但更深層的危機在於，犀牛棲息地周邊的社區歷來從保護中獲益甚少——因此幾乎沒有理由去保護它們。\n\n奧爾佩杰塔自然保護區正在改變這一局面，雇用當地社區成員擔任巡護員，並建立起讓野生動物值得保護的旅遊經濟。科學家們也在嘗試用IVF技術將這個物種從滅絕邊緣拉回來。這不只是保護——這是復育。",
  },
];

// ─── Color Variables ──────────────────────────────────────────────────────────

const C = {
  earth: "#2C3A2E", earthLight: "#4A6741", sand: "#C8A96E",
  sandLight: "#E8D5A8", cream: "#F5F0E8", white: "#FDFAF5",
  dark: "#1A2319", text: "#3D3228", muted: "#7A6F63",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pick(lang, en, zh, tw) {
  if (lang === "tw") return tw ?? zh;
  if (lang === "zh") return zh;
  return en;
}

// ─── Responsive Hook ──────────────────────────────────────────────────────────

function useIsMobile() {
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return mobile;
}

// ─── Shared Components ────────────────────────────────────────────────────────

function Nav({ page, setPage, lang, setLang }) {
  const isMobile = useIsMobile();
  const t = T[lang];
  const links = [
    { label: t.navShop, key: "shop" },
    { label: t.navMission, key: "mission" },
    { label: t.navStories, key: "stories" },
    { label: t.navAbout, key: "about" },
  ];
  const langToggle = (
    <div style={{ display: "flex", borderRadius: 2, overflow: "hidden", border: "1px solid rgba(200,169,110,0.3)" }}>
      {[["en", "EN"], ["zh", "简体"], ["tw", "繁體"]].map(([code, label]) => (
        <button key={code} onClick={() => setLang(code)} style={{
          background: lang === code ? C.sand : "transparent",
          color: lang === code ? C.dark : "rgba(200,169,110,0.6)",
          border: "none", cursor: "pointer", padding: "6px 10px",
          fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", fontFamily: "inherit",
        }}>{label}</button>
      ))}
    </div>
  );
  if (isMobile) {
    return (
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", flexDirection: "column", gap: 10,
        padding: "12px 16px",
        background: "rgba(26,35,25,0.97)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(200,169,110,0.08)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <img src={rangerLabel} alt="CK Safari Culture Goods" onClick={() => setPage("home")}
            style={{ height: 36, cursor: "pointer", display: "block" }} />
          {langToggle}
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          {links.map(l => (
            <button key={l.key} onClick={() => setPage(l.key)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: page === l.key ? C.sand : "rgba(232,213,168,0.55)",
              fontSize: 12, letterSpacing: "0.06em", fontFamily: "inherit",
              borderBottom: page === l.key ? `1px solid ${C.sand}` : "1px solid transparent",
              paddingBottom: 2, transition: "color 0.2s",
            }}>{l.label}</button>
          ))}
        </div>
      </nav>
    );
  }
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 48px",
      background: "rgba(26,35,25,0.94)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(200,169,110,0.08)",
    }}>
      <img src={rangerLabel} alt="CK Safari Culture Goods" onClick={() => setPage("home")}
        style={{ height: 48, cursor: "pointer", display: "block" }} />
      <div style={{ display: "flex", gap: 28 }}>
        {links.map(l => (
          <button key={l.key} onClick={() => setPage(l.key)} style={{
            background: "none", border: "none", cursor: "pointer",
            color: page === l.key ? C.sand : "rgba(232,213,168,0.55)",
            fontSize: 13, letterSpacing: "0.06em", fontFamily: "inherit",
            borderBottom: page === l.key ? `1px solid ${C.sand}` : "1px solid transparent",
            paddingBottom: 2, transition: "color 0.2s",
          }}>{l.label}</button>
        ))}
      </div>
      {langToggle}
    </nav>
  );
}

function Footer({ setPage, lang }) {
  const isMobile = useIsMobile();
  const t = T[lang];
  return (
    <footer style={{ background: C.dark, padding: isMobile ? "32px 16px 0" : "48px 48px 0" }}>
      {isMobile && (
        <div style={{ marginBottom: 28 }}>
          <img src={rangerLabel} alt="CK Safari Culture Goods" style={{ height: 44, display: "block", marginBottom: 10 }} />
          <p style={{ fontSize: 13, color: "rgba(200,169,110,0.4)", lineHeight: 1.7 }}>{t.footerTagline}</p>
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr", gap: isMobile ? 24 : 48, maxWidth: 1100, margin: "0 auto" }}>
        {!isMobile && (
          <div>
            <img src={rangerLabel} alt="CK Safari Culture Goods" style={{ height: 52, display: "block", marginBottom: 12 }} />
            <p style={{ fontSize: 13, color: "rgba(200,169,110,0.4)", lineHeight: 1.7, maxWidth: 220 }}>{t.footerTagline}</p>
          </div>
        )}
        {t.footerCols.map(col => (
          <div key={col.title}>
            <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(200,169,110,0.35)", marginBottom: 16 }}>{col.title}</div>
            {col.items.map(([label, pg]) => (
              <button key={label} onClick={() => setPage(pg)} style={{
                display: "block", fontSize: 13, color: "rgba(200,169,110,0.55)",
                marginBottom: 10, background: "none", border: "none",
                cursor: "pointer", fontFamily: "inherit", padding: 0,
              }}>{label}</button>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 1100, margin: "40px auto 0",
        borderTop: "1px solid rgba(200,169,110,0.08)",
        padding: "20px 0", display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 6 : 0,
        justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 12, color: "rgba(200,169,110,0.2)" }}>{t.footerCopy}</span>
        <span style={{ fontSize: 12, color: "rgba(200,169,110,0.2)" }}>{t.footerBadge}</span>
      </div>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ setPage, lang, onProductClick }) {
  const isMobile = useIsMobile();
  const t = T[lang];
  return (
    <div>
      {/* Hero */}
      <div style={{
        minHeight: "100vh", position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", background: C.dark, overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 40%, #2d4a2a 0%, #1a2b18 40%, #0d1a0c 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,20,14,0.2) 0%, rgba(15,20,14,0.75) 100%)" }} />
        <div style={{ position: "absolute", right: -40, bottom: 0, fontSize: 480, opacity: 0.09, userSelect: "none", lineHeight: 1 }}>🦁</div>
        <div style={{ position: "relative", zIndex: 2, padding: "0 24px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: C.sand, marginBottom: 24, display: "flex", alignItems: "center", gap: 14, justifyContent: "center" }}>
            <span style={{ display: "block", width: 32, height: 1, background: C.sand, opacity: 0.5 }} />
            {t.heroTagline}
            <span style={{ display: "block", width: 32, height: 1, background: C.sand, opacity: 0.5 }} />
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(44px,6vw,84px)", lineHeight: 1.06, color: C.white, maxWidth: 680, margin: "0 auto 18px" }}>
            {t.heroHeading1}<br /><em style={{ color: C.sand, fontStyle: "italic" }}>{t.heroHeading2}</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(253,250,245,0.55)", maxWidth: 400, margin: "0 auto 44px", lineHeight: 1.75, fontWeight: 300 }}>{t.heroBody}</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setPage("shop")} style={{ background: C.sand, color: C.dark, padding: "15px 36px", border: "none", borderRadius: 2, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit" }}>{t.heroCta}</button>
            <button onClick={() => setPage("mission")} style={{ border: `1px solid rgba(232,213,168,0.35)`, color: C.sandLight, padding: "15px 36px", background: "none", borderRadius: 2, fontSize: 13, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit" }}>{t.heroCta2}</button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: C.earth, padding: isMobile ? "24px 16px" : "30px 48px", display: "flex", justifyContent: "center", gap: isMobile ? 28 : 72, flexWrap: "wrap" }}>
        {[["10%", t.statDonated], ["1,247", t.statAnimals], ["6", t.statReserves], ["12", t.statCountries]].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <span style={{ fontFamily: "Georgia,serif", fontSize: isMobile ? 28 : 34, color: C.sand, display: "block", lineHeight: 1 }}>{num}</span>
            <span style={{ fontSize: 11, color: "rgba(200,169,110,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 5, display: "block" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Mission Preview */}
      <div style={{ background: isMobile ? C.earth : `linear-gradient(to right, ${C.earth} 50%, ${C.white} 50%)` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", minHeight: isMobile ? undefined : 460 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", fontSize: 260, opacity: 0.07, color: C.sand, userSelect: "none" }}>🐘</div>
            <div style={{ position: "relative", textAlign: "center", padding: isMobile ? "40px 24px" : 48 }}>
              <span style={{ fontFamily: "Georgia,serif", fontSize: isMobile ? 64 : 80, color: C.sand, display: "block", lineHeight: 1 }}>10%</span>
              <div style={{ fontSize: 13, color: "rgba(200,169,110,0.65)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 14, lineHeight: 1.6 }}>
                {t.missionPreviewSub.split("\n").map((line, i) => <span key={i} style={{ display: "block" }}>{line}</span>)}
              </div>
            </div>
          </div>
          <div style={{ padding: isMobile ? "32px 24px 48px" : "64px 60px", background: isMobile ? C.white : "transparent", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, marginBottom: 16 }}>{t.missionSectionLabel}</span>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.5vw,34px)", color: C.earth, lineHeight: 1.2, marginBottom: 20, maxWidth: 420 }}>{t.missionPreviewHeading}</h2>
            <blockquote style={{ borderLeft: `3px solid ${C.sand}`, paddingLeft: 20, margin: "24px 0", fontFamily: "Georgia,serif", fontSize: 16, color: C.earth, lineHeight: 1.65, fontStyle: "italic" }}>{t.missionPreviewQuote}</blockquote>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.muted }}>{t.missionPreviewBody}</p>
            <button onClick={() => setPage("mission")} style={{ marginTop: 28, alignSelf: "flex-start", background: C.earth, color: C.sandLight, padding: "12px 28px", border: "none", borderRadius: 2, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit" }}>{t.missionPreviewBtn}</button>
          </div>
        </div>
      </div>

      {/* Product Preview */}
      <div style={{ padding: isMobile ? "48px 16px" : "80px 48px", maxWidth: 1100, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, marginBottom: 14, display: "block" }}>{t.featuredLabel}</span>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: isMobile ? 12 : 0, marginBottom: 40 }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: C.earth, lineHeight: 1.15 }}>{t.featuredHeading1}<br />{t.featuredHeading2}</h2>
          <button onClick={() => setPage("shop")} style={{ background: "none", border: `1px solid ${C.earth}`, color: C.earth, padding: "10px 24px", borderRadius: 2, fontSize: 12, cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.06em" }}>{t.featuredViewAll}</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
          {PRODUCTS.slice(0, 3).map(p => <ProductCard key={p.id} p={p} lang={lang} onClick={onProductClick} />)}
        </div>
      </div>

      {/* Stories Preview */}
      <div style={{ background: C.dark }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "48px 16px" : "80px 48px" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", marginBottom: 14, display: "block" }}>{t.storiesLabel}</span>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: isMobile ? 12 : 0, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: C.sandLight, lineHeight: 1.15 }}>{t.storiesHeading}</h2>
            <button onClick={() => setPage("stories")} style={{ background: "none", border: `1px solid rgba(200,169,110,0.3)`, color: C.sand, padding: "10px 24px", borderRadius: 2, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>{t.storiesMore}</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 1, background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.08)" }}>
            {STORIES.map(s => (
              <div key={s.id} style={{ background: C.dark, padding: "32px 26px" }}>
                <span style={{ fontSize: 44, display: "block", marginBottom: 18 }}>{s.emoji}</span>
                <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: C.sand, marginBottom: 10 }}>{pick(lang, s.tagEn, s.tagZh, s.tagTw)}</div>
                <div style={{ fontFamily: "Georgia,serif", fontSize: 19, color: C.sandLight, marginBottom: 12 }}>{pick(lang, s.titleEn, s.titleZh, s.titleTw)}</div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(253,250,245,0.4)" }}>{pick(lang, s.summaryEn, s.summaryZh, s.summaryTw)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ p, lang, onClick }) {
  const [hover, setHover] = useState(false);
  const name = pick(lang, p.nameEn, p.nameZh, p.nameTw);
  const animal = pick(lang, p.animal, p.animalZh, p.animalTw);
  const series = lang !== "en" ? (SERIES_LABEL[lang]?.[p.series] ?? p.series) : p.series;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick ? () => onClick(p) : undefined}
      style={{
        background: C.white, border: `1px solid rgba(44,58,46,0.08)`, borderRadius: 4, overflow: "hidden",
        transform: hover ? "translateY(-5px)" : "none",
        boxShadow: hover ? "0 14px 36px rgba(44,58,46,0.13)" : "none",
        transition: "transform 0.25s, box-shadow 0.25s", cursor: "pointer",
      }}
    >
      <div style={{ height: "clamp(180px, 55vw, 240px)", background: p.bg, position: "relative", overflow: "hidden" }}>
        <img src={p.image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <span style={{ position: "absolute", top: 14, left: 14, background: C.earth, color: C.sandLight, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 2 }}>{series}</span>
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.earthLight, marginBottom: 5 }}>{animal}</div>
        <div style={{ fontFamily: "Georgia,serif", fontSize: 19, color: C.earth }}>{name}</div>
      </div>
    </div>
  );
}

// ─── Product Detail Page ──────────────────────────────────────────────────────

function ProductDetailPage({ product, lang, onBack }) {
  const isMobile = useIsMobile();
  const p = product;
  const name = pick(lang, p.nameEn, p.nameZh, p.nameTw);
  const animal = pick(lang, p.animal, p.animalZh, p.animalTw);
  const desc = pick(lang, p.descEn, p.descZh, p.descTw);
  const series = lang !== "en" ? (SERIES_LABEL[lang]?.[p.series] ?? p.series) : p.series;
  const backLabel = lang === "en" ? "← Back to Shop" : lang === "zh" ? "← 返回商店" : "← 返回商店";
  return (
    <div style={{ paddingTop: isMobile ? 110 : 80, background: C.cream, minHeight: "100vh" }}>
      <div style={{ background: C.dark, padding: isMobile ? "32px 16px" : "48px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <button onClick={onBack} style={{ background: "none", border: "none", color: "rgba(200,169,110,0.55)", cursor: "pointer", fontSize: 13, fontFamily: "inherit", marginBottom: 24, padding: 0, letterSpacing: "0.04em" }}>{backLabel}</button>
          <span style={{ display: "inline-block", background: C.earth, color: C.sandLight, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 2, marginBottom: 16 }}>{series}</span>
          <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: C.earthLight, marginBottom: 12 }}>{animal}</div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,44px)", color: C.sandLight, lineHeight: 1.1 }}>{name}</h1>
        </div>
      </div>
      <div style={{ padding: isMobile ? "32px 16px 64px" : "64px 48px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 64 }}>
          <div style={{ borderRadius: 4, overflow: "hidden", background: p.bg, height: isMobile ? 320 : 460, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {p.image
              ? <img src={p.image} alt={name} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 120 }}>{p.emoji ?? "🦁"}</div>
            }
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
            <div>
              <span style={{ display: "inline-block", background: C.earth, color: C.sandLight, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 2, marginBottom: 12 }}>{series}</span>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: C.earthLight, marginBottom: 8 }}>{animal}</div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: 28, color: C.earth, lineHeight: 1.15 }}>{name}</h2>
            </div>
            <div style={{ paddingTop: 8, borderTop: `1px solid rgba(44,58,46,0.1)` }}>
              <div style={{ fontSize: 13, color: C.muted, fontStyle: "italic", marginBottom: 4 }}>
                {lang === "en" ? "Price coming soon" : lang === "zh" ? "价格即将公布" : "價格即將公布"}
              </div>
            </div>
            {desc && (
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.muted }}>{desc}</p>
            )}
            <div style={{ padding: "16px 20px", background: C.white, borderRadius: 4, borderLeft: `3px solid ${C.sand}`, fontSize: 13, color: C.earthLight, lineHeight: 1.6 }}>
              {lang === "en"
                ? "10% of this product's sale price goes directly to wildlife conservation through Habitat Watcher."
                : lang === "zh"
                ? "该产品售价的10%直接通过Habitat Watcher用于野生动物保护。"
                : "該產品售價的10%直接通過Habitat Watcher用於野生動物保護。"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Shop Page ────────────────────────────────────────────────────────────────

function ShopPage({ lang, onProductClick }) {
  const isMobile = useIsMobile();
  const t = T[lang];
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Lion Series", "Eagle Series", "Ranger Collection", "Safari Collection"];
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.series === filter);
  const filterLabel = (f) => lang !== "en" ? (SERIES_LABEL[lang]?.[f] ?? f) : f;
  return (
    <div style={{ paddingTop: isMobile ? 110 : 80, background: C.cream, minHeight: "100vh" }}>
      <div style={{ background: C.earth, padding: isMobile ? "40px 16px 32px" : "60px 48px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,169,110,0.5)", display: "block", marginBottom: 14 }}>{t.shopLabel}</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4vw,52px)", color: C.sandLight, marginBottom: 12 }}>{t.shopHeading}</h1>
          <p style={{ fontSize: 15, color: "rgba(200,169,110,0.55)", maxWidth: 460, lineHeight: 1.7 }}>{t.shopBody}</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "32px 16px" : "40px 48px" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 40, flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "7px 18px", border: `1px solid ${filter === f ? C.earth : "rgba(44,58,46,0.2)"}`,
              background: filter === f ? C.earth : "none",
              color: filter === f ? C.sandLight : C.muted,
              borderRadius: 2, fontSize: 12, cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.04em",
            }}>{filterLabel(f)}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
          {filtered.map(p => <ProductCard key={p.id} p={p} lang={lang} onClick={onProductClick} />)}
        </div>
      </div>
    </div>
  );
}

// ─── Mission Page ─────────────────────────────────────────────────────────────

function MissionPage({ setPage, lang }) {
  const isMobile = useIsMobile();
  const t = T[lang];
  return (
    <div style={{ paddingTop: isMobile ? 110 : 80, background: C.cream, minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: C.dark, padding: isMobile ? "48px 16px" : "80px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", display: "block", marginBottom: 20 }}>{t.missionLabel}</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(34px,4.5vw,60px)", color: C.sandLight, lineHeight: 1.1, marginBottom: 24 }}>
            {t.missionHeading} <em style={{ color: C.sand }}>{t.missionHeadingEm}</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(253,250,245,0.5)", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>{t.missionSubheading}</p>
        </div>
      </div>

      {/* Story */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: isMobile ? "48px 16px" : "80px 48px" }}>
        <div style={{ borderLeft: `3px solid ${C.sand}`, paddingLeft: 24, marginBottom: 48 }}>
          <p style={{ fontFamily: "Georgia,serif", fontSize: isMobile ? 18 : 22, color: C.earth, lineHeight: 1.65, fontStyle: "italic" }}>{t.missionQuote}</p>
          <span style={{ fontSize: 13, color: C.muted, marginTop: 12, display: "block" }}>{t.missionFounder}</span>
        </div>
        {[
          { title: t.missionWhy10Title, body: t.missionWhy10Body },
          { title: t.missionPartnersTitle, body: t.missionPartnersBody },
        ].map(item => (
          <div key={item.title} style={{ marginBottom: 44 }}>
            <h3 style={{ fontFamily: "Georgia,serif", fontSize: isMobile ? 20 : 22, color: C.earth, marginBottom: 14 }}>{item.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.muted }}>{item.body}</p>
          </div>
        ))}
      </div>

      {/* Conservation Partners */}
      <div style={{ background: C.white, padding: isMobile ? "40px 16px" : "64px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, display: "block", marginBottom: 14 }}>{t.missionPartnersLabel}</span>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: isMobile ? 26 : 32, color: C.earth, marginBottom: 40 }}>{t.missionPartnersHeading}</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
            <div style={{ background: C.cream, borderRadius: 4, padding: 24, borderLeft: `3px solid ${C.sand}` }}>
              <div style={{ fontSize: 12, color: C.sand, fontWeight: 600, marginBottom: 6, letterSpacing: "0.06em" }}>habitatwatcher.org</div>
              <div style={{ fontFamily: "Georgia,serif", fontSize: 17, color: C.earth, marginBottom: 8 }}>
                <a href="https://www.habitatwatcher.org/" target="_blank" rel="noopener noreferrer"
                  style={{ color: C.earth, textDecoration: "none", borderBottom: `1px solid ${C.sand}` }}>
                  Habitat Watcher
                </a>
              </div>
              <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{t.missionPartnerDesc}</div>
            </div>
            {[0, 1].map(i => (
              <div key={i} style={{ background: C.cream, borderRadius: 4, padding: 24, borderLeft: `3px solid ${C.earthLight}` }}>
                <div style={{ fontSize: 12, color: C.muted, marginBottom: 6 }}>—</div>
                <div style={{ fontFamily: "Georgia,serif", fontSize: 17, color: C.earth, marginBottom: 8 }}>
                  {lang === "en" ? "Partner Organization" : lang === "zh" ? "合作组织" : "合作組織"}
                </div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{t.missionPartnerPlaceholder}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Allocation */}
      <div style={{ padding: isMobile ? "40px 16px" : "64px 48px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, display: "block", marginBottom: 14 }}>{t.missionTransLabel}</span>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: isMobile ? 26 : 32, color: C.earth, marginBottom: 40 }}>{t.missionTransHeading}</h2>
          {[
            [t.missionFundLabels[0], "10%", C.earthLight],
            [t.missionFundLabels[1], "55%", C.sand],
            [t.missionFundLabels[2], "20%", "#8a9e87"],
            [t.missionFundLabels[3], "10%", "#b5c4b3"],
            [t.missionFundLabels[4], "5%", "#ccd8cb"],
          ].map(([label, pct, color]) => (
            <div key={label} style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 7 }}>
                <span style={{ color: C.text, fontWeight: 500 }}>{label}</span>
                <span style={{ color: C.earthLight, fontWeight: 600 }}>{pct}</span>
              </div>
              <div style={{ height: 6, background: "rgba(44,58,46,0.08)", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", width: pct, background: color, borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Stories Page ─────────────────────────────────────────────────────────────

function StoriesPage({ lang }) {
  const isMobile = useIsMobile();
  const t = T[lang];
  const [selected, setSelected] = useState(null);
  if (selected) {
    const s = STORIES.find(x => x.id === selected);
    const fullText = pick(lang, s.fullEn, s.fullZh, s.fullTw);
    return (
      <div style={{ paddingTop: isMobile ? 110 : 80, background: C.cream, minHeight: "100vh" }}>
        <div style={{ background: C.dark, padding: isMobile ? "40px 16px" : "60px 48px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "rgba(200,169,110,0.5)", cursor: "pointer", fontSize: 13, fontFamily: "inherit", marginBottom: 28, padding: 0 }}>{t.storiesBack}</button>
            <div style={{ fontSize: isMobile ? 52 : 72, marginBottom: 20 }}>{s.emoji}</div>
            <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: C.sand, marginBottom: 14 }}>{pick(lang, s.tagEn, s.tagZh, s.tagTw)}</div>
            <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3.5vw,48px)", color: C.sandLight, lineHeight: 1.1 }}>{pick(lang, s.titleEn, s.titleZh, s.titleTw)}</h1>
          </div>
        </div>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: isMobile ? "40px 16px" : "60px 48px" }}>
          {fullText.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: i === 0 ? 18 : 16, lineHeight: 1.85, color: i === 0 ? C.text : C.muted, marginBottom: 24, fontFamily: i === 0 ? "Georgia,serif" : "inherit" }}>{para}</p>
          ))}
          <div style={{ marginTop: 48, padding: "28px", background: C.white, borderRadius: 4, borderLeft: `3px solid ${C.sand}` }}>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: C.earthLight, marginBottom: 8 }}>{t.storiesSupportLabel}</div>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.65 }}>{t.storiesSupportBody}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ paddingTop: isMobile ? 110 : 80, background: C.dark, minHeight: "100vh" }}>
      <div style={{ padding: isMobile ? "48px 16px 32px" : "72px 48px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", display: "block", marginBottom: 18 }}>{t.storiesPageLabel}</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4.5vw,58px)", color: C.sandLight, lineHeight: 1.1, marginBottom: 16, maxWidth: 540 }}>
            {t.storiesPageHeading} <em style={{ color: C.sand }}>{t.storiesPageHeadingEm}</em>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(253,250,245,0.45)", maxWidth: 460, lineHeight: 1.75 }}>{t.storiesPageBody}</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "0 16px 48px" : "0 48px 80px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 1, background: "rgba(200,169,110,0.07)" }}>
        {STORIES.map(s => (
          <div key={s.id} onClick={() => setSelected(s.id)}
            style={{ background: C.dark, padding: "36px 28px", cursor: "pointer", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(44,58,46,0.5)"}
            onMouseLeave={e => e.currentTarget.style.background = C.dark}>
            <span style={{ fontSize: 52, display: "block", marginBottom: 20 }}>{s.emoji}</span>
            <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: C.sand, marginBottom: 10 }}>{pick(lang, s.tagEn, s.tagZh, s.tagTw)}</div>
            <div style={{ fontFamily: "Georgia,serif", fontSize: 20, color: C.sandLight, marginBottom: 14 }}>{pick(lang, s.titleEn, s.titleZh, s.titleTw)}</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(253,250,245,0.4)", marginBottom: 20 }}>{pick(lang, s.summaryEn, s.summaryZh, s.summaryTw)}</div>
            <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.sand }}>{t.storiesReadMore}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────

function AboutPage({ setPage, lang }) {
  const isMobile = useIsMobile();
  const t = T[lang];
  return (
    <div style={{ paddingTop: isMobile ? 110 : 80, background: C.cream, minHeight: "100vh" }}>
      <div style={{ background: C.earth, padding: isMobile ? "48px 16px" : "72px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,0.5)", display: "block", marginBottom: 18 }}>{t.aboutLabel}</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4.5vw,56px)", color: C.sandLight, lineHeight: 1.1, marginBottom: 20 }}>
            {t.aboutHeading}<br /><em style={{ color: C.sand }}>{t.aboutHeadingEm}</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(200,169,110,0.55)", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>{t.aboutSubheading}</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "48px 16px" : "72px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 64 }}>
          <div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: 28, color: C.earth, marginBottom: 20 }}>{t.aboutValuesHeading}</h2>
            {t.aboutValues.map(v => (
              <div key={v.title} style={{ display: "flex", gap: 18, marginBottom: 28 }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{v.icon}</span>
                <div>
                  <div style={{ fontFamily: "Georgia,serif", fontSize: 17, color: C.earth, marginBottom: 6 }}>{v.title}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.7, color: C.muted }}>{v.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: 28, color: C.earth, marginBottom: 20 }}>{t.aboutContactHeading}</h2>
            <div style={{ background: C.white, borderRadius: 4, padding: 28 }}>
              {t.aboutContacts.map(([label, email]) => (
                <div key={label} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(44,58,46,0.08)" }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.earthLight, marginBottom: 5 }}>{label}</div>
                  <div style={{ fontSize: 15, color: C.earth }}>{email}</div>
                </div>
              ))}
              <div style={{ marginTop: 4 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.earthLight, marginBottom: 8 }}>{t.aboutSocialLabel}</div>
                <div style={{ display: "flex", gap: 10 }}>
                  {["Instagram", "Facebook", "TikTok", "X"].map(s => (
                    <span key={s} style={{ fontSize: 12, padding: "5px 12px", border: `1px solid rgba(44,58,46,0.15)`, borderRadius: 2, color: C.muted }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("en");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = (newPage) => { setSelectedProduct(null); setPage(newPage); };

  useEffect(() => { window.scrollTo(0, 0); }, [page, selectedProduct]);

  const renderPage = () => {
    if (selectedProduct !== null) {
      return <ProductDetailPage product={selectedProduct} lang={lang} onBack={() => setSelectedProduct(null)} />;
    }
    switch (page) {
      case "home":    return <HomePage setPage={setPage} lang={lang} onProductClick={setSelectedProduct} />;
      case "shop":    return <ShopPage lang={lang} onProductClick={setSelectedProduct} />;
      case "mission": return <MissionPage setPage={setPage} lang={lang} />;
      case "stories": return <StoriesPage lang={lang} />;
      case "about":   return <AboutPage setPage={setPage} lang={lang} />;
      default:        return <HomePage setPage={setPage} lang={lang} onProductClick={setSelectedProduct} />;
    }
  };

  return (
    <div style={{ background: C.cream, fontFamily: "'DM Sans', sans-serif" }}>
      <Nav page={page} setPage={navigate} lang={lang} setLang={setLang} />
      {renderPage()}
      <Footer setPage={navigate} lang={lang} />
    </div>
  );
}
