import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CertificationCard from '@/components/CertificationCard';

const certifications = [
  {
    title: "Certification AWS Solutions Architect",
    organization: "Amazon Web Services",
    image: "/assets/project-bg-image.png",
    trainers: ["John Doe", "Jane Smith"],
    date: "15 mars 2023",
    duration: "40 heures"
  },
  {
    title: "Certification React Advanced",
    organization: "Meta",
    image: "/assets/project-bg-image.png",
    trainers: ["Mark Johnson"],
    date: "22 juin 2023",
    duration: "30 heures"
  },
  {
    title: "Certification Scrum Master",
    organization: "Scrum Alliance",
    image: "/assets/project-bg-image.png",
    trainers: ["Sarah Wilson"],
    date: "10 décembre 2022",
    duration: "25 heures"
  },
  {
    title: "Certification AWS Solutions Architect",
    organization: "Amazon Web Services",
    image: "/assets/project-bg-image.png",
    trainers: ["John Doe", "Jane Smith"],
    date: "15 mars 2023",
    duration: "40 heures"
  },
  {
    title: "Certification React Advanced",
    organization: "Meta",
    image: "/assets/project-bg-image.png",
    trainers: ["Mark Johnson"],
    date: "22 juin 2023",
    duration: "30 heures"
  },
  {
    title: "Certification Scrum Master",
    organization: "Scrum Alliance",
    image: "/assets/project-bg-image.png",
    trainers: ["Sarah Wilson"],
    date: "10 décembre 2022",
    duration: "25 heures"
  }
];

const CertificationsPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-14 py-8">
          <h1 className="text-3xl font-bold mb-4">Mes Certifications</h1>
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