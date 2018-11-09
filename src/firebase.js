import config from './config';
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: config.firebase.apiKey,
    authDomain: config.firebase.authDomain,
    databaseURL: config.firebase.databaseURL,
    projectId: config.firebase.projectId,
    storageBucket: config.firebase.storageBucket,
    messagingSenderId: config.firebase.messagingSenderId

};
const fire = firebase.initializeApp(firebaseConfig);

fire.firestore().settings({timestampsInSnapshots: true});

export default fire;