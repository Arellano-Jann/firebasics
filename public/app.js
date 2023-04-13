const auth = getAuth(app); // firebase authentication

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new GoogleAuthProvider();

signInBtn.onclick = () => signInWithPopup(auth, provider);
signOutBtn.onclick = () => signOut(auth);

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app); // gives object of all firebase credentials. checks if firebase is working 
})