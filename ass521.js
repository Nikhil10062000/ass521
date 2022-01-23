
var count = 0 ;
document.getElementById("counter").innerText = count ;



var like = document.getElementById("like");
like.addEventListener('dblclick', likes);
function likes() {
    count = count + 1;
	document.getElementById("counter").innerText = count;
    if (like.style.color == "black") {
      like.style.color = "red";
      like.style.backgroundColor ="black";
    } else {
      like.style.color = "black";
      like.style.backgroundColor ="whitesmoke";
    }
}


