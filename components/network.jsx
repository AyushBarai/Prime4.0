import React from "react";

export function Network() {
  return (
    <div className="flex flex-col ">
      <main className="flex flex-col justify-center items-center ">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative z-[-1]"
          style={{
            backgroundImage: 'url("./Designer3.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white to-white opacity-20" />

          <div className="flex flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-6">
            <div className="text-5xl text-center text-black z-[1] ">
              <b>Network</b>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 md:py-24 lg:py-32 border-t">
          <div className="space-y-3">
            <div className="self-stretch relative tracking-[-0.01em] leading-[30px]">
              <p className="mb-18">INTELLIGENI AUTOMATED OPS</p>
            </div>
            <b className="self-stretch relative text-5xl tracking-[-0.01em] leading-[36px] text-black mq450:text-lgi mq450:leading-[29px]">
              If the reliability of your digital infrastructure is a business
              differentiator, we have a solution.
            </b>
            <div className="self-stretch relative tracking-[-0.01em] leading-[30px] mt-6">
              Imagine your business as a complex network of interconnected
              systems and processes. Your digital infrastructure forms the
              backbone of this network, supporting everything from applications,
              communication, and data storage to customer interactions and
              transactions. This infrastructure is pivotal for your success and
              competitiveness. Any disruptions or downtimes in these systems can
              lead to decreased productivity, customer dissatisfaction, and
              revenue losses. But as you well know, unfaltering digital
              infrastructure is hard to achieve. But that is where we come in.
              Think of us at Microland as your digital infrastructure
              caretakers. We specialize in ensuring that your IT systems run
              smoothly, securely, and efficiently. It's about minimizing risks,
              maximizing opportunities, and ensuring that technology aligns
              seamlessly with your business objectives. With our expertise, you
              can focus on what you do best – growing your business – while we
              handle the complexities of your digital foundation. That is what
              we mean by Making Digital Happen with our platforms.
            </div>
          </div>
          <div className="hidden md:block">
            <img
              className="object-cover w-full h-full"
              src="./Designer3.png"
              alt="Image"
            />
          </div>
        </section>

        <section className="mx-auto w-full py-12 md:py-24 lg:py-32 border-t px-4 sm:px-8 lg:px-16">
          <div className="flex items-start justify-start gap-4 text-start">
            <div className="space-y-3">
              <div className="w-auto flex flex-col items-start justify-start container mx-auto">
                <h2 className="text-4xl font-semibold mb-8">
                  Key Differentiators
                </h2>
                <h3 className="text-2xl leading-[30px] font-bold text-blue-500 pt-2">
                  10x Efficiencies
                </h3>
                <p>
                  Intelligeni Automated Ops delivers more efficiency even as
                  systems rapidly grow more complex with orders-of-magnitude
                  improvements to MTTR, SR fulfillment time, Incident reduction,
                  and Change stability.
                </p>
                <h3 className="text-2xl leading-[30px] font-bold text-blue-500 pt-2">
                  Smart Workflows
                </h3>
                <p>
                  Hyper-automation with over 200 Bots that operate across
                  platforms, made intelligent by combining the Insights in the
                  Intelligeni Knowledge Graph.
                </p>
                <h3 className="text-2xl leading-[30px] font-bold text-blue-500 pt-2">
                  Unified Full-Stack
                </h3>
                <p>
                  The modern digital infra stack is edge-to-edge — and includes
                  applications, hyper-cloud, distributed networks, end-points,
                  and IIoT. Intelligeni addresses this entire stack.
                </p>
                <h3 className="text-2xl leading-[30px] font-bold text-blue-500 pt-2">
                  Unparalleled Visibility
                </h3>
                <p>
                  Get complete insights into everything that is happening across
                  your Digital Infrastructure from ITSM processes to user
                  satisfaction, to the capacity and behavior of your systems to
                  financial performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
