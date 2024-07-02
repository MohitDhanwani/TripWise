import { useContext, createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, getDocs, collection, addDoc, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};



const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const fireStore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  }

  const google = () => {
    signInWithPopup(firebaseAuth , provider);
  }

  const logoutUser = () => {
    signOut(firebaseAuth);
  }

  const addTripFromThirdPartyCompany = async (location , description , detail, duration , price , company , creator , contactNo , photo) => {
    const imageRef = ref(storage , `uploads/images/${Date.now()}-${photo.name}`);
    const uploadResult = await uploadBytes(imageRef , photo);
    await addDoc(collection(fireStore , "trips") , {
      location,
      description , detail, duration , price , company , creator , contactNo ,
      photo: uploadResult.ref.fullPath,
      userID : user.uid,
      userEmail: user.email,
      displayName: user.displayName,
    })
  }

  const getAllTrips = () => {
    return getDocs(collection(fireStore , "trips"))
  }

  const getImageUrl = (path) => {
    return getDownloadURL(ref(storage , path))
  }

  const getTripFromDatabase = async (id) => {
    const docRef = doc(fireStore , "trips" , id);
    const result = await getDoc(docRef);
    return result
  }

  const userPaymentDetails = async (tripID , fullname , contact , address , email) => {
    const docRef = collection(fireStore , "trips" , tripID , "users");
    const userDetails = await addDoc(docRef , {
      fullname , contact , address , email,
    })
    return userDetails
  }

  const fetchMyOrders = async () => {
    if (!user) {
      console.error('User is not authenticated');
      return [];
    }
    const collectionRef = collection(fireStore, "trips");
    const q = query(collectionRef, where("userID", "==", user.uid));
    const result = await getDocs(q);
  

  
    return result.docs;
  }

  const getUsersForTrip = async (tripId) => {
    const usersCollectionRef = collection(fireStore, "trips", tripId, "users");
    const usersSnapshot = await getDocs(usersCollectionRef);
    return usersSnapshot.docs.map(doc => doc.data());

  };
  

  return (
    <FirebaseContext.Provider value={{ registerUser, loginUser, user, loading, google, logoutUser,
      addTripFromThirdPartyCompany, getAllTrips, getImageUrl, getTripFromDatabase, userPaymentDetails, fetchMyOrders ,
      getUsersForTrip
    }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}


