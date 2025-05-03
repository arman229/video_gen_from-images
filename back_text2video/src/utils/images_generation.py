import os
import requests
from datetime import datetime
from src.config import client
from src.prompts import imagemodel
import logging
def saveImage(image_content, save_path):
    output_folder = os.path.dirname(save_path)
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    with open(save_path, "wb") as f:
        f.write(image_content) 

def images_generates(prompt: str):
    try:
        response = client.images.generate(
            model=imagemodel,
            prompt=prompt,
            quality="standard",
            n=1,
        )
        image_url = response.data[0].url 
        # image_url =  "https://www.w3schools.com/w3images/lights.jpg" 
        return image_url
    except requests.RequestException as e:
        # Log request-related errors
        logging.error(f"Request error generating image: {e}")
        raise
    except KeyError as e:
        # Handle case where 'url' key might be missing
        logging.error(f"KeyError: The response does not contain 'url': {e}")
        raise
    except Exception as e:
        # Log unexpected errors
        logging.error(f"Unexpected error generating image: {e}")
        raise

 


def finalscenesfun(scenes):
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    dynamic_folder = f"images_{timestamp}"
    output_folder = os.path.join("Generated_images", dynamic_folder)
    
    for i, scene in enumerate(scenes):
        try:
          # in this code i have one proble ssssssssssssssssssssssssssssssssssssssssssssssssssssss
        #  #ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        # response = client.audio.speech.create(model="tts-1", voice="alloy", input=text) 
         
            finalScenes=" ".join(scene['summary'].split()[1:])
            prompt = f"Please generate a realistic image based on the following scene description: {finalScenes}"
            imageUrl = images_generates(prompt)
            # ensure image url is valid
            if not imageUrl:
                raise ValueError("Generated image URL is empty.")
            
            imageContent = requests.get(imageUrl).content
            if not imageContent:
                raise ValueError("Failed to retrieve image content.")

            save_path = os.path.join(output_folder, f"image_scene_{i+1}.png")
            saveImage(imageContent, save_path)
            print(f"Images saved to {save_path}")
        # print(f"After Sve {i}  {save_path}", datetime.now()) 
            
            
        except Exception as e:
            # Log and continue processing remaining scenes
            logging.error(f"Error processing scene {i+1}: {e}")
            continue    

    return output_folder    