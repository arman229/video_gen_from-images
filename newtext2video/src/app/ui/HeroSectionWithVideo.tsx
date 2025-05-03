import { Button } from "@/components/ui/button"
import Link from "next/link";
import { generate_videos, discount } from "../utils/HeroSectionWithVideo";
export const HeroSectionWithVideo = () => {
  return (

    <div id="herosectionwithvideo" className="  flex items-center justify-center h-screen bg-gray-50">
      <div className="flex w-full    mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex-col md:flex-row  ">
        <div className="flex-1   p-4">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Turn any idea or content
                <br className="hidden md:block" />
                {' '}
                <span className="inline-block text-deep-purple-accent-400">   to        video, instantly      </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Describe your idea, optionally add details such as video length, platform, voiceover accent, and watch as the video gets generated.
              </p>
            </div>
            <div className="flex flex-col items-center sm:flex-row ">
              <Button className="mr-3 " asChild>
                <Link href={generate_videos}>Generate videos</Link>
              </Button>    <Link href={discount} className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"     >
                Get 15% discount
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1   p-4  ">
          <iframe style={{ minHeight: "300px" }}
            width="100%"
            className="responsive-iframe"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};