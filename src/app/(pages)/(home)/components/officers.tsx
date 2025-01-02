import React, { useState, useEffect } from "react";
import Officer from "@/app/components/officer";
import { fetchAllOfficers } from "@/app/firebase/firestore/officers";


// Officer data type
interface OfficerInfo {
  id: string;
  name: string;
  title: string;
  imageURL: string;
}

export default async function Officers() {
  const officers = await fetchAllOfficers()
  if (!officers) return null;
  return (
    <div id="Officers" className="bg-gradient-to-b from-[#2403a8] to-[#1b0478] p-[100px_50px] flex flex-col items-center relative m-0">
      <h1 className="text-left text-[rgb(208, 207, 207)] text-[50px] m-0 mb-[50px]">Meet the Crew</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {officers.map(officer => (
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
