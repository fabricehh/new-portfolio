import ProjectCard from './ProjectCard'

interface ProjectsProps {
  position?: 'left' | 'center' | 'right'
}

const Projects = ({ position = 'center' }: ProjectsProps) => {
  const projects = [
    {
      title: "Project Title goes here",
      description: "This is sample project description random things are here in description.This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      imageUrl: "/assets/project-bg-image.png",
      livePreviewUrl: "https://example.com",
      codeUrl: "https://github.com"
    },
    {
        title: "Project Title goes here",
        description: "This is sample project description random things are here in description.This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML, JavaScript, SASS, React",
        imageUrl: "/assets/project-bg-image.png",
        livePreviewUrl: "https://example.com",
        codeUrl: "https://github.com"
    },
    {
        title: "Project Title goes here",
        description: "This is sample project description random things are here in description.This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML, JavaScript, SASS, React",
        imageUrl: "/assets/project-bg-image.png",
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
        <h2 className="text-4xl font-bold text-slate-800 mb-2">Projects</h2>
        <p className="text-slate-600">Things I've built so far</p>
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