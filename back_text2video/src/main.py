

from fastapi import FastAPI,HTTPException 
from src.utils.story_generation import generateStory
from src.utils.scenes_generation import scenes_generates
from src.utils.images_generation import finalscenesfun
from src.utils.voice_generation import finalvoicefun
from src.prompts import userContent, openapimodel
from src.model import PromptModel
from src.prompts import scenes
from fastapi import FastAPI
import logging
from pydantic import BaseModel
from typing import Optional
from src.utils.final_video_generation import combineAudioImages

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
) 

@app.post("/story_completion")
def call_story_completion(prompt_model: PromptModel):
    try:
        # story = generateStory(prompt_model.plot)
        # if "Error" in story:
        #     raise HTTPException(status_code=500, detail=story)
        # sceneList = scenes_generates(story)
        # if not sceneList:
        #     raise HTTPException(status_code=500, detail="Error: Unable to generate scenes.")
        
        # voicespath = finalvoicefun(sceneList)
        # if not voicespath:
        #      raise HTTPException(status_code=500, detail="Error: Unable to generate voice paths.")
        
        # imagespath = finalscenesfun(sceneList)
        # if not imagespath:
        #      raise HTTPException(status_code=500, detail="Error: Unable to generate image paths.")
     
        generatedVideoLocalPath = combineAudioImages(imagespath,voicespath,sceneList)
        return {"video ": f"video generated successfully" }
    except HTTPException as http_exc: 
        raise http_exc
    except Exception as e:
        logging.error(f"Error in story completion process: {e}")
        raise HTTPException(status_code=500, detail=str(e))

 

 
# @app.post("/post_request")
# def post_request(request: PromptModel):
#     return {"message": "helloWorld", "received_text": request.plot}

 

 
 

 

 
 

  