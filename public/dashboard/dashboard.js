document.addEventListener("DOMContentLoaded", async () => {
  const statusEl = document.getElementById("status");
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login/login.html";
    return;
  }

  try {
    const res = await fetch("/dashboard", {
      headers: { authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      localStorage.removeItem("token");
      window.location.href = "/login/login.html";
      return;
    }

    const data = await res.json();
    statusEl.textContent = data.message || "Autenticado!";
  } catch (e) {
    console.log(e);
    localStorage.removeitem("token");
    window.location.href = "/login/login.html";
  }

  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "/login/login.html";
  });
});
