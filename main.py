import json
from fastapi import Request, FastAPI

app = FastAPI()

@app.post("/webhooks")
async def root(request: Request):
    webhook_data = await request.body()
    print(webhook_data.decode("utf-8"))
    return 'ok', 200
