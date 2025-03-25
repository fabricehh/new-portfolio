import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CertificationCard from '@/components/CertificationCard';

const certifications = [
  {
    title: "Reactjs, Nextjs Masterclass",
    organization: "Udemy",
    image: "/assets/certifications/cert1.png",
    trainers: ["John Doe", "Jane Smith"],
    date: "15 mars 2023",
    duration: "40 heures"
  },
  {
    title: "Angluar Full Mastery",
    organization: "Udemy",
    image: "/assets/certifications/cert2.png",
    trainers: ["John Doe", "Jane Smith"],
    date: "15 mars 2023",
    duration: "40 heures"
  },
  {
    title: "Reactjs, Nextjs Masterclass",
    organization: "Udemy",
    image: "/assets/certifications/cert1.png",
    trainers: ["John Doe", "Jane Smith"],
    date: "15 mars 2023",
    duration: "40 heures"
  },
  {
    title: "Reactjs, Nextjs Masterclass",
    organization: "Udemy",
    image: "/assets/certifications/cert1.png",
    trainers: ["John Doe", "Jane Smith"],
    date: "15 mars 2023",
    duration: "40 heures"
  },
  {
    title: "Angluar Full Mastery",
    organization: "Udemy",
    image: "/assets/certifications/cert2.png",
    trainers: ["John Doe", "Jane Smith"],
    date: "15 mars 2023",
    duration: "40 heures"
  },
  {
    title: "Reactjs, Nextjs Masterclass ",
    organization: "Udemy",
    image: "/assets/certifications/cert1.png",
    trainers: ["John Doe", "Jane Smith"],
    date: "15 mars 2023",
    duration: "40 heures"
  },
];

const CertificationsPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-14 py-8">
          <h1 className="text-3xl font-bold mb-4">My Certifications</h1>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Discover my professional certifications that showcase my continuous commitment to developing my technical expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                title={cert.title}
                organization={cert.organization}
                image={cert.image}
                trainers={cert.trainers}
                date={cert.date}
                duration={cert.duration}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CertificationsPage; 