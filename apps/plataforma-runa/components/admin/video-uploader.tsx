"use client";

import { useRef, useState } from "react";
import * as tus from "tus-js-client";

interface Props {
  sessionId: string;
  sessionTitle: string;
  onSuccess: (bunnyVideoId: string) => void;
}

type UploadState =
  | { phase: "idle" }
  | { phase: "uploading"; progress: number }
  | { phase: "done" }
  | { phase: "error"; message: string };

export default function VideoUploader({
  sessionId,
  sessionTitle,
  onSuccess,
}: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<UploadState>({ phase: "idle" });
  const uploadRef = useRef<tus.Upload | null>(null);

  async function handleFile(file: File) {
    setState({ phase: "uploading", progress: 0 });

    const res = await fetch("/api/admin/upload-video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_title: sessionTitle }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      setState({ phase: "error", message: error ?? "Erro ao criar vídeo" });
      return;
    }

    const {
      bunny_video_id,
      tus_upload_url,
      library_id,
      auth_signature,
      auth_expire,
    } = await res.json();

    const upload = new tus.Upload(file, {
      endpoint: tus_upload_url,
      retryDelays: [0, 3000, 5000, 10000],
      headers: {
        AuthorizationSignature: auth_signature,
        AuthorizationExpire: String(auth_expire),
        VideoId: bunny_video_id,
        LibraryId: library_id,
      },
      metadata: {
        filename: file.name,
        filetype: file.type,
      },
      onProgress(bytesUploaded, bytesTotal) {
        const pct = Math.round((bytesUploaded / bytesTotal) * 100);
        setState({ phase: "uploading", progress: pct });
      },
      async onSuccess() {
        await fetch(`/api/admin/sessions/${sessionId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bunny_video_id }),
        });
        setState({ phase: "done" });
        onSuccess(bunny_video_id);
      },
      onError(err) {
        setState({ phase: "error", message: err.message });
      },
    });

    uploadRef.current = upload;
    upload.start();
  }

  if (state.phase === "done") {
    return <p className="text-accent text-xs">Vídeo enviado com sucesso ✓</p>;
  }

  if (state.phase === "error") {
    return (
      <div className="space-y-1">
        <p className="text-red-400 text-xs">{state.message}</p>
        <button
          onClick={() => setState({ phase: "idle" })}
          className="text-muted text-xs hover:text-text"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  if (state.phase === "uploading") {
    return (
      <div className="space-y-1 min-w-[160px]">
        <div className="w-full bg-surface-1 rounded-full h-1.5">
          <div
            className="bg-accent h-1.5 rounded-full transition-all"
            style={{ width: `${state.progress}%` }}
          />
        </div>
        <p className="text-muted text-xs">{state.progress}%</p>
      </div>
    );
  }

  return (
    <>
      <input
        ref={fileRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
      <button
        onClick={() => fileRef.current?.click()}
        className="text-muted text-xs hover:text-text"
      >
        Upload vídeo
      </button>
    </>
  );
}
