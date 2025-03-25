import { create } from "zustand";

export interface Profil {
    alias: string;
    email: string;
    nom: string;
    prenom: string;
    prenom2: string;
    poste: string;
    role: string;
    telephone: string;
    location: string;
    urlGithub: string;
    urlLinkedin: string;
    urlTwitter: string;
}

interface UserStore {
    profil: Profil ;
}

export const useProfilStore = create<UserStore>((set) => ({
    profil: {
        alias: "fabriceh",
        email: "huehanou.houessou@gmail.com",
        nom: "HOUESSOU",
        prenom: "Fabrice",
        prenom2: "Huéhanou",
        poste: "Software Engineer",
        role: "Developer",
        telephone: "+225 07 57 36 04 42",
        location: "Abidjan, Ivoiry Coast",
        urlGithub: "https://github.com/fabricehh",
        urlLinkedin: "https://www.linkedin.com/in/fabriceh",
        urlTwitter: "https://twitter.com/fabriceh",
    },
}));