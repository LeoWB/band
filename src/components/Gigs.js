import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

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
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGigs = async () => {
      const q = query(collection(db, "gigs"), orderBy("date"));
      const snapshot = await getDocs(q);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      setGigs(
        snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((gig) => new Date(gig.date) >= today),
      );
      setLoading(false);
    };
    fetchGigs();
  }, []);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 },
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
  }, [loading]);

  return (
    <section className="gig-list">
      <h2>Upcoming Shows</h2>
      {loading ? (
        <p>Loading...</p>
      ) : gigs.length === 0 ? (
        <p>No upcoming shows.</p>
      ) : (
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
                {gig.free ? "Free" : "Get Tickets"}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
