among = 0
for (i = 0; i < 3; i++){
let amongus = Math.floor(Math.random()*12) + 1

if (amongus == 11) amongus = 'J', among + 11
if (amongus == 12) amongus = 'Q', among + 12
if (amongus == 13) amongus = 'K', among + 13
else (among += amongus)

let bogungus = Math.floor(Math.random()*3)

if (bogungus == 0) bogungus = 'Spades'
if (bogungus == 1) bogungus = 'Clubs'
if (bogungus == 2) bogungus = 'Hearts'
if (bogungus == 3) bogungus = 'Diamonds'

console.log(amongus, bogungus)}

console.log('\/Your Hand\/')
console.log(among)
