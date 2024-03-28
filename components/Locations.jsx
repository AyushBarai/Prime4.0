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
    <div className="w-full overflow-hidden bg-[#FDF5DF] border-t border-b pb-[6rem] ">
      <section className="w-full pt-[4rem] ">
              <h2 className="text-3xl font-bold text-center md:text-5xl">
                Our Global Presence
              </h2>
      </section>
      <section className="container  md:mx-auto md:grid md:grid-cols-3 md:pt-[4rem] lg:pt-[6rem] px-4 sm:px-8 lg:px-16 flex flex-col">
        {locations.map((location, index) => (
          <div key={index} className="flex flex-col mb-2 p-3 ">
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
