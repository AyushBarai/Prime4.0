import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { locations } from "@/constants";

export function Servicescard() {
  return (
    <div className="bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex justify-center text-3xl font-bold text-gray-900">
          Solutions & Services
        </h2>
        <p className="mt-4 text-gray-600 flex justify-center">
          With an extensive list of great quality and ecological options, you'll
          be able to find the perfect finish for your spaces.
        </p>
        <div className="mt-8 flex justify-end">
          <Button className="bg-black text-white">
            <Link href="./contactpage">Get in touch</Link>{" "}
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-[#FDE68A] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Banking
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Tailored financial solutions for modern banking needs.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>
          <Card className="bg-[#FECACA] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                CyberSecurity
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Protecting your digital assets with cutting-edge defense
                strategies.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>
          <Card className="bg-[#A7F3D0] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Networking & Telecom
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Building reliable connections for seamless communication.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>
          <Card className="bg-[#BFDBFE] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Retail Industry
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Elevating retail experiences through innovative solutions.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>
          <Card className="bg-[#FBCFE8] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Manufacturing
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Streamlining operations and optimizing production processes.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>
          <Card className="bg-[#FDE68A] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Cloud Services
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Empowering businesses with scalable and flexible cloud
                solutions.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>
          <Card className="bg-[#FDE68A] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Customer Realtionship Management
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Enhancing customer engagement through personalized interactions.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>
          <Card className="bg-[#A7F3D0] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                SAP - System Application & Products
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Integrated software solutions for efficient business management.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>
          <Card className="bg-[#FBCFE8] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Consulting Services
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Strategic guidance and expertise to drive business success.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>{" "}
          <Card className="bg-[#A7F3D0] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Automated Ops
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Optimizing workflows through automated operational processes.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>{" "}
          <Card className="bg-[#BFDBFE] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Digital Workspace
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Transforming work environments for enhanced productivity and
                collaboration.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>{" "}
          <Card className="bg-[#FDE68A] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Service & Information Technlogy Service Managements
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Ensuring IT services align with business objectives for optimal
                performance.
              </p>
              <Button className="mt-4">Details</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}
