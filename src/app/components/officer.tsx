import React from 'react';

function Officer({
  img,
  name,
  title,
  id,
}: {
  img: string;
  name: string;
  title: string;
  id: string;
}) {
  return (
    <div key={id} className="flex gap-5 items-center bg-transparent rounded-[10px] text-[rgb(208, 207, 207)] p-4 w-[350px] h-[100px]">
      <img alt="OfficerImage" className="w-[100px] h-[100px] rounded-full" src={`${img}`} />
      <div className="officerText">
        <h2 className="mt-[15px]">{name}</h2>
        <p className="mt-[5px]">{title}</p>
      </div>
    </div>
  );
}

export default Officer;
