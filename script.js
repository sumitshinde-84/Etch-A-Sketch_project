
let input=prompt('enter number of grid');
let col;
let row;

const main = document.querySelector('.main');
const page = document.createElement('div')
page.className='page';
main.appendChild(page);
console.log(page)


// column

const pageSelect = document.querySelector('.page');


for(i=0;i<input;i++)
{
 col=document.createElement('div');
 col.className=`col${i} colAll`;

 page.appendChild(col);
 
 
}


// this section will apply css on row elements



const colAll =document.querySelectorAll('.colAll')

for(i=0;i<input;i++){

    colAll[i].style=';display:flex; flex:1 1 auto ';

}





// row
let colSelect;


for(i=0;i<input;i++)
{
colSelect= document.querySelector(`.col${i}`);
for(j=0;j<input;j++)
{
    
 row = document.createElement('div');
row.className=`row${j} rowAll`;

colSelect.appendChild(row);


}

}

// this section will apply css on column element


const rowAll = document.querySelectorAll('.rowAll');


for(i=0;i<rowAll.length;i++){

    rowAll[i].style='border:1px white solid;height:auto;width:1rem;background:blue; flex:1 1 auto;';
    
    
}





