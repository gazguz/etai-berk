import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden aspect-square bg-muted"
    >
      <img
        src={project.imageUrl}
        alt={`${project.artist} — ${project.title}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
        <span className="text-primary-foreground text-sm font-medium tracking-wider uppercase mb-1">
          {project.artist}
        </span>
        <span className="text-primary-foreground text-xs tracking-wide mb-3">
          {project.title}
        </span>
        <span className="text-primary-foreground/70 text-[10px] tracking-widest uppercase border border-primary-foreground/30 px-3 py-1">
          {project.role}
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
