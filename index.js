var span=document.querySelector('.score')
var ol=document.querySelector('ol')
var li=document.createElement('li')
var questions=[['sky is blue','t'],['Nizami Gencevi 1272ci ilde dogulub','f'],['Itler surunenler sinifine daxildir','f']
,['bir ilde 365 gun var','t']]
var score=0
var counter=0
ol.append(li) 
li.innerText=questions[counter][0]
window.onkeypress=function(e){
if(counter>=questions.length){alert('oyun bitdi')}
if(e.key!=='f' && e.key!=='t'){
    alert('duzgun secim et')
}
 if(e.key==questions[counter][1]){
 alert('you win')
 counter++
 score++

 }
 else if(e.key!==questions[counter][1]){
    alert('you lose')
    counter++
 }
span.innerText=score
var li=document.createElement('li')
li.innerText=questions[counter][0]
ol.append(li)
}
