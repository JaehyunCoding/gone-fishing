const prompt = require('prompt-sync')({sigint: true});

let caught = []
let hour = 6
let newFish = genFish()

for (let i = 0; i < hour; i++){
    console.log(`The time is ${6+i}:00 am. So far you've caught: `)
    console.log(`${caught.length} fish, ${totalWeight()} lbs, $${totalValue}`)
    console.log(`You caught a ${newFish.name} weighing ${newFish.weight}`)
    console.log(`Your action: [c]atch or [r]elease the fish?`)
    let choice = prompt(`> `)
    let over10lbs = newFish.weight + totalWeight()
    while (choice !== `c` && choice !== `r`){
        console.log(`Invalid. Choose C for catch or R for release`)
        choice = prompt(`> `)
    } if(choice === `c` && over10lbs <= 10){
        caught.push(newFish)
        console.log(`You chose to keep the fish.`)
    }   else if (choice === `c` && over10lbs > 10){
        console.log(`You cannot exceed 10lbs! Releasing fish`)
    }   else if (choice === `r`){
        console.log(`You chose to release the fish.`)
    }
    newFish = genFish()
    if(i === 5){
        console.log(`The time is 12:00pm. Times up!`)
        console.log(`You caught ${caught.length} fish: `)
        for(let i = 0; i < caught.length; i++) {
            console.log(`* ${caught[i.name]}, ${caught[i].weight}, ${caught[i].value}`)
        }
        console.log(`Total weight: ${totalWeight()}lbs`)
        console.log(`Total value: $${totalValue()}`)
    }
}

function genWeight(){
    return Number((Math.random()*5).toFixed(2))
}

function genValue(){
    return Number((Math.random()*20).toFixed(2))
}

function genName(){
    let adjectives1 = ['Golden', 'Slimy', 'Large', 'Reddish', 'Dull']
    let adjectives2 = ['Scaly', 'Stinky', 'Angry', 'Lively', 'Jumpy']
    let fishNames = ['Salmon', 'Trout', 'Flounder', 'Bass', 'Clownfish']

    let adj1 = adjectives1[Math.floor(Math.random()*adjectives1.length)]

    let adj2 = adjectives2[Math.floor(Math.random()*adjectives2.length)]

    let randomFishType = fishNames[Math.floor(Math.random()*fishNames.length)]

    return adj1 + " " + adj2 + " " + randomFishType
}

function genFish(){
    let fish = {
        weight: 0,
        value: 0,
        name: ''
    }

    fish.weight = genWeight()
    fish.value = genValue()
    fish.name = genName()

    return fish
}

function totalWeight(){
    let totalW = 0
    for (let i = 0; i < caught.length; i++){
        totalW += caught[i].weight
    }
    return totalW
}

function totalValue(){
    let totalV = 0
    for (let i = 0; i < caught.length; i++){
        totalV += caught[i].value
    }
    return totalV
}