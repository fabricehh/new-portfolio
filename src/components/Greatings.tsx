import Image from "next/image";

const maPhoto = "/assets/ma-photo.png";

const Greatings = () => {
  return (
    <section className="container mx-auto px-4 pt-32 pb-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            Hi 👋,
            <br />
            My name is
            <br />
            <span className="text-blue-500">Fabrice HOUESSOU</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
            I build web and mobile apps
          </h2>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image src={maPhoto} alt="Profile" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greatings;
