'use client';
import React, { FC, ChangeEvent, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { TfiMenu } from 'react-icons/tfi';
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import Image from "next/image";
const DrawerContent = ({isOpen}:any) => {
 
    const [logoFile, setLogoFile] = useState<File | null>(null);

   

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = e.target.files[0];
        if (file) {
            setLogoFile(file);
        }
    };
    
    return (
         

       
        <div className="flex">

            <div className={`v  fixed top-0 left-0 z-20 min-h-screen overflow-x-hidden transition-width duration-500 ${isOpen ? 'w-72' : 'w-0'} max-h-screen overflow-y-auto`}>

                <div className=" border-r   flex h-full max-h-screen flex-col   gap-2 p-4">

                    <div className="text-lg font-semibold border-b mb-2 m-0 p-0 ">
                        Video Creator


                    </div>
                    <div className="flex-1 overflow-auto">
                        <div className="grid gap-4">
                            <div>
                                <h3 className="mb-2 text-sm font-medium  first-line:">
                                    Dimensions
                                </h3>
                                <div className="grid grid-cols-2 gap-2  ">
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem value="1920x1080">1920x1080</SelectItem>
                                            <SelectItem value="1280x720">1280x720</SelectItem>
                                            <SelectItem value="640x360">640x360</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem value="landscape">Landscape</SelectItem>
                                            <SelectItem value="portrait">Portrait</SelectItem>
                                            <SelectItem value="youtubeshort">
                                                youtube short
                                            </SelectItem>
                                            <SelectItem value="tiktokShort">
                                                tiktok short
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-2 text-sm font-medium">
                                    Background Music
                                </h3>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="energatic">Energatic</SelectItem>
                                        <SelectItem value="motivational">
                                            Motivational
                                        </SelectItem>
                                        <SelectItem value="relaxing">Relaxing</SelectItem>
                                        <SelectItem value="none">None</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <h3 className="mb-2 text-sm font-medium">Voice</h3>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="child">Child</SelectItem>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="oldman">Old Man</SelectItem>
                                        <SelectItem value="Old Woman">Old Woman</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <h3 className="mb-2 text-sm font-medium">Language</h3>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="en">English</SelectItem>
                                        <SelectItem value="es">Spanish</SelectItem>
                                        <SelectItem value="fr">French</SelectItem>
                                        <SelectItem value="hi">Hindi</SelectItem>
                                        <SelectItem value="ur">Urdu</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <h3 className="mb-2 text-sm font-medium">Scene Type</h3>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="office">Cartoon</SelectItem>
                                        <SelectItem value="nature">Nature</SelectItem>
                                        <SelectItem value="city">Realistic</SelectItem>
                                        <SelectItem value="painting">Painting</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <h3 className="mb-2 text-sm font-medium">Caption</h3>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="office">None</SelectItem>
                                        <SelectItem value="nature">Urdu</SelectItem>
                                        <SelectItem value="city">Hindi</SelectItem>
                                        <SelectItem value="painting">English</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <h3 className=" text-sm font-medium">Logo</h3>
                                <div className={"flex  items-center  bg-white  my-2"}>

                                    <input
                                        id="imageInput"
                                        type="file"
                                        name={"logo"}
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        style={{ display: 'none' }}
                                    />

                                    <CustomImage
                                        className={"rounded-lg"}
                                        placeholder={"/assets/images/organization_logo_placeholder.png"}
                                        alt={"organization logo"} width={20} height={10}
                                        src={logoFile == null ? undefined : URL.createObjectURL(logoFile)}
                                    />

                                    <Button onClick={() => {
                                        document.getElementById('imageInput')?.click()
                                    }}>Upload logo</Button>
                                </div></div>
                            <div>

                                <div className='mb-4'>
                                    <h3 className="mb-2 text-sm font-medium mt-2">
                                        Logo Position
                                    </h3>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select position" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem value="top-left">Top Left</SelectItem>
                                            <SelectItem value="top-right">Top Right</SelectItem>
                                            <SelectItem value="bottom-left">Bottom Left</SelectItem>
                                            <SelectItem value="bottom-right">
                                                Bottom Right
                                            </SelectItem>
                                            <SelectItem value="center">Center</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
export default DrawerContent
interface CustomImageProps {
    src: string | undefined;
    placeholder: string,
    alt: string;
    height: number;
    width: number;
    className?: string | undefined;
}




const CustomImage: FC<CustomImageProps> = ({ className, src, alt, placeholder, height, width }) => {


    return (
        <>
            {src ? (
                <Image
                    className={className}
                    height={height}
                    width={width}
                    src={src}
                    alt={alt}
                />
            )
                : (
                    <Image
                        className={className}
                        height={height}
                        width={width}
                        src={placeholder}
                        alt={"s"}
                    />
                )
            }
        </>

    );
};

export { CustomImage };