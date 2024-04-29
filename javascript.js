let chat = document.getElementById('chat')
let chaticon = document.getElementById('chaticon')
setTimeout(function () {
    chat.classList.add('active')
}, 2000)
function togglechat() {
    chat.classList.toggle('active')
}
function chatting(event) {
    if (event.keyCode == 13) {
        let chatinput = document.getElementById('chatinput').value
        console.log(chatinput)
        let chatbody = document.getElementById('chatbody')
        chatbody.innerHTML += "<p>" + chatinput + "</p>"
    }
}