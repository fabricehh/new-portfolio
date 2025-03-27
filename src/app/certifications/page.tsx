import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CertificationCard from '@/components/CertificationCard';

const certifications = [
  {
    title: "Scrum Master Certification 2025 + Agile Scrum Certification",
    organization: "Udemy",
    image: "/assets/certifications/cert_scrum.jpg",
    trainers: ["Paul Ashun"],
    date: "July 26, 2023",
    url: "https://www.udemy.com/certificate/UC-c53afef1-8444-4351-a664-b940fb6b2c6b/",
    duration: "3 hours"
  },
  {
    title: "Shadcn UI & Next JS - Build beautiful dashboards with shadcn",
    organization: "Udemy",
    image: "/assets/certifications/cert_shadcnui.png",
    trainers: ["Tom Phillips", "WebDevEducation (Tom Phillips)"],
    date: "February 20, 2025",
    url: "https://www.udemy.com/certificate/UC-8e83d825-f61c-4ba9-91bb-47c2c946d34c/",
    duration: "8.5 hours"
  },
  {
    title: "Angular - The Complete Guide (2025 Edition)",
    organization: "Udemy",
    image: "/assets/certifications/cert_angular.png",
    trainers: ["Maximilian Schwarzmüller"],
    date: "March 25, 2023",
    url: "https://www.udemy.com/certificate/UC-92aed575-df39-488b-ad74-9e6c348d7055/",
    duration: "56 hours"
  },
  {
    title: "Flutter & Dart - The Complete Guide [2025 Edition]",
    organization: "Udemy",
    image: "/assets/certifications/cert_flutter.jpg",
    trainers: ["Maximilian Schwarzmüller"],
    date: "July 27, 2023",
    url : "https://www.udemy.com/certificate/UC-fd9d8509-1131-415b-a8d5-052294b07bf2/",
    duration: "30 hours"
  },
  {
    title: "The Certification Course Of Java",
    organization: "Udemy",
    image: "/assets/certifications/cert_java.jpg",
    trainers: ["Learn Pro"],
    date: "July 25, 2023",
    url: "https://www.udemy.com/certificate/UC-17eea3d4-1e72-459f-aa5e-c65b24a77d81/",
    duration: "39 minutes"
  },
  {
    title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    organization: "Udemy",
    image: "/assets/certifications/cert_react.jpg",
    trainers: ["Maximilian Schwarzmüller"],
    url : null,
    date: "January 27, 2025",
    duration: "71 hours"
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
                url={cert.url}
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