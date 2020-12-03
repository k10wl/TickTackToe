var div = document.querySelectorAll('div');

var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')

var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')

var seven = document.getElementById('7')
var eight = document.getElementById('8')
var nine = document.getElementById('9')

var click = 0

div.forEach((div) => {
    div.addEventListener('click', function play(){
        if(this.innerHTML.length === 0){
            if (click == 0){
                winner = 'X'
                this.innerText = winner
                click++
            } else {
                winner = 'O'
                this.innerText = winner
                click--
            }
        }
    })
})

 document.onclick = function () {
    if (
        (one.textContent == two.textContent && two.textContent == three.textContent && one.innerHTML.length != 0) ||
        (four.textContent == five.textContent && five.textContent == six.textContent && four.innerHTML.length != 0) ||
        (seven.textContent == eight.textContent && eight.textContent == nine.textContent && seven.innerHTML.length != 0) ||
        (one.textContent == five.textContent && five.textContent == nine.textContent && one.innerHTML.length != 0) ||
        (three.textContent == five.textContent && five.textContent == seven.textContent && three.innerHTML.length != 0) ||
        (one.textContent == four.textContent && four.textContent == seven.textContent && one.innerHTML.length != 0) ||
        (two.textContent == five.textContent && five.textContent == eight.textContent && two.innerHTML.length != 0) ||
        (three.textContent == six.textContent && six.textContent == nine.textContent && three.innerHTML.length != 0)
    ){
        setTimeout(function(){
            alert(winner + ' won!')
            document.write(winner + ' won! To play again u have to restart web page')
        }, 1)
    }
}