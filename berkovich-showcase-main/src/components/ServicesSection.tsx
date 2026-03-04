const services = [
  {
    title: "Music Production",
    description: "Full-scale production from concept to final arrangement, tailored to your artistic vision.",
  },
  {
    title: "Mixing & Mastering",
    description: "Industry-standard mixing and mastering to ensure your music sounds polished and release-ready.",
  },
  {
    title: "Recording",
    description: "Professional studio recording sessions with top-tier equipment and acoustics.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-12">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {services.map((service) => (
          <div key={service.title} className="bg-background p-8 md:p-10">
            <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
