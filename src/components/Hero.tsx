import Naufal from "@/assets/naufal.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero min-h-screen md:min-h-auto">
      <div className="hero-content text-center py-24">
        <div className="max-w-md flex flex-col justify-center">
          <div className="h-[150px] flex items-center justify-center w-full">
            <Image
              src={Naufal}
              alt="Profile"
              className="rounded-[40px] shadow object-contain"
              width={150}
              height={150}
            />
          </div>
          <h1 className="pt-8 text-6xl md:text-8xl font-light font-lora text-primary">
            Naufal
            <br />
            Ammar
          </h1>
          <p className="pt-4 font-abz font-bold uppercase text-2xl md:text-4xl">
            Web Developer
          </p>
          <div className="pt-8 flex items-center justify-center gap-4">
            {/* Button Pertama */}
            <a
              href="https://linkedin.com/in/amfal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn md:btn-lg btn-outline rounded-xl">
                Linkedin
                <svg
                  className="w-4 h-4 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
                </svg>
              </button>
            </a>

            {/* Button Kedua */}
            <a href="#projects">
              <button className="btn md:btn-lg btn-primary rounded-xl">
                My Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                  viewBox="0 0 640 640"
                >
                  <path d="M64 144C64 117.5 85.5 96 112 96L208 96C234.5 96 256 117.5 256 144L256 160L384 160L384 144C384 117.5 405.5 96 432 96L528 96C554.5 96 576 117.5 576 144L576 240C576 266.5 554.5 288 528 288L432 288C405.5 288 384 266.5 384 240L384 224L256 224L256 240C256 247.3 254.3 254.3 251.4 260.5L320 352L400 352C426.5 352 448 373.5 448 400L448 496C448 522.5 426.5 544 400 544L304 544C277.5 544 256 522.5 256 496L256 400C256 392.7 257.7 385.7 260.6 379.5L192 288L112 288C85.5 288 64 266.5 64 240L64 144z" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
