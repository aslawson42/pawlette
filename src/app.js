'use strict';

// register pawlette-nav component
Vue.component ('pawlette-nav', {
  template: `
  <div class="nav">
    <div class="nav-left">
      <a onclick="openNav()"><i class="material-icons">menu</i></a>
      <a href="/" class="navbar-brand">Pawlette</a>
    </div>
    <img src="/img/Pawlette Logo - White.svg" />
    <div class="nav-right">
      <a href="/search.html"><i class="material-icons">search</i></a>
      <a href="/notifications.html"><i class="material-icons">notifications_none</i></a>
      <a href="/chat/messages.html"><i class="material-icons">mail_outline</i></a>
      <a href="/user/profile.html"><i class="material-icons">account_circle</i></a>
    </div>
  </div>`
});

// register pawlette-sidenav component
Vue.component ('pawlette-sidenav', {
  template: `
  <div class="sidenav" id="menu-sidenav">
    <header>
      <a><i class="material-icons closebtn" onclick="closeNav()">close</i></a>
      <a href="/user/profile.html"><i class="material-icons avatar">account_circle</i></a>
      <br />
      <div class="followers">
        <span class="follower-number">10.9 K</span> Following <span class="follower-number">11.3 K</span> Followers
      </div>
      <div class="account">
        <a href="/user/profile.html"><span><strong>Username</strong></span></a>
        <div class="dropdown">
          <button onclick="dropDown()" class="dropbtn">
            <i class="material-icons" id="arrow-drop-down">arrow_drop_down</i>
          </button>
          <div id="sidenav-dropdown" class="dropdown-content">
            <a><i class="material-icons">account_circle</i>OtherAccount</a>
            <a><i class="material-icons">account_circle</i>AnotherAccount</a>
            <a><i class="material-icons">add</i>Add Account...</a>
          </div>
        </div>
      </div>
    </header>
    <div class="list-group">
      <a href="/" class="list-group-item"><i class="material-icons" role="presentation">home</i><span>Home</span></a>
      <a href="/user/profile.html" class="list-group-item"><i class="material-icons" role="presentation">account_circle</i>Profile</a>
      <a href="#" class="list-group-item"><i class="material-icons" role="presentation">cloud_upload</i>Upload</a>
      <a href="#" class="list-group-item"><i class="material-icons" role="presentation">note_add</i>Posts</a>
      <hr />
      <a href="/settings.html" class="list-group-item"><i class="material-icons" role="presentation">settings</i>Settings</a>
      <a href="#" class="list-group-item"><i class="material-icons" role="presentation">forum</i>Community</a>
      <a href="#" class="list-group-item"><i class="material-icons" role="presentation">help</i>Support</a>
      <a href="#" class="list-group-item"><i class="material-icons" role="presentation">arrow_back</i>Log Out</a>
    </div>
    <div class="btn-group">
      <a class="btn" onclick="toggleButton(this)">SFW</a>
      <a class="btn" onclick="toggleButton(this)">Night</a>
    </div>
  </div>
  `
});

// root instance
var vm = new Vue({
  el: '#app'
});

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

//switches tabs
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
