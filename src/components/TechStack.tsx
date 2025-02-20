interface TechStackProps {
  position?: "left" | "center" | "right";
}

const TechStack = ({ position = "center" }: TechStackProps) => {
  return (
    <section className={`container mx-auto px-4 ${position === 'center' ? 'pt-16' : 'pt-10'} pb-16`}>
      <div className={`text-${position} mb-8`}>
        <h2 className="text-4xl font-bold text-slate-800 mb-2">
          My Tech Stack
        </h2>
        <p className="text-slate-600">
          Technologies I've been working with recently
        </p>
      </div>
      <div className="text-start">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="flex items-center justify-center p-4">
            <img
              src="/assets/spring-boot.png"
              alt="Spring Boot"
              className="h-20 w-20"
            />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src="/assets/nextjs.png" alt="Next.js" className="h-20 w-20" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img
              src="/assets/angular.png"
              alt="Angular"
              className="h-20 w-20"
            />
          </div>
          <div className="flex items-center justify-center p-4">
            <img
              src="/assets/tailwindcss.png"
              alt="Tailwind CSS"
              className="h-20 w-20"
            />
          </div>
          <div className="flex items-center justify-center p-4">
            <img
              src="/assets/flutter.png"
              alt="Flutter"
              className="h-20 w-20"
            />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src="/assets/oracle.png" alt="Oracle" className="h-20 w-20" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="flex items-center justify-center p-4">
            <img src="/assets/figma.png" alt="Figma" className="h-20 w-20" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src="/assets/docker.jfif" alt="Docker" className="h-20 w-20" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src="/assets/github.png" alt="GitHub" className="h-20 w-20" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img
              src="/assets/vscode.jfif"
              alt="VS Code"
              className="h-20 w-20"
            />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src="/assets/git.png" alt="Git" className="h-20 w-20" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src="/assets/python.png" alt="Python" className="h-20 w-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
