import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import bakeryLineup from "@/assets/bakery-lineup.png";
import chocoCrunchSvg from "@/assets/choco-crunch.svg";
import crumbTheoryLogo from "@/assets/crumb-theory-logo.png";
import crumbTheoryLogoCream from "@/assets/crumb-theory-logo-cream.png";
import heroBakeryPhoto from "@/assets/hero-bakery-photo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crumb Theory | Homemade Bakes" },
      {
        name: "description",
        content: "Homemade brownies, blondies, cakes and biscuit treats, baked in small batches.",
      },
      { property: "og:title", content: "Crumb Theory | Homemade Bakes" },
      {
        property: "og:description",
        content: "Homemade brownies, blondies, cakes and biscuit treats, baked in small batches.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const brownies = [
  {
    name: "Fudgy Brownies",
    description: "Signature chocolate brownies with a dense gooey texture.",
    prices: [
      ["250g", "₹350"],
      ["500g", "₹600"],
      ["1kg", "₹1,100"],
    ],
    imagePosition: "5% center",
  },
  {
    name: "Rich Blondies",
    description: "Buttery golden blondies with a soft chewy bite.",
    prices: [
      ["250g", "₹350"],
      ["500g", "₹600"],
      ["1kg", "₹1,100"],
    ],
    imagePosition: "35% center",
  },
  {
    name: "Mocha Brownies",
    description: "Rich chocolate brownies infused with coffee for a bold, indulgent flavour.",
    prices: [
      ["250g", "₹350"],
      ["500g", "₹600"],
    ],
    imagePosition: "5% center",
  },
  {
    name: "Loaded Brownies",
    description:
      "Fudgy brownies topped with rich chocolate ganache and premium chocolates, made for every celebration.",
    prices: [
      ["250g", "₹450"],
      ["500g", "₹700"],
    ],
    imagePosition: "66% center",
  },
  {
    name: "Loaded Blondies",
    description:
      "Buttery blondies topped with rich chocolate ganache and premium chocolates, made for every celebration.",
    prices: [
      ["250g", "₹450"],
      ["500g", "₹700"],
    ],
    imagePosition: "35% center",
  },
  {
    name: "Kinder Brownie Tub",
    description:
      "Fudgy brownie bites layered with creamy Kinder filling for the perfect chocolate indulgence.",
    prices: [["350g", "₹400"]],
    imagePosition: "66% center",
  },
];

const cakes = [
  {
    name: "Classic Vanilla Cake",
    description: "A delicate vanilla aroma and comforting flavoured cake.",
    prices: [
      ["400g", "₹350"],
      ["800g", "₹750"],
    ],
  },
  {
    name: "Classic Butter Cake",
    description: "A simple, soft and rich buttery classic cake.",
    prices: [
      ["400g", "₹350"],
      ["800g", "₹750"],
    ],
  },
  {
    name: "Classic Lemon Cake",
    description: "A soft classic cake with a bright, fresh lemon flavour.",
    prices: [
      ["400g", "₹350"],
      ["800g", "₹750"],
    ],
  },
  {
    name: "Vanilla Cream Cake",
    description: "Classic vanilla cake finished with a smooth cream topping.",
    prices: [
      ["400g", "₹400"],
      ["800g", "₹800"],
    ],
  },
  {
    name: "Butter Cream Cake",
    description: "Rich butter cake finished with a soft, creamy topping.",
    prices: [
      ["400g", "₹400"],
      ["800g", "₹800"],
    ],
  },
];

const littleIndulgences = [
  {
    name: "Assorted Biscuit Box",
    description: "A delightful selection of our finest handmade biscuits.",
    quantityLabel: "Qty",
    prices: [["Box of 12", "₹400"]],
    imagePosition: "85% center",
  },
  {
    name: "Choco Fruit-Nut Crunch",
    description:
      "Long finger-shaped chocolate crunches packed with a delightful mix of dry fruits and nuts.",
    quantityLabel: "Qty",
    prices: [["10 pcs", "₹250"]],
    customImage: chocoCrunchSvg,
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="mini-logo" href="#home" aria-label="Crumb Theory home">
        <img src={crumbTheoryLogo} alt="Crumb Theory — Made With Love" />
      </a>
      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#order">Order</a>
      </nav>
    </header>
  );
}

