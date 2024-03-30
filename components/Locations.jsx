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
    <div className="w-full overflow-hidden bg-[#FDF5DF] border-t border-b pb-[6rem] text-black ">
      <div className="flex justify-center text-center text-4xl font-bold mt-[4rem] ">
        With over a decade of experience
      </div>
      <div className="flex justify-center text-center text-4xl font-bold">
        We make it REAL
      </div>
      <section className="w-full pt-[4rem] ">
        <h2 className="text-3xl font-bold text-center md:text-5xl underline">
          Our Global Presence
        </h2>
      </section>
      <section className="container items-center text-center item-center md:mx-auto md:grid md:grid-cols-3 md:pt-[3rem] lg:pt-[5rem] px-4 pt-[1rem] lg:px-16 ">
        {locations.map((location, index) => (
          <div key={index} className="flex flex-col mb-2 p-3 ">
            {location.ishead && <h2 style={{ color: "red" }}>HEADQUARTER</h2>}
            {!location.ishead && (
              <h2 style={{ color: "#FDF5DF" }}>HEADQUARTER</h2>
            )}
            <h2 className="text-xl font-semibold mb-2">{location.country}</h2>
            <div className="text-sm text-gray-600">
              <h2 className="text-xl font-semibold mb-2">{location.city}</h2>
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
