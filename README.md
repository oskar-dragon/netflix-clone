# Netflix Clone

## 🎯 General Information
I have started this project with the purpose of learning how to structure a Web App and implementing all I've learned so far about React.
I've tried to replicate the layout as much as I could taking into consideration my experience. This app takes the user to a homepage
where the user is welcomed with some information about Netflix. A user has an option to create an accout with an email and login.

Once user is logged in, a user lands on a hompage on which one can find two categories with movies and series, and all of them are
divided by categories into rows. Each row has movies/series thumbnails that can be clicked on and more information about this particular
movie or series will be shown. If user clicks on a play button, a pop-up will show up and user can play video. 

Please play with and and and if you have any feedbacks, feel free to get in touch with me. I would appreciate it a lot.

## ▶️ Demo
You can find a link to demo below

[Netlify](https://herr-netflix.netlify.app)
### Test Credentials
 > Email: test@herrflix.com <br/>
 > Password: HerrFl1xTest
 
## 🚀 Technologies Used
- [React](https://reactjs.org/)
- [React Hooks](https://reactjs.org/docs/hooks-reference.html)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
- [Fuse.js](https://fusejs.io/)
- [Firebase (Firestore & Auth)](https://firebase.google.com/)
- [Netlify](https://netlify.com)

## ✨ Features
- Seperate sections to display movies and series
- Modal with extra information about the selected movie or series
- Category related sections
- Search by description, title and genre
- User Sign Up and Sign In

## 📸 Screenshots
**Main Page**
![Main Page](https://i.gyazo.com/478320ffd520799a74ce1440fa3c8e2c.jpg)

**Sign In**
![Sign In](https://i.gyazo.com/85801d061647b842de994effc9902fc4.jpg)

**Sign Up**
![Sign Up](https://i.gyazo.com/d1e11fc835d4abef3c018b1d048b00fc.jpg)

**Homepage**
![Homepage](https://i.gyazo.com/eaf302ded551394669ee601e3463e0e4.jpg)

**Pop up Detail**
![Pop up Detail](https://i.gyazo.com/b42c1888deb752a9b9a9e8021f0ee0c7.jpg)



## 👨🏻‍💻 How to use locally
- Clone this project
```bash
  git clone https://https://github.com/oskar-dragon/netflix-clone.git
```

- Go to the directory
```bash
  cd netflix-clone
```

- Install dependencies

```bash
  npm install
```

- Create an .env.production file

- Create a project on Google Firebase and go through configuration

- Add the configuration inside the .env file created previously

```
REACT_APP_FIREBASE_API_KEY=(Your API KEY)
REACT_APP_FIREBASE_AUTH_DOMAIN=xxx-development.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=xxx
REACT_APP_FIREBASE_STORAGE_BUCKET=xxx
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxx
REACT_APP_FIREBASE_APP_ID=xxx
```

- Start the server
```bash
npm start
```

## Project Status
Project is: _in progress_


## To do:
- [ ]  Allow user to type in email on home page and redirect the user to either sign up or sign in page with prefilled email
- [ ]  Implement password recovery
- [ ]  Create error handling while signing in and logging in
- [ ]  Add "My List" for a user
- [ ]  Add option to add more users to account
 

## Author Info

Created by [Oskar Dragon](https://github.com/oskar-dragon) |
[LinkedIn](https://www.linkedin.com/in/oskar-dragon) |
[Instagram](https://www.instagram.com/skrdrgn___/)