const prompt = require('prompt-sync')({sigint: true});

console.log(`You've gone fishing! Try to maximize the value of your caught fish. You can fish
for six hours (till 12:00pm) and can catch at most 10 lbs of fish.`)
console.log(`\n ==========================================`)

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

function generateRandomName(){
    let adjectives1 = ['Golden', 'Slimy', 'Large', 'Reddish', 'Dull']
    let adjectives2 = ['Scaly', 'Stinky', 'Angry', 'Lively', 'Jumpy']
    let fishNames = ['Salmon', 'Trout', 'Flounder', 'Bass', 'Clownfish']

    let adj1 = adjectives1[Math.floor(Math.random()*adjectives1.length)]

    let adj2 = adjectives2[Math.floor(Math.random()*adjectives2.length)]

    let randomFishType = fishNames[Math.floor(Math.random()*fishNames.length)]

    return adj1 + " " + adj2 + " " + randomFishType
}

function generateRandomValue(){
    return Number((Math.random()*20).toFixed(2))
}

function generateRandomWeight(){
    return Number((Math.random()*5).toFixed(2))
}

let caught = []
let newFish = generateRandomFish()

function totalWeight(){
    let totalW = 0
    for(let i=0; i<caught.length; i++){
        totalW += caught[i].weight
    } return totalW
}

function totalValue(){
    let totalV = 0
    for (let i=0; i<caught.length; i++){
        totalV += caught[i].value
    } return totalV
}


for (let i=6; i<=12; i++){
    if(i !== 12){
        console.log(`\nThe time is ${i}:00am. So far you've caught:`)
        console.log(`${caught.length} fish, ${totalWeight()} lbs, $${totalValue()}`)
        console.log(`You caught a ${newFish.name}, weighing ${newFish.weight}lbs ($${newFish.value})`)
        console.log(`Your action: [c]atch or [r]elease the fish?`)
        let choice = prompt(`> `)
        let over10 = newFish.weight + totalWeight()
        while (choice !== `c` && choice !== `r`){
        console.log(`Invalid choice. Please press 'C' for choose or 'R' for release`)
        choice = prompt(`> `)
        }   if (choice === `c` && over10 <= 10){
        caught.push(newFish)
        console.log(`You chose to keep the fish`)
        }   else if (choice === `c` && over10 >10){
        console.log(`Unable to comply. Releasing fish`)
        }   else if (choice === `r`){
        console.log(`Releasing the fish`)
        }
        newFish = generateRandomFish()

    }   else {
    console.log(`\nThe time is 12:00pm. Times up!`)
    console.log(`You caught ${caught.length} fish: `)
    for(let i = 0; i < caught.length; i++) {
        console.log(`* ${caught[i].name}, ${caught[i].weight}lbs, $${caught[i].value}`)
    }
    console.log(`Total weight: ${totalWeight().toFixed(2)}lbs`)
    console.log(`Total value: $${totalValue().toFixed(2)}`)
    }
}
