rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /donors/{docId} {
      allow read, write: if true;  // ⚠️ Test mode (later restrict)
    }

    match /recipients/{docId} {
      allow read, write: if true;
    }
  }
}
