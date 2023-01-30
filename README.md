
# Slack 2.0

Clone web application of Slack.com built on React library and designed with Styled Components and MaterialUI. It has the functionality to Login using Google Auth with a loading screen. The interactive home page has different channels on the sidebar which contain their respective chats which is pulled from the firestore. 


## Run Locally

Clone the project

```bash
  git clone https://github.com/PriyanshuSharma0326/slack-clone.git
```

Go to the project directory

```bash
  cd slack-clone/
```

Install dependencies

```bash
  npm i @reduxjs/toolkit
  npm i @emotion/react @emotion/styled
  npm i @mui/icons-material @mui/material
  npm i firebase
  npm i react
  npm i react react-dom
  npm i react-firebase-hooks
  npm i react-redux
  npm i react-router-dom
  npm i react-scripts
  npm i react-spinkit
  npm i styled-components
  npm i web-vitals
```

Start the server

```bash
  npm start
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_KEY=YOUR_API_KEY`

`REACT_APP_AUTH_DOMAIN=YOUR_AUTH_DOMAIN`

`REACT_APP_PROJECT_ID=YOUR_PROJECT_ID`

`REACT_APP_STORAGE_BUCKET=YOUR_STORAGE_BUCKET`

`REACT_APP_SENDER_ID=YOUR_SENDER_ID`

`REACT_APP_APP_ID=YOUR_APP_ID`


## Tech Stack

**Client:** React, Redux, MaterialUI, Styled Components
**Server** Firestore, Google Auth


## Deployment

Deploy this project on Firebase.

To do this :

1. `Go to https://console.firebase.google.com/`
2. `Once the project is setup, go to Project Settings.`
3. `Select Web App.`
4. `Register your firebase app nickname. Make sure to tick Firebase hosting option on. Click Register App.`
5. `Make sure to follow the subsequent steps to deploy your app on firebase(for FREE).`
