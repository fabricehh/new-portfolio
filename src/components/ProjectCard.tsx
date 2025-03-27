import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  techStack: string
  imageUrl: string
  livePreviewUrl: string | null
  codeUrl: string | null 
}

const ProjectCard = ({ title, description, techStack, imageUrl, livePreviewUrl, codeUrl }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 text-justify">{description}</p>
        <p className="text-sm text-slate-500 mb-4">Tech stack: {techStack}</p>
        
        <div className="flex gap-4">
          {livePreviewUrl && (
            <Link 
              href={livePreviewUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-500"
            >
              🔗 Live Preview
            </Link>
          )}
          {codeUrl && (
            <Link 
              href={codeUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-500"
            >
              👨‍💻 View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 