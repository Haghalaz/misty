import Footer from "@src/components/organism/footer";
import Image from "next/image";
import GlassCard from "../components/molecules/glass-card-icon";

import { FlipWords } from "@src/components/molecules/flip-words";

function Designer() {
  const words = ["designer", "ilustradora", "videomaker", "socialmedia"];

  return (
    <div
      className={`topography bottom-0 flex h-screen w-full snap-center snap-always flex-col justify-center space-y-12 px-8 pb-6 pt-24 lg:space-y-24 lg:px-32 xl:px-64`}
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          className="m-4 rounded-b-lg rounded-t-full outline outline-offset-4 outline-purple-500"
          src="/designer.png"
          alt="Barbara Demarchi"
          width="300"
          height="100"
        />

        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-sokBrubah text-7xl">Olá, eu sou a Bárbara!</h1>

          <p className="font-timeBurner text-3xl font-bold tracking-wider text-neutral-600 dark:text-neutral-400">
            Eu sou
            <FlipWords words={words} /> <br />
            Bem Vindo ao Estúdio Criativo!
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative h-screen snap-y snap-mandatory overflow-y-scroll bg-[#232323] text-amber-50">
      <Designer />

      <Footer />
    </main>
  );
}
