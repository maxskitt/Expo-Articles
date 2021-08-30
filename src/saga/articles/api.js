import firebase from "firebase";
import {db} from "../api";

const docRef = db.collection("articles");

function fetchArticles(action) {

  let size

  docRef.get().then(snap => {
    size = snap.size
  });

  return docRef.limit(50 * action).get().then((documentSnapshots) => {
    let arr = []

    documentSnapshots.forEach((doc) => {
      arr.push({...{id: doc.id}, ...doc.data()});
    });
    return {arr, size};
  });
}

function initialArticles(router) {
  return docRef.doc(router).get().then((doc) => {
    if (doc.exists) {
      return doc.data();
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}

function pushArticles(values) {
  db.collection("articles").add({
    name: values.name,
    title: values.title,
    description: values.description,
    lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

function updateArticles(values, router) {
  db.collection("articles").doc(router).update({
    name: values.name,
    title: values.title,
    description: values.description,
    lastSeen: firebase.firestore.FieldValue.serverTimestamp()
  })
    .then(() => {
      console.log("Document successfully updated!");
    });
}

function deleteArticles(router) {
  db.collection("articles").doc(router).delete().then(() => {
    console.log("Document successfully deleted!");
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
}

export {fetchArticles, pushArticles, updateArticles, initialArticles, deleteArticles}
