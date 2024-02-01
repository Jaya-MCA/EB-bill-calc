function calculate(){
    let units=Number(document.getElementById("input").value);
    let bill=0
    if(units>250){
        bill=(50*0.75)+(100*1)+(100*1.3)+(units-250)*1.5;
    }
    else if(units=>50){
    bill=(50*0.75 + (units-50)*1)
    }
    else if(units>100){
        bill=(50*0.75)+(100*1)+(units-150)*1.3;
    
    }
    else{
        nothing
    }
    let result= document.getElementById("result")
    result.innerHTML="The amount you have to pay is"+" " + "Rs."+bill;

}
