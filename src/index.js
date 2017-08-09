// opening and closing the sidenav
function openNav() {
  document.getElementById("menu-sidenav").style.width = "240px";
}
function closeNav() {
  document.getElementById("menu-sidenav").style.width = "0";
}

//toggling the SFW and Night buttons on sidenav
function toggleButton(x) {
  x.classList.toggle("btn-active");
}

//toggles the account dropdown
function dropDown() {
  document.getElementById("sidenav-dropdown").classList.toggle("show");
}
