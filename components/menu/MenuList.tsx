import { MENU_ITEMS } from "@/data/menu";

export default function MenuList() {
  return (
    <section className="menu" id="menu" aria-label="Full daily menu">
      <div className="menu-head">
        <h2>The Full Menu</h2>
        <p>À la carte, priced per day — order any single item, any day.</p>
      </div>
      <ul className="menu-list">
        {MENU_ITEMS.map((item) => (
          <li key={item.id} className="menu-row">
            <span className="menu-name">{item.name}</span>
            <span className="menu-dots" aria-hidden="true" />
            <span className="menu-price">₹{item.pricePerDay}/-</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
