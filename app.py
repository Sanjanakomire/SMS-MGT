from flask import Flask
from models.models import mongo  # Import the MongoDB instance
from routes.routes import app as routes_app  # Import the blueprint for routes

# Initialize Flask app
app = Flask(__name__)

# Set the MongoDB URI directly
app.config.from_object("config.Config")

# Initialize MongoDB with the app
mongo.init_app(app)

# Test the MongoDB connection (optional)
with app.app_context():
    # Optional: Print MongoDB collections to confirm connection
    print("Connected to MongoDB")
    print("Collections in db:", mongo.db.list_collection_names())  # List collections

# Register routes blueprint
app.register_blueprint(routes_app)

if __name__ == '__main__':
    app.run(debug=True)