function MenuItemRow({ item, defaultQuantityLabel = "Grams" }) {
  const imgSrc = item.customImage || bakeryLineup;
  return (
    <article className="menu-item-v2">
      <div className="item-pic-v2" aria-hidden="true">
        <img
          src={imgSrc}
          alt=""
          style={{
            objectPosition: item.imagePosition || "center center",
            objectFit: item.customImage ? "contain" : "cover",
            padding: item.customImage ? "3px" : "0",
          }}
        />
      </div>
      <div className="item-copy-v2">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
      </div>
      <div className="price-table-v2">
        <div className="price-head-v2">
          <span>{item.quantityLabel || defaultQuantityLabel}</span>
          <span>Price</span>
        </div>
        {item.prices.map(([size, price]) => (
          <div className="price-row-v2" key={size}>
            <span>{size}</span>
            <strong>{price}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

function MenuCard({ title, items, notice }) {
  const isCakes = title === "Cakes";
  return (
    <div className={`menu-card-v2 ${isCakes ? "cakes-card" : "brownies-card"}`}>
      <div className="menu-title-row-v2">
        <h3>{title}</h3>
        <span className="menu-title-line" />
      </div>
      <div className="menu-items-list-v2">
        {items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </div>
      {notice && (
        <p className="notice-v2">{notice}</p>
      )}
    </div>
  );
}

function LittleIndulgencesCard() {
  return (
    <div className="menu-card-v2 little-indulgences-card">
      <div className="menu-title-row-v2">
        <h3>Little Indulgences</h3>
        <span className="menu-title-line" />
      </div>
      <div className="little-indulgences-items">
        {littleIndulgences.map((item) => (
          <MenuItemRow key={item.name} item={item} defaultQuantityLabel="Qty" />
        ))}
      </div>
    </div>
  );
}

function PlaceAnOrderCard() {
  return (
    <div className="order-card-v2">
      <div className="order-botanical order-botanical-left" aria-hidden="true">
        <svg width="60" height="130" viewBox="0 0 60 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 120 C30 80 10 60 10 30" stroke="#C58B55" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          <path d="M30 100 C20 90 8 85 5 70" stroke="#C58B55" strokeWidth="0.8" strokeLinecap="round" opacity="0.45"/>
          <path d="M30 80 C20 72 12 65 8 52" stroke="#C58B55" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
          <path d="M30 60 C22 55 15 48 14 38" stroke="#C58B55" strokeWidth="0.8" strokeLinecap="round" opacity="0.35"/>
          <ellipse cx="10" cy="70" rx="7" ry="4" transform="rotate(-20 10 70)" stroke="#C58B55" strokeWidth="0.7" fill="none" opacity="0.4"/>
          <ellipse cx="8" cy="52" rx="7" ry="3.5" transform="rotate(-30 8 52)" stroke="#C58B55" strokeWidth="0.7" fill="none" opacity="0.35"/>
          <ellipse cx="14" cy="38" rx="6" ry="3" transform="rotate(-15 14 38)" stroke="#C58B55" strokeWidth="0.7" fill="none" opacity="0.3"/>
        </svg>
      </div>
      <div className="order-botanical order-botanical-right" aria-hidden="true">
        <svg width="60" height="130" viewBox="0 0 60 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 120 C30 80 50 60 50 30" stroke="#C58B55" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          <path d="M30 100 C40 90 52 85 55 70" stroke="#C58B55" strokeWidth="0.8" strokeLinecap="round" opacity="0.45"/>
          <path d="M30 80 C40 72 48 65 52 52" stroke="#C58B55" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
          <path d="M30 60 C38 55 45 48 46 38" stroke="#C58B55" strokeWidth="0.8" strokeLinecap="round" opacity="0.35"/>
          <ellipse cx="50" cy="70" rx="7" ry="4" transform="rotate(20 50 70)" stroke="#C58B55" strokeWidth="0.7" fill="none" opacity="0.4"/>
          <ellipse cx="52" cy="52" rx="7" ry="3.5" transform="rotate(30 52 52)" stroke="#C58B55" strokeWidth="0.7" fill="none" opacity="0.35"/>
          <ellipse cx="46" cy="38" rx="6" ry="3" transform="rotate(15 46 38)" stroke="#C58B55" strokeWidth="0.7" fill="none" opacity="0.3"/>
        </svg>
      </div>
      <div className="order-card-inner">
        <span className="order-eyebrow">Get in Touch</span>
        <h3 className="order-heading">Place an Order</h3>
        <p className="order-subtext">
          Pre-orders need 4–5 days notice. Reach out with your flavour, size and date, and we will take it from there.
        </p>
        <div className="contact-grid-v2">
          <a
            href="https://instagram.com/crumbtheory.store"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-v2"
          >
            <Instagram className="contact-icon-v2" />
            <strong>Instagram DM</strong>
            <span>@crumbtheory.store</span>
          </a>
          <a href="tel:+916238996329" className="contact-card-v2">
            <Phone className="contact-icon-v2" />
            <strong>Call / WhatsApp</strong>
            <span>+91 62389 96329</span>
          </a>
          <a href="mailto:crumbtheory.bylisa@gmail.com" className="contact-card-v2">
            <Mail className="contact-icon-v2" />
            <strong>Email</strong>
            <span>crumbtheory.bylisa@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function WheatIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="17" stroke="#51250F" strokeWidth="1.2" fill="none" />
      <path d="M18 28V12" stroke="#51250F" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M18 20C15 18 14 15 14 13C16 14 17.5 16.5 18 20Z" fill="#51250F" opacity="0.85" />
      <path d="M18 20C21 18 22 15 22 13C20 14 18.5 16.5 18 20Z" fill="#51250F" opacity="0.85" />
      <path d="M18 16C15.5 14.5 14.5 12 14.5 10C16.2 10.8 17.5 13 18 16Z" fill="#51250F" opacity="0.85" />
      <path d="M18 16C20.5 14.5 21.5 12 21.5 10C19.8 10.8 18.5 13 18 16Z" fill="#51250F" opacity="0.85" />
      <line x1="16" y1="28" x2="20" y2="28" stroke="#51250F" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function RealIngredientsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Farm fresh egg silhouette */}
      <path
        d="M18 5.5 C12.5 5.5 8 13.5 8 21.5 C8 27 12.2 31 18 31 C23.8 31 28 27 28 21.5 C28 13.5 23.5 5.5 18 5.5 Z"
        stroke="#51250F"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Gentle organic botanical leaf/sprig inside indicating 100% natural pure ingredients */}
      <path d="M18 27 V14" stroke="#51250F" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M18 22 C14.5 20.5 13 18 13.5 15.5 C15.5 15.5 17 18 18 22 Z" fill="#51250F" opacity="0.85" />
      <path d="M18 17 C21.5 15.5 23 13 22.5 10.5 C20.5 10.5 19 13 18 17 Z" fill="#51250F" opacity="0.85" />
      <circle cx="18" cy="11.5" r="1.2" fill="#51250F" />
    </svg>
  );
}

function SmallBatchesIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Small-batch artisan baking tin / cup */}
      <path d="M11 17 H25 L23.5 29.5 H12.5 L11 17 Z" stroke="#51250F" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      {/* Gentle batch rise */}
      <path d="M9.5 17 C9.5 12 13 8 18 8 C23 8 26.5 12 26.5 17" stroke="#51250F" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Hand-whisked swirl */}
      <path d="M12 17 C14 15 16 16 18 14.5 C20 16 22 15 24 17" stroke="#51250F" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Little batch accent */}
      <path d="M18 4 V6.5" stroke="#51250F" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M14.5 5 C14.8 5.8 14.8 6.5 14.2 7.2" stroke="#51250F" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
      <path d="M21.5 5 C21.2 5.8 21.2 6.5 21.8 7.2" stroke="#51250F" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

function BakerySeparator() {
  return (
    <div className="bakery-separator" aria-hidden="true">
      <div className="bakery-sep-line bakery-sep-line-left" />
      <div className="bakery-sep-ornament">
        <svg
          width="140"
          height="28"
          viewBox="0 0 140 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Symmetrical fine ornament lines */}
          <line x1="2" y1="14" x2="34" y2="14" stroke="#C58B55" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
          <line x1="106" y1="14" x2="138" y2="14" stroke="#C58B55" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
          
          {/* Outer accent dots */}
          <circle cx="6" cy="14" r="1.5" fill="#C58B55" />
          <circle cx="134" cy="14" r="1.5" fill="#C58B55" />

          {/* Left vintage filigree flourish */}
          <path
            d="M30 14 C36 10, 42 9, 48 14 C44 16, 40 15, 38 13.5"
            stroke="#C58B55"
            strokeWidth="0.9"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="48" cy="14" r="1.2" fill="#C58B55" />

          {/* Right vintage filigree flourish */}
          <path
            d="M110 14 C104 10, 98 9, 92 14 C96 16, 100 15, 102 13.5"
            stroke="#C58B55"
            strokeWidth="0.9"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="92" cy="14" r="1.2" fill="#C58B55" />

          {/* Central miniature rolling pin */}
          {/* Left handle */}
          <path
            d="M52 14 L55 14 M53.5 12.5 C52.2 12.5, 51.5 13.2, 51.5 14 C51.5 14.8, 52.2 15.5, 53.5 15.5 L55 15.5"
            stroke="#51250F"
            strokeWidth="0.95"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Main roller barrel */}
          <rect
            x="55"
            y="10.5"
            width="30"
            height="7"
            rx="1.2"
            stroke="#51250F"
            strokeWidth="1.1"
            fill="#FFF9F0"
          />
          {/* Delicate woodgrain lines */}
          <line x1="59" y1="12.8" x2="81" y2="12.8" stroke="#C58B55" strokeWidth="0.65" strokeLinecap="round" opacity="0.75" />
          <line x1="59" y1="15.2" x2="81" y2="15.2" stroke="#C58B55" strokeWidth="0.65" strokeLinecap="round" opacity="0.75" />
          {/* Right handle */}
          <path
            d="M85 14 L88 14 M86.5 12.5 C87.8 12.5, 88.5 13.2, 88.5 14 C88.5 14.8, 87.8 15.5, 86.5 15.5 L85 15.5"
            stroke="#51250F"
            strokeWidth="0.95"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="bakery-sep-line bakery-sep-line-right" />
    </div>
  );
}

