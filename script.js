let filterInput= document.querySelector("#filterInput");

filterInput.addEventListener("keyup", filternames);

function filternames(){
  //get value of the input
  let filterValue=  document.querySelector("#filterInput").value.toUpperCase();
//get names ul
  let ul= document.getElementById("names");
  //Get li from ul
  let li=  ul.querySelectorAll("li.collection-item");
  //loop through li
  for(let i=0; i <li.length; i++){
    let a= li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
       li[i].style.display= "";
       }else{
      li[i].style.display= 'none';
    }
  }
}
