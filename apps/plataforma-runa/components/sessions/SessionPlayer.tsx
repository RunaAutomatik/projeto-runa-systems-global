"use client";

interface Props {
  signedUrl: string;
}

export function SessionPlayer({ signedUrl }: Props) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={signedUrl}
        className="absolute inset-0 w-full h-full rounded-lg"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
