function cards() {
x = Math.floor(Math.random() * 13) + 1
if (x == 11) {
    x = 'J'
}   if (x == 12) {
    x = 'Q'
}   if (x == 13) {
    x = 'K'
}
console.log(x)
y = Math.floor(Math.random() * 4)
if (y == 0) {
    y = 'Spades'
}   if (y == 1) {
    y = 'Club'
}   if (y == 2) {
    y = 'Hearts'
}   if (y == 3) {
    y = 'Diamonds'
}
console.log(y)
}
setInterval(cards, 1000)