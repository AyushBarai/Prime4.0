import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { serviceImages } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Hero() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 flex flex-col justify-center items-center ">
        <section className="py-12 md:py-24 lg:py-32 ">
          <h1 className="text-2xl font-bold text-center sm:text-5xl md:text-6xl/none py-8 ">
            Solutions & Services
          </h1>
          <Carousel className="w-[90vw]">
            <CarouselContent className="-ml-1">
              {serviceImages.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          <Image
                            key={index}
                            src={src} // Assuming serviceImages contain URLs
                            alt={`Service Image ${index}`} // Add appropriate alt text
                            width={800} // Set width according to your design
                            height={800} // Set height according to your design
                            className="object-cover h-[8rem] w-[8rem] md:h-[20rem] md:w-[20rem] lg:h-[20rem] lg:w-[20rem] rounded-lg shadow-lg"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-opacity-50 bg-indigo-500">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-center text-white">
            OUR LEADERSHIP TEAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 lg:max-w-none xl:gap-10 text-white">
            <div className="flex flex-col gap-1">
              <Image
                alt="Team member"
                className="mx-auto rounded-full object-cover overflow-hidden object-center"
                height="300"
                src="/Chethan.png"
                width="300"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
                  Chethan Jagadeesh
                </h3>
                <p className="text-sm mx-auto max-w-[600px]">
                  Managing Director
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Image
                alt="Team member"
                className="mx-auto rounded-full object-cover object-center overflow-hidden"
                height="300"
                src="/Dinesh.png"
                width="300"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
                  Dinesh Basavarajappa
                </h3>
                <p className="text-sm mx-auto max-w-[600px] ">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-800">
          <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-center sm:text-5xl md:text-6xl/none mx-auto max-w-[1100px] text-white uppercase bg-green">
                Innovative solutions to inspire for the better
              </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
