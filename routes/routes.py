from flask import Blueprint, request, jsonify, render_template
from models.models import get_users_collection, get_operators_collection

# Create a blueprint for the routes
app = Blueprint('routes_app', __name__)

# Home Page Route
@app.route('/')
def home():
    """Serve the home page."""
    return render_template('index.html')

# User Routes
@app.route('/api/users', methods=['POST'])
def add_user():
    """Add a new user to the database."""
    data = request.get_json()
    if not data or 'username' not in data or 'password' not in data:
        return jsonify({"message": "Invalid data"}), 400

    new_user = {"username": data['username'], "password": data['password']}
    users_collection = get_users_collection()
    users_collection.insert_one(new_user)
    return jsonify(message="User added"), 201

@app.route('/api/users', methods=['GET'])
def get_users():
    """Retrieve all users."""
    users_collection = get_users_collection()
    users = list(users_collection.find())  # Convert cursor to list
    if not users:
        return jsonify(message="No users found"), 404  # Handle no users case
    user_list = [{"id": str(user["_id"]), "username": user["username"]} for user in users]
    return jsonify(user_list)

# Country Operator Routes
@app.route('/api/country-operators', methods=['POST'])
def add_country_operator():
    """Add a new country operator."""
    data = request.get_json()
    if not data or 'country' not in data or 'operator' not in data:
        return jsonify({"message": "Invalid data"}), 400

    new_operator = {"country": data['country'], "operator": data['operator']}
    operators_collection = get_operators_collection()
    operators_collection.insert_one(new_operator)
    return jsonify(message="Country operator added"), 201

@app.route('/api/country-operators', methods=['GET'])
def get_country_operators():
    """Retrieve all country operators."""
    operators_collection = get_operators_collection()
    operators = list(operators_collection.find())  # Convert cursor to list
    if not operators:
        return jsonify(message="No country operators found"), 404  # Handle no operators case
    operator_list = [
        {"id": str(op["_id"]), "country": op["country"], "operator": op["operator"]}
        for op in operators
    ]
    return jsonify(operator_list)
