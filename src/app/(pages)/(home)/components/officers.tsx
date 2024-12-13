import React, { useState, useEffect } from "react";
import Officer from "@/app/components/officer";
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
    <div id="Officers" className="bg-gradient-to-b from-[#2403a8] to-[#1b0478] p-[100px_50px] flex flex-col items-center relative m-0">
      <h1 className="text-left text-[rgb(208, 207, 207)] text-[50px] m-0 mb-[50px]">Meet the Crew</h1>
      {isLoading && <p>{isLoading}</p>}
      <div className="flex flex-wrap justify-center gap-5">
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
