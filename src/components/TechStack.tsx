import Image from 'next/image'

interface TechStackProps {
  position?: "left" | "center" | "right";
}

const TechStack = ({ position = "center" }: TechStackProps) => {
  return (
    <section className={`container mx-auto px-8 ${position === 'center' ? 'pt-16' : 'pt-10'} pb-16`}>
      <div className={`text-${position} mb-8`}>
        <h2 className="text-4xl font-bold text-slate-800 mb-2">
          My Tech Stack
        </h2>
        <p className="text-slate-600">
          Technologies I&apos;ve been working with recently
        </p>
      </div>
      <div className="text-start">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-14">
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image
              src="/assets/spring-boot.png"
              alt="Spring Boot"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image src="/assets/nextjs.png" alt="Next.js" fill className="object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image
              src="/assets/angular.png"
              alt="Angular"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image
              src="/assets/tailwindcss.png"
              alt="Tailwind CSS"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image
              src="/assets/flutter.png"
              alt="Flutter"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image src="/assets/oracle.png" alt="Oracle" fill className="object-contain" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image src="/assets/figma.png" alt="Figma" fill className="object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image src="/assets/docker.png" alt="Docker" fill className="object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image src="/assets/github.png" alt="GitHub" fill className="object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image
              src="/assets/vscode.png"
              alt="VS Code"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image src="/assets/git.png" alt="Git" fill className="object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 relative h-20 w-20">
            <Image src="/assets/python.png" alt="Python" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
