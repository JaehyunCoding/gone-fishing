const prompt = require('prompt-sync')({sigint: true});

/*Random Fish Generation*/

function generateRandomWeight(){
    return Number((Math.random()*5).toFixed(2))
}

function generateRandomValue(){
    return Number((Math.random()*20).toFixed(2))
}

function generateRandomName(){
    let adjectives1 = ['Golden', 'Slimy', 'Large', 'Reddish', 'Dull']
    let adjectives2 = ['Scaly', 'Stinky', 'Angry', 'Lively', 'Jumpy']
    let fishNames = ['Salmon', 'Trout', 'Flounder', 'Bass', 'Clownfish']

    let adj1 = adjectives1[Math.floor(Math.random()*adjectives1.length)]

    let adj2 = adjectives2[Math.floor(Math.random()*adjectives2.length)]

    let randomFishType = fishNames[Math.floor(Math.random()*fishNames.length)]

    return adj1 + " " + adj2 + " " + randomFishType
}

function generateRandomFish(){
    let fish = {
        weight: 0,
        value: 0,
        name: ''
    }

    fish.weight = generateRandomWeight()
    fish.value = generateRandomValue()
    fish.name = generateRandomName()

    return fish
}

console.log(generateRandomFish())

// 내 노트: 



/*

Object fish = {
    name - string
    weight - number
    value - number
}

generateRandomWeight()
0-5
(Number((Math.random()*5).toFixed(2)))


generateRandomValue()

generateRandomName()
let adj1 = ['Golden', 'Slimy', 'Large', 'Reddish', 'Dull']
let adj2 = ['Scaly', 'Stinky', 'Angry', 'Lively', 'Jumpy']
let fishNames = ['Salmon', 'Trout', 'Flounder', 'Bass', 'Clownfish']

*/