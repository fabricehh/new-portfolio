import React from 'react';
import Image from 'next/image';

interface CertificationCardProps {
  title: string;
  organization: string;
  image: string;
  trainers: string[];
  date: string;
  duration: string;
}

const CertificationCard = ({ 
  title, 
  organization, 
  image, 
  trainers, 
  date, 
  duration 
}: CertificationCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={`${title} certification`}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-600 mb-2 font-semibold">{organization}</p>
        <div className="space-y-2 text-sm text-gray-500">
          <p>Obtained on {date}</p>
          <p>Date : {duration}</p>
          <div>
            <p className="font-medium">Trainer{trainers.length > 1 ? 's' : ''}</p>
            <ul className="list-disc list-inside pl-2">
              {trainers.map((trainer, index) => (
                <li key={index}>{trainer}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard; 