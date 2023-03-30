from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()


def get_uuid():
    return uuid4().hex


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True,
                   unique=True, default=get_uuid)
    fname = db.Column(db.String(100), nullable=False)
    lname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(345), unique=True)
    mobNo = db.Column(db.String(100), nullable=False)
    password = db.Column(db.Text, nullable=False)


class Recruiter(db.Model):
    __tablename__ = "recruter"
    id = db.Column(db.String(32), primary_key=True,
                   unique=True, default=get_uuid)
    orgName = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(345), unique=True)
    mobNo = db.Column(db.String(100), nullable=False)
    password = db.Column(db.Text, nullable=False)

class JobDetails(db.Model):
    __tablename__ = "jobDetails"
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    email = db.Column(db.String(345), unique=False)
    jobTitle = db.Column(db.String(200), nullable=False)
    jobDescription = db.Column(db.String(400), nullable=False)
    marks = db.Column(db.String(100), nullable=False)
    skills = db.Column(db.String(200), nullable=False)


# class Upload(db.Model):
#     __tablename__ = "uploadedFiles"
#     id = db.Column(db.String(32), primary_key=True,
#                    unique=True, default=get_uuid)
#     email = db.Column(db.String(345), unique=True)
#     pdf = db.Column(db.BLOB)

# class BasicInfo(db.Model):
#     __tablename__ = "basicInfo"
#     email = db.Column(db.String(200), unique=False, nullable=False)
#     name = db.Column(db.String(100), nullable=False)
#     title = db.Column(db.String(100), nullable=False)
#     linkedIn = db.Column(db.String(200), nullable=True)
#     github = db.Column(db.String(200), nullable=True)
#     Phone = db.Column(db.String(100), nullable=False)

# class workExperience(db.Model):
#     __tablename__ = "workExperience"
#     email = db.Column(db.String(200), unique=False, nullable=False)
#     title = db.Column(db.String(100), nullable=False)
#     certificationLink = db.Column(db.String(200), unique=False, nullable=False)
#     startDate = db.Column(db.String(100), nullable=False)
#     endDate = db.Column(db.String(200), nullable=True)
#     github = db.Column(db.String(200), nullable=True)


# class projects(db.Model):
#     __tablename__ = "projects"#     email = db.Column(db.String(200), unique=False, nullable=False)
#     title = db.Column(db.String(100), nullable=False)
#     link = db.Column(db.String(200), unique=False, nullable=True)
#     overview = db.Column(db.String(100), nullable=False)
#     github = db.Column(db.String(200), nullable=True)
#     points = db.Column(db.String(400), nullable=False)

# class education(db.Model):
#     __tablename__ = "education"
#     email = db.Column(db.String(200), unique=False, nullable=False)
#     title = db.Column(db.String(100), nullable=False)
#     college = db.Column(db.String(100), nullable=False)
#     marks = db.Column(db.String(400), nullable=False)
#     startDate = db.Column(db.String(200), nullable=True)
#     endDate = db.Column(db.String(400), nullable=False)

# class achievements(db.Model):
#     __tablename__ = "achievements"
#     email = db.Column(db.String(200), unique=False, nullable=False)
#     points = db.Column(db.String(300), nullable=False)

# class summary(db.Model):
#     __tablename__ = "summary"
#     email = db.Column(db.String(200), unique=False, nullable=False)
#     title = db.Column(db.String(100), nullable=False)
#     college = db.Column(db.String(100), nullable=False)
#     startDate = db.Column(db.String(200), nullable=True)
#     endDate = db.Column(db.String(400), nullable=False)
#     marks = db.Column(db.String(400), nullable=False)

# class other(db.Model):
#     __tablename__ = "other"
#     email = db.Column(db.String(200), unique=False, nullable=False)
#     otherDetails = db.Column(db.String(300), nullable=False)
