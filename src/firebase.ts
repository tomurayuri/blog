import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCy8mFDBsfnlV9QIzqTlB7MVu9njJ5GnX0',
  authDomain: 'blog-from-2024.firebaseapp.com',
  projectId: 'blog-from-2024',
  storageBucket: 'blog-from-2024.appspot.com',
  messagingSenderId: '303993818865',
  appId: '1:303993818865:web:22f889bc90a8dda178a350',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
