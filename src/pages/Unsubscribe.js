import React, { useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

function Unsubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const q = query(
        collection(db, "mailing-list"),
        where("email", "==", email),
      );
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setStatus("notfound");
        return;
      }

      snapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="contact">
      {status === "success" ? (
        <p>
          you've been removed from the list. <br /> bye :(
        </p>
      ) : (
        <div>
          <p>Unsubscribe from the mailing list</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Removing..." : "Unsubscribe"}
            </button>
            {status === "notfound" && (
              <p className="error">that email isn't on the list.</p>
            )}
            {status === "error" && (
              <p className="error">something went wrong, try again.</p>
            )}
          </form>
        </div>
      )}
    </section>
  );
}

export default Unsubscribe;
