firebase.database().ref('kids/').on('value', (snapshot) => {
    let kidsList = document.getElementById("kidsList")
    kidsList.innerHTML = ''
  
    snapshot.forEach((item) => {
      let kid = item.val()
      let list = document.createElement("p")
      let btnDelete = document.createElement("input")
      btnDelete.type = 'button'
      btnDelete.value = 'Deletar'
      btnDelete.onclick = () => { deleteKid(item.key) }
  
      list.appendChild(document.createTextNode(kid.name + ' - ' + kid.age + ' - '))
      list.appendChild(btnDelete)
  
      kidsList.appendChild(list)
    })
  })