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
    storiesPageLabel: "Wild Stories",
    storiesPageHeading: "The Lives You're", storiesPageHeadingEm: "Protecting",
    storiesPageBody: "Every animal has a name, every habitat has a story. Meet the lives you're helping.",
    storiesReadMore: "Read More →", storiesBack: "← Back to Stories",
    storiesSupportLabel: "Support This Species",
    storiesSupportBody: "Purchase the corresponding series and your donation will go directly to this conservation project.",
    storiesFieldLabel: "Field Journal",
    storiesWildlifeLabel: "Wildlife Stories",
    aboutLabel: "About Us",
    aboutHeading: "We believe", aboutHeadingEm: "consumption can be conservation",
    aboutSubheading: "CK Safari Culture Goods was founded in 2026 by a group of designers and conservationists passionate about nature.",
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
    storiesPageLabel: "野生故事",
    storiesPageHeading: "您正在守护的", storiesPageHeadingEm: "生命",
    storiesPageBody: "每只动物都有名字，每片栖息地都有故事。认识您正在帮助的生命。",
    storiesReadMore: "阅读更多 →", storiesBack: "← 返回故事",
    storiesSupportLabel: "支持这个物种",
    storiesSupportBody: "购买相应系列，您的捐款将直接用于该保护项目。",
    storiesFieldLabel: "野保日志",
    storiesWildlifeLabel: "动物故事",
    aboutLabel: "关于我们",
    aboutHeading: "我们相信", aboutHeadingEm: "消费可以成为保护",
    aboutSubheading: "CK Safari文化产品由一群热爱自然的设计师和保护人士于2026年创立。",
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
    storiesPageLabel: "野生故事",
    storiesPageHeading: "您正在守護的", storiesPageHeadingEm: "生命",
    storiesPageBody: "每只動物都有名字，每片棲息地都有故事。認識您正在幫助的生命。",
    storiesReadMore: "閱讀更多 →", storiesBack: "← 返回故事",
    storiesSupportLabel: "支持這個物種",
    storiesSupportBody: "購買相應系列，您的捐款將直接用於該保護項目。",
    storiesFieldLabel: "野保日誌",
    storiesWildlifeLabel: "動物故事",
    aboutLabel: "關於我們",
    aboutHeading: "我們相信", aboutHeadingEm: "消費可以成為保護",
    aboutSubheading: "CK Safari文化產品由一群熱愛自然的設計師和保護人士於2026年創立。",
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
    nameEn: "Safari Scarf", nameZh: "野生动物主题丝巾", nameTw: "野生動物主題絲巾",
    image: scarfFb, org: "Habitat Watcher",
    descEn: "A statement scarf inspired by the wilderness. Wear it, protect it.",
    descZh: "灵感源自荒野的围巾。穿上它，守护它。",
    descTw: "靈感源自荒野的圍巾。穿上它，守護它。",
  },
];

