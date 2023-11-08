let boxes=document.querySelectorAll('.box');
let current="O"
let newgame1=document.querySelector(".newgame");
let boxesarr=[...boxes]
let count=0;
let head1=document.querySelector('.heading');
head1.innerText=`Current player: X`;
boxes.forEach((box1)=>{
    box1.addEventListener('click',()=>{
        count=count+1;
        if(box1.innerText=="")
        {
             head1.innerText=`Current player: ${current}`
            if(current=='O')
                current="X"
            else
                current="O"   
            if(count==9)
            {
                head1.innerText=`Game tied`
                newgame1.classList.remove('.newgameh');
                newgame1.classList.add('newgameb'); 
            }
            box1.innerText=current
            box1.style.pointerEvents="none";
            checkwon();
        }
    })
})
function checkwon()
{
    for(let i=0;i<9;i++)
    {
        if((boxesarr[winpos[i][0]].innerText!="")&&(boxesarr[winpos[i][0]].innerText===boxesarr[winpos[i][1]].innerText)&&(boxesarr[winpos[i][1]].innerText===boxesarr[winpos[i][2]].innerText))
        {
            for(let j=0;j<9;j++)
            {
                boxesarr[j].style.pointerEvents="none";
            }
            boxesarr[winpos[i][0]].classList.add('bgblock')
            boxesarr[winpos[i][1]].classList.add('bgblock')
            boxesarr[winpos[i][2]].classList.add('bgblock')
            newgame1.classList.remove('.newgameh');
            newgame1.classList.add('newgameb'); 
            head1.innerText=`Winner is: ${boxesarr[winpos[i][0]].innerText}`
        }
    }
}
newgame1.addEventListener("click",()=>
{
    for(let i=0;i<9;i++)
    {
        boxesarr[i].style.pointerEvents="all";
        boxesarr[i].innerText="";
        if(boxesarr[i].classList.contains('bgblock'))
        {
            boxesarr[i].classList.remove('bgblock');
        }
    }
   newgame1.classList.remove('newgameb');
   newgame1.classList.add('newgameh');
   current="O"
   count=0
   head1.innerText=`Current player: X`;
})
const winpos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
