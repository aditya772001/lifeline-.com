firebase.firestore().collection("matches")
  .onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === "added") {
        const match = change.doc.data();
        alert(`New organ match found!\nDonor: ${match.donorName}\nOrgan: ${match.organ}`);
      }
    });
});