const STORIES = [
  {
    id: 1, type: "animal", emoji: "🦁",
    tagEn: "African Lion · Amboseli, Kenya", tagZh: "非洲狮 · 肯尼亚安博塞利", tagTw: "非洲獅 · 肯亞安博塞利",
    titleEn: "Loonkiito: A Lion's Life, and the Challenge of Coexistence",
    titleZh: "龙基托：一头狮子的一生，与共存的挑战",
    titleTw: "龍基托：一頭獅子的一生，與共存的挑戰",
    summaryEn: "One of Kenya's oldest wild lions, Loonkiito survived nearly two decades in the Amboseli ecosystem. His death at 19 was not a story of people versus lions — it was a story of a broken balance.",
    summaryZh: "龙基托是肯尼亚最杰出的野生狮子之一，在安博塞利生态系统中存活近二十年。他以19岁高龄离世，留下的不只是一头狮子的故事，更是一种失衡的缩影。",
    summaryTw: "龍基托是肯亞最傑出的野生獅子之一，在安博塞利生態系統中存活近二十年。他以19歲高齡離世，留下的不只是一頭獅子的故事，更是一種失衡的縮影。",
    fullEn: "Loonkiito was one of Kenya's most remarkable wild lions. Living in the Amboseli ecosystem, he survived far beyond the usual life of a male lion. For nearly two decades, he endured battles, drought, old age, and a rapidly changing landscape.\n\nIn his later years, Loonkiito's story became even more extraordinary. As he grew weaker, his own offspring were observed giving him access to food, allowing the old lion to continue surviving within the pride. But when drought conditions changed and wild prey became harder to catch, his life became more difficult. In 2023, at the age of 19, Loonkiito entered a livestock enclosure in search of food and was killed by the homestead owners protecting their animals and families.\n\nHis death was not simply a story of people versus lions. It was a story of a broken balance.\n\nAcross Kenya, lions are losing space as grasslands are divided by roads, fences, farms, settlements, and urban expansion. When natural habitats shrink and wild prey declines, lions are pushed closer to livestock. Then families lose valuable animals, fear grows, and lions are often killed in response. In this cycle, both people and wildlife suffer.\n\nKenya's lion population has shown signs of recovery, but the future remains fragile. Conservation cannot only mean protecting lions inside national parks. It must also mean supporting the communities who live beside them.\n\nThat is why our work focuses on reducing human–wildlife conflict. By helping communities protect livestock, improve awareness, support local rangers, maintain wildlife corridors, and create real benefits from conservation, we can make coexistence possible.\n\nLoonkiito's life reminds us that saving lions is not just about saving a species. It is about rebuilding the relationship between people, land, and wildlife — so that communities can thrive, and lions can continue to roam.",
    fullZh: "龙基托是肯尼亚最杰出的野生狮子之一。他生活在安博塞利生态系统，存活时间远超一头雄狮的常规寿命。将近二十年间，他历经了战斗、干旱、衰老，以及一片正在急速变化的土地。\n\n在他年迈之际，龙基托的故事变得更加非凡。当他日渐虚弱，据观察，他自己的后代曾让他优先享用猎物，使这头老狮子得以继续在狮群中生存。然而，当干旱改变了生存条件，野生猎物变得愈发难以捕获，他的处境也愈加艰难。2023年，19岁的龙基托闯入一处牲畜围栏觅食，随即被保护家园的牧民杀死。\n\n他的死并非简单意义上的人与狮子之间的对立，而是一种失衡的缩影。\n\n在肯尼亚，随着草原被道路、围栏、农场、定居点和城市扩张不断分割，狮子正在失去它们的生存空间。当自然栖息地萎缩、野生猎物减少，狮子便被迫靠近牲畜。家庭随之遭受损失，恐惧随之蔓延，狮子也常常因此遭到杀害。在这个循环中，人与野生动物都深受其害。\n\n肯尼亚的狮子数量已出现复苏迹象，但未来依然脆弱。保护工作不能仅限于国家公园之内，还必须为与狮子比邻而居的社区提供支持。\n\n这正是我们致力于减少人兽冲突的原因。通过帮助社区保护牲畜、提升保护意识、支持地方巡护员、维护野生动物走廊，并让社区从保育中真正受益，我们可以让共存成为可能。\n\n龙基托的一生提醒我们，拯救狮子不仅仅是保护一个物种，更是重建人类、土地与野生动物之间的关系——让社区得以繁荣，让狮子得以自由驰骋。",
    fullTw: null,
  },
  {
    id: 2, type: "featured", emoji: "🦁",
    tagEn: "Conservation Journey · Kenya", tagZh: "野保之路 · 肯尼亚", tagTw: "野保之路 · 肯亞",
    authorEn: "By Simba (Qiang Zhuo)", authorZh: "作者：星巴（卓强）", authorTw: "作者：星巴（卓強）",
    titleEn: "Born Wild: My Path in Wildlife Conservation",
    titleZh: "生而狂野：我的野保之路",
    titleTw: "生而狂野：我的野保之路",
    summaryEn: "From Nairobi in 2010, with no training and only a childhood dream, conservationist Simba traces his unlikely path into wildlife conservation — and the chance encounter with legendary protector Tony Fitzjohn that kept him from giving up.",
    summaryZh: "从2010年的内罗毕出发，没有专业训练，只有一个儿时的梦想，野保人星巴追溯了他走上野生动物保护之路的历程——以及那场与传奇保育人托尼·菲兹约翰的相遇，让他坚持了下来。",
    summaryTw: "從2010年的內羅畢出發，沒有專業訓練，只有一個兒時的夢想，野保人星巴追溯了他走上野生動物保護之路的歷程——以及那場與傳奇保育人托尼·菲茲約翰的相遇，讓他堅持了下來。",
    fullEn: "My exploration of the path of wildlife conservation in Kenya began in Nairobi in 2010. In truth, I had no clear idea how to follow this path. I had not studied wildlife conservation as an academic discipline, nor did I have any field experience. What I had was only a childhood dream. Whether that dream could ever be realized, I did not know. I could only move forward one step at a time.\n\nI had long known the story of Elsa the lioness. I was deeply familiar with it, having read the book and seen the film. The life that George Adamson led in Meru and Kora, rehabilitating lions back to the wild, was exactly the kind of life I yearned for, though it still felt rather distant from my own reality. During my time in Nairobi, I squeezed into matatus and traveled back and forth between the city center, Karen, Kileleshwa, Kilimani, and Riverside, staying in the homes of different friends. Many Kenyan government departments are concentrated in the city center, so I often had to go there to get things done. It was crowded, noisy, and heavily congested with traffic. The Stanley Hotel was one of the places I frequented most in Nairobi, not to drink, but to meet friends and discuss matters. It may well be Nairobi's most famous and historic hotel. Inside, one feels transported back to the British colonial era of the early twentieth century. It offered a refuge from the clamor outside. At the time, I did not yet know that this had also been one of Tony Fitzjohn's favorite places in Nairobi before he went to join George Adamson in 1969.\n\nI have always believed that there are extraordinary bonds in this world that can connect people from different regions and different eras. Yet I did not imagine then that I would later have the chance to know Tony, and through Tony come to understand George more deeply. Although I never met George in person, our shared devotion to lions and our common dedication to wildlife conservation allowed us, in a sense, to write history together: a chapter in humanity's long journey of protecting the wild.\n\nI had a very close friend in Nairobi named Rana, an Indian Kenyan born into a sporting family. His father had been a Kenyan cricket champion, but Rana himself had little interest in sports. He was a businessman, and also a businessman who loved lions. In September 2010, he took me to Swara Plains to see a piece of land he had recently purchased, and there I met several new friends. Through them, we came to know Sandy Simpson.\n\nSandy was from Scotland and lived on the eastern outskirts of Nairobi, in Swara Plains. He kept three lions at his home. They had all escaped from Nairobi National Park. By then, they were already too old to be returned to the wild, so they were kept in an open-air enclosure. Rana and I often went to see them, and we also hoped to help Sandy realize his plan of establishing a conservancy that could create a safe corridor for wildlife from Nairobi National Park. For this reason, I even rented a wooden cabin in Swara Plains so that I could stay closer to the three lions.\n\nOne day in October of that year, Rana called me in great excitement and invited me to dinner at his home. His wife prepared an authentic Indian meal. After dinner, Rana brought out a videotape and said to me mysteriously, \"I guarantee this will be your favorite film.\" That was the first time I watched To Walk with Lions, the film that tells the legendary story of Tony Fitzjohn joining George Adamson at Kora Reserve to help rehabilitate lions back to the wild. I had watched countless films throughout my life, but in terms of both story and music, this became without question my favorite.\n\nAfter watching the film, I returned to where I was staying in Nairobi and began searching online for information about George Adamson and Tony Fitzjohn. To my surprise, I found the website of the George Adamson Wildlife Preservation Trust. It was quite rudimentary, but there I located a contact email address. I wrote Tony a letter, without expecting any reply. To my astonishment, ten days later I received a response. From that point on, we began corresponding regularly.\n\nIn January 2012, Tony returned to Kenya from Tanzania and was to remain in Nairobi for several days. We arranged to meet at a restaurant in Karen. At the time, I brought my wife and my eight-year-old daughter with me. Tony was then sixty-seven years old, while I was thirty-nine. Naturally, I was determined not to miss the opportunity to learn more about the life he and George had shared with lions in Kora.\n\nIt was also during this meeting that I discovered something unexpected: Tony had had a direct connection with the famous viral video of a man embracing a lion, which had received tens of millions of views online. The young male lion Christian, who had come from London, was raised by George and Tony in Kora and was later successfully rehabilitated into the wild. Tony had worked with George for eighteen years, remaining with him until George was shot and killed by Somali poachers in 1989. Only then did Tony leave Kora, and eventually Kenya, going on to establish Mkomazi as a successful conservation area in Tanzania. In 2019, Mkomazi became a national park. Later, the Kenyan government warmly invited Tony back, hoping he could help revive Kora once again.\n\nDuring that meeting, Tony was very curious as to why I had come all the way from China to Kenya to protect lions. At the time, I found myself in an extremely difficult position. On the one hand, the cost of living in Nairobi was very high, and I had no income. On the other hand, many people harbored prejudices against Chinese people, assuming that Chinese came to Africa only to do business, or that they particularly liked to buy ivory and other wildlife products. Such prejudice made it very difficult for me to integrate into the local conservation community, let alone join a conservation organization where I might gain experience and earn some income.\n\nAfter hearing my story, Tony, who had until then spoken with his usual humor, suddenly became solemn and deeply serious. He said to me: \"Simba, Africa is the cradle of humankind and the last Eden of wildlife. China is the most populous country in the world. There are already many Chinese people living and working in Africa, but none are here working with us in wildlife conservation. Africa needs China's help. You are the first Chinese person I have met who has come to Africa to work in wildlife conservation. Naturally, you will face many difficulties, and many people will question you. But you must persevere, because your actions will inspire and encourage more Chinese people to care about and support this great cause.\"\n\nTony's encouragement was the principal reason I was able to persist at that time. Tony himself had not come from a formal wildlife conservation background. He too had drifted around Nairobi for several years before eventually joining George's team in Kora. By then he had already become a legendary figure in conservation. To this day, I remain profoundly grateful to Tony. Without him, I might very well have abandoned my conservation dream. I might have returned to China in defeat and taken up an ordinary, stable profession unrelated to wildlife conservation. But that was clearly not the life I wanted. Life is short. If one cannot pursue one's ideals and live the life one truly desires, that is a profound regret.\n\nAfter that meeting, we remained in frequent correspondence. I asked him many questions about lion behavior, and his insights were of immense help to my research on human-lion relationships. In 2014, he invited me to Kora to attend a memorial ceremony for George Adamson. I invited Dr. Dominic, the chief veterinarian from the Kenya Wildlife Service, to accompany me. We drove nine hours along the same route Tony and George had once regularly traveled, and in doing so I came to appreciate how difficult it must have been for them to transport supplies overland from Nairobi. A friend named Guy, whom I had met earlier in Swara Plains, had even once flown supplies for George and Tony.\n\nAt Kora, we met Tony again. I gave him an action camera as a gift. At the memorial ceremony, he delivered a speech reflecting on the years he had lived and worked with George, protecting Kora, and expressing his deep longing for his old friend. During that visit, we had the opportunity to explore the lion camp where they had once lived, climb the nearby rock hill, and walk to the banks of the Tana River. In October of the same year, Tony and I met again unexpectedly in Los Angeles, where Liu Fu, Liu Tongxi, and I attended one of his fundraising salons. After that, we never met again in person, though we continued corresponding by email. I even tried to invite Tony to China to give lectures and help promote the Chinese edition of his book Born Wild, but these plans were delayed by the pandemic.\n\nIn 2022 and 2023, I wrote Tony several letters, but he did not reply. This was unusual, because in the past he had always answered promptly. Sensing that something was wrong, I searched his name online, only to discover that he had passed away in May 2022.\n\nIn 2015, I invited Tony to write the foreword to my book Guarding the Lions (published by SDX Joint Publishing Company). He readily agreed and sent it to me very quickly. In that foreword, Tony wrote: \"George once sat in the camp at Kora in the early 1970s speaking to some visitors, and I heard him say: 'When I came here in 1924, wildlife seemed as if it would last forever. There were no people then.' Even when I arrived in Kenya in the late 1960s, I could not imagine that rhinos, elephants, lions and many other animals would disappear from areas already protected. Now, rapidly growing human populations are steadily eating away and fragmenting wildlife habitats, even in some very large protected areas such as Kenya's Tsavo National Park and Tanzania's Selous Game Reserve. Over the past few years, I have come to know Simba (Simba Qiang Zhuo), whose African name means lion in Swahili, and clearly we share much in common in our love of this species. He has dedicated himself in the Maasai Mara to resolving human-wildlife conflict, and he lectures tirelessly in China and elsewhere in the world to inspire the public to care about wildlife conservation. This is truly a voice from the wild. I have never underestimated the ability of one person to capture the spirit of an age. I too experienced love and friendship with these animals in Kenya's Kora National Park, where for nearly twenty years I worked alongside George Adamson to return rescued lions to the wild. We crossed beyond fear and formed close and enduring relationships with these incredible creatures, and my respect for them and the lives they lived is boundless. What Simba does is by no means easy. He has had to give up many of the comforts and pleasures that the modern world takes for granted in order to spread his ideals. I am deeply concerned for the natural world we love so much. It must endure; it is the bridge that connects us spiritually to the past, and we should reconcile ourselves with it. Simba gives me hope that all is not lost, and that is enough.\"\n\nBecause of Tony and George, almost every time I return to Kenya, I make a point of visiting Elsa's home at Lake Naivasha. It was the place where George and Joy lived together, and it was also the place where Tony once went to ask Joy whether there might be any work for him. Although Joy and Tony did not get along, it was Joy who told Tony that George needed an assistant at Kora. That is what enabled Tony to find the life he truly wanted to live.\n\nTony and I came from different places. He came from England, and I came from China. We also belonged to different eras, with an age gap of twenty-eight years between us. Ours may be described as an intergenerational friendship. Yet we also shared many similarities. Before coming to Africa, we had both loved Tarzan. We both longed for Africa. We both loved adventure. We both loved the Stanley Hotel. And we both chose a life path that was born free and born wild.\n\nTony has left us, and that brings with it a profound sadness. In this lifetime, I will have no further opportunity to speak with him again. Yet his spiritual legacy — optimism, humor, courage, and indomitability — will continue to illuminate the direction of my journey in wildlife conservation.\n\nSalute to Tony.",
    fullZh: "我最初在肯尼亚探索野保之路是从内罗毕开始的，那还是在2010年。我其实并不知道这条路怎么走，我不是学野保专业的，也没有任何野外实地工作的经验，有的只是一个儿时的梦想，也不知道能否实现，只能走一步算一步了。我很早就听说过母狮艾尔莎的故事，很熟悉，看过书，也看过电影，乔治•亚当森在梅鲁和科拉野化狮子的生活正是我所向往的，但还是感觉离我的生活有点遥远。在内罗毕期间，我挤过马塔图，往返于内罗毕市中心、凯伦、基莱莱希瓦、基里马尼、河滨之间的区域，住在不同的朋友家里。肯尼亚很多政府部门都聚集在市中心，所以经常办事都要去那里，人多车多，非常嘈杂，进出市中心又很堵车。斯坦利酒店是我在内罗毕期间经常光顾的地方，不是去喝酒，而是去见朋友谈事情，这可能是内罗毕最有名气、历史最悠久的酒店。在里面会有穿越到20世纪初期的英国殖民时代的感觉，对于躲避外面的喧嚣似乎很有帮助，当时还不知道这也是托尼•菲兹约翰在1969年投靠乔治•亚当森之前在内罗毕最喜欢光顾的地方。我一直很相信世界上存在着一些不可思议的纽带能够把来自不同地域和不同时代的人联系起来，但我当时没有想到后来我有机会认识托尼，然后通过托尼我又更了解乔治。虽然我与乔治从未谋面，但对狮子的挚爱和对野保的专注让我们共同书写历史，一部人类的野保之路。\n\n我在内罗毕有一个很要好的朋友，他叫拉纳，是一个印度裔肯尼亚人，出生于体育世家，父亲是肯尼亚板球冠军，但他对体育没有什么兴趣，他是一个商人，一个也喜欢狮子的商人。2010年9月，他带我去斯瓦拉平原看他新买的土地，还认识了一些新朋友。通过这些朋友的介绍，我们一起结识了山迪·辛普森。山迪来自苏格兰，住在内罗毕东部郊外斯瓦拉平原，家里养着三只狮子，都是从内罗毕国家公园逃出来的，年龄偏大已经无法放归野外，只能养在露天的围栏里。我和拉纳经常去看狮子，也希望帮助山迪实现他建立自然保护地的计划，为内罗毕国家公园的野生动物创建一个安全的走廊。为此我还在斯瓦纳平原租了一处木屋住下来，这样可以离那三只狮子更近些。当年10月的一天，拉纳突然兴高采烈地给我打电话，邀请我去他家吃饭。他夫人做了正宗的印度餐，晚餐后，拉纳拿出了一盘录像带，很神秘地对我说："我保证这应该是你最喜欢的一部电影。"这是我第一次观看《与狮同行》（To walk with lions)，这部电影正是讲述了当年托尼•菲兹约翰去科拉保护区加入乔治•亚当森野化狮子工作的传奇故事。从小到大我看过无数电影，无论是是情节还是音乐，这部电影毫无疑问都是我最喜欢的电影。\n\n看完电影之后，我回到内罗毕的住宿点开始上网搜索乔治•亚当森和托尼•菲兹约翰的内容，居然发现了乔治•亚当森基金会的网站，做的很简陋，我在里面找到了一个联系邮箱，试着写了一封信给托尼，没有指望能收到回复，没想到10天后居然收到了他的回信，从此我们开始书信往来。\n\n2012年1月，托尼从坦桑尼亚回到肯尼亚，要在内罗毕待几天。我们约好在凯伦一处餐厅见面，当时我还带着夫人和8岁大的女儿一起。托尼此时已经是67岁，而我是39岁，我自然不会错过这个机会去多了解乔治和托尼当年在科拉与狮子为伍的生活。没想到之前网络上有一段千万点击量的人狮拥抱的视频跟他也有直接的关系。那只来自伦敦的小雄狮克里斯蒂安就是乔治和托尼在科拉养大的，之后成功野化放生。托尼跟乔治在一起工作了18年，直到乔治在1989年被索马里盗猎分子开枪打死之后才离开了科拉，离开了肯尼亚，在坦桑尼亚成功创建了姆科玛奇自然保护区。2019年，姆科马齐成为国家公园，肯尼亚政府后来又热情邀请托尼回到肯尼亚，希望他能够帮助再造科拉保护区。\n\n在那次会面中，托尼很好奇我为什么要从中国来肯尼亚保护狮子。我当时正处于一个进退维谷的境地，一方面内罗毕生活成本很高，我又没有收入。另一方面很多人对中国人有偏见，认为中国人到非洲来都是做生意的，认为中国人很喜欢买象牙和其它野生动物产品。这种偏见让我很难融入当地的野保圈子，更不用说能加入当地的野保机构以获得一些收入和工作经验。在听完我讲述这段经历之后，托尼一改他说话幽默的风格，很严肃庄重地对我说："星巴，非洲是人类的起源地，也是野生动物最后的伊甸园。中国是世界上人口最多的国家，现在已经有很多只中国人在非洲生活工作，但没有人来跟我们一起做野生动物保护的工作，非洲需要中国的帮助，你是我认识的第一个来非洲做野生动物保护工作的中国人，自然会遇见很多困难，会有很多人质疑，但你一定要坚持下去，因为你的行动会启发和鼓励更多中国人来关注和支持这个伟大的事业。" 托尼对我的鼓励是我当时能够坚持下来的主要动力。托尼当年也不是野保专业出身，在内罗毕也晃荡了几年，直到在科拉加入乔治的团队，现在已是传奇野保人物。我至今都很感激托尼，如果不是他，我当时很有可能就放弃了野保的理想，很有可能就灰溜溜地回到中国，做一件与野保毫不相关但平凡稳定的工作，但这显然不是我想要的生活。人生短暂，如果不能去追寻自己的理想去过想要的生活，就真是太遗憾了。\n\n那次会面之后我们经常保持通信联系，我向他请教了很多关于狮子习性的问题，这对于我研究人与狮子的关系有莫大的帮助。2014年，他还邀请我去科拉保护区出席乔治•亚当森纪念仪式。我约上了来自肯尼亚野生动物管理局的首席兽医多米尼克博士一起沿着当年他们经常走的线路驱车9个小时来到科拉保护区，对他们从内罗毕走陆路运送补给过来的不易感同身受。以前在斯瓦拉平原认识的一个朋友盖伊还曾经开飞机为乔治和托尼运送过补给。在科拉我们见到了托尼，我送给他一个运动相机，他在仪式上致辞回顾了当年与乔治在一起工作生活守护科拉的经历，表达了对乔治的深深怀念之情。此次在科拉我们有机会探访了他们当年生活的狮子营地，登上了旁边的岩石山，走到了塔纳河边。同年10月，我与托尼还在洛杉矶偶遇，我和刘赋、刘桐汐一起参加了他的筹款沙龙。之后就再也没有见过面，但一直保持邮件联系，我还试图邀请托尼来中国做演讲，好为他写的书《Born Wild》（生而狂野）中文版做宣传，但这些事情都被疫情给耽误了。2022-2023年我给托尼写了好几封信，他都没有回复。以前他给我回信都是很快的，我觉得有些反常，就上网搜索他的名字，却发现他已经于2022年5月离世。\n\n2015年，我邀请托尼为我的《守护狮群》（三联书店出版）题序，他欣然应允，很快就发给了我。托尼在这个序言里写到："乔治在1970年代初期坐在科拉的营地里，与一些前来拜访的人交谈，我听到他说：'当我在1924年来到这里时，野生动物似乎会永远存在，那时还没有人类。'即使在我于1960年代后期来到肯尼亚时，我也无法想象犀牛、大象、狮子和许多其他动物会从已经受保护的地区消失。现在，迅速增长的人口逐渐蚕食和分割野生动物的栖息地，即使是在一些面积很大的自然保护区，如肯尼亚的察沃国家公园（Tsavo National Park）和坦桑尼亚的塞勒斯（Selous national reserve）野生动物保护区。在过去几年里，我结识了星巴（Simba Qiang Zhuo），他的非洲名字在斯瓦希里语中的意思是狮子，我们对这个物种的喜爱显然有很多共同之处。他在马赛马拉致力于解决人兽冲突、在中国和世界其他地方不知疲倦的演讲以启发公众来关注野生动物保护，这是真正来自荒野的声音，我从未低估过一个人可以捕捉整个时代情绪的能力。我也在肯尼亚的科拉国家公园经历过与这些动物的爱和友谊，我与乔治·亚当森一起将近20年的时间里将救助的狮子放归自然。我们跨越了恐惧，与这些令人难以置信的物种建立了密切而持久的关系，我对它们和它们所过的生活的尊重是无限的。星巴所做的一切都并不容易，他不得不放弃许多现代世界所认为理所当然的舒适和愉悦，以传播他的理念。我对我们如此深爱的自然感到担忧，它必须得到延续，它是我们与过去精神联系的桥梁，我们应该与之和解。星巴给了我希望，一切并未失去，而这就足够了。"\n\n因为托尼和乔治的缘故，每次回到肯尼亚，我几乎都会去纳瓦沙探访爱尔莎庄园，那里是乔治和乔伊共同生活过的地方，也是托尼去找乔伊打听是否有工作机会的地方。虽然乔伊和托尼关系不睦，但正是乔伊告诉托尼乔治在科拉保护区缺一个助手，才使得托尼找到他真正想过的生活。\n\n我和托尼来自不同的地方，他来自英格兰，我来自中国。我们也来自不同的时代，他比我大28岁，我们应该是忘年之交，但我们也有很多相似的地方，我们来非洲之前也都很喜欢《人猿泰山》，都很向往非洲，都喜欢探险，都喜欢斯坦利酒店，我们都选择了生而自由与生而狂野的人生之路。\n\n托尼离开了我们，这让人感到无限伤感，此生我已经没有机会再跟他聊天，但他的精神遗产——乐观、幽默、勇敢、不屈将持续照亮我在野生动物保护的路上前行的方向。\n\n向托尼致敬！",
    fullTw: null,
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
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.08)" }}>
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
    const fullText = pick(lang, s.fullEn, s.fullZh, s.fullTw ?? s.fullZh);
    return (
      <div style={{ paddingTop: isMobile ? 110 : 80, background: C.cream, minHeight: "100vh" }}>
        <div style={{ background: C.dark, padding: isMobile ? "40px 16px" : "60px 48px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "rgba(200,169,110,0.5)", cursor: "pointer", fontSize: 13, fontFamily: "inherit", marginBottom: 28, padding: 0 }}>{t.storiesBack}</button>
            <div style={{ fontSize: isMobile ? 52 : 72, marginBottom: 20 }}>{s.emoji}</div>
            <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: C.sand, marginBottom: 10 }}>{pick(lang, s.tagEn, s.tagZh, s.tagTw)}</div>
            {s.authorEn && (
              <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(200,169,110,0.6)", marginBottom: 16 }}>{pick(lang, s.authorEn, s.authorZh, s.authorTw)}</div>
            )}
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

  const featuredStory = STORIES.find(s => s.type === "featured");
  const animalStories = STORIES.filter(s => s.type === "animal");

  return (
    <div style={{ paddingTop: isMobile ? 110 : 80, background: C.dark, minHeight: "100vh" }}>
      <div style={{ padding: isMobile ? "48px 16px 32px" : "72px 48px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", display: "block", marginBottom: 18 }}>{t.storiesPageLabel}</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4.5vw,58px)", color: C.sandLight, lineHeight: 1.1, marginBottom: 16, maxWidth: 540 }}>
            {t.storiesPageHeading} <em style={{ color: C.sand }}>{t.storiesPageHeadingEm}</em>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(253,250,245,0.45)", maxWidth: 460, lineHeight: 1.75 }}>{t.storiesPageBody}</p>
        </div>
      </div>

      {featuredStory && (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "0 16px 16px" : "0 48px 16px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,169,110,0.4)", marginBottom: 16 }}>{t.storiesFieldLabel}</div>
          <div onClick={() => setSelected(featuredStory.id)} style={{ background: C.earth, borderLeft: `3px solid ${C.sand}`, padding: isMobile ? "32px 24px" : "48px 48px", cursor: "pointer", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = C.earthLight.replace ? "#3d5c39" : "rgba(74,103,65,0.8)"}
            onMouseLeave={e => e.currentTarget.style.background = C.earth}>
            <span style={{ fontSize: isMobile ? 52 : 72, display: "block", marginBottom: 20 }}>{featuredStory.emoji}</span>
            <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: C.sand, marginBottom: 8 }}>{pick(lang, featuredStory.tagEn, featuredStory.tagZh, featuredStory.tagTw)}</div>
            <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(200,169,110,0.6)", marginBottom: 14 }}>{pick(lang, featuredStory.authorEn, featuredStory.authorZh, featuredStory.authorTw)}</div>
            <div style={{ fontFamily: "Georgia,serif", fontSize: isMobile ? 22 : "clamp(22px,2.5vw,34px)", color: C.sandLight, marginBottom: 18, maxWidth: 680, lineHeight: 1.2 }}>{pick(lang, featuredStory.titleEn, featuredStory.titleZh, featuredStory.titleTw)}</div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(253,250,245,0.5)", maxWidth: 640, marginBottom: 24 }}>{pick(lang, featuredStory.summaryEn, featuredStory.summaryZh, featuredStory.summaryTw)}</p>
            <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.sand }}>{t.storiesReadMore}</span>
          </div>
        </div>
      )}

      {animalStories.length > 0 && (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "32px 16px 48px" : "48px 48px 80px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,169,110,0.4)", marginBottom: 16 }}>{t.storiesWildlifeLabel}</div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))", gap: 1, background: "rgba(200,169,110,0.07)" }}>
            {animalStories.map(s => (
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
      )}
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
