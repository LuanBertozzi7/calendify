const form = document.getElementById("loginForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const { message } = await res.json().catch(() => ({ message: " Erro " }));
      alert(message || "Falha no Login");
      return;
    }

    const { token } = await res.json();
    localStorage.setItem("token", token);

    // vai pra dashboard
    window.location.href = "/login/home.html";
  } catch (e) {
    console.log(e);
    alert("404 not found");
  }
});
