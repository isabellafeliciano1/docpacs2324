
for (i = 0; i < 10; i++){
let amongus = Math.floor(Math.random()*12) + 1

if (amongus == 11) amongus = 'J'
if (amongus == 12) amongus = 'Q'
if (amongus == 13) amongus = 'K'

let bogungus = Math.floor(Math.random()*3)

if (bogungus == 0) bogungus = 'Spades'
if (bogungus == 1) bogungus = 'Clubs'
if (bogungus == 2) bogungus = 'Hearts'
if (bogungus == 3) bogungus = 'Diamonds'

console.log(amongus, bogungus)}
