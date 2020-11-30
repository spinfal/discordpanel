/**
 * @file isLoggedIn.js
 * @author Sanjay Sunil (a.k.a D3VSJ)
 * @license GPL-3.0
 */

let token;

if (
    !sessionStorage.getItem("token") ||
    sessionStorage.getItem("token") === "" ||
    sessionStorage.getItem("token") === null
) {
    sessionStorage.setItem("isLoggedIn", "0");
    window.location.replace('/')
}

status.html("Connecting to Bot Token ...")

token = sessionStorage.getItem("token")

const client = new Discord.Client({
    messageCacheMaxSize: 5,
    fetchAllMembers: false
});


client.login(token)
    .then(() => {
        status.html("Ready!");
        setTimeout(function () {
            $('.preloader').fadeOut(300, function () {});
        }, 1500);
        sessionStorage.setItem("isLoggedIn", "1");
    })
    .catch(() => {
        status.html("ERROR! Invalid Token!");
        location.replace('/')
    });