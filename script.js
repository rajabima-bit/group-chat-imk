const chatbox = document.getElementById("chatbox");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

// Fungsi kirim pesan ke Firebase
function sendMessage() {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || message === "") {
    alert("Nama atau pesan belum diisi!");
    return;
  }

  db.ref("messages").push({
    name: name,
    message: message
  });

  messageInput.value = "";
}

// Hubungkan tombol
sendBtn.addEventListener("click", sendMessage);

// Tampilkan pesan realtime dari Firebase
db.ref("messages").on("child_added", (snapshot) => {
  const msg = snapshot.val();
  const msgDiv = document.createElement("div");
  msgDiv.textContent = msg.name + ": " + msg.message;
  chatbox.appendChild(msgDiv);
});
