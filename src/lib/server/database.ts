import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA3mjrSeCWw21xdls5vmuDSCoCrE5TCqeU",
  authDomain: "my-first-project-41c6b.firebaseapp.com",
  projectId: "my-first-project-41c6b",
  storageBucket: "my-first-project-41c6b.appspot.com",
  messagingSenderId: "1038490900034",
  appId: "1:1038490900034:web:5a6089afae0dccefab3fdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const analytics =
  app.name && typeof window !== "undefined" ? getAnalytics(app) : null;

export { auth, database, analytics };
