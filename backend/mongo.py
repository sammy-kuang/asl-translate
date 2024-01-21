from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from gridfs import GridFS

uri = ""

with open(".mongodb", 'r') as file:
    uri = file.read()

# Create a new client and connect to the server
client = MongoClient(str(uri), server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client["NwH2024"]
FS = GridFS(db)

def upload_to_gridfs(file_path, filename):
    with open(file_path, 'rb') as file:
        file_id = FS.put(file, filename=filename)
        return file_id

def search_file_in_gridfs(filename):
    # Search for a file by filename
    file_info = db.fs.files.find_one({'filename': filename})

    if file_info:
        file_id = file_info['_id']
        return file_id
    else:
        return None