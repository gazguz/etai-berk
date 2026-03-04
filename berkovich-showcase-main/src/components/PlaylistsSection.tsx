import { ExternalLink } from "lucide-react";

const PlaylistsSection = () => {
  return (
    <section id="playlists" className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-12">
        Playlists
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-border px-8 py-4 text-sm font-medium tracking-wider uppercase text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
        >
          Spotify Playlist
          <ExternalLink size={14} />
        </a>
        <a
          href="https://music.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-border px-8 py-4 text-sm font-medium tracking-wider uppercase text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
        >
          Apple Music Playlist
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
};

export default PlaylistsSection;
