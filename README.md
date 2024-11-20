# **Mock Voting App for Book Selection** 🚀

A simple web application for creating mock voting tournaments to decide which book to read next. Built with **React** and **Firebase**, this app enables users to log in, add books, and simulate a voting process over several rounds, complete with real-time results.

---

## **Features**

- **User Authentication**: Log in using Google via Firebase Authentication.
- **Book Management**: Add up to 16 unique books per user for voting.
- **Mock Voting Simulation**:
  - Randomly distributes 500 votes across books in each round.
  - Eliminates books in each round until a winner is selected.
- **Scheduled Rounds**: Voting progresses automatically every 4 hours.
- **Real-time Database**: Store books, votes, and results in Firebase Realtime Database.
- **Free Hosting**: Deployed on Firebase Hosting for easy access.

---

## **Planned Feature**

- **Twilio SMS Notifications**: Notify users via SMS about voting results and the next phase for added suspense and engagement.

---

## **Getting Started**

Follow these steps to set up the project on your local machine:

### **1. Clone the Repository**

```bash
git clone https://github.com/ofthewildfire/mock-voting-app.git
cd mock-voting-app
```

### **2. Install Dependencies**

Ensure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
```

### **3. Firebase Setup**

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Enable the following:
   - **Authentication**: Add Google as a provider.
   - **Realtime Database**: Start in test mode for development.
3. Add your Firebase configuration to a `.env` file:
   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_DATABASE_URL=your-database-url
   ```

### **4. Start the Application**

Run the app locally:

```bash
npm start
```

Access the app at `http://localhost:3000`.

---

## **Deployment**

Deploy your app for free using Firebase Hosting:

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Log in to Firebase and initialize hosting:
   ```bash
   firebase login
   firebase init
   ```
3. Deploy the app:
   ```bash
   firebase deploy
   ```

---

## **Project Structure**

```
mock-voting-app/
├── public/              # Static files (e.g., index.html)
├── src/                 # React application files
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main pages (Login, AddBooks, Voting, Results)
│   ├── utils/           # Helper functions (e.g., Firebase configuration)
│   ├── App.js           # Main app entry point
│   └── index.js         # React DOM entry point
├── .env                 # Environment variables
├── firebase.json        # Firebase configuration
└── README.md            # Project documentation
```

---

## **Future Enhancements**

- **Custom Timer Settings**: Allow users to adjust the round duration.
- **Twilio Notifications**: Implement SMS updates for round results and progression.
- **Leaderboard**: Display the results of all completed tournaments.
- **Themes**: Let users switch between light and dark mode.

---

## **Technologies Used**

- **Frontend**: React.js, React Router
- **Backend**: Firebase Realtime Database
- **Authentication**: Firebase Authentication (Google login)
- **Hosting**: Firebase Hosting

---

## **Contributing**

Contributions are welcome! If you’d like to add features or fix bugs, please fork the repository, make your changes, and open a pull request.

---
