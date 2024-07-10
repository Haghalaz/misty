import GlassCard from "@src/components/molecules/glass-card";

import back from "@src/assets/img/card.png";
import Image from "next/image";
import {
  AtSign,
  Github,
  Instagram,
  Linkedin,
  Phone,
  VoicemailIcon,
} from "lucide-react";

import logo from "@src/assets/logo.svg";

export default function Footer() {
  return (
    <footer
      className={`sticky w-full bg-no-repeat bg-center bg-cover space-y-12 bottom-0 px-8 py-6 lg:space-y-24 lg:px-32 xl:px-64`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(41, 37, 36, 0.85), rgba(41, 37, 36, 0.9)), url('/background.png')",
      }}
    >
      <section className="text-center space-y-4">
        <h3 className="font-sokBrubah text-4xl md:text-6xl">
          INVESTIR EM DESIGN
        </h3>
        <p className="text-md font-timeBurner font-bold md:text-xl">
          É garantir diferenciação, valor, captar a atenção pela estética, e
          manter o interesse por funcionalidade.
        </p>
      </section>

      <section className="grid font-timeBurner font-bold md:grid-cols-2 md:divide-x gap-16 md:gap-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-xl md:text-2xl">Barbára Demarchi</p>

            <div className="flex gap-2 items-center">
              <AtSign className="size-4" />
              <p className="text-sm truncate">barbarademarchi24@yahoo.com.br</p>
            </div>

            <div className="flex gap-2 items-center">
              <Phone className="size-4" />
              <p>41 98836-9482</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Linkedin />
            <Instagram />
          </div>

          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-purple-100 font-medium">
            <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
              Entre em contato!
            </div>
            <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
              <span className="absolute h-full w-full translate-y-full scale-y-0 bg-purple-600 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
              <span className="z-10">Entre em contato!</span>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 justify-items-center align-items-start">
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-purple-400">Páginas</p>

            <p>Motion</p>
            <p>Ilustração</p>
          </div>

          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-purple-400">Projetos</p>

            <p>Felice massas</p>
          </div>
        </div>
      </section>

      <section className="text-center space-y-4">
        <Image
          className="h-20 mx-auto aspect-video"
          src="/logo.svg"
          alt="Misty logo"
          width={500}
          height={500}
        />
        <p className="text-md px-24 font-timeBurner font-bold md:text-xl">
          Transforme suas ideias em realidade e traga mais valor para a sua
          marca!
        </p>
      </section>

      <section className="flex col-span-2 gap-4 items-center justify-end">
        <small>Coded by Luiz Coelho</small>
        <Github className="size-4 transition-colors hover:stroke-cyan-800 cursor-pointer" />
        <Linkedin className="size-4 transition-colors hover:stroke-cyan-800 cursor-pointer " />
      </section>
    </footer>
  );
}
