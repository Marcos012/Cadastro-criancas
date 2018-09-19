deleteKid = (id) => {
    firebase.database().ref('kids/' + id).remove();
  }