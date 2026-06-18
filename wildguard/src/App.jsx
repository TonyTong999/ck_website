import { useState, useEffect } from "react";

// ─── 数据 ───────────────────────────────────────────────────────────────────

const PRODUCTS = [
  { id: 1, emoji: "🦁", bg: "#f0e8d8", series: "狮子系列", animal: "非洲雄狮", name: "Pride 短袖", price: 49, donation: 4.9, org: "马赛马拉保护区", desc: "每一件，守护肯尼亚草原上最后的狮群。" },
  { id: 2, emoji: "🐘", bg: "#e8ede8", series: "大象系列", animal: "非洲象", name: "温柔巨人 托特包", price: 35, donation: 3.5, org: "安博塞利信托", desc: "你的每一次购物，为象群迁徙保留一条通道。" },
  { id: 3, emoji: "🦏", bg: "#ede8e0", series: "犀牛系列", animal: "白犀牛", name: "Last Thunder 卫衣", price: 89, donation: 8.9, org: "拯救犀牛国际", desc: "北白犀功能性灭绝。我们为最后的南白犀而战。" },
  { id: 4, emoji: "🐆", bg: "#e8e0d8", series: "豹系列", animal: "雪豹", name: "幽灵 帽衫", price: 79, donation: 7.9, org: "雪豹信托基金", desc: "喜马拉雅山脉的幽灵，正在消失。你的购买让它们留下来。" },
  { id: 5, emoji: "🐋", bg: "#d8e8ed", series: "鲸鱼系列", animal: "蓝鲸", name: "深海 长袖", price: 59, donation: 5.9, org: "国际鲸豚保护组织", desc: "地球上最大的生命，正面临最小的关注。" },
  { id: 6, emoji: "🦅", bg: "#e0e8f0", series: "雕鹰系列", animal: "菲律宾鹰", name: "云端 T恤", price: 45, donation: 4.5, org: "菲律宾鹰基金会", desc: "翼展两米，现存不足800只。每件衣服资助一次野外监测。" },
];

const STORIES = [
  {
    id: 1, emoji: "🦁", tag: "非洲雄狮 · 肯尼亚", title: "辛巴的王国",
    summary: "马赛马拉狮群数量20年内下降40%。你的购买资助了22个狮群的反盗猎巡逻。",
    full: "在肯尼亚马赛马拉，辛巴和他的族群曾经统治着一片广阔的草原。但随着人类活动的扩张，狮子的栖息地不断缩减。过去20年，这里的狮群数量下降了40%。\n\n我们与马赛马拉信托基金合作，资助专业巡逻队24小时守护狮群。每一件Pride短袖，直接支付一名巡逻员三天的薪水。\n\n你买的不只是一件衣服，是一片草原的未来。",
  },
  {
    id: 2, emoji: "🐘", tag: "非洲象 · 安博塞利", title: "Echo 的家族",
    summary: "Echo 领导她的家族长达45年。如今她的后代被全天候监测，WildGuard 今年资助了三个追踪项圈。",
    full: "Echo 是有史以来被研究最深入的大象之一。她领导着安博塞利最大的象群，走过了45年的岁月。2009年她离开了，但她的子孙们还在。\n\n象牙贸易让非洲象数量在过去十年内减少了三分之一。我们与安博塞利大象信托合作，为象群安装GPS追踪项圈，实时监测它们的迁徙路线。\n\n每一个托特包的销售，资助一个项圈一个月的卫星数据费用。",
  },
  {
    id: 3, emoji: "🦏", tag: "白犀牛 · 南非", title: "只剩两头",
    summary: "北白犀功能性灭绝。我们与Ol Pejeta合作，守护最后的南白犀种群。",
    full: "2018年，最后一头雄性北白犀Sudan离开了这个世界。现在，地球上只剩两头北白犀——都是雌性，都无法自然繁殖。\n\nOl Pejeta保护区是它们最后的家。科学家们正在尝试体外受精技术，试图从灭绝边缘挽救这个物种。\n\n我们的Last Thunder卫衣，每一件捐出$8.90，直接支持这项抢救性繁育项目。这不是保护，这是复活。",
  },
];

