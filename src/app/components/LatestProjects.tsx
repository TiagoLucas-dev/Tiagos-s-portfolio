'use client';
import Image from 'next/image';

interface Project {
    imageSrc: string;
    alt: string;
    title: string;
    tag: string;
    description: string;
    link: string;
}

interface LatestProjectsProps {
    projects: Project[];
}

export default function LatestProjects({ projects }: LatestProjectsProps) {
    return (
      <div
        className="flex flex-wrap justify-center items-stretch gap-6
"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="pb-8 flex flex-col items-center border-2 rounded-lg overflow-hidden max-w-[31.25rem] "
          >
            <a href={project.link} target="_blank">
              <Image
                src={project.imageSrc}
                alt={project.alt}
                width={500}
                height={500}
                className="rounded-t-md hoverable hover:scale-[1.1] brightness-125 transition duration-[2s] ease-in-out hover:saturate-[1.2]"
              />
            </a>
            <h4 className="mt-4 font-bold">{project.title}</h4>
            <p className="my-4 w-3/4 text-center">{project.description}</p>
            <p className="text-center w-3/4 font-semibold">{project.tag}</p>
          </div>
        ))}
      </div>
    )
}
