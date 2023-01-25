let incel  = document.getElementById("inc_el") ;
let save  = document.getElementById("sav_el") ;
let counter = 0 ;
function  inc ()
{ counter++ ;
    incel.innerText = counter ;
}
function sav ()
{

    save.innerText+= " "+ counter+" - ";
    counter = 0 ;
    incel.textContent = counter ;

}