import ProjectCard from './ProjectCard'

interface ProjectsProps {
  position?: 'left' | 'center' | 'right'
}

const Projects = ({ position = 'center' }: ProjectsProps) => {
  const projects = [
    {
      title: "My Portfolio Website",
      description: "A modern and dynamic portfolio showcasing my projects, certifications, technical skills, and professional journey. Built with Next.js, it highlights my expertise in web development and passion for creating innovative digital solutions.",
      techStack: "Next.js, Typescript, Tailwind CSS, React",
      imageUrl: "/assets/projects/project1.png",
      livePreviewUrl: "https://example.com",
      codeUrl: "https://github.com"
    },
    {
        title: "Vocab Anglais",
        description: "A mobile application that helps French speakers learn English by memorizing words. It is based on scientific and psychological techniques of memorization through repetition and absorption of words.",
        techStack: "Flutter, Dart, Supabase, Postgresql",
        imageUrl: "/assets/projects/project2.png",
        livePreviewUrl: "https://example.com",
        codeUrl: "https://github.com"
    },
    {
        title: "FinBank UI Design",
        description: "This is a UI design for a banking application with some features like login, register, dashboard, transactions, etc. It is a flat design with a modern and clean look. We used Figma to design the UI.",
        techStack: "UI, Figma, Flat Design",
        imageUrl: "/assets/projects/project3.png",
        livePreviewUrl: "https://example.com",
        codeUrl: "https://github.com"
      },
    // Ajoutez d'autres projets ici
  ]

  const getGridClasses = () => {
    switch (position) {
      case 'left':
        return 'mr-auto ml-0'
      case 'right':
        return 'ml-auto mr-0'
      default:
        return 'mx-auto'
    }
  }

  return (
    <section className={`px-4 pt-5 ${position === 'center' ? 'mt-10' : 'mt-2'} pb-16`}>
      <div className={`text-${position} mb-8`}>
        <h2 className="text-4xl font-bold text-slate-800 mb-2">My Personal Projects</h2>
        <p className="text-slate-600">Some things I have built so far, not counting those I have worked on in a company.</p>
      </div>

      <div className={`max-w-5xl ${getGridClasses()} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects