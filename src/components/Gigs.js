import React from "react";

const gigs = [
  {
    id: 1,
    date: "2026-04-12",
    city: "London, UK",
    venue: "O2 Academy Islington",
    ticketLink: "https://tickets.example.com/london",
  },
  {
    id: 2,
    date: "2026-04-18",
    city: "Manchester, UK",
    venue: "Band on the Wall",
    ticketLink: "https://tickets.example.com/manchester",
  },
  {
    id: 3,
    date: "2026-05-02",
    city: "Bristol, UK",
    venue: "The Fleece",
    ticketLink: "https://tickets.example.com/bristol",
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
              Get Tickets
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
