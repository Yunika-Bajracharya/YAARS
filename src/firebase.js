// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDvYc0-DzxqQxpjnI56MsNg159VoV_Tww",
  authDomain: "years-1264e.firebaseapp.com",
  projectId: "years-1264e",
  storageBucket: "years-1264e.appspot.com",
  messagingSenderId: "578209780241",
  appId: "1:578209780241:web:976e3c2e1c4c1706b957b0",
  measurementId: "G-93M3FE5CGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function getBusses(db) {
  const busCol = collection(db, 'Buses');
  const busSnapshot = await getDocs(busCol);
  let cityList = busSnapshot.docs.map(doc => doc.data());
  cityList = cityList.map(c  => {
    const object = {
        name: c.name,
        description: "some desc",
        geometry: [c.geometry._lat, c.geometry._long]
    }
    return object
  })
  return cityList;
}


export async function doAll() {
    const firebaseConfig = {
  apiKey: "AIzaSyCDvYc0-DzxqQxpjnI56MsNg159VoV_Tww",
  authDomain: "years-1264e.firebaseapp.com",
  projectId: "years-1264e",
  storageBucket: "years-1264e.appspot.com",
  messagingSenderId: "578209780241",
  appId: "1:578209780241:web:976e3c2e1c4c1706b957b0",
  measurementId: "G-93M3FE5CGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
return getBusses(db)

}