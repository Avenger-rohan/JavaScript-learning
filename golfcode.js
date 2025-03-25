var names=["hurry","eagle","Bardie","buggy","double","stick"];
function golfCode(num,strokes){
    if(strokes===10){
        return names[0];
    }else if(num==strokes){
        return names[1];
    }else if(num==5){
        return names[2];
    }
    else if(num==10){
        return names[3];
    }
    else if(num==12){
        return names[4];
    }
    else if(strokes==par-1){
        return names[5];
    }
}
console.log(golfCode(5,4));