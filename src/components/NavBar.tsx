import Image from "next/image";
import Naufal from "@/assets/naufal.jpg";

const NavBar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-xl btn-square bg-base-100 rounded-xl drawer-button fixed top-4 left-4 z-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="h-full p-4">
          {/* Sidebar content here */}
          <div className="menu bg-base-200 text-base-content h-full w-80 rounded-2xl p-4 shadow flex flex-col">
            <div className="flex-1">
              {/* Web Content */}
              <div className="flex flex-col bg-base-100 rounded-xl">
                <div className="flex justify-start items-center gap-4 p-4">
                  <Image
                    src={Naufal}
                    alt="Sidebar Pic"
                    width="50"
                    height="50"
                    className="rounded-2xl"
                  />
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h4>Naufal Ammar</h4>
                    <p className="text-xs uppercase font-semibold opacity-60">
                      Web Developer
                    </p>
                  </div>
                </div>
                <div className="divider py-0 my-0"></div>
                <ul className="menu rounded-box w-full">
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 640 640"
                      >
                        <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 640 640"
                      >
                        <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                      </svg>
                      About Me
                    </a>
                  </li>
                  <li>
                    <a href="#projects">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 640 640"
                      >
                        <path d="M64 144C64 117.5 85.5 96 112 96L208 96C234.5 96 256 117.5 256 144L256 160L384 160L384 144C384 117.5 405.5 96 432 96L528 96C554.5 96 576 117.5 576 144L576 240C576 266.5 554.5 288 528 288L432 288C405.5 288 384 266.5 384 240L384 224L256 224L256 240C256 247.3 254.3 254.3 251.4 260.5L320 352L400 352C426.5 352 448 373.5 448 400L448 496C448 522.5 426.5 544 400 544L304 544C277.5 544 256 522.5 256 496L256 400C256 392.7 257.7 385.7 260.6 379.5L192 288L112 288C85.5 288 64 266.5 64 240L64 144z" />
                      </svg>
                      Projects
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Content */}
              <ul className="menu rounded-box w-full">
                <li>
                  <a
                    href="mailto:naufala7t@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 640 640"
                      aria-hidden="true"
                    >
                      <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
                    </svg>
                    Email Me
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/nowfall.a"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/amfal"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 640 640"
                      aria-hidden="true"
                    >
                      <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
                    </svg>
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/na-ive"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Github
                  </a>
                </li>
              </ul>
            </div>

            {/* Bottom Drawer */}
            <a
              href="https://na-ive.github.io/githubpage-v1/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn justify-between rounded-xl bg-base-100"
            >
              Github Page v1
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 640 640"
              >
                <path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
