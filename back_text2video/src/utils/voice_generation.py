from gtts import gTTS
import os
from datetime import datetime
import requests
from src.prompts import   imagemodel
from src.config import client
from openai import OpenAIError
import logging

def voice_generates(text: str, file_name: str, folder: str):
    try:
         # in this code i have one proble ssssssssssssssssssssssssssssssssssssssssssssssssssssss
        #  #ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        # response = client.audio.speech.create(model="tts-1", voice="alloy", input=text) 
         
         
        response = client.audio.speech.create(model="tts-1", voice="alloy", input=" ".join(text.split()[1:]))
        # tts = gTTS(text)
        if not os.path.exists(folder):
            os.makedirs(folder)
        save_path = os.path.join(folder, file_name)
        # tts.save(save_path)
        response.stream_to_file(save_path)
         
        return save_path
    except OpenAIError as e:
        # Log OpenAI API errors
        logging.error(f"OpenAI API error: {e}")
        return None
    except Exception as e:
        # Log unexpected errors
        logging.error(f"Unexpected error: {e}")
        return None




def finalvoicefun(sceneList):
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    dynamic_folder_voice = f"voice_{timestamp}"
    output_folder_voice = os.path.join("Generated_voice", dynamic_folder_voice)
    voice_paths = []
    for i, scene in enumerate(sceneList):
        try:
            voice_path = voice_generates(
                
                scene["summary"], f"voice_scene_{i+1}.mp3", output_folder_voice
            )
            
            if voice_path:
                voice_paths.append(voice_path)
                print(f"Voiceover saved locally: {voice_path}")
            else:
                print(f"Failed to save voiceover for scene {i+1}.")
        except Exception as e:
            print(f"Error generating voice for scene {i+1}: {e}")
    return output_folder_voice