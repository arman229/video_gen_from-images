from openai.types.chat.chat_completion import ChatCompletion
from src.prompts import systemContent,openapimodel
from src.model import PromptModel
from src.config import client
from openai import OpenAIError
def generateStory(plot:str):
    systemcontent="""
    
    I want you to act as a storyteller. You will come up with entertaining stories that are engaging, imaginative and captivating for the audience.  """
    se="Imagine you are a skilled storyteller tasked with creating a compelling narrative based on the following plot outline. Your goal is to generate a detailed and realistic story that captivates the reader."
    try:
        response: ChatCompletion = client.chat.completions.create(
        model=openapimodel,
        messages=[
            {"role": "system",
             "content": se
             },
            {"role": "user",
             "content": plot
             }
        ],
        max_tokens=500,
    )
        return response.choices[0].message.content
    except OpenAIError as e:
        # Log or handle OpenAI API errors
        print(f"OpenAI API error: {e}")
        return "Error: Unable to generate story."
    except Exception as e:
        # Handle any other exceptions
        print(f"Unexpected error: {e}")
        return "Error: An unexpected error occurred."
   
  