


let input = document.querySelector('#input');
let arr=[1,2,3,4,5,6];
let col;
let row;
let column;
const main = document.querySelector('.main');
const page = document.createElement('div')
page.className = 'page';
main.appendChild(page);




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
           
            ElementRow.addEventListener('mouseover',(e)=>{e.target.style.background='red'})
          
            ElementRow.addEventListener('mouseleave',(e)=>{e.target.style='background:gray ;transition:1s'})

            
           
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

        rowAll[i].style = 'border:1px white solid;height:auto;width:1rem;background:gray; flex:1 1 auto;';
        

    }

    

}





