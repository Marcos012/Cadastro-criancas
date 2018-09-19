register = () => {
  let inputValue = document.getElementsByTagName('input');
  let infos = []

  for (let i = 0; i < inputValue.length; i++) {
    infos.push(inputValue[i].value);
  }

  let key = firebase.database().ref().child('kids/').push().key;

  let kid = {
    name: infos[0],
    age: parseInt(infos[1]),
    weight: infos[2],
    allergy: infos[3],
    responsible: infos[4],
    city: infos[5],
    neighborhood: infos[6],
    street: infos[7]
  };

  firebase.database().ref('kids/' + key).set(kid);
}

