// A function that adds and remove the class "active" on the section you click on.
//..and now also uses jQuery to slide connected descriptions up and down

var descVisible = [false, false, false, false, false];

function toggle(e) {
  this.classList.toggle("active");
  for (let i = 1; i <= 4; i++) {
    if (this.id == "section" + i) {
      if (descVisible[i-1] == false) {
        $('#description' + i).slideDown(1000);
        descVisible[i-1] = true;
      } else {
        $('#description' + i).slideUp(1000);
        descVisible[i-1] = false;
      }
    }
  }
}

document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;
document.getElementById("section4").onclick = toggle;
