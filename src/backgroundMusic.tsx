import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Opcional: reproducir automáticamente si el navegador lo permite
    const audio:any = audioRef.current;
    if (audio) {
      audio.loop = true;

      // Muchos navegadores requieren interacción del usuario
      const playMusic = () => {
        audio.play().catch(() => {
          console.log(
            "Autoplay bloqueado, se necesita interacción del usuario"
          );
        });
      };

      // Escuchar primer interacción
      ["click", "touchstart", "keydown", "scroll"].forEach((event) =>
        document.addEventListener(event, playMusic)
      );
    }
  }, []);

  return (
    <audio ref={audioRef}>
      <source src="/musica.mp3" type="audio/mpeg" />
      Tu navegador no soporta audio.
    </audio>
  );
};

export default BackgroundMusic;
