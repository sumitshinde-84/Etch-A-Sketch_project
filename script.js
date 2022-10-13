


let input = document.querySelector('#input');
let arr=[1,2,3,4,5,6];
let col;
let row;
let column;
const main = document.querySelector('.main');
const page = document.createElement('div')
page.className = 'page';
main.appendChild(page);
let light = document.querySelector('#light')
let night =document.querySelector('#night')
night.addEventListener('click',nightMode)
light.addEventListener('click',lightMode)


let eight= document.querySelector(`.eight`)
eight.addEventListener('click',rmGrid);
eight.addEventListener('click',forEight);

let Sixteen = document.querySelector(`.six-t`)
Sixteen.addEventListener('click',rmGrid);
Sixteen.addEventListener('click',forSixteen);


let twentyFour = document.querySelector(`.twenty-f`)
twentyFour.addEventListener('click',rmGrid);
twentyFour.addEventListener('click',forTwenty_four);


let thirtyTwo=document.querySelector(`.thirty-t`)
thirtyTwo.addEventListener('click',rmGrid);
thirtyTwo.addEventListener('click',forThirty_two);

let forty = document.querySelector(`.forty`)
forty.addEventListener('click',rmGrid);
forty.addEventListener('click',forForty);


let fortyEight = document.querySelector(`.forty-e`)
fortyEight.addEventListener('click',rmGrid);
fortyEight.addEventListener('click',forForty_eight);






function forEight(){
    
input=8;
addGrid(input);

}


function forSixteen(){

    input=16;
addGrid(input);
}


function forTwenty_four(){

    input=24;
addGrid(input);
}


function forThirty_two(){


    input=32;
addGrid(input);
}


function forForty(){
    input=40;
    addGrid(input);

}


function forForty_eight(){
    input=48;
    addGrid(input);

}





// default

// let btn = document.getElementById('btn');

// btn.addEventListener('click',rmGrid);
// btn.addEventListener('click',addGrid);




makeGrid(16);


function rmGrid(){
    
for(j=0;j<50;j++)
{     
    
   for(i=0;i<=50;i++){
   
    col.remove()
  
   col=document.querySelector('.colAll')
//   col.remove()

}
    
   }
   
} 

   


function addGrid(input){

    makeGrid(input);
  
   
}


// column

const pageSelect = document.querySelector('.page');

function makeGrid(input) {




   

    for (i = 0; i < input; i++) {
        col = document.createElement('div');
        col.className = `col${i} colAll`;

        page.appendChild(col);


    }


    // this section will apply css on row elements



    const colAll = document.querySelectorAll('.colAll')

    for (i = 0; i < input; i++) {

        colAll[i].style = 'display:flex; flex:1 1 auto ';

    }





    // row
    let colSelect;


    for (i = 0; i < input; i++) {
        colSelect = document.querySelector(`.col${i}`);
        for (j = 0; j < input; j++) {

            row = document.createElement('div');
           
           
            row.className = `row${j} rowAll`;
            
            
            colSelect.appendChild(row);
         
            ElementRow = colSelect.querySelector(`.row${j}`);
           
            ElementRow.addEventListener('mouseover',(e)=>{e.target.style='border:1px yellow solid;height:auto;width:1rem;background:red; flex:1 1 auto;'})
            ElementRow.addEventListener('mouseleave',(e)=>{e.target.style='border:1px white solid;height:auto;width:1rem;background:white; flex:1 1 auto;transition:5s'})
            

            
           
        }

    }
    

    let rowAlll =document.querySelectorAll('.rowAll');
    let btn = document.querySelector('#btn-clr');
    
    
    function clearclr(){
        for(i=0;i<rowAlll.length;i++){
        rowAlll[i].style.background='gray';
    
    }
    
    
    }
    btn.addEventListener('click',clearclr)
   
    // this section will apply css on column element


    const rowAll = document.querySelectorAll('.rowAll');


    for (i = 0; i < rowAll.length; i++) {

        rowAll[i].style = 'border:1px lightgreen solid;height:auto;width:1rem;background:white; flex:1 1 auto;';
        

    }

    

}





// nightmode 
let element = document.querySelectorAll('.rowAll');
function nightMode () {
let main=document.querySelector('.main');
let body=document.querySelector('body')
let btn = document.querySelectorAll('.btn');
let clrBtn = document.querySelector('#btn-clr')
for(j=0;j<btn.length;j++){

    btn[j].style.background='#FB2576'
    btn[j].style.color='#3F0071'
}
clrBtn.style.background='#FB2576'
clrBtn.style.color='#3F0071'
clrBtn.style.border='#3F0071'
body.style.background='#3F0071'
main.style.background='#000000';

    for (i = 0; i < element.length; i++) {

        element[i].style = 'border:1px #FB2576 solid;height:auto;width:1rem;background:#150050; flex:1 1 auto;';
        
        night.style="display:none"
        light.style="display:absolute"
    }

}

function lightMode () {
    let main=document.querySelector('.main');
    let body=document.querySelector('body')
    let btn = document.querySelectorAll('.btn');
    let clrBtn = document.querySelector('#btn-clr')
    for(j=0;j<btn.length;j++){
    
        btn[j].style.background='#FFA1A1'
        btn[j].style.color='#edf672'
    }
    clrBtn.style.background='#B4FF9F'
    clrBtn.style.color='#FFA1A1'
    clrBtn.style.border='3px #FFA1A1 solid';
    body.style.background='#FFD59E'
    main.style.background='#F9FFA4';
    
        for (i = 0; i < element.length; i++) {
    
            element[i].style = 'border:1px lightgreen solid;height:auto;width:1rem;background:white; flex:1 1 auto';
            
           light.style="display:none"
           night.style="display:absolute"
        }
    
    }