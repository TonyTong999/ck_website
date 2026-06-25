import { useState, useEffect } from "react";
import rangerLabel from "../ranger_label.png";

// ─── Data ────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  { id: 1, emoji: "🦁", bg: "#f0e8d8", series: "Lion Series", animal: "African Lion", name: "Pride Tee", price: 49, donation: 4.9, org: "Conservation Partner", desc: "Each piece protects the last lion prides on Kenya's savanna." },
  { id: 2, emoji: "🐘", bg: "#e8ede8", series: "Elephant Series", animal: "African Elephant", name: "Gentle Giant Tote", price: 35, donation: 3.5, org: "Conservation Partner", desc: "Every purchase helps preserve a corridor for elephant migration." },
  { id: 3, emoji: "🦏", bg: "#ede8e0", series: "Rhino Series", animal: "White Rhino", name: "Last Thunder Hoodie", price: 89, donation: 8.9, org: "Conservation Partner", desc: "Northern white rhinos are functionally extinct. We fight for the last southern white rhinos." },
  { id: 4, emoji: "🐆", bg: "#e8e0d8", series: "Leopard Series", animal: "Snow Leopard", name: "Ghost Hoodie", price: 79, donation: 7.9, org: "Conservation Partner", desc: "The ghost of the Himalayas is disappearing. Your purchase helps them stay." },
  { id: 5, emoji: "🐋", bg: "#d8e8ed", series: "Whale Series", animal: "Blue Whale", name: "Deep Sea Long Sleeve", price: 59, donation: 5.9, org: "Conservation Partner", desc: "The largest life on Earth faces the smallest attention." },
  { id: 6, emoji: "🦅", bg: "#e0e8f0", series: "Eagle Series", animal: "Philippine Eagle", name: "Cloud Tee", price: 45, donation: 4.5, org: "Conservation Partner", desc: "Wingspan of two meters, fewer than 800 left. Each garment funds one field survey." },
];

const STORIES = [
  {
    id: 1, emoji: "🦁", tag: "African Lion · Kenya", title: "Simba's Kingdom",
    summary: "Lion populations in the Maasai Mara have dropped 40% over 20 years. Your purchase funds anti-poaching patrols protecting 22 prides.",
    full: "In Kenya's Maasai Mara, Simba and his pride once ruled a vast savanna. But as human activity expanded, lion habitat shrank. Over the past 20 years, the lion population here has fallen by 40%.\n\nWe work with our conservation partner to fund professional patrol teams guarding lion prides around the clock. Every Pride Tee directly covers three days of a ranger's wages.\n\nYou're not just buying a shirt — you're buying a future for the savanna.",
  },
  {
    id: 2, emoji: "🐘", tag: "African Elephant · Amboseli", title: "Echo's Family",
    summary: "Echo led her family for 45 years. Her descendants are monitored around the clock — CK Safari Culture Goods funded three tracking collars this year.",
    full: "Echo is one of the most studied elephants in history. She led the largest herd in Amboseli through 45 years of life. She passed in 2009, but her descendants carry on.\n\nThe ivory trade has reduced Africa's elephant population by a third over the past decade. We work with our conservation partner to fit herds with GPS tracking collars that monitor migration routes in real time.\n\nEvery Gentle Giant Tote sale covers one month of satellite data fees for one collar.",
  },
  {
    id: 3, emoji: "🦏", tag: "White Rhino · South Africa", title: "Only Two Left",
    summary: "Northern white rhinos are functionally extinct. We support Ol Pejeta Conservancy in protecting the last southern white rhino population.",
    full: "In 2018, the last male northern white rhino, Sudan, left this world. Now only two northern white rhinos remain on Earth — both female, both unable to reproduce naturally.\n\nOl Pejeta Conservancy is their last home. Scientists are attempting IVF techniques to pull the species back from the brink of extinction.\n\nOur Last Thunder Hoodie donates $8.90 per sale directly to this emergency breeding program. This isn't conservation — it's resurrection.",
  },
];

// ─── Color Variables ─────────────────────────────────────────────────────────

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

// ─── Shared Components ────────────────────────────────────────────────────────

