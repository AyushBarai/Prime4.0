
import { CardContent, Card } from "@/components/ui/card"

export function Dessrevice() {
  return (<>
    <div className="bg-gray-50/90 py-6 lg:py-12">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
          <p
            className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We provide a wide range of IT services to help your business succeed.
          </p>
        </div>
      </div>
    </div>
    <section className="py-12 lg:py-24">
      <div
        className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-[1fr_700px] lg:gap-10 bg-gray-500/30 rounded-lg p-20 py-52">
        <div className="space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Managed IT Services</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Focus on your business while we take care of your IT. Our managed services include 24/7 monitoring,
            helpdesk support, and proactive maintenance.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <ServerIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
    <section className="py-12 lg:py-24">
      <div
        className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-[1fr_700px] lg:gap-10 bg-stone-300 p-20 py-52">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cloud Solutions</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Embrace the cloud with confidence. We offer cloud migration, architecture design, and management services
            to help you leverage the power of the cloud.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <CloudIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
    <section className="py-12 lg:py-24">
      <div
        className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-[1fr_700px] lg:gap-10 bg-gray-500/30 rounded-lg p-20 py-52">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cybersecurity</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Protect your business from cyber threats. Our cybersecurity services include risk assessment, security
            awareness training, and endpoint protection.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <ShieldCheckIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
    <section className="py-12 lg:py-24">
      <div
        className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-[1fr_700px] lg:gap-10 bg-stone-300 p-20 py-52">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">IT Consulting</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get expert advice on your IT strategy. Our consulting services cover digital transformation,
            infrastructure planning, and workflow optimization.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <LightbulbIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
  </>);
}


function ServerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>)
  );
}


function CloudIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>)
  );
}


function ShieldCheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>)
  );
}


function LightbulbIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>)
  );
}
