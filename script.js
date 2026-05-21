const focusContent = {
  produto: {
    label: "Produto",
    title: "Projetos com cara de aplicação real.",
    text: "Priorizo fluxo completo, demo navegável, README forte e uma proposta que qualquer pessoa consiga entender em poucos segundos.",
  },
  backend: {
    label: "Back-End",
    title: "APIs, dados e regras de negócio bem separadas.",
    text: "Gosto de organizar autenticação, persistência, integrações e domínio de um jeito que deixe o projeto fácil de testar e evoluir.",
  },
  ia: {
    label: "IA",
    title: "IA aplicada onde ela melhora o uso do produto.",
    text: "Meu foco não é colocar IA por enfeite, mas usar modelos para acelerar decisões, gerar conteúdo útil e reduzir fricção no fluxo.",
  },
};

const tabs = document.querySelectorAll(".focus-tab");
const label = document.querySelector("#focus-label");
const title = document.querySelector("#focus-title");
const text = document.querySelector("#focus-text");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = focusContent[tab.dataset.focus];

    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    label.textContent = selected.label;
    title.textContent = selected.title;
    text.textContent = selected.text;
  });
});

const sections = [...document.querySelectorAll("section[id], footer[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`,
        );
      });
    });
  },
  { rootMargin: "-40% 0px -52% 0px" },
);

sections.forEach((section) => observer.observe(section));

if (window.lucide) {
  window.lucide.createIcons();
}
