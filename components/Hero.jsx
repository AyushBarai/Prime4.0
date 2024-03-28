import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { serviceImages } from "@/constants";

export function Hero() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 flex flex-col justify-center items-center ">
        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-[#E1FCFD]">
          <div className="flex flex-col items-center justify-center space-y-3">
            <h1 className="text-2xl font-bold text-center sm:text-5xl md:text-6xl/none py-8 ">
              Solutions & Services
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 grid-rows-3 gap-4">
              {serviceImages.map((src, index) => (
                <Image
                  key={index}
                  src={src} // Assuming serviceImages contain URLs
                  alt={`Service Image ${index}`} // Add appropriate alt text
                  width={400} // Set width according to your design
                  height={300} // Set height according to your design
                  className="object-cover h-[15rem] w-[20rem] rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-[#8AA899]">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-center">
            MEET OUR TEAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 lg:max-w-none xl:gap-10">
            <div className="flex flex-col gap-1">
              <Image
                alt="Team member"
                className="mx-auto rounded-full object-cover overflow-hidden object-center"
                height="400"
                src="/Chethan.png"
                width="400"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
                  Chethan Jagadeesh
                </h3>
                <p className="text-sm mx-auto max-w-[600px] text-black">
                  Managing Director
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Image
                alt="Team member"
                className="mx-auto rounded-full object-cover object-center overflow-hidden"
                height="400"
                src="/Dinesh.png"
                width="400"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
                  Dinesh Basavarajappa
                </h3>
                <p className="text-sm mx-auto max-w-[600px] text-black">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let your team focus on shipping features instead of managing
                infrastructure with automated CI/CD.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
