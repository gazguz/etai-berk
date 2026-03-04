import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const WorkSection = () => {
  return (
    <section id="work" className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-12">
        Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
