function pull(){
let card = Math.floor(Math.random() * 13 + 1)
var res
if (card == 1) {
    res = "Ace"
   card = 100  
}
else if (card == 11) {
    res = "Jack"
}
else if (card == 12) {
    res = "Queen"
}
else if (card == 13) {
    res = "King"
}
else {
    res = card
}

let suits = Math.floor(Math.random() * 4)
var type = ""
if (suits === 0) {
    type = " of spades"
}
else if (suits === 1) {
    type = " of Clubs"
}
else if (suits === 2) {
    type = " of Hearts"
}
else if (suits === 3) {
    type = " of Diamonds"
}

return[card , res , type] 
}
var player = pull()
var bot = pull()
console.log ("you have a " + player[1] + player[2] )
console.log ("bot has a " + bot[1] + bot[2])
if(player[0] > bot[0]){
    console.log ("player wins")
}
else if(player[0] == bot[0]){
    console.log ("tie")
}
else if(player[0] < bot[0]){
    console.log ("you lose")
}
else{console.log ("what the flip did you do")}