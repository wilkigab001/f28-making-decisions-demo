let backPack = []

backPack.push('Jedi Robe')
backPack.push('lightsaber')
backPack.push('Crippling sense of failure and guilt')
backPack.splice(1,1)
backPack.push('wookie coat')

backPack.pop()

backPack.push('blue milk', 'baby yoda', 'a child named luke', 'comm device', 'high ground', 'blaster')

console.log(backPack)

let obiwanHouse = backPack.splice(3, 2)
console.log(backPack)
console.log(obiwanHouse)
console.log(obiwanHouse.length)
console.log(backPack.length)

for(i = 0; i < backPack.length; i++){
    console.log(backPack[i])
}