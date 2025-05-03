
document.addEventListener("DOMContentLoaded", () => { document.querySelectorAll(".subscribe-btn").forEach(btn => { btn.addEventListener("click", () => { btn.textContent = "Вы подписаны!"; btn.disabled = true; }); }); document.querySelectorAll(".like-btn").forEach(btn => { btn.addEventListener("click", () => { let count = parseInt(btn.dataset.count || "0", 10); count++; btn.dataset.count = count; btn.textContent = `👍 ${count}`; }); }); const filterInput = document.getElementById("artistFilter"); if (filterInput) { filterInput.addEventListener("input", () => { const keyword = filterInput.value.toLowerCase(); document.querySelectorAll(".video-card").forEach(card => { const name = card.querySelector("h3").textContent.toLowerCase(); card.style.display = name.includes(keyword) ? "block" : "none"; }); }); }
});
function login() { const email = document.getElementById("loginEmail").value; const password = document.getElementById("loginPassword").value; if (email && password) { localStorage.setItem("user", JSON.stringify({ name: "Пользователь", email })); showProfile(); } else { alert("Введите данные"); }
}
function register() { const name = document.getElementById("regName").value; const email = document.getElementById("regEmail").value; const password = document.getElementById("regPassword").value; if (name && email && password) { localStorage.setItem("user", JSON.stringify({ name, email })); showProfile(); } else { alert("Заполните все поля"); }
}
function logout() { localStorage.removeItem("user"); location.reload();
}
function showProfile() { const user = JSON.parse(localStorage.getItem("user")); if (user) { document.querySelector(".account-box").style.display = "none"; document.querySelector(".profile-box").style.display = "block"; document.getElementById("profileName").textContent = user.name; document.getElementById("profileEmail").textContent = user.email; }
}
document.addEventListener("DOMContentLoaded", () => { if (location.pathname.includes("account.html")) { if (localStorage.getItem("user")) showProfile(); }
});

