// const no se puede modificar nombre y edad
const starWars7 = 'Star Wars: el despertar de la fuerza'

const pgStarWars7 = 13

const nameAdrian = 'Adrian'
const ageAdrian = 23

const nameLuisa = 'Luisa'
const ageLuisa = 12

const canWatchStarWars7 = (name, age, isWithAdult = false) => {
    if (age >= pgStarWars7) {
        alert(`${name} puede pasar a ver ${starWars7}`)
    } else if (isWithAdult) {
      alert(`${name} puede pasar a ver ${starWars7}.Aunque su edad es ${age}, se encuenta acompañado/a por un adulto`)
    } else {
      alert(`${name} no puede pasar a ver ${starWars7}.Tiene ${age} años y necesita tener ${pgStarWars7}`)
    }  
}

canWatchStarWars7(nameAdrian, ageAdrian)
canWatchStarWars7(nameLuisa, ageLuisa, true)

/* function canWatchStarWars7(name, age, isWithAdult = false) {
  if (age >= pgStarWars7) {
    alert(`${name} puede pasar a ver ${starWars7}`)
  } else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7}.Aunque su edad es ${age}, se encuenta acompañado/a por un adulto`)
  } else {
    alert(`${name} no puede pasar a ver ${starWars7}.Tiene ${age} años y necesita tener ${pgStarWars7}`)
  }
} */