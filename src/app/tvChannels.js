document.addEventListener("DOMContentLoaded", function () {
  const section = document.createElement("section");
  section.className =
    "bg-gray-950 text-white text-center py-12 px-5 relative overflow-hidden";

  // ===== CABEÇALHO =====
  const header = document.createElement("div");
  header.className = "mb-8 relative z-10";

  const title = document.createElement("h2");
  title.textContent = "Assista aos Melhores Canais de TV do Mundo";
  title.className =
    "text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(78,154,241,0.5)]";
  header.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent =
    "Tenha acesso a uma seleção incrível de alta qualidade. Desde entretenimento e esportes até filmes e séries, tudo reunido em um só lugar para você.";
  desc.className = "text-gray-400 text-base mb-6 drop-shadow-sm";
  header.appendChild(desc);

  section.appendChild(header);

  // ===== GRID DE CANAIS =====
  const grid = document.createElement("div");
  grid.className =
    "grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center relative z-10";

  const channels = [
    { src: "img/prime-video.png", alt: "Prime Video" },
    { src: "img/hbo.png", alt: "HBO" },
    { src: "img/netflix.png", alt: "Netflix" },
    { src: "img/disney-plus.png", alt: "Disney+" },
    { src: "img/hulu.png", alt: "Hulu", hideMobile: true },
    { src: "img/apple-tv.png", alt: "Apple TV" },
    { src: "img/bein-sports.png", alt: "BeIN Sports" },
    { src: "img/film.png", alt: "Film", hideMobile: true },
  ];

  channels.forEach((ch) => {
    const card = document.createElement("div");
    card.className =
      `w-full max-w-[120px] aspect-square bg-gray-900 flex items-center justify-center rounded-2xl shadow-[0_0_15px_rgba(78,154,241,0.2)] transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(78,154,241,0.5)]` +
      (ch.hideMobile ? " hidden sm:flex" : "");

    const img = document.createElement("img");
    img.src = ch.src;
    img.alt = ch.alt;
    img.className = "max-w-[70%] max-h-[70%] object-contain";
    card.appendChild(img);

    grid.appendChild(card);
  });

  section.appendChild(grid);

  // ===== ELEMENTOS FLUTUANTES DE FUNDO =====
  const glowCircle = document.createElement("div");
  glowCircle.className =
    "absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl top-[-40px] right-[-40px] animate-pulse-slow pointer-events-none";
  section.appendChild(glowCircle);

  const glowCircle2 = document.createElement("div");
  glowCircle2.className =
    "absolute w-60 h-60 rounded-full bg-purple-500/10 blur-2xl bottom-[-30px] left-[-20px] animate-pulse-slow pointer-events-none";
  section.appendChild(glowCircle2);

  document.body.appendChild(section);
});