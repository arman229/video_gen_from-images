import { fetures_title, fetures_description, features_data } from "@/app/utils/Features";
export default function FeaturesSection() {
    return (
        <>
            <div id="features" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        {fetures_title}
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        {fetures_description}
                    </p>
                </div>
                <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                    {features_data.map((fd) => {
                        return (
                            <div className="p-8 border-b sm:border-r" key={fd.id}>
                                <div className="max-w-md text-center">
                                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full    text-white sm:w-16 sm:h-16`} style={{ backgroundColor: `${fd.bgcolor}` }}>                                        {fd.icon}
                                    </div>
                                    <h6 className="mb-2 font-semibold leading-5">{fd.title}</h6>
                                    <p className="mb-3 text-sm text-gray-900">
                                        {fd.description}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>










        </>
    )
}







