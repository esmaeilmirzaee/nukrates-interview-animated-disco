import { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

const AboutUs: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <section
      ref={refContainer}
      className={`flex flex-col bg-white py-30 sm:py-20 text-3xl md:text-4xl sticky -z-[9] top-0`}
      style={{ transform: `translateY(-${progress * 20})vh` }}
    >
      <div>
        <div className="container mx-auto px-11">
          <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
            <strong>
              We will help you to find a right candidate for your next vacancy.
            </strong>{" "}
            <span className={`duration-1000 transition-opacity`}>
              Don't hand over your next interview with a candidate because you
              don't have enough questions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
