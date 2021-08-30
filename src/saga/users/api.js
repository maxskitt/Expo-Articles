import {db} from "../api";

const docRef = db.collection("users");

function fetchUser(action) {
  return docRef.doc(action).get().then((doc) => {
    if (doc.exists) {
      return doc.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}



export {fetchUser}
