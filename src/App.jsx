import logoImg from "./assets/logo.jpg";
import collection1Img from "./assets/collection1.jpg";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Collections", "Contact"];

const G = {
  bg:         "#0d2818",
  bgMid:      "#0f3020",
  bgLight:    "#163d28",
  bgLighter:  "#1a4a30",
  gold:       "#c9a84c",
  goldLight:  "#e8c97a",
  goldPale:   "#f5e4a8",
  cream:      "#fdf6e3",
  text:       "#f5e4a8",
  textMid:    "#c9b882",
  textMuted:  "#8aaa8a",
  border:     "rgba(201,168,76,0.22)",
  borderHover:"rgba(201,168,76,0.55)",
  glow:       "rgba(201,168,76,0.15)",
};

const CATEGORIES = [
  { label: "Kurtis",       icon: "👑" },
  { label: "Maxis",        icon: "✨" },
  { label: "Co-ord Sets",  icon: "🌿" },
  { label: "Crop & Skirt", icon: "🎀" },
  { label: "Western Wear", icon: "💫" },
  { label: "Sarees",       icon: "🌸" },
];

const COLLECTIONS = [
  {
    title: "Kurti Sets",
    subtitle: "Ethnic Elegance",
    tag: "New Arrival",
    img: collection1Img,
  },
  {
    title: "Designer Sarees",
    subtitle: "Heritage Weaves",
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&q=85",
  },
  {
    title: "Western Wear",
    subtitle: "Modern Vibes",
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=700&q=85",
  },
];

const FEATURES = [
  { icon: "✦", title: "Handpicked Designs",  desc: "Every piece curated with love" },
  { icon: "✦", title: "Premium Fabrics",     desc: "Finest quality guaranteed" },
  { icon: "✦", title: "Custom Orders",       desc: "Tailored just for you" },
  { icon: "✦", title: "Elegant Packaging",   desc: "Gift-ready presentation" },
];

