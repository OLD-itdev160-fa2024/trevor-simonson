var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
}

var data = [
    {
        type: messageType.out,
        user: 'Trevor',
        message: 'Sup?'
    },
    {
        type: messageType.in,
        user: 'Dude',
        message: 'nm?'
    },
    {
        type: messageType.out,
        user: 'Trevor',
        message: 'cool?'
    }
];

function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message){
    var messageText = document.createTextNode(
        message.user + ": " + message.message
    );

    const messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;


    return messageEl;

}

function addMessageHandler(event){
    var user, type;
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('messages-container');

    switch(event.target.id){
        case 'send-button' :
            user = 'Trevor';
            type = messageType.out;
            break;
        case 'reply-button' :
            user = 'Dude';
            type = messageType.in;
            break;
        default :
            user = 'unknown';
            type = messageType.unknown;
            break;            
    }

    if(messageInput.value != ''){
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        var el = createMessageElement(message);

        messagesContainer.appendChild(el);

        messageInput.value = "";
    }
}

function loadSeedData(){
    for(var i = 0; i < data.length; i++){
        var message = new Message(data[i].type ,data[i].user  ,data[i].message);
        messages.push(message);
    }

    var messagesContainer = document.getElementById('messages-container');

    for(var i = 0; i < messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message);

        messagesContainer.appendChild(el);
    }
}

var init = function() {
    // Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
}

init();

