class Pet {
    petSound;
    petFeeding;

    constructor (species) {
      this.species = species
    }

    speak () {
      return 'No words'
    }
}

class Cat extends Pet {
  constructor (props) {
    super('cat')
    this.props = props
  }

    clickHandler = parameter => parameter + this.props.name;

    speak () {
      this.clickHandler()
      return `${super.speak()} meow, I am a ${this.species}`
    }
}

function makePetSpeak (pet) {
  console.log(pet.speak())
}

var myPet = new Pet()
makePetSpeak(myPet)
// console.log(myPet.speak());

var myCat = new Cat({ name: 'Luna Lovegood' })
makePetSpeak(myCat)
var newFunc = myCat.clickHandler

newFunc()
// console.log(myCat.speak())
