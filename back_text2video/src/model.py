from pydantic import BaseModel 

class PromptModel(BaseModel):
    plot: str