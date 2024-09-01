# User Dashboard

This project is a user dashboard page built with React using `create-react-app`. 

## Installation

To get started with the project, you can clone the repository and install the dependencies:

```bash
git clone https://github.com/Sagari7121/userDashboard
cd userDashboard
npm install
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note:** This is a one-way operation. Once you `eject`, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Project Structure

The project structure follows a standard `create-react-app` layout:

```
userDashboard/
├── public/
│   └── index.html
|  
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── UserCard.js
│   │   ├── UserForm.js
│   │   ├── UserInfo.js
|   |   └── Users.js
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── ...
```

## Features 

- **Responsive Design**: The website is fully responsive and works on various devices.
- **User Information** : Display user's specific data.
- **Add new user**: Add new user to the users list.
- **Delete user**: Delete user from the list.
- **Edit user**: Edit exisiting user information

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the components.
- **React Router**: For routing and navigation (if applicable).
- **Notistack**: To display confirmation, alert or acknowledgement about a task carried out by the app.
- **Swiper**: To provide  infinite scrolling for the user list.

## Improvements 

- **UI**: UI can be improved further to use better colors and fonts that suit the context properly.
- **Authentication**: Authentication will secure the user information and allows only authenticated users to
view the information
- **Search**: Option to search the user by name, username, id, etc with denouncing.
- **Backend**: Custom written backend.
