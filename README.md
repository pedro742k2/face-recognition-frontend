# 🧐 Face Recognition App

### Note:
- This is the front-end repository of the Face Recognition App, to access the back-end code [click here](https://github.com/pedro742k2/face-recognition-backend)

## Screenshots



  - Signin
<img width="1080" alt="signin" src="https://user-images.githubusercontent.com/54741310/160286963-cf8327ee-13e2-4f50-9985-4c6155c1c222.png">

  - Register
<img width="1080" alt="register" src="https://user-images.githubusercontent.com/54741310/160287019-9254628f-5a10-4896-9400-135f0edbd436.png">

  - Home
<img width="1080" alt="home" src="https://user-images.githubusercontent.com/54741310/160287031-ef1f39f6-ff53-4b70-bcb3-6b663de8cc7c.png">

  - Face Recognition
<img width="1080" alt="face_detection" src="https://user-images.githubusercontent.com/54741310/160287062-7faa4727-b49c-4d5d-b3a7-7b6d687fd9aa.png">

  - Profile Modal (Edit user info)
<img width="1080" alt="profile-modal" src="https://user-images.githubusercontent.com/54741310/160287083-006a0038-a689-446a-bb67-99b160951de7.png">

## 🤖 What is the Face Detection App meaning?

Face Detection App is meant to detect and quantify the number of people faces in a photo.
Althought it's still in development, Face Detection App is here to show off my skills with API data manipulation and React.js, JS and CSS skills by outlining the image detected faces inside boxes. 
The Face Detection App also has a login/register system with profile credits, which are incremented in every successful API call.

## How to test it out

### 🌎 Face Recognition App is available online as a demo
  - 📡 Live web app: https://pedro742k2.github.io/face-recognition-frontend
  - 📡 Live API server: https://face-recognition-server-pedro.herokuapp.com/api

### 🏠 If you want to test it locally and make changes to the code
  - Clone this repository to the desired directory
  - Inside the project root directory, run:
    - `npm install` to install all the project dependencies
    - `npm run local` to execute the development build on your local network
  - **Or**, to create a production build, run:
    - `npm install` 
    - `npm run build` to create a production build
    - `npm start` to serve the created build folder on your local network
  - Adittionally, if you're running the API server on your local network, you'll want to change the export of the `ServerApi.js` file to the local URL one, commented on the respective file, located at `src/Services/ServerApi.js`.

### 🤝 Contributions and feedback

  - 🛠️ If you have any suggestions, want to report an issue or give general feedback, feel free to make a pull request or email me at pedro.manuel.peres.batista@gmail.com with the suggestion or detailed description of the problem 😀.
  - 🙌 I'll thank you for that!

## 💻 Technologies

### Frontend
  - React.js;
  - Tachyons;
  - Animate.css;
  - Lottie web animations.

### Backend ([Repository](https://github.com/pedro742k2/face-recognition-backend))
  - Node.js;
  - Express;
  - Bcrypt;
  - Databases: **PostgreSQL**, **Redis**;
  - **Knex** and **PG** for the database connection;
  - Docker;
  - JWT.

### Services
  - Clarifai face detection API
