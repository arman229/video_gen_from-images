import { step_titles, step_description, steps_of_video } from "../utils/StepVideoCreation"

export const StepVideoCreation = () => {
  return (<div id="stepvideocreation" className="bg-gray-50">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

          {step_titles}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          {step_description}
        </p>
      </div>
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          {steps_of_video.map((sov) => {
            return (
              <>
                <div className="flex" key={sov.id}>
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-blue-600">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Step {sov.id}</p>
                    <p className="text-gray-700">
                      {sov.step}
                    </p>
                  </div>
                </div>
              </>
            )
          })}

        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div></div>
  );
};