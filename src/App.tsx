import { LazyLoadImage } from "react-lazy-load-image-component";
import BackgroundMusic from "./backgroundMusic";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let y = 0;
    let animationId: number;
    let cancelled = false;

    const cancelScroll = () => {
      if (!cancelled) {
        cancelled = true;
        cancelAnimationFrame(animationId);
        window.removeEventListener("wheel", cancelScroll);
        window.removeEventListener("touchstart", cancelScroll);
        window.removeEventListener("mousedown", cancelScroll);
        console.log("Scroll cancelado por el usuario o fin de página.");
      }
    };

    const scrollDown = () => {
      if (cancelled) return;

      y += 0.5;
      window.scrollTo(0, y);

      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      if (scrollBottom >= pageHeight) {
        cancelScroll();
        return;
      }

      animationId = requestAnimationFrame(scrollDown);
    };

    // Esperar un poco para asegurarse de que el DOM cargó
    const startTimeout = setTimeout(() => {
      scrollDown();
    }, 300); // 300ms

    window.addEventListener("wheel", cancelScroll, { passive: true });
    window.addEventListener("touchstart", cancelScroll, { passive: true });
    window.addEventListener("mousedown", cancelScroll);

    return () => {
      cancelScroll();
      clearTimeout(startTimeout);
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
