# 🚀 NodeJS-MongoDB-Github-Actions

A DevOps project demonstrating automated CI/CD deployment of a Node.js application on AWS EC2 using GitHub Actions and MongoDB.

## 📌 Project Overview

This project showcases how to build, deploy, and automate a Node.js application using modern DevOps practices. The application provides a simple user authentication system integrated with MongoDB and is automatically deployed to an AWS EC2 instance whenever changes are pushed to GitHub.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- AWS EC2 (Ubuntu)
- Git & GitHub
- GitHub Actions
- HTML

---

## ✨ Features

- User Registration
- User Login Authentication
- MongoDB Integration
- AWS EC2 Deployment
- Automated CI/CD Pipeline using GitHub Actions
- Zero-Touch Deployment on Push to Main Branch

---

## ⚙️ CI/CD Workflow

```text
Developer
    ↓
Push Code to GitHub
    ↓
GitHub Actions Triggered
    ↓
Connect to AWS EC2 via SSH
    ↓
Pull Latest Code
    ↓
Install Dependencies
    ↓
Restart Node.js Application
    ↓
Application Updated Successfully
```

---

## 📂 Project Structure

```text
NodeJS-MongoDB-Github-Actions/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── models/
├── public/
├── server.js
├── package.json
├── package-lock.json
├── .env
├── app.log
└── Project_Documentation.docx
```

---

## 🚀 Deployment Process

1. Launch an AWS EC2 Ubuntu instance.
2. Install Node.js and MongoDB.
3. Configure the Node.js application.
4. Push the source code to GitHub.
5. Configure GitHub Actions secrets.
6. Create the deployment workflow (`deploy.yml`).
7. Push updates to the `main` branch.
8. GitHub Actions automatically deploys the latest changes to EC2.

---

## 📷 Documentation

Complete project documentation with screenshots is available in:

```
Project_Documentation.docx
```

The documentation includes:

- AWS EC2 Setup
- MongoDB Configuration
- GitHub Actions Workflow
- CI/CD Pipeline Execution
- Application Screenshots
- MongoDB Verification

---

## 🖥️ Application Pages

- Login Page
- Registration Page
- Success Page
- Failure Page

---

## 🎯 Learning Outcomes

Through this project, I gained hands-on experience in:

- Building applications using Node.js and MongoDB
- Deploying applications on AWS EC2
- Automating deployments using GitHub Actions
- Configuring SSH-based deployments
- Implementing CI/CD practices
- Managing source code with Git and GitHub

---

## 👨‍💻 Author

**Kavirajan K**

Aspiring AWS & DevOps Engineer

GitHub: https://github.com/Kavirajan0211

---

⭐ If you found this project useful, feel free to star the repository.