export default function EvalnilaWebsite() {
  const [activeNav, setActiveNav]   = useState("Home");
  const [scrolled,  setScrolled]    = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visible,   setVisible]     = useState({});
  const [menuOpen,  setMenuOpen]    = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.reveal]: true }));
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
    setMenuOpen(false);
  };

  const rv = (key, delay = 0) => ({
    "data-reveal": key,
    style: {
      opacity:   visible[key] ? 1 : 0,
      transform: visible[key] ? "translateY(0)" : "translateY(36px)",
      transition:`opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
    },
  });

  return (
    <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", background:G.bg, color:G.text, minHeight:"100vh", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:${G.bg}}
        ::-webkit-scrollbar-thumb{background:${G.gold};border-radius:3px}

        .nl{position:relative;cursor:pointer;font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:${G.textMid};transition:color 0.3s}
        .nl:hover,.nl.on{color:${G.goldLight}}
        .nl::after{content:'';position:absolute;bottom:-5px;left:0;right:0;height:1px;background:${G.gold};transform:scaleX(0);transition:transform 0.3s}
        .nl.on::after,.nl:hover::after{transform:scaleX(1)}

        .btn-gold{background:linear-gradient(135deg,${G.goldLight} 0%,${G.gold} 100%);color:${G.bg};border:none;padding:14px 38px;font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;cursor:pointer;border-radius:3px;font-weight:600;box-shadow:0 6px 28px rgba(201,168,76,0.35);transition:all 0.3s}
        .btn-gold:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(201,168,76,0.5)}

        .btn-outline{background:transparent;color:${G.gold};border:1px solid ${G.gold};padding:13px 36px;font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;cursor:pointer;border-radius:3px;transition:all 0.3s}
        .btn-outline:hover{background:${G.glow};border-color:${G.goldLight};color:${G.goldLight};transform:translateY(-2px)}

        .ccard{position:relative;overflow:hidden;cursor:pointer;flex:1;min-width:250px;border-radius:4px;border:1px solid ${G.border};transition:all 0.4s}
        .ccard:hover{border-color:${G.borderHover};transform:translateY(-8px);box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(201,168,76,0.12)}
        .ccard img{width:100%;height:420px;object-fit:cover;display:block;transition:transform 0.7s ease;filter:brightness(0.78) saturate(0.9)}
        .ccard:hover img{transform:scale(1.06);filter:brightness(0.65)}
        .ccard-overlay{position:absolute;bottom:0;left:0;right:0;padding:32px 26px 26px;background:linear-gradient(to top,rgba(13,40,24,0.95) 0%,rgba(13,40,24,0.4) 60%,transparent 100%)}
        .ctag{display:inline-block;background:${G.gold};color:${G.bg};font-family:'Jost',sans-serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;padding:4px 12px;margin-bottom:10px;border-radius:2px;font-weight:600}

        .fcard{background:${G.bgLight};border:1px solid ${G.border};border-radius:4px;padding:30px 22px;text-align:center;transition:all 0.35s}
        .fcard:hover{border-color:${G.borderHover};background:${G.bgLighter};transform:translateY(-5px);box-shadow:0 12px 36px rgba(0,0,0,0.3)}

        .cat-pill{background:${G.bgLight};border:1px solid ${G.border};border-radius:40px;padding:10px 22px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;transition:all 0.3s;font-family:'Jost',sans-serif;font-size:12px;letter-spacing:0.1em;color:${G.textMid}}
        .cat-pill:hover{border-color:${G.gold};color:${G.goldLight};background:${G.bgLighter};transform:translateY(-2px)}

        .orn{display:flex;align-items:center;gap:12px;margin-bottom:20px}
        .orn::before,.orn::after{content:'';flex:1;height:1px;background:linear-gradient(to right,transparent,${G.gold})}
        .orn::after{background:linear-gradient(to left,transparent,${G.gold})}

        @keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        .hero-seq>*{animation:fadeInUp 1s ease both}
        .hero-seq>*:nth-child(1){animation-delay:0.1s}
        .hero-seq>*:nth-child(2){animation-delay:0.3s}
        .hero-seq>*:nth-child(3){animation-delay:0.55s}
        .hero-seq>*:nth-child(4){animation-delay:0.75s}
        .hero-seq>*:nth-child(5){animation-delay:0.95s}

        @keyframes shimmerGold{0%{background-position:-400px 0}100%{background-position:400px 0}}
        .gold-shimmer{background:linear-gradient(90deg,${G.gold} 0%,${G.goldPale} 45%,${G.gold} 55%,${G.goldLight} 100%);background-size:400px 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmerGold 3.5s linear infinite}

        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes pulse{0%,100%{opacity:0.5}50%{opacity:1}}

        @keyframes rotateSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

        .mobile-menu{display:none;flex-direction:column;gap:18px;padding:24px 28px;background:${G.bgMid};border-bottom:1px solid ${G.border}}
        .mobile-menu.open{display:flex}
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px}
        .hamburger span{width:22px;height:1.5px;background:${G.gold};display:block;border-radius:2px;transition:all 0.3s}

        @media(max-width:768px){
          .coll-row{flex-direction:column!important}
          .about-flex{flex-direction:column!important}
          .feat-grid{grid-template-columns:1fr 1fr!important}
          .hero-title{font-size:clamp(40px,11vw,70px)!important}
          .nav-links{display:none!important}
          .hamburger{display:flex!important}
          .stats-row{gap:20px!important}
          .cat-pills{justify-content:center!important}
          .contact-flex{flex-direction:column!important}
          .footer-top{flex-direction:column!important}
          .hero-section{padding:80px 24px 50px!important}
          .about-flex{padding:0!important}
        }
      `}</style>

      {/* ══ NAV ══ */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:300, height:72, padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", background: scrolled ? "rgba(13,40,24,0.97)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? `1px solid ${G.border}` : "none", transition:"all 0.4s" }}>
        <div onClick={() => scrollTo("home")} style={{ cursor:"pointer", display:"flex", alignItems:"center", gap:12 }}>
          <img src={logoImg} alt="Evalnila Logo" style={{ height:48, width:48, borderRadius:"50%", objectFit:"cover", border:`1.5px solid ${G.gold}`, boxShadow:`0 0 16px rgba(201,168,76,0.35)` }} />
          <div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, fontStyle:"italic", color:G.goldLight, letterSpacing:"0.1em" }}>Evalnila</div>
            <div style={{ fontFamily:"'Jost',sans-serif", fontSize:7.5, letterSpacing:"0.38em", color:G.textMuted, textTransform:"uppercase" }}>Designers</div>
          </div>
        </div>

        <div className="nav-links" style={{ display:"flex", gap:34, alignItems:"center" }}>
          {NAV_LINKS.map(n => (
            <span key={n} className={`nl${activeNav===n?" on":""}`} onClick={() => scrollTo(n.toLowerCase())}>{n}</span>
          ))}
          <button className="btn-gold" style={{ padding:"9px 22px", fontSize:"10px" }} onClick={() => scrollTo("contact")}>Book Now</button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(o => !o)}>
          <span style={{ transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} style={{ position:"fixed", top:72, left:0, right:0, zIndex:299 }}>
        {NAV_LINKS.map(n => (
          <span key={n} className="nl" onClick={() => scrollTo(n.toLowerCase())} style={{ fontSize:14 }}>{n}</span>
        ))}
        <button className="btn-gold" style={{ alignSelf:"flex-start", padding:"11px 28px" }} onClick={() => scrollTo("contact")}>Book Now</button>
      </div>

      {/* ══ HERO ══ */}
      <section id="home" style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 68% 50%, ${G.bgMid} 0%, ${G.bg} 65%)` }} />

        {/* Watermark logo */}
        <div style={{ position:"absolute", right:"-3%", top:"50%", transform:"translateY(-50%)", width:"46%", aspectRatio:"1", borderRadius:"50%", overflow:"hidden", opacity:0.12 }}>
          <img src={logoImg} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        </div>

        {/* Crescent rings echo */}
        <div style={{ position:"absolute", right:"8%", top:"10%", width:200, height:200, borderRadius:"50%", border:`1px solid rgba(201,168,76,0.18)` }} />
        <div style={{ position:"absolute", right:"13%", top:"15%", width:130, height:130, borderRadius:"50%", border:`1px solid rgba(201,168,76,0.1)` }} />

        {/* Gold dust dots */}
        {[{t:"20%",l:"6%",s:5,d:0},{t:"70%",l:"4%",s:3,d:1},{t:"38%",l:"92%",s:4,d:2},{t:"82%",l:"87%",s:3,d:0.5},{t:"55%",l:"52%",s:4,d:1.5}].map((p,i) => (
          <div key={i} style={{ position:"absolute", top:p.t, left:p.l, width:p.s, height:p.s, borderRadius:"50%", background:G.gold, opacity:0.4, animation:`pulse ${2+i*0.4}s ease-in-out infinite`, animationDelay:`${p.d}s` }} />
        ))}

        <div className="hero-seq hero-section" style={{ position:"relative", zIndex:2, padding:"100px 52px 60px", maxWidth:700 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(201,168,76,0.1)", border:`1px solid ${G.border}`, borderRadius:3, padding:"7px 18px", marginBottom:28 }}>
            <span style={{ fontSize:13 }}>✦</span>
            <span style={{ fontFamily:"'Jost',sans-serif", fontSize:10, letterSpacing:"0.28em", color:G.gold, textTransform:"uppercase" }}>Pethappampatti, Tiruppur · Est. Boutique</span>
          </div>

          <h1 className="hero-title" style={{ fontSize:"clamp(46px, 6vw, 90px)", fontWeight:700, fontStyle:"italic", lineHeight:1.01, letterSpacing:"-0.01em", marginBottom:20 }}>
            <span className="gold-shimmer">Elegance</span><br />
            <span style={{ color:G.cream, fontWeight:300 }}>Woven Into</span><br />
            <span className="gold-shimmer">Every Thread</span>
          </h1>

          {/* Category pills */}
          <div className="cat-pills" style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:28 }}>
            {CATEGORIES.map(c => (
              <span key={c.label} className="cat-pill">{c.icon} {c.label}</span>
            ))}
          </div>

          <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, lineHeight:1.88, color:G.textMid, marginBottom:34, maxWidth:480 }}>
            Discover handcrafted Kurtis, Sarees, Maxis, Co-ord Sets, Crop-Skirt & Western Wear — where Indian heritage meets contemporary elegance.
          </p>

          <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:46 }}>
            <button className="btn-gold" onClick={() => scrollTo("collections")}>Explore Collection</button>
            <button className="btn-outline" onClick={() => scrollTo("about")}>Our Story</button>
          </div>

          <div className="stats-row" style={{ display:"flex", gap:36, flexWrap:"wrap" }}>
            {[["500+","Happy Clients"],["200+","Designs"],["5★","Rated Boutique"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:700, color:G.gold }}>{n}</div>
                <div style={{ fontFamily:"'Jost',sans-serif", fontSize:9, letterSpacing:"0.2em", color:G.textMuted, textTransform:"uppercase", marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, zIndex:3 }}>
          <span style={{ fontFamily:"'Jost',sans-serif", fontSize:9, letterSpacing:"0.32em", color:G.textMuted, textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:40, background:`linear-gradient(to bottom,${G.gold},transparent)` }} />
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section style={{ padding:"56px 52px", background:G.bgMid, borderTop:`1px solid ${G.border}`, borderBottom:`1px solid ${G.border}` }}>
        <div {...rv("feat")} style={{ maxWidth:1100, margin:"0 auto" }}>
          <div className="feat-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
            {FEATURES.map((f,i) => (
              <div key={i} className="fcard" style={{ transitionDelay:`${i*0.1}s` }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, color:G.gold, marginBottom:12 }}>{f.icon}</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontWeight:600, fontStyle:"italic", color:G.goldPale, marginBottom:7 }}>{f.title}</div>
                <div style={{ fontFamily:"'Jost',sans-serif", fontSize:12, color:G.textMuted, lineHeight:1.65 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" style={{ padding:"100px 52px", background:G.bg }}>
        <div className="about-flex" {...rv("about")} style={{ maxWidth:1150, margin:"0 auto", display:"flex", gap:72, alignItems:"center" }}>
          <div style={{ flex:1, position:"relative" }}>
            <div style={{ borderRadius:4, overflow:"hidden", border:`1px solid ${G.border}`, boxShadow:`0 20px 60px rgba(0,0,0,0.45)` }}>
              <img src={logoImg} alt="Eval Designers" style={{ width:"100%", aspectRatio:"1", objectFit:"cover" }} />
            </div>
            <div style={{ position:"absolute", top:-14, left:-14, width:70, height:70, border:`1px solid ${G.border}`, borderRadius:2 }} />
            <div style={{ position:"absolute", bottom:-14, right:-14, width:100, height:100, border:`1px solid rgba(201,168,76,0.13)`, borderRadius:2 }} />
          </div>

          <div style={{ flex:1.2 }}>
            <div className="orn"><span style={{ fontFamily:"'Jost',sans-serif", fontSize:9, letterSpacing:"0.35em", color:G.gold, textTransform:"uppercase", whiteSpace:"nowrap" }}>✦ Our Story</span></div>
            <h2 style={{ fontSize:"clamp(32px,3.8vw,50px)", fontWeight:600, fontStyle:"italic", lineHeight:1.15, color:G.goldPale }}>
              Crafted with<br /><em style={{ color:G.gold }}>Passion</em> & Heritage
            </h2>
            <div style={{ width:52, height:2, background:`linear-gradient(to right,${G.gold},transparent)`, borderRadius:2, margin:"18px 0 22px" }} />
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, lineHeight:1.95, color:G.textMid, marginBottom:18 }}>
              Evalnila Designers is Pethappampatti's premier women's boutique, located in this rapidly developing town in the Udumalpet taluk of Tiruppur district, Tamil Nadu (Pin: 642205).
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, lineHeight:1.95, color:G.textMid, marginBottom:36 }}>
              We bring you the finest Kurtis, Maxis, Co-ord Sets, Crop-Skirt, Western Wear & Sarees — each piece handpicked for the modern Indian woman who loves her roots and her style.
            </p>
            <div style={{ display:"flex", gap:30, marginBottom:40 }}>
              {[["6+","Categories"],["200+","Designs"],["500+","Clients"]].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:700, color:G.gold }}>{n}</div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:9, letterSpacing:"0.18em", color:G.textMuted, textTransform:"uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
            <button className="btn-gold" onClick={() => document.getElementById("collections")?.scrollIntoView({ behavior:"smooth" })}>View Collection ✦</button>
          </div>
        </div>
      </section>

      {/* ══ COLLECTIONS ══ */}
      <section id="collections" style={{ padding:"90px 52px", background:G.bgMid }}>
        <div style={{ maxWidth:1150, margin:"0 auto" }}>
          <div {...rv("ch")} style={{ textAlign:"center", marginBottom:54 }}>
            <div className="orn" style={{ maxWidth:420, margin:"0 auto 16px" }}><span style={{ fontFamily:"'Jost',sans-serif", fontSize:9, letterSpacing:"0.35em", color:G.gold, textTransform:"uppercase", whiteSpace:"nowrap" }}>✦ Our Collections</span></div>
            <h2 style={{ fontSize:"clamp(28px,3.5vw,46px)", fontWeight:600, fontStyle:"italic", color:G.goldPale }}>
              Discover Our <em style={{ color:G.gold }}>Latest Designs</em>
            </h2>
          </div>

          <div className="coll-row" {...rv("cc")} style={{ display:"flex", gap:18 }}>
            {COLLECTIONS.map((c,i) => (
              <div key={i} className="ccard" onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)}>
                <img src={c.img} alt={c.title} />
                <div style={{ position:"absolute", top:14, right:14, width:26, height:26, border:`1px solid rgba(201,168,76,0.5)`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:G.gold, opacity: hoveredCard===i ? 1 : 0.45, transition:"opacity 0.3s" }}>✦</div>
                <div className="ccard-overlay">
                  <span className="ctag">{c.tag}</span>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:600, fontStyle:"italic", lineHeight:1.2, color:G.goldPale }}>{c.title}</h3>
                  <p style={{ fontFamily:"'Jost',sans-serif", fontSize:10, letterSpacing:"0.18em", color:G.textMuted, textTransform:"uppercase", marginTop:5 }}>{c.subtitle}</p>
                  <div style={{ marginTop:14, height:1, background:`linear-gradient(to right,${G.gold},transparent)`, transform: hoveredCard===i ? "scaleX(1)" : "scaleX(0)", transition:"transform 0.45s", transformOrigin:"left" }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:"center", marginTop:44 }}>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12, color:G.textMuted, letterSpacing:"0.14em", marginBottom:18 }}>More designs available in store & on Instagram</p>
            <button className="btn-outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}>Enquire Now ✦</button>
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div style={{ background:`${G.bgLight}`, borderTop:`1px solid ${G.border}`, borderBottom:`1px solid ${G.border}`, padding:"13px 0", overflow:"hidden", whiteSpace:"nowrap" }}>
        <div style={{ display:"inline-block", animation:"marquee 26s linear infinite" }}>
          {Array(6).fill("✦ EVALNILA DESIGNERS   ✦   KURTIS   ✦   MAXIS   ✦   CO-ORD SETS   ✦   CROP-SKIRT   ✦   WESTERN WEAR   ✦   SAREES   ✦   PETHAPPAMPATTI, TIRUPPUR   ✦   ").map((t,i) => (
            <span key={i} style={{ fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:"0.26em", color:G.gold }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ padding:"100px 52px", background:G.bg }}>
        <div style={{ maxWidth:960, margin:"0 auto" }}>
          <div {...rv("cth")} style={{ textAlign:"center", marginBottom:58 }}>
            <div className="orn" style={{ maxWidth:420, margin:"0 auto 16px" }}><span style={{ fontFamily:"'Jost',sans-serif", fontSize:9, letterSpacing:"0.35em", color:G.gold, textTransform:"uppercase", whiteSpace:"nowrap" }}>✦ Get in Touch</span></div>
            <h2 style={{ fontSize:"clamp(28px,3.5vw,46px)", fontWeight:600, fontStyle:"italic", color:G.goldPale }}>
              Visit Us or <em style={{ color:G.gold }}>Reach Out</em>
            </h2>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, color:G.textMuted, marginTop:12 }}>Walk in, call us, or DM us on Instagram — we're always happy to help.</p>
          </div>

          <div className="contact-flex" {...rv("ctc")} style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap", marginBottom:48 }}>
            {[
              { icon:"📍", label:"Location",  val:"Pethappampatti, Tiruppur",    sub:"Udumalpet Taluk · PIN 642205" },
              { icon:"📞", label:"Phone",     val:"+91 99448 73489",              sub:"Call anytime 9am – 8pm" },
              { icon:"📸", label:"Instagram", val:"@evalnila",                   sub:"DM us for orders & inquiries" },
            ].map((c,i) => (
              <div key={i} style={{ flex:"1 1 260px", maxWidth:290, background:G.bgLight, border:`1px solid ${G.border}`, borderRadius:4, padding:"22px 20px", display:"flex", gap:14, alignItems:"flex-start", transition:"all 0.3s", cursor:"default" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = G.borderHover; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = G.border;      e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ width:46, height:46, borderRadius:"50%", background:`linear-gradient(135deg,${G.bgLighter},${G.bgMid})`, border:`1px solid ${G.border}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:8.5, letterSpacing:"0.25em", color:G.gold, textTransform:"uppercase", marginBottom:4 }}>{c.label}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontWeight:600, color:G.goldPale }}>{c.val}</div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:G.textMuted, marginTop:3 }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:"center" }}>
            <a href="https://wa.me/919944873489" target="_blank" rel="noreferrer" style={{ textDecoration:"none" }}>
              <button className="btn-gold" style={{ fontSize:"12px", padding:"16px 52px" }}>💬 WhatsApp Us — 99448 73489</button>
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background:G.bgMid, borderTop:`1px solid ${G.border}`, padding:"52px 52px 28px" }}>
        <div style={{ maxWidth:1000, margin:"0 auto" }}>
          <div className="footer-top" style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:36, marginBottom:44 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
                <img src={logoImg} alt="Logo" style={{ width:44, height:44, borderRadius:"50%", objectFit:"cover", border:`1px solid ${G.border}` }} />
                <div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, fontStyle:"italic", color:G.goldLight }}>Evalnila</div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:7.5, letterSpacing:"0.38em", color:G.textMuted, textTransform:"uppercase" }}>Designers</div>
                </div>
              </div>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12, color:G.textMuted, lineHeight:1.85, maxWidth:240 }}>
                Women's clothing boutique in Pethappampatti, Tiruppur — crafted for the modern Indian woman.
              </p>
            </div>

            <div>
              <div style={{ fontFamily:"'Jost',sans-serif", fontSize:9, letterSpacing:"0.3em", color:G.gold, textTransform:"uppercase", marginBottom:16 }}>Quick Links</div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {NAV_LINKS.map(n => (
                  <span key={n} onClick={() => scrollTo(n.toLowerCase())} style={{ fontFamily:"'Jost',sans-serif", fontSize:13, color:G.textMuted, cursor:"pointer", transition:"color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = G.gold}
                    onMouseLeave={e => e.target.style.color = G.textMuted}
                  >{n}</span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontFamily:"'Jost',sans-serif", fontSize:9, letterSpacing:"0.3em", color:G.gold, textTransform:"uppercase", marginBottom:16 }}>Collections</div>
              <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                {CATEGORIES.map(c => (
                  <span key={c.label} style={{ fontFamily:"'Jost',sans-serif", fontSize:12, color:G.textMuted }}>{c.icon} {c.label}</span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontFamily:"'Jost',sans-serif", fontSize:9, letterSpacing:"0.3em", color:G.gold, textTransform:"uppercase", marginBottom:16 }}>Connect</div>
              <div style={{ fontFamily:"'Jost',sans-serif", fontSize:13, color:G.textMuted, lineHeight:2.2 }}>
                📸 @evalnila<br />
                📞 +91 99448 73489<br />
                📍 Pethappampatti<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Tiruppur – 642205
              </div>
            </div>
          </div>

          <div style={{ borderTop:`1px solid rgba(201,168,76,0.12)`, paddingTop:20, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
            <span style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:"rgba(138,170,138,0.4)", letterSpacing:"0.08em" }}>© 2025 Evalnila Designers. All rights reserved.</span>
            <span style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:G.textMuted, letterSpacing:"0.1em" }}>✦ Pethappampatti, Tiruppur, Tamil Nadu – 642205</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
