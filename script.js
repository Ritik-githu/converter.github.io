function convert(){
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    var fromValue=document.getElementById("frominput").value;
    var toValue=(fromValue,from,to)=>{
        return parseInt(fromValue,from).toString(to);
    }
        var result=toValue(fromValue,from,to);
        if(isNaN(result)){
            alert("please enter a number");
            document.getElementById("frominput").value="";
        }
        else{
            console.log(result);
            document.getElementById("toinput").innerHTML=result;
            document.getElementById("result").style.display="block";
            document.getElementById("frominput").value="";
        }
}
function swap(){
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    let temp=from;
    from=to;
    to=temp;
    document.getElementById("from").value=from;
    document.getElementById("to").value=to;
}