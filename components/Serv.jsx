
import { Button } from "@/components/ui/button"

export function Serv() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-slate-50 to-indigo-200">
      <div className="container space-y-10 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <div
            className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Services</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Tailored solutions for your business
          </h1>
          <p
            className="max-w-3xl mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We offer a wide range of services to meet your business needs. From consulting to implementation, we've got
            you covered.
          </p>
        </div>
        {/* items start
        ffffffffffffffffffffffffff
        ffffffffffffffffffffff
        fffffffffffffffffff
        */}
        <div
          className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
              <AccessibilityIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Banking</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Tailored financial solutions for modern banking needs.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 border-gray-200">
              <CodeIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Cyber Security</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Protecting your digital assets with cutting-edge defense strategies.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div>

          
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 border-gray-200">
              <DatabaseIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Networking & Telecom</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Building reliable connections for seamless communication.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 border-gray-200">
              <ComponentIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Retail Industry</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
               Elevating retail experiences through innovative solutions.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 border-gray-200">
              <ServerIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Cloud Services</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Empowering businesses with scalable and flexible cloud solutions.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 border-gray-200">
              <MenuIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Manufacturing</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Streamlining operations and optimizing production processes
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
              <AccessibilityIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Customer relations</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Enhancing customer engagement through personalized interactions.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div>
          {/* item */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
              <AccessibilityIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">SAP</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Integrated software solutions for efficient business management.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div>
          {/* item */}

          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
              <AccessibilityIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Automated OPS</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Optimizing workflows through automated operational processes.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
              <AccessibilityIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Digital Workspace</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Transforming work environments for enhanced productivity and collaboration.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div><div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
              <AccessibilityIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Service Management</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Ensuring IT services align with business objectives for optimal performance.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div><div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
              <AccessibilityIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Consulting</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Strategic guidance and expertise to drive business success.
              </p>
            </div>
            <Button className="mx-auto w-full max-w-[150px]" size="sm" variant="outline">
              Learn More
            </Button>
          </div>
          

        </div>
        {/* add above this */}

        
        
      </div>
    </section>)
  );
}


function AccessibilityIcon(props) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>)
  );
}


function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>)
  );
}


function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>)
  );
}


function ComponentIcon(props) {
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
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>)
  );
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


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}
