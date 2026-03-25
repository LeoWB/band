import { useEffect } from "react";

const gigs = [
  {
    id: 1,
    date: "2026-04-04",
    city: "Leytonstone, London",
    venue: "Calamity Tank",
    ticketLink: "https://www.instagram.com/p/DWSEHgAjIks/",
    free: true,
  },
  {
    id: 2,
    date: "2026-04-18",
    city: "Manchester, UK",
    venue: "Band on the Wall",
    ticketLink: "https://tickets.example.com/manchester",
    free: false,
  },
  {
    id: 3,
    date: "2026-05-02",
    city: "Bristol, UK",
    venue: "The Fleece",
    ticketLink: "https://tickets.example.com/bristol",
    free: false,
  },
];

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function GigList() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // reset when out of view
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("h2, .description").forEach((el) => {
      el.classList.add("fade-in");
      observer.observe(el);
    });

    document.querySelectorAll(".gig-item").forEach((item, i) => {
      item.style.transitionDelay = `${i * 0.08}s`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="gig-list">
      <h2>Upcoming Shows</h2>

      <ul>
        {gigs.map((gig) => (
          <li key={gig.id} className="gig-item">
            <div className="gig-info">
              <span className="gig-date">{formatDate(gig.date)}</span>
              <span className="gig-venue">
                {gig.venue} — {gig.city}
              </span>
            </div>

            <a
              className="ticket-button"
              href={gig.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Get Tickets */}
              {gig.free ? "Free" : "Get Tickets"}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
