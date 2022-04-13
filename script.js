document.addEventListener('DOMContentLoaded', () => {
   //Kártyák egy listába
  const cardArray = [
    {
      name: 'szorny',
      img: 'kepek/kep1.jpg'
    },
    {
      name: 'szorny2',
      img: 'kepek/kep2.jpg'
    },
    {
      name: 'szorny3',
      img: 'kepek/kep3.jpg'
    },
    {
      name: 'szorny4',
      img: 'kepek/kep4.jpg'
    },
    {
      name: 'szorny5',
      img: 'kepek/kep5.jpg'
    },
    {
      name: 'szorny',
      img: 'kepek/kep1.jpg'
    },
    {
      name: 'szorny2',
      img: 'kepek/kep2.jpg'
    },
    {
      name: 'szorny3',
      img: 'kepek/kep3.jpg'
    },
    {
      name: 'szorny4',
      img: 'kepek/kep4.jpg'
    },
    {
      name: 'szorny5',
      img: 'kepek/kep5.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.keret')
  let kartyakivalasztva = []
  let eppenkivalaszt = []

  //Tábla létrehozás
  function tablakeszites() {
    for (let i = 0; i < cardArray.length; i++) {
      const kartya = document.createElement('img')
      kartya.setAttribute('src', 'kepek/hatter.jpg')
      kartya.setAttribute('data-id', i)
      kartya.addEventListener('click', kartyafordit)
      grid.appendChild(kartya)
    }
  }

  //Kiválasztott kártya ugyan az e
  function kivalasztottkartya() {
    const kartyak = document.querySelectorAll('img')
    const valaszt1Id = eppenkivalaszt[0]
    const valaszt2Id = eppenkivalaszt[1]
    
    if(valaszt1Id == valaszt2Id) {
      kartyak[valaszt1Id].setAttribute('src', 'kepek/hatter.jpg')
      kartyak[valaszt2Id].setAttribute('src', 'kepek/hatter.jpg')
      alert('Ugyan arra a kártyára nyomtál rá!')
    }
    else if (kartyakivalasztva[0] === kartyakivalasztva[1]) {
      alert('Találtál egy párt!')
      kartyak[valaszt1Id].setAttribute('src', 'kepek/megtalalt.jpg')
      kartyak[valaszt2Id].setAttribute('src', 'kepek/megtalalt.jpg')
      kartyak[valaszt1Id].removeEventListener('click', kartyafordit)
      kartyak[valaszt2Id].removeEventListener('click', kartyafordit)
    } else {
      kartyak[valaszt1Id].setAttribute('src', 'kepek/hatter.jpg')
      kartyak[valaszt2Id].setAttribute('src', 'kepek/hatter.jpg')
      alert('Bocsi, próbáld újra!')
    }
    kartyakivalasztva = []
    eppenkivalaszt = []
  }

  //Kártya fordítás
  function kartyafordit() {
    let kartyaId = this.getAttribute('data-id')
    kartyakivalasztva.push(cardArray[kartyaId].name)
    eppenkivalaszt.push(kartyaId)
    this.setAttribute('src', cardArray[kartyaId].img)
    if (kartyakivalasztva.length ===2) {
      setTimeout(kivalasztottkartya, 150)
    }
  }

  tablakeszites()
})
