import Image from "next/image";

const About = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 px-8 md:px-24 lg:px-48"
      id="about"
    >
      {/* Bagian Atas */}
      <div className="bg-base-100 p-8 rounded-2xl shadow">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-4xl font-lora font-bold">About Me</h2>
          <svg
            className="w-6 h-6 md:w-10 md:h-10"
            fill="currentColor"
            viewBox="0 0 640 640"
          >
            <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
          </svg>
        </div>
        <p className="font-abz pt-8 sm:text-justify md:text-lg">
          Based in Indonesia, I&apos;m a web developer with a unique background in
          Informatics & Computer Engineering Education (B.Ed.). This has given
          me a distinct advantage in breaking down complex technical concepts
          and building user-friendly web experiences.
          <br /> <br />
          While my main focus is web development, I am also passionate about
          exploring game development and AI/ML, constantly seeking new ways to
          create engaging and impactful digital solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* Bawah Kiri or Kedua */}
        <div className="bg-base-100 p-8 rounded-2xl shadow">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-4xl font-lora font-bold">
              Tech Stack
            </h2>
            <svg
              className="w-6 h-6 md:w-10 md:h-10"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z" />
            </svg>
          </div>
          <div className="space-y-4 pt-8 font-abz font-bold text-sm md:text-base xl:text-lg">
            <div>
              <p className="font-normal mb-4">
                Here are the main tools I use. I&apos;m a fast learner and always
                open to picking up new tech for the right project.
              </p>
              <h4 className="font-semibold mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                  alt="JavaScript"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
                <Image
                  src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
                  alt="Python"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
                <Image
                  src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
                  alt="Php"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Frameworks &amp; Tools</h4>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  alt="React"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
                <Image
                  src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                  alt="Next.js"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02] border border-base-300"
                />
                <Image
                  src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white"
                  alt="Laravel"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
                <Image
                  src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                  alt="TailwindCSS"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Development Tools</h4>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
                  alt="GIT"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
                <Image
                  src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                  alt="Figma"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
                <Image
                  src="https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=codecrafters&logoColor=white"
                  alt="VSCode"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://img.shields.io/badge/web%20dev-372aac?style=for-the-badge"
                  alt="WebDev"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
                <Image
                  src="https://img.shields.io/badge/game%20dev-7bf1a8?style=for-the-badge"
                  alt="GameDev"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
                <Image
                  src="https://img.shields.io/badge/ai%20/%20ml-a3004c?style=for-the-badge"
                  alt="AI/ML"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8 rounded-lg shadow transition-transform duration-100 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bawah Kanan or Ketiga */}
        <div className="bg-base-100 p-8 rounded-2xl shadow">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-4xl font-lora font-bold">
              My Mission
            </h2>
            <svg
              className="w-5 h-5 md:w-9 md:h-9"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z" />
            </svg>
          </div>
          <div className="space-y-6 pt-8 font-abz text-sm md:text-base xl:text-lg">
            <div className="flex items-start">
              <div>
                <h4 className="font-semibold mb-1">Level Up My Craft</h4>
                <p className="text-sm xl:text-base flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                    />
                  </svg>
                  Mastering new technologies and refining my skills through
                  hands-on work.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div>
                <h4 className="font-semibold mb-1">
                  Build Meaningful Products
                </h4>
                <p className="text-sm xl:text-base flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                    />
                  </svg>
                  Crafting solutions that solve real problems and have a
                  positive impact.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div>
                <h4 className="font-semibold mb-1">Explore New Fields</h4>
                <p className="text-sm xl:text-base flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                    />
                  </svg>
                  Diving deeper into game development and AI/ML to create
                  innovative projects.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div>
                <h4 className="font-semibold mb-1">Achieve Creative Freedom</h4>
                <p className="text-sm xl:text-base flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                    />
                  </svg>
                  Building awesome things with inspiring people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
