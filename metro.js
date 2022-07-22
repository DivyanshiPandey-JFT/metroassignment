function source()
{ 
    let sdropDownBox = document.getElementById("sourceDropBox");
    let destinationDropBox = document.getElementById("destinationDropBox");
    var i = 65;
    var j = 91;
    let arr = [];
    for(let k = i; k <=j; k++){
      var str =String.fromCharCode(k);
      sdropDownBox.innerHTML += `<option>${str}</option>`;
      destinationDropBox.innerHTML += `<option>${str}</option>`;
    }

    return arr;
}
source();

  

  
  
  

  