function Index() {
  return (
    <main id="home">
      <Header />
      <section className="hero-new">
        <div className="hero-new-inner">
          <div className="hero-text">
            <span className="hero-eyebrow">Small-Batch Home Baking</span>
            <div className="hero-eyebrow-line" aria-hidden="true"></div>
            <div className="hero-brand-logo">
              <img src={crumbTheoryLogo} alt="Crumb Theory — Made With Love" />
            </div>
            <h1 className="hero-headline">
              Little treats,<br />made with love.
            </h1>
            <p className="hero-subtext">
              Homemade, no-maida brownies, cakes and biscuit treats,<br className="desktop-break" />
              baked fresh in small batches.
            </p>
            <div className="hero-actions-new">
              <a href="#menu" className="hero-btn-new hero-btn-primary-new">
                View Menu <span aria-hidden="true">→</span>
              </a>
              <a href="#order" className="hero-btn-new hero-btn-secondary-new">
                Order Now <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <img src={heroBakeryPhoto} alt="Freshly baked brownies, butter cake and chocolate chip cookies on a wooden board" />
          </div>
        </div>
        <div className="hero-bottom-divider" aria-hidden="true"></div>
      </section>

      <section className="values-strip" aria-label="Our bakery values">
        <div className="values-line-left" aria-hidden="true"></div>
        <div className="values-items">
          <div className="values-item">
            <WheatIcon />
            <span>NO MAIDA</span>
          </div>
          <div className="values-dot" aria-hidden="true">•</div>
          <div className="values-item">
            <RealIngredientsIcon />
            <span>REAL INGREDIENTS</span>
          </div>
          <div className="values-dot" aria-hidden="true">•</div>
          <div className="values-item">
            <SmallBatchesIcon />
            <span>BAKED IN SMALL BATCHES</span>
          </div>
        </div>
        <div className="values-line-right" aria-hidden="true"></div>
      </section>

      <BakerySeparator />

      {/* ─── MENU SECTION ─── */}
      <section className="menu-section-v2" id="menu">
        <div className="menu-header-v2">
          <div className="menu-header-deco menu-header-deco-left" aria-hidden="true">
            <svg width="90" height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M85 14 C70 5, 50 5, 30 14 C15 20, 5 18, 2 14" stroke="#C58B55" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"/>
              <path d="M80 10 C65 4, 48 6, 35 12" stroke="#C58B55" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.45"/>
              <path d="M75 18 C62 23, 48 22, 38 17" stroke="#C58B55" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.45"/>
              <path d="M20 8 C18 6, 16 6, 15 8 C14 10, 15 12, 17 12 C19 12, 21 10, 20 8Z" stroke="#C58B55" strokeWidth="0.8" fill="#C58B55" fillOpacity="0.3" opacity="0.7"/>
            </svg>
          </div>
          <div className="menu-header-text">
            <span className="menu-eyebrow-v2">What's Baking</span>
            <h2 className="menu-title-v2">The Menu</h2>
          </div>
          <div className="menu-header-deco menu-header-deco-right" aria-hidden="true">
            <svg width="90" height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 14 C20 5, 40 5, 60 14 C75 20, 85 18, 88 14" stroke="#C58B55" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"/>
              <path d="M10 10 C25 4, 42 6, 55 12" stroke="#C58B55" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.45"/>
              <path d="M15 18 C28 23, 42 22, 52 17" stroke="#C58B55" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.45"/>
              <path d="M70 8 C72 6, 74 6, 75 8 C76 10, 75 12, 73 12 C71 12, 69 10, 70 8Z" stroke="#C58B55" strokeWidth="0.8" fill="#C58B55" fillOpacity="0.3" opacity="0.7"/>
            </svg>
          </div>
        </div>

        <div className="menu-container-v2">
          {/* Top: Brownies & Blondies (left) and Cakes (right) side by side */}
          <div className="menu-columns-v2">
            <MenuCard
              title="Brownies & Blondies"
              items={brownies}
              notice="♡ Frosted versions of Fudgy Brownies, Blondies & Mocha Brownies available for +₹50 ♡"
            />
            <MenuCard title="Cakes" items={cakes} />
          </div>

          {/* Below both columns: Little Indulgences spanning full width */}
          <LittleIndulgencesCard />
        </div>
      </section>

      {/* ─── PLACE AN ORDER: Separate independent full-width section outside the menu ─── */}
      <section className="order-section-standalone" id="order" aria-label="Place an order">
        <div className="order-container-v2">
          <PlaceAnOrderCard />
        </div>
      </section>
      <footer className="footer-v2">
        <div className="footer-scallop" aria-hidden="true" style={{background:"var(--ct-ivory)"}}>
          <svg viewBox="0 0 1440 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{display:"block"}}>
            <path d="M0,36 C60,18 120,0 180,18 C240,36 300,18 360,9 C420,0 480,18 540,27 C600,36 660,18 720,9 C780,0 840,18 900,27 C960,36 1020,18 1080,9 C1140,0 1200,18 1260,27 C1320,36 1380,18 1440,9 L1440,36 Z" fill="#51250F"/>
          </svg>
        </div>
        <div className="footer-inner">
          <div className="footer-deco-left" aria-hidden="true">
            <svg width="70" height="55" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 48 L12 22 M12 22 L22 12 M12 22 L6 14" stroke="#FFF5E5" strokeWidth="1.1" strokeLinecap="round" opacity="0.45"/>
              <path d="M32 48 L32 28 Q37 22 32 16" stroke="#FFF5E5" strokeWidth="1.1" strokeLinecap="round" opacity="0.38"/>
              <circle cx="32" cy="13" r="3.5" stroke="#FFF5E5" strokeWidth="0.9" fill="none" opacity="0.38"/>
              <path d="M52 48 L52 32 Q47 25 52 18 Q57 25 52 32" stroke="#FFF5E5" strokeWidth="0.9" strokeLinecap="round" opacity="0.3"/>
            </svg>
          </div>
          <div className="footer-center">
            <div className="footer-logo" aria-label="Crumb Theory logo">
              <img src={crumbTheoryLogoCream} alt="Crumb Theory — Made With Love" />
            </div>
            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#menu">Menu</a>
              <a href="#order">Order</a>
              <a href="https://instagram.com/crumbtheory.store" target="_blank" rel="noopener noreferrer">Instagram</a>
            </nav>
            <small>© 2026 Crumb Theory · Homemade, no-maida treats</small>
          </div>
          <div className="footer-deco-right" aria-hidden="true">
            <svg width="70" height="55" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 10 C31 6, 25 8, 25 14 C25 20, 35 26, 35 26 C35 26, 45 20, 45 14 C45 8, 39 6, 35 10Z" stroke="#FFF5E5" strokeWidth="0.9" fill="none" opacity="0.4"/>
              <path d="M17 40 C17 36, 13 34, 11 37 C9 40, 11 44, 14 44 C17 44, 19 42, 17 40Z" stroke="#FFF5E5" strokeWidth="0.7" fill="none" opacity="0.3"/>
              <path d="M55 35 C57 31, 61 31, 62 34 C63 37, 61 40, 58 40 C55 40, 53 37, 55 35Z" stroke="#FFF5E5" strokeWidth="0.7" fill="none" opacity="0.3"/>
            </svg>
          </div>
        </div>
      </footer>
    </main>
  );
}

