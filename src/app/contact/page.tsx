"use client";
import { createClient } from "@supabase/supabase-js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useProfilStore } from "@/store/profilStore";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";

const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");


export default function ContactPage() {

  const { profil } = useProfilStore();

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid = () => {
    return (
      email.trim() !== "" &&
      subject.trim() !== "" &&
      message.trim().length > 10 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
  };

  const handleSubmit = async () => {

    const { error } = await supabase.from("Messages").insert([
      { sender: email, subject, message },
    ]);

    if (error) {
      toaster.create({
        title:  "Échec de l'envoi du message.",
        type: "error",
      });
    } else {
      toaster.create({
        title:"Message envoyé avec succès !",
        type: "success",
      });
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-slate-800 mb-12 text-center">
          Get In Touch
        </h1>
        <div className="flex flex-col md:flex-row gap-24">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-12">
              Let&apos;s Work <span className="text-orange-500">Together</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-blue-500 text-xl">📧</span>
                <p className="text-slate-600 hover:text-blue-500 cursor-pointer text-lg">
                  {profil.email}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-500 text-xl">📍</span>
                <p className="text-slate-600 text-lg">{profil.location}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-500 text-xl">📞</span>
                <p className="text-slate-600 hover:text-blue-500 cursor-pointer text-lg">
                  {profil.telephone}
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-8">
            <div className="flex gap-8">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm uppercase font-medium text-slate-600 mb-3"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className="w-full border border-slate-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="subject"
                  className="block text-sm uppercase font-medium text-slate-600 mb-3"
                >
                  Subject
                </label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  id="subject"
                  className="w-full border border-slate-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase font-medium text-slate-600 mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full border border-slate-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                disabled={isFormValid() === false}
                onClick={handleSubmit}
                className={`px-8 w-[150px] py-4 rounded-md text-lg text-white transition-all
                  ${
                    isFormValid() === false
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#DC18AE] to-[#1AACF3] hover:opacity-90"
                  }`}
              >
                Send your message
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
