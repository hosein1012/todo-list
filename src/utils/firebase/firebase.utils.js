import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9o6UaTsnKaOuKqzHUPPFHB_Goq1DVvKE",
  authDomain: "todo-list-db-ec9d9.firebaseapp.com",
  projectId: "todo-list-db-ec9d9",
  storageBucket: "todo-list-db-ec9d9.appspot.com",
  messagingSenderId: "650736023310",
  appId: "1:650736023310:web:fd6acfaad0aa591799c95f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

// Add a new document with a generated id.

export const addTask = async (task) => {
  const { name } = task;
  const docRef = await addDoc(collection(db, "tasks"), {
    name,
    status: false,
  });
  return docRef.id;
};

export const getTasks = async () => {
  const tasksCol = collection(db, "tasks");
  const taskSnapshot = await getDocs(tasksCol);
  const taskList = taskSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return taskList;
};

export const markTaskAsDone = async (taskID) => {
  const taskRef = doc(db, "tasks", taskID);
  await updateDoc(taskRef, {
    status: true,
  });
};

export const deleteTask = async (taskID) => {
  await deleteDoc(doc(db, "tasks", taskID));
};
