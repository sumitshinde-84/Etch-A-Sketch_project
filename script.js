


let input = document.querySelector('#input');
let arr=[1,2,3,4,5,6];
let col;
let row;
let column;
const main = document.querySelector('.main');
const page = document.createElement('div')
page.className = 'page';
main.appendChild(page);


// default

let btn = document.getElementById('btn');

btn.addEventListener('click',rmGrid);
btn.addEventListener('click',addGrid);




makeGrid(16);


function rmGrid(){
    
for(j=0;j<16;j++)
{     
    
   for(i=0;i<=input.value;i++){
   
    col.remove()
  
   col=document.querySelector('.colAll')
//   col.remove()

}
    
   }
   
} 

   


function addGrid(){

    makeGrid(input.value);
   input.value='';
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

           
        }

    }

   
    // this section will apply css on column element


    const rowAll = document.querySelectorAll('.rowAll');


    for (i = 0; i < rowAll.length; i++) {

        rowAll[i].style = 'border:1px white solid;height:auto;width:1rem;background:gray; flex:1 1 auto;';


    }



}








