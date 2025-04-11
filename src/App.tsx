import { LazyLoadImage } from "react-lazy-load-image-component";
import BackgroundMusic from "./backgroundMusic";
import { useEffect, useState } from "react";

function App() {
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    let y = 0;
    const scrollDown = () => {
      if (!finished) {
        window.scrollTo(0, y);
        y += 1;
        if (y < document.body.scrollHeight - 500) {
          requestAnimationFrame(scrollDown);
        } else {
          setFinished(() => true);
        }
      }
    };
    scrollDown();
  }, [finished]);

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
