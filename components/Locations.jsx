import Link from "next/link";
import { locations } from "@/constants";

export function Locations() {
  // Function to determine the number of grid columns dynamically
  const getGridColumns = () => {
    // Get the window width
    const windowWidth = window.innerWidth;
    // Define breakpoints for column count
    const breakpoints = {
      sm: 1, // 1 column for small screens
      md: 3, // 2 columns for medium screens
      lg: 3, // 3 columns for large screens
    };

    // Determine the appropriate number of columns based on window width
    if (windowWidth < 640) {
      return breakpoints.sm;
    } else if (windowWidth < 1024) {
      return breakpoints.md;
    } else {
      return breakpoints.lg;
    }
  };

  return (
    <div className="w-full overflow-hidden bg-[#FDF5DF]">
      <div className="w-[auto] h-auto hidden " />
      <div className="flex justify-center text-4xl font-bold mt-[4rem]">
        With over a decade of experience
      </div>
      <div className="flex justify-center text-4xl font-bold ">
        We make it REAL
      </div>
      <section className="container mx-auto px-8 pt-10 sm:px-16 lg:px-24 ">
        <h1 className="text-4xl font-semibold ">Our Global Presence</h1>
      </section>
      <section className="container mx-auto grid grid-cols-3 py-12 md:py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
        {locations.map((location, index) => (
          <div key={index} className="flex flex-col mb-8 mx-5">
            <h2 className="text-xl font-semibold mb-2">{location.name}</h2>
            <div className="text-sm text-gray-600">
              <p>{location.address}</p>
              <p>
                <a
                  className="underline"
                  href={`tel:${location.phone}`}
                  target="_blank"
                >
                  {location.phone}
                </a>
              </p>
              <p>
                <a
                  className="underline"
                  href={location.directions}
                  target="_blank"
                >
                  DIRECTIONS
                </a>
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
