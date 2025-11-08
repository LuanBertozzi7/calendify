const form = document.getElementById("loginForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // impede o reload da página

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    // POST Req
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      alert("Usuário ou senha estão incorretos! tente novamente...");
      return;
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);

    // redireciona pra página do calendário
    window.location.href = "/";
  } catch (error) {
    console.error("Error ao fazer login ", error);
    alert("Erro de conexão com o servidor");
  }
});
