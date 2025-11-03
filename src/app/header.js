document.addEventListener("DOMContentLoaded", function () {
  // ===== HEADER =====
  const header = document.createElement("header");
  header.className =
    "fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-gradient-to-b from-blue-600/30 via-gray-900/90 to-gray-900 backdrop-blur-md shadow-lg border-b border-blue-500/20";

  // ===== LOGO =====
  const logoLink = document.createElement("a");
  logoLink.href = "#home";
  logoLink.className = "flex items-center space-x-1";
  logoLink.innerHTML = `
    <h1 class="text-2xl font-bold tracking-wide text-white">
      Uni٭<span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Play
      </span>
      <span class="hidden sm:inline bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        -Streaming
      </span>
    </h1>
  `;
  header.appendChild(logoLink);

  // ===== LINKS DESKTOP =====
  const navDesktop = document.createElement("nav");
  navDesktop.className = "hidden sm:flex space-x-6 text-sm font-semibold text-gray-300";
  const links = [
    { href: "#home", text: "Home" },
    { href: "#service", text: "Serviços" },
    { href: "#price", text: "Preços" },
    { href: "#content", text: "Conteúdos" },
    { href: "#faq", text: "FAQ" },
    { href: "https://abre.ai/uniplay-contact", text: "Contato", target: "_blank" },
  ];
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.className = "hover:text-blue-400 transition-colors duration-200";
    if (link.target) a.target = link.target;
    navDesktop.appendChild(a);
  });
  header.appendChild(navDesktop);

  // ===== BOTÃO MOBILE =====
  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-400 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16" />
    </svg>`;
  menuBtn.className =
    "sm:hidden focus:outline-none p-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20";
  header.appendChild(menuBtn);

  document.body.prepend(header);

  // ===== MODAL MOBILE =====
  const modalOverlay = document.createElement("div");
  modalOverlay.className =
    "fixed inset-0 bg-black/30 backdrop-blur-sm hidden items-center justify-center z-[100]";
  document.body.appendChild(modalOverlay);

  const modal = document.createElement("div");
  modal.className =
    "absolute top-20 right-8 w-72 max-w-xs p-6 bg-gradient-to-br from-gray-900/90 to-blue-950/80 rounded-2xl shadow-2xl border border-blue-500/30 opacity-0 scale-90 transition-all duration-500 ease-out";
  modal.style.boxShadow =
    "0 0 20px rgba(0,212,255,0.4), 0 0 40px rgba(0,212,255,0.3) inset, 0 0 60px rgba(78,154,241,0.2)";
  modalOverlay.appendChild(modal);

  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.className =
      "block text-gray-200 font-semibold text-lg py-2 px-4 rounded-lg hover:text-blue-400 hover:bg-blue-600/10 transition-all duration-300 cursor-pointer";
    if (link.target) a.target = link.target;
    a.addEventListener("click", () => closeModal());
    modal.appendChild(a);
  });

  const openModal = () => {
    modalOverlay.classList.remove("hidden");
    setTimeout(() => {
      modal.style.opacity = "1";
      modal.style.transform = "scale(1)";
    }, 10);
  };
  const closeModal = () => {
    modal.style.opacity = "0";
    modal.style.transform = "scale(0.9)";
    setTimeout(() => {
      modalOverlay.classList.add("hidden");
    }, 400);
  };
  menuBtn.addEventListener("click", openModal);
  modalOverlay.addEventListener("click", e => {
    if (e.target === modalOverlay) closeModal();
  });

  // ===== HERO =====
  const section = document.createElement("section");
  section.id = "home";
  section.className =
    "flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-14 bg-gradient-to-b from-gray-900 to-blue-950 rounded-2xl gap-10 relative overflow-hidden";

  // Conteúdo
  const contentDiv = document.createElement("div");
  contentDiv.className = "md:w-1/2 flex flex-col z-10";

  const rating = document.createElement("div");
  rating.textContent = "★★★★★";
  rating.className = "text-yellow-400 px-3 py-1 rounded-md inline-block text-lg font-semibold drop-shadow-lg";
  contentDiv.appendChild(rating);

  const title = document.createElement("h1");
  title.innerHTML = 'Assista tudo que você ama,<br>Quando Quiser e Onde Estiver.';
  title.className =
    "text-3xl md:text-5xl font-bold mt-5 mb-4 leading-snug bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(78,154,241,0.5)]";
  contentDiv.appendChild(title);

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Descubra um mundo de entretenimento com filmes, séries e programas para toda a família. Experimente qualidade de streaming sem interrupções e explore nosso catálogo exclusivo.";
  paragraph.className = "text-gray-300 mb-6 leading-relaxed drop-shadow-sm";
  contentDiv.appendChild(paragraph);

  // Botões
  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "flex flex-wrap gap-4";

  const btn1 = document.createElement("a");
  btn1.href = "https://abre.ai/uniplay-contact";
  btn1.target = "_blank";
  btn1.textContent = "Saiba Mais";
  btn1.className =
    "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:scale-105";
  buttonsDiv.appendChild(btn1);

  const btn2 = document.createElement("a");
  btn2.href = "https://abre.ai/uniplay-contact";
  btn2.target = "_blank";
  btn2.textContent = "Teste Grátis";
  btn2.className =
    "bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:scale-105";
  buttonsDiv.appendChild(btn2);

  contentDiv.appendChild(buttonsDiv);

  // Imagem
  const imgDiv = document.createElement("div");
  imgDiv.className = "md:w-1/2 flex justify-center relative z-10";
  const img = document.createElement("img");
  img.src = "img/tv-image.png";
  img.alt = "Serviço de Streaming";
  img.className =
    "max-w-full h-auto rounded-2xl shadow-[0_0_40px_rgba(78,154,241,0.3)] border border-blue-500/20";
  imgDiv.appendChild(img);

  section.appendChild(contentDiv);
  section.appendChild(imgDiv);

  // Glow decorativo
  const glowCircle = document.createElement("div");
  glowCircle.className =
    "absolute w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl top-[-40px] right-[-40px] animate-pulse-slow pointer-events-none";
  section.appendChild(glowCircle);

  const glowCircle2 = document.createElement("div");
  glowCircle2.className =
    "absolute w-60 h-60 rounded-full bg-purple-500/10 blur-2xl bottom-[-30px] left-[-20px] animate-pulse-slow pointer-events-none";
  section.appendChild(glowCircle2);

  // Ajusta margin-top para hero logo abaixo do header
  const headerHeight = header.offsetHeight;
  section.style.marginTop = `${headerHeight}px`;

  document.body.appendChild(section);
});