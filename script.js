const chatbox = document.getElementById("chatbox");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

// Fungsi kirim pesan ke Firebase
function sendMessage() {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    alert("Nama atau pesan belum diisi!");
    return;
  }

  // Simpan pesan ke Firebase
  db.ref("messages").push({
    name: name,
    message: message
  });

  messageInput.value = "";
}

// Tombol Kirim
sendBtn.addEventListener("click", sendMessage);

// Tampilkan semua pesan realtime
db.ref("messages").on("child_added", snapshot => {
  const msg = snapshot.val();
  const msgDiv = document.createElement("div");
  msgDiv.textContent = msg.name + ": " + msg.message;
  chatbox.appendChild(msgDiv);

  // Scroll ke bawah otomatis
  chatbox.scrollTop = chatbox.scrollHeight;
});
