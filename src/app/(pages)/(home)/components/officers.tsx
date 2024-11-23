import React, { useState, useEffect } from "react";
import Officer from "@/app/components/officer";
import "../../../styles/officers.css";
import firebase_app from "../../../firebase/config";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const db = getFirestore(firebase_app);

// Officer data type
interface OfficerInfo {
  id: string;
  name: string;
  title: string;
  imageURL: string;
}

export default function Officers() {
  const [OfficersArr, setOfficersArr] = useState<OfficerInfo[]>([]);
  const [isLoading, setIsLoading] = useState<string>("");

  useEffect(() => {
    const fetchAllOfficers = async () => {
      try {
        setIsLoading("Fetching Officers...");
        const querySnapshot = await getDocs(collection(db, "officers"));
        const fetchedOfficers: OfficerInfo[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as OfficerInfo[];

        // Sort officers if needed
        const sortedOfficers = fetchedOfficers.sort((a, b) => {
          if (a.title === "President") return -1;
          if (b.title === "President") return 1;
          if (a.title === "Vice President") return -1;
          if (b.title === "Vice President") return 1;
          return 0; // Keep the rest in their original order
        });

        setOfficersArr(sortedOfficers);
      } catch (error) {
        console.error("Error fetching officers:", error);
      } finally {
        setIsLoading("");
      }
    };

    fetchAllOfficers();
  }, []);

  return (
    <div id="Officers" className="officers">
      <h1>Meet the Crew</h1>
      {isLoading && <p>{isLoading}</p>}
      <div className="officers-box">
        {OfficersArr.map(officer => (
          <Officer
            key={officer.id}
            img={officer.imageURL}
            name={officer.name}
            title={officer.title}
            id={officer.id}
          />
        ))}
      </div>
    </div>
  );
}
