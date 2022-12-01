document.querySelector('#preis3').addEventListener('click',clickedPreis3)
document.querySelector('#preis4').addEventListener('click',clickedPreis4)
document.querySelector('#preis5').addEventListener('click',clickedPreis5)
document.querySelector('#preis7').addEventListener('click',clickedPreis7)

document.querySelector('#münze50').addEventListener('click',clickedMünze50)
document.querySelector('#münze1').addEventListener('click',clickedMünze1)
document.querySelector('#münze2').addEventListener('click',clickedMünze2)

document.querySelector('#schein5').addEventListener('click',clickedSchein5)
document.querySelector('#schein10').addEventListener('click',clickedSchein10)
document.querySelector('#schein20').addEventListener('click',clickedSchein20)
document.querySelector('#schein50').addEventListener('click',clickedSchein50)
document.querySelector('#schein100').addEventListener('click',clickedSchein100)

document.getElementById('berechnen').addEventListener('click', berechneWecselgeld)
document.getElementById('reset').addEventListener('click', reset)



let counter3=0
let sum3=0

let counter5=0
let sum5=0

let counter4=0
let sum4=0

let counter7=0
let sum7=0


function reset(){
  console.log(counter3)
  document.getElementById('rückgeld').innerText = ""
  document.getElementById("neuesRückgeld").innerText = ""
  document.getElementById('kleingeld').innerText = ""
  document.getElementById('wertZuBezahlen').value = 0
  document.getElementById('wertGegeben').value = 0
  document.getElementById('counter3').innerHTML = ""
  document.getElementById('counter4').innerHTML = ""
  document.getElementById('counter5').innerHTML = ""
  document.getElementById('counter7').innerHTML = ""

  counter3=0;
  counter4=0;
  counter5=0;
  counter7=0;
  
  sum3=0;
  sum4=0;
  sum5=0;
  sum7=0; 

}

function berechneWecselgeld(){
  let zuBezahlen = Number(document.getElementById('wertZuBezahlen').value)
  let gegeben = Number(document.getElementById('wertGegeben').value)
  let rückgeld=gegeben-zuBezahlen
  document.getElementById('rückgeld').innerText = rückgeld

  while(rückgeld%5!==0){
  rückgeld+=derNächsteFünfer(gegeben,zuBezahlen)
  
  document.getElementById("neuesRückgeld").innerText = rückgeld
}
}

function derNächsteFünfer(gegeben,zuBezahlen) {
  let münzenDieIchGernHätte = 0
  for ( let i = 0; i<5; i++)
  if((gegeben-zuBezahlen+i)%5===0) {
    münzenDieIchGernHätte=i
    document.getElementById('kleingeld').innerText = münzenDieIchGernHätte  
  }
  return münzenDieIchGernHätte
}

function addPreis(preis){
  let val=Number(document.getElementById('wertZuBezahlen').value)
  let add=preis
  let sum=val+add
  document.getElementById('wertZuBezahlen').value = sum
 
}
function addSchein(schein) {
  let val=Number(document.getElementById('wertGegeben').value)
  let add=schein
  let sum=val+add
  document.getElementById('wertGegeben').value = sum
}

function clickedPreis3() {
  addPreis(3)
  add3Count()
}

function add3Count() {
  counter3+=1
  sum3=3*counter3
  document.getElementById('counter3').innerHTML = `3 x ${counter3} = ${sum3}`
}

function clickedPreis4() {
  addPreis(4)
  add4Count()
}

function add4Count() {
  counter4+=1
  sum4=4*counter4
  document.getElementById('counter4').innerHTML = `4 x ${counter4} = ${sum4}`
}

function clickedPreis5() {
  addPreis(5)
  add5Count()
}



function add5Count() {
  counter5+=1
  sum5=5*counter5
  document.getElementById('counter5').innerHTML = `5 x ${counter5} = ${sum5}`
}
function clickedPreis7() {
  addPreis(7)
  add7Count()
}


function add7Count() {
  counter7+=1
  sum7=7*counter7
  document.getElementById('counter7').innerHTML = `7 x ${counter7} = ${sum7}`
}


function clickedMünze50(){
  addSchein(0.5)
}

function clickedMünze1(){
  addSchein(1)
}

function clickedMünze2(){
  addSchein(2)
}

function clickedSchein5() {
addSchein(5)
}
function clickedSchein10() {
  addSchein(10)
  }
function clickedSchein20() {
    addSchein(20)
    }
function clickedSchein50() {
      addSchein(50)
      }
function clickedSchein100() {
        addSchein(100)
        }
