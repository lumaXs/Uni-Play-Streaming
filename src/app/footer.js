document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("footer");
  footer.className =
    "bg-[#121212] text-gray-300 px-6 py-12 flex flex-col gap-10 border-t border-[#1f1f1f]";

  // Container principal
  const container = document.createElement("div");
  container.className =
    "max-w-6xl mx-auto flex flex-wrap justify-between gap-10";

  // Logo e descrição
  const logoSection = document.createElement("div");
  logoSection.className = "flex-1 min-w-[250px]";

  const logoTitle = document.createElement("h2");
logoTitle.innerHTML =
  'Uni٭<span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Play</span><span id="hidden" class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">-Streaming</span>';
logoTitle.className = "text-2xl font-semibold mb-3";
logoSection.appendChild(logoTitle);

  const p1 = document.createElement("p");
  p1.textContent =
    "Aproveite seus programas e filmes favoritos com apenas um clique!";
  p1.className = "text-sm text-gray-400 mb-2";
  logoSection.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent =
    "Explore a melhor experiência de streaming com nossa plataforma intuitiva e conteúdos exclusivos, feitos para você e sua família.";
  p2.className = "text-sm text-gray-400";
  logoSection.appendChild(p2);

  container.appendChild(logoSection);

  // Seções de links
  const linkSections = [
    {
      title: "Links",
      items: [
        { icon: "fas fa-home", text: "Home", href: "#" },
        { icon: "fas fa-concierge-bell", text: "Serviços", href: "#" },
        { icon: "fas fa-dollar-sign", text: "Preços", href: "#" },
        { icon: "fas fa-envelope", text: "Contato", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { icon: "fas fa-file-alt", text: "Termos de Uso", href: "#" },
        { icon: "fas fa-file-contract", text: "Termos e Condições", href: "#" },
        { icon: "fas fa-user-secret", text: "Privacidade", href: "#" },
        { icon: "fas fa-cookie-bite", text: "Cookies", href: "#" },
      ],
    },
    {
      title: "Produtos",
      items: [
        { icon: "fas fa-gift", text: "Teste Grátis", href: "#" },
        { icon: "fas fa-headset", text: "Suporte ao Vivo", href: "#" },
        { icon: "fas fa-share-alt", text: "Redes Sociais", href: "#" },
        { icon: "fas fa-handshake", text: "Colaboração", href: "#" },
        { icon: "fas fa-star", text: "Avaliações", href: "#" },
      ],
    },
  ];

  const linksContainer = document.createElement("div");
  linksContainer.className =
    "flex flex-wrap justify-between flex-1 min-w-[500px] gap-6";

  linkSections.forEach((section) => {
    const col = document.createElement("div");
    col.className = "flex-1 min-w-[140px]";

    const title = document.createElement("h3");
    title.textContent = section.title;
    title.className = "text-white font-semibold text-lg mb-3";
    col.appendChild(title);

    const ul = document.createElement("ul");
    ul.className = "space-y-2";

    section.items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.href;
      a.innerHTML = `<i class="${item.icon} mr-2 text-blue-500"></i>${item.text}`;
      a.className =
        "text-gray-400 hover:text-blue-500 text-sm transition-colors duration-300";
      li.appendChild(a);
      ul.appendChild(li);
    });

    col.appendChild(ul);
    linksContainer.appendChild(col);
  });

  container.appendChild(linksContainer);
  footer.appendChild(container);

  // Parte inferior
  const bottom = document.createElement("div");
  bottom.className =
    "max-w-6xl mx-auto flex flex-wrap justify-between items-center border-t border-[#1f1f1f] pt-6 mt-8 text-sm text-gray-500 gap-4";

  const bottomLinks = document.createElement("div");
  bottomLinks.className = "flex gap-6";
  bottomLinks.innerHTML = `
        <a href="#" class="hover:text-blue-500 transition-colors duration-300"><i class="fas fa-shield-alt mr-1"></i> Privacidade & Termos</a>
        <a href="#" class="hover:text-blue-500 transition-colors duration-300"><i class="fas fa-envelope mr-1"></i> Contate-nos</a>
    `;
  bottom.appendChild(bottomLinks);

  const copyright = document.createElement("p");
  copyright.innerHTML =
    "© 2025 <span class='text-blue-500'>Uni٭Play</span>. Todos os direitos reservados.";
  bottom.appendChild(copyright);

  const socials = document.createElement("div");
  socials.className = "flex gap-4";
  const icons = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
  ];
  icons.forEach((s) => {
    const a = document.createElement("a");
    a.href = s.href;
    a.innerHTML = `<i class="${s.icon}"></i>`;
    a.className =
      "text-gray-400 hover:text-blue-500 text-lg transition-colors duration-300";
    socials.appendChild(a);
  });
  bottom.appendChild(socials);

  footer.appendChild(bottom);
  document.body.appendChild(footer);
});