'use client';
import React, { FC, ChangeEvent, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { TfiMenu } from 'react-icons/tfi';
import DrawerContent from "@/app/promptsection/DrawerContent"
import WrittingPrompt from "@/app/promptsection/WrittingPrompt"

const PromptSection = () => {

    const [isOpen, setIsOpen] = useState(true);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (<>
        <div className="flex  ">
            <div className={`bg-gray-300      fixed top-0 left-0 z-20 min-h-screen overflow-x-hidden transition-width duration-500 ${isOpen ? 'w-72' : 'w-0'} max-h-screen overflow-y-auto`}>
                <DrawerContent isOpen={isOpen} />
            </div>
            <div className={`flex-1    relative transition-all duration-300 ease-in-out ${isOpen ? 'ml-72' : 'ml-0'}`}>
                <main className="flex  ">
                    <div className={`cursor-pointer p-2  `} onClick={() => toggleNav()}>
                        {isOpen ? (<VscChromeClose size={24}/>) : <TfiMenu size={24} />}
                    </div>
                    
                    <WrittingPrompt />
                </main>
            </div>
        </div></>)
}
export default PromptSection