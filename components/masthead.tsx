import Image from "next/image";
import { useCallback, useContext, useRef, useState } from "react";
import { ScrollContext } from "../utils/scroll-observer";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  // image loader
  let [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col justify-center items-center sticky top-0 -z-10"
      style={{ transform: `translateY(-${progress * 20})vh` }}
    >
      <div className="absolute w-full h-full opacity-50 bg-black/90 z-10"></div>
      <video
        loop
        muted
        autoPlay
        playsInline
        className="absolute w-full h-full object-cover"
      >
        {/* <source src="/assets/masthead-bg.webm" type="video/webm; codes=vp9" /> */}
        <source src="/assets/recruitee.m4v" type="video/mp4; codes=hvc1" />
        Your browser does not support the video tag.
      </video>
      <div
        className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/assets/nu.svg"
          width={128 / 3}
          height={114 / 3}
          alt="Nukrates"
          className="fill-rose-700 z-20"
        />
      </div>
      <div className="p-12 font-bold text-white z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-col flex-1 items-center justify-center">
        <h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>App Development, </span>
          <span>done right!</span>
        </h2>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src="/assets/arrow-down.svg"
          width={188 / 3}
          height={105 / 3}
          className="fill-white z-20"
          alt="scroll down"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Masthead;
