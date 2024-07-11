import Image from "next/image";

import { AtSign, Github, Instagram, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div
      className={`bottom-0 flex h-screen w-full snap-center snap-always flex-col place-content-center justify-between space-y-12 bg-cover bg-center bg-no-repeat px-8 pb-6 pt-24 lg:space-y-24 lg:px-32 xl:px-64`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(41, 37, 36, 0.85), rgba(41, 37, 36, 0.9)), url('/background.png')",
      }}
    >
      <section className="col-span-full space-y-4 text-center">
        <h3 className="font-sokBrubah text-4xl md:text-6xl">
          INVESTIR EM DESIGN
        </h3>
        <p className="text-md font-timeBurner font-bold md:text-xl">
          É garantir diferenciação, valor, captar a atenção pela estética, e
          manter o interesse por funcionalidade.
        </p>
      </section>

      <section className="grid gap-16 font-timeBurner font-bold md:grid-cols-2 md:gap-12 md:divide-x">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-xl md:text-2xl">Barbára Demarchi</p>

            <div className="flex items-center gap-2">
              <AtSign className="size-4" />
              <p className="truncate text-sm">barbarademarchi24@yahoo.com.br</p>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <p>41 98836-9482</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Linkedin />
            <Instagram />
          </div>

          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-purple-100 font-medium">
            <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
              Entre em contato!
            </div>
            <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
              <span className="absolute h-full w-full translate-y-full skew-y-6 scale-y-0 bg-purple-600 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
              <span className="z-10">Entre em contato!</span>
            </div>
          </button>
        </div>

        <div className="align-items-start grid grid-cols-2 justify-items-center gap-4">
          <div className="space-y-2">
            <p className="text-xl text-purple-400 md:text-2xl">Páginas</p>

            <p>Motion</p>
            <p>Ilustração</p>
          </div>

          <div className="space-y-2">
            <p className="text-xl text-purple-400 md:text-2xl">Projetos</p>

            <p>Felice massas</p>
          </div>
        </div>
      </section>

      <section className="space-y-4 text-center">
        <Image
          className="mx-auto aspect-video h-20"
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

      <section className="col-span-2 flex items-center justify-end gap-4">
        <small>Coded by Luiz Coelho</small>
        <Github className="size-4 cursor-pointer transition-colors hover:stroke-cyan-800" />
        <Linkedin className="size-4 cursor-pointer transition-colors hover:stroke-cyan-800" />
      </section>
    </div>
  );
}
