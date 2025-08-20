const engrenagemBtn = document.getElementById("engrenagemBtn");
const submenu = document.getElementById("submenu");

engrenagemBtn.addEventListener("click", () => {
  const isHidden = submenu.classList.toggle("hidden");
  engrenagemBtn.setAttribute("aria-expanded", !isHidden);
});

document.addEventListener("click", (e) => {
  if (!engrenagemBtn.contains(e.target) && !submenu.contains(e.target)) {
    if (!submenu.classList.contains("hidden")) {
      submenu.classList.add("hidden");
      engrenagemBtn.setAttribute("aria-expanded", false);
    }
  }
});

let filtroAtual = "normal";

function aplicarDaltonismo(tipo) {
  document.body.classList.remove("acromatico", "dicromatico", "tricromatico");

  if (filtroAtual === tipo || tipo === "normal") {
    filtroAtual = "normal";
  } else {
    document.body.classList.add(tipo);
    filtroAtual = tipo;
  }
}

document.querySelectorAll(".sub-btn").forEach(button => {
  button.addEventListener("click", () => {
    const tipo = button.getAttribute("data-tipo");
    aplicarDaltonismo(tipo);
  });
});
