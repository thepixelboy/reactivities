interface Duck {
    name: string
    numLegs: number
    makeSound: (sound: string) => void
}

const duck1: Duck = {
    name: 'Huey',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

const duck2: Duck = {
    name: 'Dewey',
    numLegs: 2,
    makeSound: () => console.log('quack')
}

duck1.makeSound('quack')
duck2.makeSound('squeak')
duck1.name = 'Louie'

export const ducks = [duck1, duck2]