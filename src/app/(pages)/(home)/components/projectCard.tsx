import React from 'react';

export default function ProjectCard({
  title,
  description,
  imgSrc,
  url,
}: {
  title: string;
  description: string;
  imgSrc: string;
  url: string;
}) {
  return (
    <div
      className="bg-[#1a5f90] rounded-lg p-5 shadow-lg transition-transform duration-300 hover:translate-y-[-10px] w-full max-w-[300px] cursor-pointer"
      onClick={() => {
        window.location.href = url;
      }}
    >
      <img src={imgSrc} alt={title} className="w-full h-[400px] object-contain rounded-lg mb-4" />
      <strong className="text-xl font-semibold">{title}</strong>
      <p className="mt-2">{description}</p>
    </div>
  );
}
