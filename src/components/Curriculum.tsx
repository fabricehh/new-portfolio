interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  type: "Full Time" | "Internship";
  period: string;
}

interface EducationItem {
  degree: string;
  school: string;
  type: "Full Time";
  period: string;
}

const Curriculum = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Junior Web Developer",
      company: "Dr. Rajkumar's Learning App",
      location: "Bengaluru",
      type: "Full Time",
      period: "Sep 2021 - Dec 2021"
    },
    {
      title: "Web Development Intern",
      company: "IonPixels Web Solutions",
      location: "Bengaluru",
      type: "Internship",
      period: "Sep 2021 - Dec 2021"
    },
    {
      title: "SEO / SEM Specialist",
      company: "HAAPS",
      location: "Bengaluru",
      type: "Internship",
      period: "Sep 2021 - Dec 2021"
    }
  ];

  const education: EducationItem[] = [
    {
      degree: "Bachelor in Electronics & Communication",
      school: "Bangalore Institute of Technology",
      type: "Full Time",
      period: "Aug 2019 - Dec 2020"
    }
  ];

  return (
    <div className="pr-8">
      {/* About Me Section */}
      <section className="py-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">About Me</h2>
        <p className="text-slate-600 text-sm mb-4">
          The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="py-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">Work Experience</h2>
        <div className="space-y-3">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold mb-0.5">{exp.title}</h3>
                  <p className="text-slate-600 text-sm">{exp.company}</p>
                  <p className="text-slate-500 text-sm">{exp.location}</p>
                </div>
                <div className="text-right">
                  <span className={`${exp.type === 'Full Time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} text-xs px-2 py-0.5 rounded-full`}>
                    {exp.type}
                  </span>
                  <p className="text-slate-500 text-sm mt-1">{exp.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="py-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">Education</h2>
        <div className="space-y-3">
          {education.map((edu, index) => (
            <div key={index} className={`pb-4 ${index !== education.length - 1 ? 'border-b' : ''}`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold mb-0.5">{edu.degree}</h3>
                  <p className="text-slate-600 text-sm">{edu.school}</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                    {edu.type}
                  </span>
                  <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Curriculum; 