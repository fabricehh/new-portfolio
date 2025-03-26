"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useProfilStore } from "@/store/profilStore";
import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";


export default function ContactPage() {

  const { profil } = useProfilStore();

  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = () => {
    return (
      email.trim() !== "" &&
      object.trim() !== "" &&
      message.trim().length > 10 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid()) return;
    
    setIsLoading(true);
    
    try {
      const response = await supabase.from("Messages").insert([
        { sender: email, object, message },
      ]);

      console.log(response);

      const error = response.error;


      if (error) {
        toast.error("Failed to send message. Please try again later.");
        console.error("Error sending message:", error);
      } else {
        toast.success("Message sent successfully!");
        setEmail("");
        setObject("");
        setMessage("");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again later.");
      console.error("Exception:", err);
    } finally {
      setIsLoading(false);
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
            <form onSubmit={handleSubmit} className="space-y-8">
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
                    value={email}
                    type="email"
                    id="email"
                    className="w-full border border-slate-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="object"
                    className="block text-sm uppercase font-medium text-slate-600 mb-3"
                  >
                    Object
                  </label>
                  <input
                    onChange={(e) => setObject(e.target.value)}
                    value={object}
                    type="text"
                    id="object"
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
                  value={message}
                  rows={4}
                  className="w-full border border-slate-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={!isFormValid() || isLoading}
                  className={`px-8 w-[350px] py-4 rounded-md text-lg text-white transition-all flex items-center justify-center
                    ${
                      !isFormValid() || isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#DC18AE] to-[#1AACF3] hover:opacity-90"
                    }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send your message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
