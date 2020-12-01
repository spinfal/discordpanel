/**
 * @file login.js
 * @author Sanjay Sunil (a.k.a D3VSJ)
 * @license GPL-3.0
 */

$(document).ready(function () {
  new Noty({
      type: 'info',
      theme: "nest",
      closeWith: ['button'],
      text: '<a href="https://github.com/spinfal/DiscordPanel"><font color="lightblue">Welcome to DiscordPanel!</font><iframe src="https://ghbtns.com/github-btn.html?user=spinfal&repo=DiscordPanel&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe></a>',
      dismissQueue: true,
  }).show()
});

$(document).ready(function () {
  new Noty({
      type: 'info',
      theme: "nest",
      closeWith: ['button'],
      text: '<p><font color="white">Original project by D3VSJ, aka Sanjay Sunil</font></p>',
      dismissQueue: true,
  }).show()
});

if (sessionStorage.getItem("isLoggedIn") == "1") {
  window.location.replace('panel.html')
}
else {
}

function login() {
  let token;
  token = document.getElementById("token").value;
  sessionStorage.setItem("token", token);
  
  token = sessionStorage.getItem("token");
  
  const client = new Discord.Client({
    messageCacheMaxSize: 5,
    fetchAllMembers: false
  });
  
  client.login(token).then()
    .then(() => {
      console.log("Success!")
      sessionStorage.setItem("isLoggedIn", "1");
      window.location.replace('panel.html')
    })
    .catch(() => {
      new Noty({
        type: 'error',
        theme: "nest",
        closeWith: ['button'],
        text: localeFile.token.invalid,
        timeout: 5000,
        progressBar: true,
        dismissQueue: true, 
        force: false, 
        maxVisible: 5, 
      }).show()
      sessionStorage.setItem("token", null);
    });
}