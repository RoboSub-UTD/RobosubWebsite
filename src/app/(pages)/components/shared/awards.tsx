import React from 'react';
import award0 from '@imgs/awards/doc.png';
import award1 from '@imgs/awards/third.png';

export default function Awards() {
  return (
    <div className="bg-gradient-to-b from-[#15035c] to-[#0d023a] p-6 sm:p-12">
      <div className="flex flex-wrap gap-20 justify-center">
        <img alt="award1" src={award0.src} className="max-w-[500px] w-full" />
        <img alt="award2" src={award1.src} className="max-w-[500px] w-full" />
      </div>
    </div>
  );
}
