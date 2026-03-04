const InfoSection = () => {
  return (
    <section id="info" className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-12">
        Info
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Photo placeholder */}
        <div className="aspect-[3/4] bg-muted w-full" />

        {/* Bio */}
        <div className="flex flex-col justify-center py-4">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            Etai Berkovich is a music producer and sound engineer based in Israel, 
            working with artists across genres to craft authentic, polished sound. 
            With years of studio experience, Etai brings a meticulous ear and 
            creative vision to every project.
          </p>
          <p className="text-sm text-muted-foreground tracking-wide">
            Based in Tel Aviv · Available for remote sessions worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
