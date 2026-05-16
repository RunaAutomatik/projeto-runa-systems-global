export function YoutubeEmbed({ url }: { url: string }) {
  const videoId = url.match(/(?:v=|youtu\.be\/)([^&\s]+)/)?.[1];
  if (!videoId) return null;

  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
