function nolan(a)
{
    var tmp = document.getElementById('chat-client')
    var chat_inline=""
    for(var i=0; i<a, i++;){
        chat_inline='<li class="li-chat-client" id="li-chat-client-id:'+i+'"><div class="avatar"><span>avatar</span></div><div class="name"><span>name</span></div><div class="profile-btn"><span>time</span></div></li>'
        tmp.insertAdjacentHTML('beforeend',chat_inline);
    }
    console.log(tmp)
}