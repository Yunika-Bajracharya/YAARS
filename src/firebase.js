// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCDvYc0-DzxqQxpjnI56MsNg159VoV_Tww",
  authDomain: "years-1264e.firebaseapp.com",
  projectId: "years-1264e",
  storageBucket: "years-1264e.appspot.com",
  messagingSenderId: "578209780241",
  appId: "1:578209780241:web:976e3c2e1c4c1706b957b0",
  measurementId: "G-93M3FE5CGR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getBusses(db) {
  const busCol = collection(db, "Buses");
  const busSnapshot = await getDocs(busCol);
  let cityList = busSnapshot.docs.map((doc) => {return {...doc.data(), id: doc.id}});
  cityList = cityList.map((c) => {
    const object = {
      name: c.name,
      description: "some desc",
      geometry: [c.geometry._lat, c.geometry._long],
      number: c.number,
      id: c.id
    };
    return object;
  });
  return cityList;
}

async function getHistory(db) {
  const history = collection(db, "History");
  const historySnapshot = await getDocs(history);
  let historyList = historySnapshot.docs.map((doc) => {return {...doc.data(), id: doc.id}});
  return historyList;
}

function getDB() {
  const firebaseConfig = {
    apiKey: "AIzaSyCDvYc0-DzxqQxpjnI56MsNg159VoV_Tww",
    authDomain: "years-1264e.firebaseapp.com",
    projectId: "years-1264e",
    storageBucket: "years-1264e.appspot.com",
    messagingSenderId: "578209780241",
    appId: "1:578209780241:web:976e3c2e1c4c1706b957b0",
    measurementId: "G-93M3FE5CGR",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return db;
}

export async function getBussesData() {
  return getBusses(getDB());
}
export async function getHistoryData() {
  return getHistory(getDB())
}

