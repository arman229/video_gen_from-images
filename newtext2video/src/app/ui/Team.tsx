
import { team_title, team_description, team_data } from "../utils/Team";

export const Team = () => {
  return (
    <div id="team" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Dream Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

          {team_title}

        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          {team_description}
        </p>
      </div>
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        {team_data.map((team_item) => {
          return (
            <div key={team_item.id}>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src={team_item.image}
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">{team_item.name}</p>
                  <p className="text-sm text-gray-800">{team_item.role}</p>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  );
};