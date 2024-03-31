import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { locations } from "@/constants";
import Link from "next/link";

export function Locations() {
  return (
    <div className="bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <p className="mt-4 text-gray-600 flex justify-center">
          With over a decade of experience We make it REAL
        </p>
        <h2 className="flex justify-center text-3xl font-bold text-gray-900">
          Our Global Presence
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col mb-2 p-3">
              <Card className="bg-[#A7F3D0] p-5">
                <CardContent>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
                    {location.Location_Title}
                  </h3>
                  <h3 className="mt-4 text-3xl font-semibold text-gray-900">
                    {location.city}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {location.country}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
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
