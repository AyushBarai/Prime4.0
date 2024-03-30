
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Cards() {
  return (
    (<div
      className="grid gap-4 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">


      <div
        className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <div
          className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 group-hover:opacity-70 transition-opacity">
          <img
            alt="Image"
            className="object-cover w-full aspect-[4/3] group-hover:transform scale-110 transition-transform"
            src="/placeholder.svg" />
        </div>
        <div className="p-4 grid gap-2">
          <h3
            className="text-base font-semibold-variant tracking-wide-variant group-hover:underline transition-all">
            Getting Started with Next.js
          </h3>
          <p className="text-sm leading-none-variant line-clamp-2-variant">
            Learn how to build your app with the fastest framework for React.
          </p>
          <Link
            className="inline-flex items-center space-x-2 text-sm font-semibold group-hover:underline transition-all"
            href="#">
            <span>Watch video</span>
            <ChevronRightIcon className="h-4 w-4 opacity-70" />
          </Link>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 text-center bg-gray-100 dark:bg-gray-800 bg-opacity-70 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold-variant">Getting Started with Next.js</h3>
            <p className="text-sm leading-none-variant">shadcn.com</p>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
        </div>
      </div>

      <div
        className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <div
          className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 group-hover:opacity-70 transition-opacity">
          <img
            alt="Image"
            className="object-cover w-full aspect-[4/3] group-hover:transform scale-110 transition-transform"
            src="/placeholder.svg" />
        </div>
        <div className="p-4 grid gap-2">
          <h3
            className="text-base font-semibold-variant tracking-wide-variant group-hover:underline transition-all">
            Getting Started with Next.js
          </h3>
          <p className="text-sm leading-none-variant line-clamp-2-variant">
            Learn how to build your app with the fastest framework for React.
          </p>
          <Link
            className="inline-flex items-center space-x-2 text-sm font-semibold group-hover:underline transition-all"
            href="#">
            <span>Watch video</span>
            <ChevronRightIcon className="h-4 w-4 opacity-70" />
          </Link>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 text-center bg-gray-100 dark:bg-gray-800 bg-opacity-70 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold-variant">Getting Started with Next.js</h3>
            <p className="text-sm leading-none-variant">shadcn.com</p>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
        </div>
      </div>

      <div
        className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <div
          className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 group-hover:opacity-70 transition-opacity">
          <img
            alt="Image"
            className="object-cover w-full aspect-[4/3] group-hover:transform scale-110 transition-transform"
            src="/placeholder.svg" />
        </div>
        <div className="p-4 grid gap-2">
          <h3
            className="text-base font-semibold-variant tracking-wide-variant group-hover:underline transition-all">
            Deploying with Vercel
          </h3>
          <p className="text-sm leading-none-variant line-clamp-2-variant">
            Learn how to deploy your frontend projects with zero configuration.
          </p>
          <Link
            className="inline-flex items-center space-x-2 text-sm font-semibold group-hover:underline transition-all"
            href="#">
            <span>Watch video</span>
            <ChevronRightIcon className="h-4 w-4 opacity-70" />
          </Link>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 text-center bg-gray-100 dark:bg-gray-800 bg-opacity-70 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold-variant">Deploying with Vercel</h3>
            <p className="text-sm leading-none-variant">shadcn.com</p>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
        </div>
      </div>

      <div
        className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <div
          className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 group-hover:opacity-70 transition-opacity">
          <img
            alt="Image"
            className="object-cover w-full aspect-[4/3] group-hover:transform scale-110 transition-transform"
            src="/placeholder.svg" />
        </div>
        <div className="p-4 grid gap-2">
          <h3
            className="text-base font-semibold-variant tracking-wide-variant group-hover:underline transition-all">
            Contactless Check-in
          </h3>
          <p className="text-sm leading-none-variant line-clamp-2-variant">
            Learn how to check in to your flight using the Vercel app.
          </p>
          <Link
            className="inline-flex items-center space-x-2 text-sm font-semibold group-hover:underline transition-all"
            href="#">
            <span>Watch video</span>
            <ChevronRightIcon className="h-4 w-4 opacity-70" />
          </Link>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 text-center bg-gray-100 dark:bg-gray-800 bg-opacity-70 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold-variant">Contactless Check-in</h3>
            <p className="text-sm leading-none-variant">shadcn.com</p>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
        </div>
      </div>

      <div
        className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <div
          className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 group-hover:opacity-70 transition-opacity">
          <img
            alt="Image"
            className="object-cover w-full aspect-[4/3] group-hover:transform scale-110 transition-transform"
            src="/placeholder.svg" />
        </div>
        <div className="p-4 grid gap-2">
          <h3
            className="text-base font-semibold-variant tracking-wide-variant group-hover:underline transition-all">
            Onboard Wi-Fi
          </h3>
          <p className="text-sm leading-none-variant line-clamp-2-variant">
            Connect to Wi-Fi after take-off with the following code: 9w4FjKc
          </p>
          <Link
            className="inline-flex items-center space-x-2 text-sm font-semibold group-hover:underline transition-all"
            href="#">
            <span>Connect</span>
            <ChevronRightIcon className="h-4 w-4 opacity-70" />
          </Link>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 text-center bg-gray-100 dark:bg-gray-800 bg-opacity-70 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold-variant">Onboard Wi-Fi</h3>
            <p className="text-sm leading-none-variant">Connect to Wi-Fi after take-off</p>
            <Button size="sm">Connect</Button>
          </div>
        </div>
      </div>

      <div
        className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <div
          className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 group-hover:opacity-70 transition-opacity">
          <img
            alt="Image"
            className="object-cover w-full aspect-[4/3] group-hover:transform scale-110 transition-transform"
            src="/placeholder.svg" />
        </div>
        <div className="p-4 grid gap-2">
          <h3
            className="text-base font-semibold-variant tracking-wide-variant group-hover:underline transition-all">
            Getting Started with Next.js
          </h3>
          <p className="text-sm leading-none-variant line-clamp-2-variant">
            Learn how to build your app with the fastest framework for React.
          </p>
          <Link
            className="inline-flex items-center space-x-2 text-sm font-semibold group-hover:underline transition-all"
            href="#">
            <span>Watch video</span>
            <ChevronRightIcon className="h-4 w-4 opacity-70" />
          </Link>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 text-center bg-gray-100 dark:bg-gray-800 bg-opacity-70 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold-variant">Getting Started with Next.js</h3>
            <p className="text-sm leading-none-variant">shadcn.com</p>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
        </div>
      </div>

      <div
        className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <div
          className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 group-hover:opacity-70 transition-opacity">
          <img
            alt="Image"
            className="object-cover w-full aspect-[4/3] group-hover:transform scale-110 transition-transform"
            src="/placeholder.svg" />
        </div>
        <div className="p-4 grid gap-2">
          <h3
            className="text-base font-semibold-variant tracking-wide-variant group-hover:underline transition-all">
            Getting Started with Next.js
          </h3>
          <p className="text-sm leading-none-variant line-clamp-2-variant">
            Learn how to build your app with the fastest framework for React.
          </p>
          <Link
            className="inline-flex items-center space-x-2 text-sm font-semibold group-hover:underline transition-all"
            href="#">
            <span>Watch video</span>
            <ChevronRightIcon className="h-4 w-4 opacity-70" />
          </Link>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 text-center bg-gray-100 dark:bg-gray-800 bg-opacity-70 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold-variant">Getting Started with Next.js</h3>
            <p className="text-sm leading-none-variant">shadcn.com</p>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
        </div>
      </div>

      <div
        className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <div
          className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 group-hover:opacity-70 transition-opacity">
          <img
            alt="Image"
            className="object-cover w-full aspect-[4/3] group-hover:transform scale-110 transition-transform"
            src="/placeholder.svg" />
        </div>
        <div className="p-4 grid gap-2">
          <h3
            className="text-base font-semibold-variant tracking-wide-variant group-hover:underline transition-all">
            Getting Started with Next.js
          </h3>
          <p className="text-sm leading-none-variant line-clamp-2-variant">
            Learn how to build your app with the fastest framework for React.
          </p>
          <Link
            className="inline-flex items-center space-x-2 text-sm font-semibold group-hover:underline transition-all"
            href="#">
            <span>Watch video</span>
            <ChevronRightIcon className="h-4 w-4 opacity-70" />
          </Link>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 text-center bg-gray-100 dark:bg-gray-800 bg-opacity-70 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold-variant">Getting Started with Next.js</h3>
            <p className="text-sm leading-none-variant">shadcn.com</p>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
        </div>
      </div>

      <div
        className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <div
          className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 group-hover:opacity-70 transition-opacity">
          <img
            alt="Image"
            className="object-cover w-full aspect-[4/3] group-hover:transform scale-110 transition-transform"
            src="/placeholder.svg" />
        </div>
        <div className="p-4 grid gap-2">
          <h3
            className="text-base font-semibold-variant tracking-wide-variant group-hover:underline transition-all">
            Getting Started with Next.js
          </h3>
          <p className="text-sm leading-none-variant line-clamp-2-variant">
            Learn how to build your app with the fastest framework for React.
          </p>
          <Link
            className="inline-flex items-center space-x-2 text-sm font-semibold group-hover:underline transition-all"
            href="#">
            <span>Watch video</span>
            <ChevronRightIcon className="h-4 w-4 opacity-70" />
          </Link>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 text-center bg-gray-100 dark:bg-gray-800 bg-opacity-70 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold-variant">Getting Started with Next.js</h3>
            <p className="text-sm leading-none-variant">shadcn.com</p>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
        </div>
      </div>
    </div>)
  );
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}