function Nav({ page, setPage }) {
  const links = [
    { label: "Shop", key: "shop" },
    { label: "Our Mission", key: "mission" },
    { label: "Wild Stories", key: "stories" },
    { label: "About Us", key: "about" },
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
      <img
        src={rangerLabel}
        alt="CK Safari Culture Goods"
        onClick={() => setPage("home")}
        style={{ height: 48, cursor: "pointer", display: "block" }}
      />
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
      }}>Browse Collection</button>
    </nav>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: C.dark, padding: "48px 48px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, maxWidth: 1100, margin: "0 auto" }}>
        <div>
          <img src={rangerLabel} alt="CK Safari Culture Goods" style={{ height: 52, display: "block", marginBottom: 12 }} />
          <p style={{ fontSize: 13, color: "rgba(200,169,110,0.4)", lineHeight: 1.7, maxWidth: 220 }}>
            Every product: 10% directly supports wildlife conservation. Not a promise — a commitment.
          </p>
        </div>
        {[
          { title: "Shop", items: [["All Products","shop"],["Lion Series","shop"],["Elephant Series","shop"],["Rhino Series","shop"]] },
          { title: "Brand", items: [["Our Mission","mission"],["Wild Stories","stories"],["Partners","about"],["Annual Report","about"]] },
          { title: "More", items: [["Donation Policy","about"],["Privacy Policy","about"],["Contact Us","about"]] },
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
        <span style={{ fontSize: 12, color: "rgba(200,169,110,0.2)" }}>© 2025 CK Safari Culture Goods. All rights reserved.</span>
        <span style={{ fontSize: 12, color: "rgba(200,169,110,0.2)" }}>10% Donation Commitment · Registered Conservation Brand</span>
      </div>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

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
            Wear the Wild, Protect Nature
            <span style={{ display: "block", width: 32, height: 1, background: C.sand, opacity: 0.5 }} />
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(44px,6vw,84px)", lineHeight: 1.06, color: C.white, maxWidth: 680, margin: "0 auto 18px" }}>
            Every Purchase<br /><em style={{ color: C.sand, fontStyle: "italic" }}>Saves a Life</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(253,250,245,0.55)", maxWidth: 400, margin: "0 auto 44px", lineHeight: 1.75, fontWeight: 300 }}>
            10% of every product sold goes directly to wildlife conservation reserves. Not a tagline — it's written into our articles of incorporation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <button onClick={() => setPage("shop")} style={{ background: C.sand, color: C.dark, padding: "15px 36px", border: "none", borderRadius: 2, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit" }}>View Collection</button>
            <button onClick={() => setPage("mission")} style={{ border: `1px solid rgba(232,213,168,0.35)`, color: C.sandLight, padding: "15px 36px", background: "none", borderRadius: 2, fontSize: 13, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit" }}>Our Mission</button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: C.earth, padding: "30px 48px", display: "flex", justifyContent: "center", gap: 72, flexWrap: "wrap" }}>
        {[["¥584,320","Total Donated"],["1,247","Animals Protected"],["6","Partner Reserves"],["12","Countries"]].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <span style={{ fontFamily: "Georgia,serif", fontSize: 34, color: C.sand, display: "block", lineHeight: 1 }}>{num}</span>
            <span style={{ fontSize: 11, color: "rgba(200,169,110,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 5, display: "block" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Mission Preview */}
      <div style={{ background: `linear-gradient(to right, ${C.earth} 50%, ${C.white} 50%)` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 460 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", fontSize: 260, opacity: 0.07, color: C.sand, userSelect: "none" }}>🐘</div>
            <div style={{ position: "relative", textAlign: "center", padding: 48 }}>
              <span style={{ fontFamily: "Georgia,serif", fontSize: 80, color: C.sand, display: "block", lineHeight: 1 }}>10%</span>
              <div style={{ fontSize: 13, color: "rgba(200,169,110,0.65)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 14, lineHeight: 1.6 }}>Of every product sold<br />goes directly to conservation</div>
            </div>
          </div>
          <div style={{ padding: "64px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, marginBottom: 16 }}>Our Mission</span>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: C.earth, lineHeight: 1.15, marginBottom: 20, maxWidth: 420 }}>Fashion is the most powerful weapon for wildlife conservation</h2>
            <blockquote style={{ borderLeft: `3px solid ${C.sand}`, paddingLeft: 20, margin: "24px 0", fontFamily: "Georgia,serif", fontSize: 17, color: C.earth, lineHeight: 1.65, fontStyle: "italic" }}>
              "We believe a T-shirt should mean something."
            </blockquote>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.muted }}>We work directly with frontline conservation organizations across Africa, Asia, and South America. Every purchase is tied to a real animal, a real habitat, and a real conservation project.</p>
            <button onClick={() => setPage("mission")} style={{ marginTop: 28, alignSelf: "flex-start", background: C.earth, color: C.sandLight, padding: "12px 28px", border: "none", borderRadius: 2, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit" }}>Read the Full Story</button>
          </div>
        </div>
      </div>

      {/* Product Preview */}
      <div style={{ padding: "80px 48px", maxWidth: 1100, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, marginBottom: 14, display: "block" }}>Featured Products</span>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: C.earth, lineHeight: 1.15 }}>Each Product,<br />Protects a Species</h2>
          <button onClick={() => setPage("shop")} style={{ background: "none", border: `1px solid ${C.earth}`, color: C.earth, padding: "10px 24px", borderRadius: 2, fontSize: 12, cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.06em" }}>View All →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PRODUCTS.slice(0, 3).map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>

      {/* Stories Preview */}
      <div style={{ background: C.dark }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", marginBottom: 14, display: "block" }}>Wild Stories</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: C.sandLight, lineHeight: 1.15 }}>The Lives You're Protecting</h2>
            <button onClick={() => setPage("stories")} style={{ background: "none", border: `1px solid rgba(200,169,110,0.3)`, color: C.sand, padding: "10px 24px", borderRadius: 2, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>More Stories →</button>
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

// ─── Product Card ─────────────────────────────────────────────────────────────

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
        <div style={{ paddingTop: 16, borderTop: "1px solid rgba(44,58,46,0.08)" }}>
          <span style={{ fontFamily: "Georgia,serif", fontSize: 22, color: C.earth }}>¥{p.price}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Shop Page ────────────────────────────────────────────────────────────────

function ShopPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Lion Series", "Elephant Series", "Rhino Series", "Leopard Series", "Whale Series", "Eagle Series"];
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.series === filter);
  return (
    <div style={{ paddingTop: 80, background: C.cream, minHeight: "100vh" }}>
      <div style={{ background: C.earth, padding: "60px 48px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,169,110,0.5)", display: "block", marginBottom: 14 }}>Featured Collections</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4vw,52px)", color: C.sandLight, marginBottom: 12 }}>Each Product, Protects a Species</h1>
          <p style={{ fontSize: 15, color: "rgba(200,169,110,0.55)", maxWidth: 460, lineHeight: 1.7 }}>Every product is tied to a real animal and a real conservation project. Each listing shows the exact donation amount per item sold.</p>
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

// ─── Mission Page ─────────────────────────────────────────────────────────────

function MissionPage({ setPage }) {
  return (
    <div style={{ paddingTop: 80, background: C.cream, minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: C.dark, padding: "80px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", display: "block", marginBottom: 20 }}>Our Mission</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(34px,4.5vw,60px)", color: C.sandLight, lineHeight: 1.1, marginBottom: 24 }}>Fashion is Our Most Powerful <em style={{ color: C.sand }}>Weapon</em></h1>
          <p style={{ fontSize: 16, color: "rgba(253,250,245,0.5)", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>CK Safari Culture Goods was founded on one question: why can't conservation and aesthetics coexist?</p>
        </div>
      </div>

      {/* Story */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 48px" }}>
        <div style={{ borderLeft: `3px solid ${C.sand}`, paddingLeft: 24, marginBottom: 48 }}>
          <p style={{ fontFamily: "Georgia,serif", fontSize: 22, color: C.earth, lineHeight: 1.65, fontStyle: "italic" }}>
            "We didn't want to be yet another brand slapping 'eco' on its label. We wanted every garment to become a conservation action."
          </p>
          <span style={{ fontSize: 13, color: C.muted, marginTop: 12, display: "block" }}>— Founder</span>
        </div>
        {[
          { title: "Why 10%?", body: "The industry standard is 1–2%. We chose 10% because we believe that's the number that creates real impact. This commitment is written into our articles of incorporation — it's not a marketing strategy, it's a legal obligation." },
          { title: "How Do We Choose Partners?", body: "We only work with organizations operating directly in the field. Not large NGOs headquartered in New York, but rangers patrolling the Maasai Mara, researchers tracking elephant herds in Amboseli, and teams guarding rhinos on the ground. (Partners coming soon.)" },
          { title: "How Does the Money Reach the Reserves?", body: "At the end of each quarter, we transfer funds directly to our partner organizations and publish the transfer receipts on our website. Every buyer receives a donation certificate within 30 days specifying exactly which project their purchase supported." },
        ].map(item => (
          <div key={item.title} style={{ marginBottom: 44 }}>
            <h3 style={{ fontFamily: "Georgia,serif", fontSize: 22, color: C.earth, marginBottom: 14 }}>{item.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.muted }}>{item.body}</p>
          </div>
        ))}
      </div>

      {/* Conservation Partners */}
      <div style={{ background: C.white, padding: "64px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, display: "block", marginBottom: 14 }}>Conservation Partners</span>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: 32, color: C.earth, marginBottom: 40 }}>Our Frontline Partners</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { name: "Partner Organization", country: "—", desc: "Coming soon — we are building our conservation partnerships." },
              { name: "Partner Organization", country: "—", desc: "Coming soon — we are building our conservation partnerships." },
              { name: "Partner Organization", country: "—", desc: "Coming soon — we are building our conservation partnerships." },
            ].map((p, i) => (
              <div key={i} style={{ background: C.cream, borderRadius: 4, padding: 24, borderLeft: `3px solid ${C.earthLight}` }}>
                <div style={{ fontSize: 12, color: C.muted, marginBottom: 6 }}>{p.country}</div>
                <div style={{ fontFamily: "Georgia,serif", fontSize: 17, color: C.earth, marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transparency */}
      <div style={{ padding: "64px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: C.earthLight, display: "block", marginBottom: 14 }}>Fund Transparency</span>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: 32, color: C.earth, marginBottom: 40 }}>Where Every Dollar Goes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              {[["Wildlife Conservation","10%",C.earthLight],["Production & Materials","55%",C.sand],["Operations & Logistics","20%","#8a9e87"],["Marketing & Growth","10%","#b5c4b3"],["Team & Management","5%","#ccd8cb"]].map(([label,pct,color]) => (
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
                { title: "2024 Annual Report", body: "Includes all donation receipts and fund-use reports from our conservation partners, audited by GreenCert International.", link: "Download PDF ↗" },
                { title: "Donation Certificate", body: "Within 30 days of purchase, you'll receive a certificate naming the specific conservation project your order supported.", link: "View Sample ↗" },
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

// ─── Stories Page ─────────────────────────────────────────────────────────────

function StoriesPage() {
  const [selected, setSelected] = useState(null);
  if (selected) {
    const s = STORIES.find(x => x.id === selected);
    return (
      <div style={{ paddingTop: 80, background: C.cream, minHeight: "100vh" }}>
        <div style={{ background: C.dark, padding: "60px 48px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "rgba(200,169,110,0.5)", cursor: "pointer", fontSize: 13, fontFamily: "inherit", marginBottom: 28, padding: 0 }}>← Back to Stories</button>
            <div style={{ fontSize: 72, marginBottom: 20 }}>{s.emoji}</div>
            <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: C.sand, marginBottom: 14 }}>{s.tag}</div>
            <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3.5vw,48px)", color: C.sandLight, lineHeight: 1.1 }}>{s.title}</h1>
          </div>
        </div>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "60px 48px" }}>
          {s.full.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: i === 0 ? 18 : 16, lineHeight: 1.85, color: i === 0 ? C.text : C.muted, marginBottom: 24, fontFamily: i === 0 ? "Georgia,serif" : "inherit" }}>{para}</p>
          ))}
          <div style={{ marginTop: 48, padding: "28px", background: C.white, borderRadius: 4, borderLeft: `3px solid ${C.sand}` }}>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: C.earthLight, marginBottom: 8 }}>Support This Species</div>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.65 }}>Purchase the corresponding series and {s.emoji}'s donation will go directly to this conservation project.</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ paddingTop: 80, background: C.dark, minHeight: "100vh" }}>
      <div style={{ padding: "72px 48px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", display: "block", marginBottom: 18 }}>Wild Stories</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4.5vw,58px)", color: C.sandLight, lineHeight: 1.1, marginBottom: 16, maxWidth: 540 }}>The Lives You're <em style={{ color: C.sand }}>Protecting</em></h1>
          <p style={{ fontSize: 15, color: "rgba(253,250,245,0.45)", maxWidth: 460, lineHeight: 1.75 }}>Every animal has a name, every habitat has a story. Meet the lives you're helping.</p>
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
            <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.sand }}>Read More →</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────

function AboutPage({ setPage }) {
  return (
    <div style={{ paddingTop: 80, background: C.cream, minHeight: "100vh" }}>
      <div style={{ background: C.earth, padding: "72px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,169,110,0.5)", display: "block", marginBottom: 18 }}>About Us</span>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4.5vw,56px)", color: C.sandLight, lineHeight: 1.1, marginBottom: 20 }}>We believe<br /><em style={{ color: C.sand }}>consumption can be conservation</em></h1>
          <p style={{ fontSize: 16, color: "rgba(200,169,110,0.55)", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>CK Safari Culture Goods was founded in 2022 by a group of designers and conservationists passionate about nature.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: 28, color: C.earth, marginBottom: 20 }}>Our Values</h2>
            {[
              { icon: "🌿", title: "Real Impact", body: "Every donation has a receipt, every project is traceable. We refuse vague 'support for the environment' commitments." },
              { icon: "🤝", title: "Frontline Partnerships", body: "We bypass intermediaries and work directly with field conservation organizations, ensuring funds reach where they're truly needed." },
              { icon: "🎨", title: "Aesthetics-Driven", body: "We believe beautiful products create greater impact. Design and purpose — we never compromise on either." },
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
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: 28, color: C.earth, marginBottom: 20 }}>Contact Us</h2>
            <div style={{ background: C.white, borderRadius: 4, padding: 28 }}>
              {[["Partnerships & Media", "hello@cksafari.com"],["Customer Service", "support@cksafari.com"],["Donation Inquiries", "impact@cksafari.com"]].map(([label, email]) => (
                <div key={label} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(44,58,46,0.08)" }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.earthLight, marginBottom: 5 }}>{label}</div>
                  <div style={{ fontSize: 15, color: C.earth }}>{email}</div>
                </div>
              ))}
              <div style={{ marginTop: 4 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.earthLight, marginBottom: 8 }}>Social Media</div>
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

      {/* Email Subscription */}
      <div style={{ background: C.earth, padding: "64px 48px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: 34, color: C.sandLight, marginBottom: 12 }}>Join the Wild Guardians</h2>
        <p style={{ fontSize: 15, color: "rgba(200,169,110,0.55)", marginBottom: 32 }}>Wildlife updates, new product launches, and impact reports — once a month.</p>
        <div style={{ display: "flex", gap: 0, maxWidth: 420, margin: "0 auto", border: "1px solid rgba(200,169,110,0.25)", borderRadius: 2, overflow: "hidden" }}>
          <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: "14px 18px", background: "rgba(255,255,255,0.05)", border: "none", outline: "none", color: C.sandLight, fontSize: 14, fontFamily: "inherit" }} />
          <button style={{ background: C.sand, color: C.dark, padding: "14px 22px", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", fontFamily: "inherit" }}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

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
    <div style={{ background: C.cream, fontFamily: "'DM Sans', sans-serif" }}>
      <Nav page={page} setPage={setPage} />
      {renderPage()}
      <Footer setPage={setPage} />
    </div>
  );
}
