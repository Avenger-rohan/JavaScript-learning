// js mai inner function  se outer function ki variable ki value lena 

function one(){
    const name="Happy";
    function two(){
        const myname="Roy";
        console.log(name);
        
    }
    two();

}
one()