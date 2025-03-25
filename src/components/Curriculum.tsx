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

  const description = "Experienced Application Developer Engineer with expertise in full-stack development. Skilled in IT project management, API development, and automation. Passionate about creating innovative digital solutions to enhance business processes. Strong adaptability, problem-solving skills, and a commitment to continuous learning.";
  
  const experiences: ExperienceItem[] = [
    {
      title: "Software Developer",
      company: "Versus Bank",
      location: "Abidjan, Ivoiry Coast",
      type: "Full Time",
      period: "Oct 2023 - Present"
    },
    {
      title: "Software Developer",
      company: "Vision & Strategy Holding",
      location: "Abidjan, Ivoiry Coast",
      type: "Full Time",
      period: "Jan 2022 - Sep 2023"
    },
    {
      title: "Application Developer (Final Year Internship)",
      company: "Vision & Strategy Holding",
      location: "Abidjan, Ivoiry Coast",
      type: "Internship",
      period: "Mar 2021 - Dec 2021"
    },
    {
      title: "Application Developer",
      company: "DKODER",
      location: "Abidjan, Ivoiry Coast",
      type: "Internship",
      period: "Jul 2019 - Sep 2019"
    }
  ];

  const education: EducationItem[] = [
    {
      degree: "Engineering Degree in Computer Science",
      school: "INP-HB / ESI",
      type: "Full Time",
      period: "2016 - 2021"
    },
    {
      degree: "High School Diploma (Baccalauréat C)",
      school: "Lycée Antoine Gauze",
      type: "Full Time",
      period: "2015 - 2016"
    }
  ];

  return (
    <div className="pr-8">
      {/* About Me Section */}
      <section className="py-2">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">About Me</h2>
        <p className="text-slate-600 text-sm mb-4">
          {description}
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="py-2">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">Work Experience</h2>
        <div className="space-y-3">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b pb-1">
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
      <section className="py-2">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">Education</h2>
        <div className="space-y-3">
          {education.map((edu, index) => (
            <div key={index} className={`pb-1 ${index !== education.length - 1 ? 'border-b' : ''}`}>
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