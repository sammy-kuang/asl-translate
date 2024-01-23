# ASLTranslate
Welcome to ASLTranslate, where we believe in breaking down barriers and fostering a world where communication knows no limits.

This was made from the NWHacks 2024 hackathon, check it out on [Devpost!](https://devpost.com/software/asltranslate)

Credits to [SigningSavvy](https://www.signingsavvy.com/) for the videos.

https://github.com/sammy-kuang/asl-translate/assets/60021675/5b8bd7c9-d737-47b9-83d5-2cd526e2aa26


## Setting up locally

The only dependency that needs to be handled externally (outside of the frontend and backend) is FFmpeg. This needs to be installed on the machine hosting the server.

### Frontend/Client
1. Traverse to `frontend/`
2. Download the dependencies with `npm install`
3. Run the client React app with `npm start`

### Backend/Server
1. Traverse to `backend/`
2. Download the dependencies with `pip install -r requirements.txt`
3. Run the server through `main.py`
- When running for the first time, add the `--download-deps` flag to download the necessary ASL letters
    - E.g. `python main.py --download-deps`  

> If you have MongoDB you want to utilize, place the connnection string in a file called `.mongodb` and run `main_mongo.py` instead
>
>E.g. `backend/.mongodb`should look like
>`mongodb+srv://USER:ASDFGHJKL@CLUSTER.ASDFGHJ.mongodb.net/%3FretryWrites=true&w=majority`

