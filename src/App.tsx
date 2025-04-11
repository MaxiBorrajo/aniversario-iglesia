import { LazyLoadImage } from "react-lazy-load-image-component";
import BackgroundMusic from "./backgroundMusic";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let y = 0;
    let animationId: number;
    let cancelled = false;

    const scrollDown = () => {
      if (cancelled) return;
      y += 0.8;
      window.scrollTo(0, y);
      if (y < document.body.scrollHeight) {
        animationId = requestAnimationFrame(scrollDown);
      }
    };

    const cancelScroll = () => {
      cancelled = true;
      cancelAnimationFrame(animationId);
      // Limpia los listeners después de cancelar
      window.removeEventListener("scroll", cancelScroll);
    };

    // Escuchar interacción del usuario
    window.addEventListener("scroll", cancelScroll, { once: true });

    scrollDown();

    return () => {
      cancelScroll(); // Por si se desmonta el componente antes
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 md:px-48 lg:px-96">
      <BackgroundMusic />
      <div className="flex flex-col items-center justify-center h-full w-full">
        <LazyLoadImage
          src="/1.png"
          alt="iglesia"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full p-4 gap-6 bg-white h-full">
        <div className="rounded-xl overflow-hidden -rotate-2">
          <LazyLoadImage
            src="/img3.jpg"
            alt="iglesia"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden rotate-2">
          <LazyLoadImage
            src="/img1.jpg"
            alt="iglesia"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden -rotate-2">
          <LazyLoadImage
            src="/img2.jpg"
            alt="iglesia"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* <Galeria /> */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        <LazyLoadImage
          src="/3.png"
          alt="iglesia"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <LazyLoadImage
          src="/4.png"
          alt="iglesia"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default App;
