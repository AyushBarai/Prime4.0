import Link from "next/link";
import Image from "next/image";

export function Team() {
  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className=" grid gap-4 px-4 text-center md:px-6 ">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              OUR TEAM
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white-400">
              Our team of experts is dedicated to delivering innovative
              solutions for our clients.
            </p>
          </div>

          <div className=" grid grid-cols-1 gap-4 py-6 lg:max-w-none xl:gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <Image
                alt="Team member"
                className="mx-auto rounded-full object-cover object-center"
                height="400"
                src="/Chethan.png"
                width="400"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-3">
                <li>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                      Chethan Jagadeesh
                    </h3>
                    <p className="text-sm mx-auto max-w-[600px] text-black">
                      Managing Director
                    </p>
                  </div>
                </li>

                <li>
                  <div className="grid gap-1">
                    <p className="text-sm text-white">
                      Chethan Jagadeesh is an individual contributor with over
                      10 years of experience in Sales, Account Management, and
                      Business Development across various markets, products, and
                      services. His passion for his work and continuous
                      self-improvement has led to significant achievements,
                      including a substantial increase in revenue through new
                      client relationships in the Middle East. With high energy,
                      great communication skills, and the ability to work
                      independently or in a team, Chethan excels in roles
                      requiring sales management, key account management, and
                      strategic alliance management. His approach to corporate
                      work involves full engagement and authority, aiming to
                      maximize work potential and foster a smart working
                      culture. Chethan's specialties include customer
                      acquisition and end-to-end sales, making him a reliable
                      and friendly professional in the corporate environment.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=" grid grid-cols-1 gap-4 lg:max-w-none xl:gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-3">
                <li>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                      Dinesh Basavarajappa
                    </h3>
                    <p className="text-sm mx-auto max-w-[300px] text-black">
                      Chief Executive Officer
                    </p>
                  </div>
                </li>

                <li>
                  <div className="grid gap-1">
                    <p className="text-sm text-white">
                      Chethan Jagadeesh is an individual contributor with over
                      10 years of experience in Sales, Account Management, and
                      Business Development across various markets, products, and
                      services. His passion for his work and continuous
                      self-improvement has led to significant achievements,
                      including a substantial increase in revenue through new
                      client relationships in the Middle East. With high energy,
                      great communication skills, and the ability to work
                      independently or in a team, Chethan excels in roles
                      requiring sales management, key account management, and
                      strategic alliance management. His approach to corporate
                      work involves full engagement and authority, aiming to
                      maximize work potential and foster a smart working
                      culture. Chethan's specialties include customer
                      acquisition and end-to-end sales, making him a reliable
                      and friendly professional in the corporate environment.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <Image
                alt="Team member"
                className="mx-auto rounded-full object-cover object-center"
                height="400"
                src="/Dinesh.png"
                width="400"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
