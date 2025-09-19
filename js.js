const file = document.getElementById("idProof").files[0];
const storageRef = firebase.storage().ref("doctor_ids/" + file.name);
storageRef.put(file).then(() => {
  alert("ID uploaded! Await verification.");
});
