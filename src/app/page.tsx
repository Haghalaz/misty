import Footer from "@src/components/organism/footer";
import Image from "next/image";

import { FlipWords } from "@src/components/molecules/flip-words";
import { BackgroundGradientAnimation } from "@src/components/molecules/background-gradient-animation";

function Designer() {
  const words = ["designer", "ilustradora", "videomaker", "socialmedia"];

  return (
    <div className={`bottom-0 flex h-svh w-full snap-center snap-always`}>
      <BackgroundGradientAnimation>
        <div className="topography pointer-events-none absolute inset-0 z-50 grid size-full place-content-center">
          <div className="flex flex-col items-center gap-4">
            <Image
              className="m-4 w-72 rounded-b-lg rounded-t-full outline outline-offset-4 outline-purple-500 md:w-96"
              src="/designer.png"
              alt="Barbara Demarchi"
              width="300"
              height="100"
            />

            <div className="flex flex-col gap-4 text-center">
              <h1 className="font-sokBrubah text-4xl md:text-7xl">
                Oi, eu sou a Bárbara!
              </h1>

              <span className="font-timeBurner text-xl font-bold tracking-wider text-neutral-600 md:text-3xl dark:text-neutral-400">
                Eu sou <FlipWords words={words} /> <br />
                Bem Vindo ao Estúdio Criativo!
              </span>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative h-svh snap-y snap-mandatory overflow-y-scroll bg-[#232323] text-amber-50">
      <Designer />

      <Footer />
    </main>
  );
}
