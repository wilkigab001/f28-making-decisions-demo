/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let obiwanAttack = 35
let anakinAttack = 35
if(obiwanAttack < anakinAttack){
    console.log("Anakin has a better attack than ObiWan")
}
else if(obiwanAttack > anakinAttack){
    console.log("Obiwan has a better attack than Anakin")
}
else{
    console.log("Anakin and Obiwan have the same attack levels")
}

let obiwanHealth = 100;
let obiwanDefense = 0;

if(obiwanHealth <= anakinAttack){
    console.log("Obiwan has been slain")
} 
else{
    obiwanHealth -= anakinAttack
    console.log(`Obiwans health is now at ${obiwanHealth}`)
}

obiwanDefense += 30
for(let i = 0; i < 5; ++i){
    obiwanHealth -= (anakinAttack - obiwanDefense)

    if(obiwanHealth <= 0){
        console.log("obiwan was slain")
    } else{
        console.log(`Obiwan now has ${obiwanHealth} health`)
    }
}

while(obiwanHealth > 0){
    obiwanHealth -= (anakinAttack - obiwanDefense)
    console.log(`Obiwan now has ${obiwanHealth} health`)
    if(obiwanHealth <= 0){
        console.log("Obiwan was slain")
    }
}