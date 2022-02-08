link1 = document.getElementById('link1').addEventListener("click", myFunction1);
link2 = document.getElementById('link2').addEventListener("click", myFunction2);


function myFunction1() {
  document.getElementById("link2").classList.remove('actives');
  document.getElementById("link1").classList.add('actives');
}

function myFunction2() {
    document.getElementById("link1").classList.remove('actives');
    document.getElementById("link2").classList.add('actives');

}

  