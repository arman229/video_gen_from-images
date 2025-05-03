import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
const WrittingPrompt = () => {
    const [text, setText] = useState('');

    const handleChange = (event: any) => {
        setText(event.target.value);
    };


    const handleSubmit = async (event: any) => {
        try {
            const response = await fetch('https://your-api-endpoint.com/your-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (<div className="  h-full w-full">
        <div className=" p-2 flex justify-end ">
            <Button className="  p-2 mx-6 text-white">
                New Project
            </Button>
        </div>
        <div className="flex flex-col bg-white  ">
            <main className=" first-letter: p-4 md:p-6">
                <div className="mx-auto max-w-4xl">
                    <h3 className="scroll-m-20 text-2xl py-4 font-semibold tracking-tight">
                        Prompt
                    </h3>
                    <div className="mb-6">
                        <Textarea value={text}
                            onChange={handleChange}
                            className="h-[300px] w-full resize-none rounded-lg border border-gray-300 p-4 text-sm after:"
                            placeholder="Write your video script here..."
                        />
                    </div>
                    <div className="flex justify-end gap-2">

                        <Button className=" " onClick={handleSubmit}>
                            Generatate Video
                        </Button>
                    </div>



                </div>
            </main>
        </div>
    </div>)
}
export default WrittingPrompt