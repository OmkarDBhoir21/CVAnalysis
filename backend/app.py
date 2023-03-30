from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
# from flask_session import Session
from config import ApplicationConfig
from models import db, User, Recruiter
import emailOTP
import json

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
# server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    })


@app.route("/", methods=["GET", "POST"])
def home():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email,
    })


@app.route("/register", methods=["POST"])
def register_user():
    userType = request.json["user"]

    if userType == "candidate":
        fname = request.json["fname"]
        lname = request.json["lname"]
        email = request.json["email"]
        mobNo = request.json["mobNo"]
        password = request.json["password"]

        user_exists = User.query.filter_by(email=email).first() is not None

        if user_exists:
            return jsonify({"error": "User already exists"}), 409

        hashed_password = bcrypt.generate_password_hash(password)
        new_user = User(fname=fname, lname=lname, email=email,
                        mobNo=mobNo, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        session["user_id"] = new_user.id

        return jsonify({
            "id": new_user.id,
            "email": new_user.email
        })

    elif userType == "recruiter":
        orgName = request.json["orgName"]
        email = request.json["email"]
        mobNo = request.json["mobNo"]
        password = request.json["password"]

        user_exists = Recruiter.query.filter_by(
            email=email).first() is not None

        if user_exists:
            return jsonify({"error": "User already exists"}), 409

        hashed_password = bcrypt.generate_password_hash(password)
        new_user = Recruiter(orgName=orgName, email=email,
                             mobNo=mobNo, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        session["user_id"] = new_user.id

        return jsonify({
            "id": new_user.id,
            "email": new_user.email
        })


@app.route("/login", methods=["POST"])
def login_user():
    userType = request.json["userType"]
    email = request.json["email"]
    password = request.json["password"]
    if userType == "candidate":
        user = User.query.filter_by(email=email).first()
    elif userType == "recruiter":
        user = Recruiter.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    session["user_id"] = user.id
    session["email"] = user.email

    return jsonify({
        "id": user.id,
        "email": user.email
    })


@app.route("/sendOtp", methods=["POST"])
def sendOtpMail():
    email = request.json["email"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    otp = emailOTP.genOtp()
    emailOTP.sendOtp(email, otp, user.fname)
    return "200"

    # emailOTP.sendOtp(email, otp, user.fname)


@app.route("/upload", methods=["POST"])
def uploadFile():
    file = request.json["formData"]
    for k, v in file.items():
        print(k, v)
    return "200"

@app.route("/jobPost", methods=["POST", "GET"])
def jobPost():
    if request.method == "POST":
        email = request.json["email"]
        jobTitle = request.json["jobTitle"]
        jobDescription = request.json["jobDescription"]
        marks = request.json["marks"]
        skills = request.json["skills"]

        print(email, jobTitle, jobDescription, marks, skills)

        return 200


# @app.route("/cvmaker", methods=["POST"])
# def cvmaker():
#     user_id = session.get("user_id")
#     user_email = session.get("email")
#     userDetails = request.json["details"]
#     print(user_id)
#     return "<h1>user_id</h1>"

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"


if __name__ == "__main__":
    app.run(debug=True)