// ─── 颜色变量 ────────────────────────────────────────────────────────────────

const C = {
  earth: "#2C3A2E",
  earthLight: "#4A6741",
  sand: "#C8A96E",
  sandLight: "#E8D5A8",
  cream: "#F5F0E8",
  white: "#FDFAF5",
  dark: "#1A2319",
  text: "#3D3228",
  muted: "#7A6F63",
};

// ─── 通用组件 ─────────────────────────────────────────────────────────────────

function Nav({ page, setPage }) {
  const links = [
    { label: "商店", key: "shop" },
    { label: "我们的使命", key: "mission" },
    { label: "野生故事", key: "stories" },
    { label: "关于我们", key: "about" },
  ];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 48px",
      background: "rgba(26,35,25,0.94)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(200,169,110,0.08)",
    }}>
      <div
        onClick={() => setPage("home")}
        style={{ fontFamily: "Georgia,serif", fontSize: 21, color: C.sandLight, cursor: "pointer", letterSpacing: "0.02em" }}
      >
        Wild<span style={{ color: C.sand, fontStyle: "italic" }}>守护</span>
      </div>
      <div style={{ display: "flex", gap: 28 }}>
        {links.map(l => (
          <button key={l.key} onClick={() => setPage(l.key)} style={{
            background: "none", border: "none", cursor: "pointer",
            color: page === l.key ? C.sand : "rgba(232,213,168,0.55)",
            fontSize: 13, letterSpacing: "0.06em",
            fontFamily: "inherit",
            borderBottom: page === l.key ? `1px solid ${C.sand}` : "1px solid transparent",
            paddingBottom: 2, transition: "color 0.2s",
          }}>{l.label}</button>
        ))}
      </div>
      <button onClick={() => setPage("shop")} style={{
        background: C.sand, color: C.dark,
        padding: "9px 22px", border: "none", borderRadius: 2,
        fontSize: 12, fontWeight: 600, letterSpacing: "0.08em",
        cursor: "pointer", fontFamily: "inherit",
      }}>支持野生动物</button>
    </nav>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: C.dark, padding: "48px 48px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, maxWidth: 1100, margin: "0 auto" }}>
        <div>
          <div style={{ fontFamily: "Georgia,serif", fontSize: 20, color: C.sandLight, marginBottom: 12 }}>
            Wild<span style={{ color: C.sand, fontStyle: "italic" }}>守护</span>
          </div>
          <p style={{ fontSize: 13, color: "rgba(200,169,110,0.4)", lineHeight: 1.7, maxWidth: 220 }}>
            每一件产品，10%直接用于保护野生动物。不是承诺，是契约。
          </p>
        </div>
        {[
          { title: "商店", items: [["所有产品","shop"],["狮子系列","shop"],["大象系列","shop"],["犀牛系列","shop"]] },
          { title: "品牌", items: [["我们的使命","mission"],["野生故事","stories"],["合作伙伴","about"],["年度报告","about"]] },
          { title: "其他", items: [["捐款政策","about"],["隐私政策","about"],["联系我们","about"]] },
        ].map(col => (
          <div key={col.title}>
            <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(200,169,110,0.35)", marginBottom: 16 }}>{col.title}</div>
            {col.items.map(([label, pg]) => (
              <button key={label} onClick={() => setPage(pg)} style={{
                display: "block", fontSize: 13, color: "rgba(200,169,110,0.55)",
                textDecoration: "none", marginBottom: 10, background: "none", border: "none",
                cursor: "pointer", fontFamily: "inherit", padding: 0,
              }}>{label}</button>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 1100, margin: "40px auto 0", borderTop: "1px solid rgba(200,169,110,0.08)",
        padding: "20px 0", display: "flex", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 12, color: "rgba(200,169,110,0.2)" }}>© 2025 Wild守护. 保留所有权利。</span>
        <span style={{ fontSize: 12, color: "rgba(200,169,110,0.2)" }}>10% 捐款承诺 · 注册保护品牌</span>
      </div>
    </footer>
  );
}

// ─── 首页 ─────────────────────────────────────────────────────────────────────

function HomePage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <div style={{
        minHeight: "100vh", position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", background: C.dark, overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 40%, #2d4a2a 0%, #1a2b18 40%, #0d1a0c 100%)",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,20,14,0.2) 0%, rgba(15,20,14,0.75) 100%)" }} />
        <div style={{ position: "absolute", right: -40, bottom: 0, fontSize: 480, opacity: 0.09, userSelect: "none", lineHeight: 1 }}>🦁</div>
        <div style={{ position: "relative", zIndex: 2, padding: "0 24px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: C.sand, marginBottom: 24, display: "flex", alignItems: "center", gap: 14, justifyContent: "center" }}>
            <span style={{ display: "block", width: 32, height: 1, background: C.sand, opacity: 0.5 }} />
            穿上野性，守护自然
            <span style={{ display: "block", width: 32, height: 1, background: C.sand, opacity: 0.5 }} />
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(44px,6vw,84px)", lineHeight: 1.06, color: C.white, maxWidth: 680, margin: "0 auto 18px" }}>
            每一次购买<br /><em style={{ color: C.sand, fontStyle: "italic" }}>都在拯救生命</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(253,250,245,0.55)", maxWidth: 400, margin: "0 auto 44px", lineHeight: 1.75, fontWeight: 300 }}>
            每件产品售出，10%直接捐给野生动物保护区。不是广告语，是公司章程里的法律承诺。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <button onClick={() => setPage("shop")} style={{ background: C.sand, color: C.dark, padding: "15px 36px", border: "none", borderRadius: 2, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit" }}>立即购物</button>
            <button onClick={() => setPage("mission")} style={{ border: `1px solid rgba(232,213,168,0.35)`, color: C.sandLight, padding: "15px 36px", background: "none", borderRadius: 2, fontSize: 13, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit" }}>了解使命</button>
          </div>
        </div>
      </div>

      {/* 数据条 */}
      <div style={{ background: C.earth, padding: "30px 48px", display: "flex", justifyContent: "center", gap: 72, flexWrap: "wrap" }}>
        {[["¥584,320","累计捐款"],["1,247","保护动物数"],["6","合作保护区"],["12","覆盖国家"]].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <span style={{ fontFamily: "Georgia,serif", fontSize: 34, color: C.sand, display: "block", lineHeight: 1 }}>{num}</span>
            <span style={{ fontSize: 11, color: "rgba(200,169,110,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 5, display: "block" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* 使命预览 */}
      <div style={{ background: `linear-gradient(to right, ${C.earth} 50%, ${C.white} 50%)` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 460 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", fontSize: 260, opacity: 0.07, color: C.sand, userSelect: "none" }}>🐘</div>
            <div style={{ position: "relative", textAlign: "center", padding: 48 }}>
              <span style={{ fontFamily: "Georgia,serif", fontSize: 80, color: C.sand, display: "block", lineHeight: 1 }}>10%</span>
              <div style={{ fontSize: 13, color: "rgba(200,169,110,0.65)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 14, lineHeight: 1.6 }}>每件产品售出<br />直接捐向保护一线</div>
            </div>
          </div>
          <div style={{ padding: "64px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, marginBottom: 16 }}>我们的使命</span>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: C.earth, lineHeight: 1.15, marginBottom: 20, maxWidth: 420 }}>时尚，是保护野生动物最有力的武器</h2>
            <blockquote style={{ borderLeft: `3px solid ${C.sand}`, paddingLeft: 20, margin: "24px 0", fontFamily: "Georgia,serif", fontSize: 17, color: C.earth, lineHeight: 1.65, fontStyle: "italic" }}>
              "我们相信，一件T恤应该有意义。"
            </blockquote>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.muted }}>我们与非洲、亚洲、南美洲的一线保护机构直接合作。每次购买，绑定一个真实的动物、一片真实的栖息地、一个真实的保护项目。</p>
            <button onClick={() => setPage("mission")} style={{ marginTop: 28, alignSelf: "flex-start", background: C.earth, color: C.sandLight, padding: "12px 28px", border: "none", borderRadius: 2, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit" }}>阅读完整故事</button>
          </div>
        </div>
      </div>

      {/* 产品预览 */}
      <div style={{ padding: "80px 48px", maxWidth: 1100, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, marginBottom: 14, display: "block" }}>精选产品</span>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: C.earth, lineHeight: 1.15 }}>每件产品，<br />守护一个物种</h2>
          <button onClick={() => setPage("shop")} style={{ background: "none", border: `1px solid ${C.earth}`, color: C.earth, padding: "10px 24px", borderRadius: 2, fontSize: 12, cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.06em" }}>查看全部 →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PRODUCTS.slice(0, 3).map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>

      {/* 故事预览 */}
      <div style={{ background: C.dark }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", marginBottom: 14, display: "block" }}>野生故事</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: C.sandLight, lineHeight: 1.15 }}>你在守护的生命</h2>
            <button onClick={() => setPage("stories")} style={{ background: "none", border: `1px solid rgba(200,169,110,0.3)`, color: C.sand, padding: "10px 24px", borderRadius: 2, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>更多故事 →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.08)" }}>
            {STORIES.map(s => (
              <div key={s.id} style={{ background: C.dark, padding: "32px 26px" }}>
                <span style={{ fontSize: 44, display: "block", marginBottom: 18 }}>{s.emoji}</span>
                <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: C.sand, marginBottom: 10 }}>{s.tag}</div>
                <div style={{ fontFamily: "Georgia,serif", fontSize: 19, color: C.sandLight, marginBottom: 12 }}>{s.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(253,250,245,0.4)" }}>{s.summary}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 商品卡片 ─────────────────────────────────────────────────────────────────

function ProductCard({ p }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: C.white, border: `1px solid rgba(44,58,46,0.08)`, borderRadius: 4, overflow: "hidden",
        transform: hover ? "translateY(-5px)" : "none",
        boxShadow: hover ? "0 14px 36px rgba(44,58,46,0.13)" : "none",
        transition: "transform 0.25s, box-shadow 0.25s", cursor: "pointer",
      }}
    >
      <div style={{ height: 240, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 100, position: "relative" }}>
        {p.emoji}
        <span style={{ position: "absolute", top: 14, left: 14, background: C.earth, color: C.sandLight, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 2 }}>{p.series}</span>
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.earthLight, marginBottom: 5 }}>{p.animal}</div>
        <div style={{ fontFamily: "Georgia,serif", fontSize: 19, color: C.earth, marginBottom: 10 }}>{p.name}</div>
        <div style={{ fontSize: 12, color: C.earthLight, background: "rgba(74,103,65,0.08)", padding: "5px 12px", borderRadius: 2, display: "inline-block", marginBottom: 16 }}>¥{p.donation} → {p.org}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid rgba(44,58,46,0.08)" }}>
          <span style={{ fontFamily: "Georgia,serif", fontSize: 22, color: C.earth }}>¥{p.price}</span>
          <button style={{ background: C.earth, color: C.sandLight, padding: "8px 20px", border: "none", borderRadius: 2, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit" }}>加入购物车</button>
        </div>
      </div>
    </div>
  );
}

// ─── 商店页 ───────────────────────────────────────────────────────────────────

function ShopPage() {
  const [filter, setFilter] = useState("全部");
  const filters = ["全部", "狮子系列", "大象系列", "犀牛系列", "豹系列", "鲸鱼系列", "雕鹰系列"];
  const filtered = filter === "全部" ? PRODUCTS : PRODUCTS.filter(p => p.series === filter);
  return (
    <div style={{ paddingTop: 80, background: C.cream, minHeight: "100vh" }}>
      <div style={{ background: C.earth, padding: "60px 48px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,169,110,0.5)", display: "block", marginBottom: 14 }}>精选系列</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4vw,52px)", color: C.sandLight, marginBottom: 12 }}>每件产品，守护一个物种</h1>
          <p style={{ fontSize: 15, color: "rgba(200,169,110,0.55)", maxWidth: 460, lineHeight: 1.7 }}>购买 = 直接参与保护。每件产品标注了具体捐款金额和受益机构。</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 48px" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 40, flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "7px 18px", border: `1px solid ${filter === f ? C.earth : "rgba(44,58,46,0.2)"}`,
              background: filter === f ? C.earth : "none",
              color: filter === f ? C.sandLight : C.muted,
              borderRadius: 2, fontSize: 12, cursor: "pointer", fontFamily: "inherit",
              letterSpacing: "0.04em",
            }}>{f}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {filtered.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </div>
  );
}

// ─── 使命页 ───────────────────────────────────────────────────────────────────

function MissionPage({ setPage }) {
  return (
    <div style={{ paddingTop: 80, background: C.cream, minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: C.dark, padding: "80px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", display: "block", marginBottom: 20 }}>我们的使命</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(34px,4.5vw,60px)", color: C.sandLight, lineHeight: 1.1, marginBottom: 24 }}>时尚，是我们最有力的<em style={{ color: C.sand }}>武器</em></h1>
          <p style={{ fontSize: 16, color: "rgba(253,250,245,0.5)", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>Wild守护成立于对一个问题的思考：为什么环保和美学不能共存？</p>
        </div>
      </div>

      {/* 故事 */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 48px" }}>
        <div style={{ borderLeft: `3px solid ${C.sand}`, paddingLeft: 24, marginBottom: 48 }}>
          <p style={{ fontFamily: "Georgia,serif", fontSize: 22, color: C.earth, lineHeight: 1.65, fontStyle: "italic" }}>
            "我们不想做又一个贴着'环保'标签的品牌。我们想让每一件衣服，都成为一个保护行动。"
          </p>
          <span style={{ fontSize: 13, color: C.muted, marginTop: 12, display: "block" }}>— 创始人</span>
        </div>
        {[
          { title: "为什么是10%？", body: "行业标准是1-2%。我们选择10%，是因为我们认为这是真正能产生影响的数字。这个承诺被写入公司章程，不是营销策略，是法律义务。" },
          { title: "我们怎么选合作伙伴？", body: "我们只与直接在野外工作的机构合作。不是总部在纽约的大型NGO，而是在马赛马拉巡逻的护林员，在安博塞利追踪象群的研究员，在Ol Pejeta守护犀牛的团队。" },
          { title: "钱怎么流向保护区？", body: "每季度末，我们直接向合作机构转账，并在网站公开转账凭证。每位购买者都会在30天内收到一份捐款证明，注明他们的购买具体支持了哪个项目。" },
        ].map(item => (
          <div key={item.title} style={{ marginBottom: 44 }}>
            <h3 style={{ fontFamily: "Georgia,serif", fontSize: 22, color: C.earth, marginBottom: 14 }}>{item.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.muted }}>{item.body}</p>
          </div>
        ))}
      </div>

      {/* 合作伙伴 */}
      <div style={{ background: C.white, padding: "64px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, display: "block", marginBottom: 14 }}>合作保护机构</span>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: 32, color: C.earth, marginBottom: 40 }}>我们的一线伙伴</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { name: "马赛马拉信托", country: "🇰🇪 肯尼亚", desc: "守护东非最重要的狮群栖息地" },
              { name: "安博塞利大象信托", country: "🇰🇪 肯尼亚", desc: "全球时间最长的大象行为研究项目" },
              { name: "拯救犀牛国际", country: "🇿🇦 南非", desc: "为濒危犀牛提供紧急保护与繁育支持" },
              { name: "雪豹信托基金", country: "🇨🇳 中国/蒙古", desc: "喜马拉雅与阿尔泰山脉的雪豹守护者" },
              { name: "国际鲸豚保护组织", country: "🌏 全球", desc: "海洋哺乳动物的研究与保护" },
              { name: "菲律宾鹰基金会", country: "🇵🇭 菲律宾", desc: "守护世界上最大也最稀有的鹰类" },
            ].map(p => (
              <div key={p.name} style={{ background: C.cream, borderRadius: 4, padding: 24, borderLeft: `3px solid ${C.earthLight}` }}>
                <div style={{ fontSize: 12, color: C.muted, marginBottom: 6 }}>{p.country}</div>
                <div style={{ fontFamily: "Georgia,serif", fontSize: 17, color: C.earth, marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 透明度 */}
      <div style={{ padding: "64px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, display: "block", marginBottom: 14 }}>资金透明</span>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: 32, color: C.earth, marginBottom: 40 }}>每一分钱去哪儿了</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              {[["野生动物保护","10%",C.earthLight],["生产与原材料","55%",C.sand],["运营与物流","20%","#8a9e87"],["营销与增长","10%","#b5c4b3"],["团队与管理","5%","#ccd8cb"]].map(([label,pct,color]) => (
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
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "2024年度报告", body: "包含全部捐款凭证及6家合作机构的资金使用报告，由GreenCert International审计。", link: "下载PDF ↗" },
                { title: "捐款证明", body: "每次购买后30天内，你会收到一份写明具体保护项目的捐款证明。", link: "查看示例 ↗" },
              ].map(item => (
                <div key={item.title} style={{ background: C.white, borderRadius: 4, padding: 24, borderLeft: `3px solid ${C.earthLight}` }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.earth, marginBottom: 10 }}>{item.title}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.65, color: C.muted, marginBottom: 14 }}>{item.body}</div>
                  <span style={{ fontSize: 12, color: C.earthLight, letterSpacing: "0.08em", cursor: "pointer" }}>{item.link}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 故事页 ───────────────────────────────────────────────────────────────────

function StoriesPage() {
  const [selected, setSelected] = useState(null);
  if (selected) {
    const s = STORIES.find(x => x.id === selected);
    return (
      <div style={{ paddingTop: 80, background: C.cream, minHeight: "100vh" }}>
        <div style={{ background: C.dark, padding: "60px 48px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "rgba(200,169,110,0.5)", cursor: "pointer", fontSize: 13, fontFamily: "inherit", marginBottom: 28, padding: 0 }}>← 返回故事列表</button>
            <div style={{ fontSize: 72, marginBottom: 20 }}>{s.emoji}</div>
            <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: C.sand, marginBottom: 14 }}>{s.tag}</div>
            <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3.5vw,48px)", color: C.sandLight, lineHeight: 1.1 }}>{s.title}</h1>
          </div>
        </div>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "60px 48px" }}>
          {s.full.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.85, color: C.muted, marginBottom: 24, fontFamily: i === 0 ? "Georgia,serif" : "inherit", fontSize: i === 0 ? 18 : 16, color: i === 0 ? C.text : C.muted }}>{para}</p>
          ))}
          <div style={{ marginTop: 48, padding: "28px", background: C.white, borderRadius: 4, borderLeft: `3px solid ${C.sand}` }}>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: C.earthLight, marginBottom: 8 }}>支持这个物种</div>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.65 }}>购买对应系列产品，{s.emoji}的捐款将直接支持此保护项目。</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ paddingTop: 80, background: C.dark, minHeight: "100vh" }}>
      <div style={{ padding: "72px 48px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", display: "block", marginBottom: 18 }}>野生故事</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4.5vw,58px)", color: C.sandLight, lineHeight: 1.1, marginBottom: 16, maxWidth: 540 }}>你在守护的<em style={{ color: C.sand }}>生命</em></h1>
          <p style={{ fontSize: 15, color: "rgba(253,250,245,0.45)", maxWidth: 460, lineHeight: 1.75 }}>每个动物都有名字，每片栖息地都有故事。认识那些你正在帮助的生命。</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px 80px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(200,169,110,0.07)" }}>
        {STORIES.map(s => (
          <div key={s.id} onClick={() => setSelected(s.id)} style={{ background: C.dark, padding: "36px 28px", cursor: "pointer", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(44,58,46,0.5)"}
            onMouseLeave={e => e.currentTarget.style.background = C.dark}>
            <span style={{ fontSize: 52, display: "block", marginBottom: 20 }}>{s.emoji}</span>
            <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: C.sand, marginBottom: 10 }}>{s.tag}</div>
            <div style={{ fontFamily: "Georgia,serif", fontSize: 20, color: C.sandLight, marginBottom: 14 }}>{s.title}</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(253,250,245,0.4)", marginBottom: 20 }}>{s.summary}</div>
            <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.sand }}>阅读全文 →</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 关于我们页 ───────────────────────────────────────────────────────────────

function AboutPage({ setPage }) {
  return (
    <div style={{ paddingTop: 80, background: C.cream, minHeight: "100vh" }}>
      <div style={{ background: C.earth, padding: "72px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,0.5)", display: "block", marginBottom: 18 }}>关于我们</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4.5vw,56px)", color: C.sandLight, lineHeight: 1.1, marginBottom: 20 }}>我们相信，<br /><em style={{ color: C.sand }}>消费可以是一种保护</em></h1>
          <p style={{ fontSize: 16, color: "rgba(200,169,110,0.55)", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>Wild守护由一群热爱自然的设计师和保护主义者创立于2022年。</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: 28, color: C.earth, marginBottom: 20 }}>我们的价值观</h2>
            {[
              { icon: "🌿", title: "真实影响", body: "每笔捐款都有凭证，每个项目都可追溯。我们拒绝模糊的'支持环保'承诺。" },
              { icon: "🤝", title: "一线合作", body: "我们绕过中间环节，直接与野外保护机构合作，确保资金真正到达需要的地方。" },
              { icon: "🎨", title: "美学驱动", body: "我们相信美丽的产品能带来更大的影响力。设计和目的，从不妥协。" },
            ].map(v => (
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
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: 28, color: C.earth, marginBottom: 20 }}>联系我们</h2>
            <div style={{ background: C.white, borderRadius: 4, padding: 28 }}>
              {[["合作与媒体", "hello@wildguard.cn"],["客户服务", "support@wildguard.cn"],["捐款相关", "impact@wildguard.cn"]].map(([label, email]) => (
                <div key={label} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(44,58,46,0.08)" }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.earthLight, marginBottom: 5 }}>{label}</div>
                  <div style={{ fontSize: 15, color: C.earth }}>{email}</div>
                </div>
              ))}
              <div style={{ marginTop: 4 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.earthLight, marginBottom: 8 }}>社交媒体</div>
                <div style={{ display: "flex", gap: 10 }}>
                  {["微博", "微信", "小红书", "Instagram"].map(s => (
                    <span key={s} style={{ fontSize: 12, padding: "5px 12px", border: `1px solid rgba(44,58,46,0.15)`, borderRadius: 2, color: C.muted }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email 订阅 */}
      <div style={{ background: C.earth, padding: "64px 48px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: 34, color: C.sandLight, marginBottom: 12 }}>加入野生守护者</h2>
        <p style={{ fontSize: 15, color: "rgba(200,169,110,0.55)", marginBottom: 32 }}>野生动物动态、新品发布、影响力报告——每月一次。</p>
        <div style={{ display: "flex", gap: 0, maxWidth: 420, margin: "0 auto", border: "1px solid rgba(200,169,110,0.25)", borderRadius: 2, overflow: "hidden" }}>
          <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: "14px 18px", background: "rgba(255,255,255,0.05)", border: "none", outline: "none", color: C.sandLight, fontSize: 14, fontFamily: "inherit" }} />
          <button style={{ background: C.sand, color: C.dark, padding: "14px 22px", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", fontFamily: "inherit" }}>订阅</button>
        </div>
      </div>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":    return <HomePage setPage={setPage} />;
      case "shop":    return <ShopPage />;
      case "mission": return <MissionPage setPage={setPage} />;
      case "stories": return <StoriesPage />;
      case "about":   return <AboutPage setPage={setPage} />;
      default:        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ background: C.cream, fontFamily: "'DM Sans', 'PingFang SC', sans-serif" }}>
      <Nav page={page} setPage={setPage} />
      {renderPage()}
      <Footer setPage={setPage} />
    </div>
  );
}
