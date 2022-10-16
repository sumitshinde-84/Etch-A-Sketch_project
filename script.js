


let input = document.querySelector('#input');
let arr=[1,2,3,4,5,6];
let col;
let row;
let column;

const main = document.querySelector('.main');
const page = document.createElement('div');
const pageSelect = document.querySelector('.page');
let audio = new Audio('audio/DICE.WAV');
let audioBell =new Audio('audio/bell.wav');
let audioPen =new Audio('audio/pen.wav');
let light = document.querySelector('#light');
let night =document.querySelector('#night');

let eight= document.querySelector(`.eight`);
let Sixteen = document.querySelector(`.six-t`);
let twentyFour = document.querySelector(`.twenty-f`);
let thirtyTwo=document.querySelector(`.thirty-t`);
let forty = document.querySelector(`.forty`);
let fortyEight = document.querySelector(`.forty-e`);

page.className = 'page';
main.appendChild(page);

night.addEventListener('click',nightMode)
light.addEventListener('click',lightMode)

eight.addEventListener('click',rmGrid);
eight.addEventListener('click',forEight);

Sixteen.addEventListener('click',rmGrid);
Sixteen.addEventListener('click',forSixteen);

twentyFour.addEventListener('click',rmGrid);
twentyFour.addEventListener('click',forTwenty_four);

thirtyTwo.addEventListener('click',rmGrid);
thirtyTwo.addEventListener('click',forThirty_two);

forty.addEventListener('click',rmGrid);
forty.addEventListener('click',forForty);

fortyEight.addEventListener('click',rmGrid);
fortyEight.addEventListener('click',forForty_eight);



function forEight(){


audio.play();    

input=8;
addGrid(input);

}


function forSixteen(){
    audio.play(); 
    input=16;
addGrid(input);
}


function forTwenty_four(){
    audio.play(); 
  input=24;
addGrid(input);

}


function forThirty_two(){
    audio.play(); 
    input=32;
addGrid(input);

}


function forForty(){
    audio.play(); 
    input=40;
    addGrid(input);

}


function forForty_eight(){
    audio.play(); 
    input=48;
    addGrid(input);
}

makeGrid(16); //default grid

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



function makeGrid(input){

let color =  ["hsl(0, 100%, 50%)", "hsl(240, 100%, 50%)", "hsl(147, 50%, 50%)", "hsl(300, 76%, 50%)", "hsl(39, 100%, 50%)", "hsl(248, 53%, 50%)"];
let color1 =  ["hsl(0, 100%, 40%)", "hsl(240, 100%, 40%)", "hsl(147, 50%, 40%)", "hsl(300, 76%, 40%)", "hsl(39, 100%, 40%)", "hsl(248, 53%, 40%)"];
let color2 =  ["hsl(0, 100%, 30%)", "hsl(240, 100%, 30%)", "hsl(147, 50%, 30%)", "hsl(300, 76%, 30%)", "hsl(39, 100%, 30%)", "hsl(248, 53%, 30%)"];
let color3 =  ["hsl(0, 100%, 20%)", "hsl(240, 100%, 20%)", "hsl(147, 50%, 20%)", "hsl(300, 76%, 20%)", "hsl(39, 100%, 20%)", "hsl(248, 53%, 20%)"];
let color4 =  ["hsl(0, 100%, 10%)", "hsl(240, 100%, 10%)", "hsl(147, 50%, 10%)", "hsl(300, 76%, 10%)", "hsl(39, 100%, 10%)", "hsl(248, 53%, 10%)"];		
let color5 =  ["hsl(0, 100%, 0%)", "hsl(240, 100%, 0%)", "hsl(147, 50%, 0%)", "hsl(300, 76%, 0%)", "hsl(39, 100%, 0%)", "hsl(248, 53%, 0%)"];	
let randNo;
let count=0;



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
           
            ElementRow.addEventListener('mouseover',(e)=>{

                for(m=0;m<7;m++){
                    randNo = Math.floor(Math.random()*(5-0)+0); 
                for(n=0;n<=7;n++){
                   
                  
                   
                    
                   
                 audioPen.play()
            
                }}
               let temp=randNo

                e.target.style=`border:1px yellow solid;height:auto;width:1rem;background-color:${color[temp]}; flex:1 1 auto;`
                e.target.addEventListener('mouseover',(e)=>{

                    e.target.style=`border:1px yellow solid;height:auto;width:1rem;background-color:${color1[temp]};flex:1 1 auto;`
                    e.target.addEventListener('mouseover',(e)=>{
                        
                        e.target.style=`border:1px yellow solid;height:auto;width:1rem;background-color:${color2[temp]};flex:1 1 auto;`
                        e.target.addEventListener('mouseover',(e)=>{
                           
                            e.target.style=`border:1px yellow solid;height:auto;width:1rem;background-color:${color3[temp]};flex:1 1 auto;`
                            e.target.addEventListener('mouseover',(e)=>{
                               
                                e.target.style=`border:1px yellow solid;height:auto;width:1rem;background-color:${color4[temp]};flex:1 1 auto;`
                                e.target.addEventListener('mouseover',(e)=>{
                                   
                                    e.target.style=`border:1px yellow solid;height:auto;width:1rem;background-color:${color5[temp]};flex:1 1 auto;`
                                })
                            })
                        })
                    })
                })
            
            })
              
        }       

    }

    let btn = document.querySelector('#btn-clr');
    let rowAlll = document.querySelectorAll('.rowAll');
    

    function clearclr(){

        for(i=0;i<rowAlll.length;i++){
    
            rowAlll[i].style.background='white';

    }
    
    }
   
    // 
    btn.addEventListener('click',clearclr)

    // this section will apply css on column element

    const rowAll = document.querySelectorAll('.rowAll');

    for (i = 0; i < rowAll.length; i++) {

        rowAll[i].style = 'border:1px lightgreen solid;height:auto;width:1rem;background:white; flex:1 1 auto;';
        

    }

}


// nightmode  function

let element = document.querySelectorAll('.rowAll');
function nightMode () {
audioBell.play();
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
        
        night.style="display:none";
        light.style="display:absolute";
    }

}


// light mode function

function lightMode () {
    audioBell.play();
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


