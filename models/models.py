from flask_pymongo import PyMongo

# Initialize the PyMongo instance
mongo = PyMongo()

# Define MongoDB collections
def get_users_collection():
    """Access the 'users' collection."""
    return mongo.db.users

def get_operators_collection():
    """Access the 'country_operators' collection."""
    return mongo.db.country_operators
