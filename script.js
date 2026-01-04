const chatbox = document.getElementById("chatbox");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

// Kirim pesan ke Firebase
function sendMessage() {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    alert("Nama atau pesan belum diisi!");
    return;
  }

  db.ref("messages").push({
    name: name,
    message: message
  });

  messageInput.value = "";
}

// Tombol Kirim
sendBtn.addEventListener("click", sendMessage);

// Tampilkan pesan realtime dengan warna berbeda
db.ref("messages").on("child_added", snapshot => {
  const msg = snapshot.val();
  const msgDiv = document.createElement("div");

  // Pesan kita = biru, pesan teman = pink
  if (msg.name === nameInput.value.trim()) {
    msgDiv.className = "message self";
  } else {
    msgDiv.className = "message other";
  }

  msgDiv.textContent = msg.name + ": " + msg.message;
  chatbox.appendChild(msgDiv);

  // scroll otomatis ke bawah
  chatbox.scrollTop = chatbox.scrollHeight;
});
