const ADDRESS =
  "RK Cold Pressed, Plot 58, Megha Hills, Sri Sai Nagar, Madhapur, Hyderabad, Telangana 500081";

// Deliberately excludes the business name: "RK Cold Pressed" reads as a
// category search to Google Maps and surfaces nearby competitors instead of
// pinning this exact address.
const MAP_QUERY = "Plot 58, Megha Hills, Sri Sai Nagar, Madhapur, Hyderabad, Telangana 500081";

export default function LocationMap() {
  const query = encodeURIComponent(MAP_QUERY);

  return (
    <div className="location">
      <div className="location-text">
        <span className="location-label">📍 Find Us</span>
        <p>{ADDRESS}</p>
        <a
          className="location-link"
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions ▸
        </a>
      </div>
      <div className="location-map">
        <iframe
          title="RK Cold Pressed location"
          src={`https://maps.google.com/maps?q=${query}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
