import {
  getDatabase,
  ref,
  set,
  onValue,
  child,
  push,
  update,
  get,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

// getDatabase root i think
const db = getDatabase();

export function searchThreads(username, topic) {
  return new Promise((resolve, reject) => {
    const databaseRef = ref(db);
    get(child(databaseRef, "/threads/")).then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if (topic === childSnapshot.child("topic").val()) {
          let threadKey = childSnapshot.key;
          resolve(threadKey);
		  update(child(databaseRef, `/threads/${threadKey}`), {
			  [username]:"Hello I am " + username,
			})
          return true;
        }
      });
      reject("No matched topic");
    });
  });
}

export function createNewThread(username, topic) {
  return new Promise((resolve, reject) => {
    const uniqueThreadKey = push(ref(db, "/threads/")).key;
    const databaseRef = ref(db);
    set(child(databaseRef, `/threads/${uniqueThreadKey}`), {
      [username]:"Hello I am " + username,
      topic:topic,
    })
      .then(() => {
        resolve(uniqueThreadKey);
      })
      .catch(() => {
        reject('Failed to Create Thread Check Network');
      });
  });
}
