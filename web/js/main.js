function nolan(a)
{
    var tmp = document.getElementById('chat-client')
    var chat_inline=""
    for (var i=0; i<a; i++)
    {
        chat_inline='<li class="li-chat-client" id="li-chat-client-id:'+i+'"><div class="avatar"><span>avatar</span></div><div class="name"><span>name</span></div><div class="profile-btn"><span>time</span></div></li>'
        tmp.insertAdjacentHTML('beforeend',chat_inline);
    }
    console.log(tmp)
}

function nolan_dell(a) {
    conversationContainer.innerHTML = "";
    const newUserData = { id: 1, name:'mmm', uid: 0 };
    users_active.splice(0, 1, newUserData);
    console.log(a)
}



const form = document.querySelector("form");
const mess_input=document.querySelector("input[type='text'][id='mess-input']");
const conversationContainer = document.querySelector(".conversation-container");
const userList = document.querySelector("ul");


// hardcoded list of users for demonstration purposes
var users = [ { id: 1, name: "User 1",uid:0000 },
];
var users_active =[
    { id: 1, name: "User 1",uid:0000 },
  ];
add(Number(prompt('okkkk')))
function add(tmp) {
    for (let i = 0; i < tmp; i++) {
        const newUserData = { id: i, name: "user "+i, uid: i };
        users.push( newUserData)
      }
}
// create list items for each user
users.forEach((user) => {
  const listItem = document.createElement("li");
  listItem.innerText = user.name;
  listItem.addEventListener("click", () => {
    // change the conversation when a user is selected
    // conversationContainer.innerHTML = "";
    var a= user.name //
    var b=user.id
    const newUserData = { id: 1, name:a, uid: b };
    users_active.splice(0, 1, newUserData);// xóa 1 phần tử vị trí 0 và thêm 1 phần tử mới
    // add any additional logic here
    alert('chọn '+newUserData.name)

  });
  userList.appendChild(listItem);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // add logic to check if a user is selected before sending the message
    const activeUser = users_active[0].uid
    if (activeUser==0) {
      alert("hãy chọn user để chat");
      return;
    }
    // create a new element to display the message
    const message = document.createElement("div");
    message.innerText = mess_input.value;
    message.classList.add("messsss")
    conversationContainer.appendChild(message);
    mess_input.value = "";
    conversationContainer.scrollTop = conversationContainer.scrollHeight;
    console.log(activeUser)
  });
  



const searchContainer = document.querySelector(".search-container");
const searchInput = searchContainer.querySelector("input");

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const listItems = userList.querySelectorAll("li");

  listItems.forEach((listItem) => {
    if (listItem.innerText.toLowerCase().includes(searchTerm)) {
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  });
});

