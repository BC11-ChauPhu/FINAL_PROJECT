import React from "react";

const Features = () => {
  return (
    <section id="features">
      <div className="container mx-auto mb-32 flex flex-col space-y-12 px-4 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold text-polarnight4 md:text-left">
            What's different ?
          </h2>
          <p className="max-w-md text-center text-gray-500 md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            nobis doloribus accusantium tempore ipsam aliquid eius iusto veniam
            laborum exercitationem?
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
            <div className="rounded-l-full bg-snowstorm1 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-polarnight1 px-4 py-2 text-white md:py-1">
                  01
                </div>
                <h3 className="text-base font-bold text-polarnight4 md:hidden">
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden text-lg font-bold text-polarnight4 md:block">
                Lorem ipsum dolor sit amet.
              </h3>
              <div className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                et mollitia sed reprehenderit, corrupti doloremque perferendis
                rerum id doloribus a velit illo eaque, delectus inventore
                voluptas minus dicta voluptatum quisquam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
