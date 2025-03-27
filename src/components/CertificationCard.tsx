import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CertificationCardProps {
  title: string;
  organization: string;
  image: string;
  trainers: string[];
  date: string;
  duration: string;
  url: string|null;
}

const CertificationCard = ({ 
  title, 
  organization, 
  image, 
  trainers, 
  date, 
  duration,
  url 
}: CertificationCardProps) => {
  const CardContent = () => (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={`${title} certification`}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-[15px] font-semibold mb-3 line-clamp-2">{title}</h2>
          <p className="text-gray-600 mb-4 font-semibold">{organization}</p>
          <div className="space-y-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Obtained on {date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Duration: {duration}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="font-medium">Trainer{trainers.length > 1 ? 's' : ''}</p>
              </div>
              <ul className="list-none pl-6 space-y-1">
                {trainers.map((trainer, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {trainer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (url) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer" className="h-full">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default CertificationCard; 