/**
 * @file login.js
 * @author Sanjay Sunil (a.k.a D3VSJ)
 * @license GPL-3.0
 */

let token;
if (
  !sessionStorage.getItem("token") ||
  sessionStorage.getItem("token") === "" ||
  sessionStorage.getItem("token") === null
) {
  token = sessionStorage.setItem("token", token);
}

$(".preloader").css("display","none");
token = sessionStorage.getItem("token");

const client = new Discord.Client({
  messageCacheMaxSize: 5,
  fetchAllMembers: false
});
client.login(token).catch(() => {
  $(".preloader").css("display","block");
  //alert(localeFile.token.invalid);
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
}); 