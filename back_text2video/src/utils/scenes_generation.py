from src.prompts import openapimodel
from src.config import client
from openai.types.chat.chat_completion import ChatCompletion
from openai import OpenAIError

def scenes_generates(story: str):
 
    prompt = f"Split the following story into scenes:\n\n{story}\n\nProvide each scene with a title and a brief summary."
    
    try:
        response = client.chat.completions.create(
        model=openapimodel,
        messages=[
            {"role": "system", "content": "You are a helpful story writer."},
            {"role": "user", "content": prompt},
        ],
    )
        scenes = response.choices[0].message.content
        scene_list = []
        for scene in scenes.split("\n\n"):
            if scene.strip():
                title, summary = scene.split("\n", 1)
                scene_list.append({"title": title.strip(), "summary": summary.strip()})
        return scene_list
   
    except OpenAIError as e:
        # Log or handle OpenAI API errors
        print(f"OpenAI API error: {e}")
        return []
    except Exception as e:
        # Handle any other exceptions
        print(f"Unexpected error: {e}")
        return []