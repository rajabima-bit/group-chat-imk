// Ambil elemen dari HTML
const chatbox = document.getElementById("chatbox");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

// Fungsi untuk mengirim pesan
function sendMessage() {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || message === "") {
    alert("Nama atau pesan belum diisi!");
    return;
  }

  // Buat div baru untuk menampilkan pesan
  const msgDiv = document.createElement("div");
  msgDiv.textContent = name + ": " + message;
  chatbox.appendChild(msgDiv);

  // Bersihkan input pesan
  messageInput.value = "";
}

// Hubungkan tombol dengan fungsi
sendBtn.addEventListener("click", sendMessage);
