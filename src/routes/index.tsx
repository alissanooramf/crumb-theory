import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Instagram, Mail, MessageSquare, Phone, Wheat } from "lucide-react";

import bakeryLineup from "@/assets/bakery-lineup.png";
import crumbTheoryLogo from "@/assets/crumb-theory-logo.png";
import partyDecoration from "@/assets/party-decoration.png";
import { Button } from "@/components/ui/button";

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

type MenuItem = {
  name: string;
  description: string;
  prices: Array<[string, string]>;
  imagePosition?: string;
};

const brownies: MenuItem[] = [
  {
    name: "Fudgy Brownies",
    description: "Signature chocolate brownies with a dense gooey texture.",
    prices: [["250g", "₹350"], ["500g", "₹600"]],
    imagePosition: "5% center",
  },
  {
    name: "Rich Blondies",
    description: "Buttery golden blondies with a soft chewy bite.",
    prices: [["250g", "₹350"], ["500g", "₹600"]],
    imagePosition: "35% center",
  },
  {
    name: "Mocha Brownies",
    description: "Rich chocolate brownies infused with coffee for a bold, indulgent flavour.",
    prices: [["250g", "₹350"], ["500g", "₹600"]],
    imagePosition: "5% center",
  },
  {
    name: "Loaded Brownies",
    description: "Fudgy brownies topped with rich chocolate ganache and premium chocolates, made for every celebration.",
    prices: [["250g", "₹450"], ["500g", "₹700"]],
    imagePosition: "66% center",
  },
  {
    name: "Kinder Brownie Tub",
    description: "Fudgy brownie bites layered with creamy kinder filling for the perfect chocolate indulgence.",
    prices: [["350g", "₹400"]],
    imagePosition: "66% center",
  },
];

const cakes: MenuItem[] = [
  { name: "Classic Vanilla Cake", description: "A delicate vanilla aroma and comforting flavoured cake.", prices: [["400g", "₹350"], ["800g", "₹750"]] },
  { name: "Classic Butter Cake", description: "A simple, soft and rich buttery classic cake.", prices: [["400g", "₹350"], ["800g", "₹750"]] },
  { name: "Classic Lemon Cake", description: "A soft classic cake with a bright, fresh lemon flavour.", prices: [["400g", "₹350"], ["800g", "₹750"]] },
  { name: "Vanilla Cream Cake", description: "Classic vanilla cake finished with a smooth cream topping.", prices: [["400g", "₹400"], ["800g", "₹800"]] },
  { name: "Butter Cream Cake", description: "Rich butter cake finished with a soft, creamy topping.", prices: [["400g", "₹400"], ["800g", "₹800"]] },
  { name: "Lemon Cream Cake", description: "Fresh lemon cake finished with a light cream topping.", prices: [["400g", "₹400"], ["800g", "₹800"]] },
];

function Header() {
  return (
    <header className="site-header">
      <a className="mini-logo" href="#home" aria-label="Crumb Theory home">
        <img src={crumbTheoryLogo} alt="Crumb Theory — Made With Love" />
      </a>
      <nav aria-label="Main navigation">
        <a href="#home">Home</a><a href="#menu">Menu</a><a href="#order">Order</a>
      </nav>
    </header>
  );
}

function MenuGroup({ title, items, pictures = false }: { title: string; items: MenuItem[]; pictures?: boolean }) {
  return (
    <div className="menu-card">
      <div className="menu-title-row"><h3>{title}</h3><span /></div>
      {items.map((item) => (
        <article className="menu-item with-picture" key={item.name}>
          <div className="item-picture" aria-hidden="true">
            <img src={bakeryLineup} alt="" style={{ objectPosition: item.imagePosition }} />
          </div>
          <div className="item-copy"><h4>{item.name}</h4><p>{item.description}</p></div>
          <div className="price-table">
            <div className="price-head"><span>Grams</span><span>Price</span></div>
            {item.prices.map(([size, price]) => <div className="price-row" key={size}><span>{size}</span><strong>{price}</strong></div>)}
          </div>
        </article>
      ))}
      {pictures && <p className="notice">♡ Frosted versions of Fudgy Brownies, Blondies &amp; Mocha Brownies available for +₹50 ♡</p>}
    </div>
  );
}

function Index() {
  return (
    <main id="home">
      <Header />
      <section className="hero dot-pattern">
        <img className="bunting" src={partyDecoration} alt="" aria-hidden="true" />
        <div className="brand"><img src={crumbTheoryLogo} alt="Crumb Theory — Made With Love" /><em>crumbs worth remembering</em></div>
        <p className="intro">Homemade, no-maida treats baked in small batches — brownies, cakes<br className="desktop-break" /> and biscuit treats made with love, one order at a time.</p>
        <div className="bakery-visual"><img src={bakeryLineup} alt="Line drawings of a brownie, cake slices and a cupcake" /></div>
        <div className="hero-actions">
          <Button asChild size="lg"><a href="#menu">View Menu</a></Button>
          <Button asChild size="lg" variant="outline"><a href="#order">Order Now</a></Button>
        </div>
      </section>

      <section className="why dot-pattern">
        <div className="section-heading"><span>Why Crumb Theory</span><h2>Baked With Warmth and Intention</h2></div>
        <div className="features">
          <div><Wheat /><h3>No-Maida, All Love</h3><p>Every bake is made from scratch with no refined maida — just honest ingredients, done right.</p></div>
          <div><CalendarDays /><h3>Pre-Order, 4–5 Days</h3><p>Each batch is baked fresh to order — plan ahead and reach out a few days before you need it.</p></div>
          <div><MessageSquare /><h3>DM to Order</h3><p>Sizes, flavours or a custom occasion cake — just send a message and we’ll sort the details together.</p></div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading"><span>What’s Baking</span><h2>The Menu</h2></div>
        <MenuGroup title="Brownies & Blondies" items={brownies} pictures />
        <MenuGroup title="Cakes" items={cakes} />
        <MenuGroup title="Biscuit Cakes" items={[{ name: "Assorted Biscuit Box", description: "A delightful selection of our finest handmade biscuits.", prices: [["Box of 12", "₹400"]] }]} />
      </section>

      <section className="order-section dot-pattern" id="order">
        <div className="section-heading"><span>Get In Touch</span><h2>Place an Order</h2></div>
        <p>Pre-orders need 4–5 days notice. Reach out with your flavour, size and<br className="desktop-break" /> date, and we’ll take it from there.</p>
        <div className="contact-grid">
          <a href="https://instagram.com/crumbtheory.store"><Instagram /><strong>Instagram DM</strong><span>@crumbtheory.store</span></a>
          <a href="tel:+916238996329"><Phone /><strong>Call / WhatsApp</strong><span>+91 62389 96329</span></a>
          <a href="mailto:crumbtheory.bylisa@gmail.com"><Mail /><strong>Email</strong><span>crumbtheory.bylisa@gmail.com</span></a>
        </div>
        <p>Delivery via Porter / Uber Parcel, or pick up from a location shared over DM once your order is confirmed.</p>
      </section>

      <footer><img className="footer-logo" src={crumbTheoryLogo} alt="Crumb Theory — Made With Love" /><div><a href="#home">Home</a><a href="#menu">Menu</a><a href="#order">Order</a><a href="https://instagram.com/crumbtheory.store">Instagram</a></div><small>© 2026 Crumb Theory · Homemade, no-maida treats</small></footer>
    </main>
  );
}