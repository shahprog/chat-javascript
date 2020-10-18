const chatList = document.querySelector('.chat-list');
const newchatform = document.querySelector('.new-chat');
const updatenameform = document.querySelector('.update-name');
const rooms = document.querySelector('.chat-rooms');

let name = localStorage.getItem('name') ? localStorage.getItem('name') : 'Guest';

newchatform.addEventListener('submit', e => {
    e.preventDefault();
    const message = newchatform.message.value.trim();
    chatroom.addChat(message).then(() => {
        newchatform.reset();
    }).catch(e => {
        console.log(e);
    });
});

updatenameform.addEventListener('submit', e => {
    e.preventDefault();
    const name = updatenameform.newname.value.trim();
    chatroom.updateName(name);
    updatenameform.reset();
    localStorage.setItem('name', name);
    document.querySelector('.update-msg').textContent = "Name updated to " + name;
    setTimeout(() => {
        document.querySelector('.update-msg').textContent = ""
    }, 2000);
});

rooms.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        chatui.clear(); 
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(data => { chatui.render(data)});
    }
})

const chatroom = new Chatroom('general', name);
const chatui = new ChatUI(chatList);


chatroom.getChats(data=> { chatui.render(data)});
