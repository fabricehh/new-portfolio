"use client";

import Image from "next/image";
import { useProfilStore } from '@/store/profilStore';
const maPhoto = "/assets/ma-photo.png";

const Greatings = () => {
  const { profil } = useProfilStore();
  return (
    <section className="container mx-auto px-8 pt-32 pb-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800">
            Hi 👋,
            <br />
            My name is
            <br />
            <span className="text-blue-500">{profil.prenom} {profil.nom}</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
            I build web and mobile apps
          </h2>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image src={maPhoto} alt="Profile" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greatings;
