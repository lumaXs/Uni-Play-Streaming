document.addEventListener("DOMContentLoaded", function () {
  // ======= SEÇÃO PRINCIPAL =======
  const section = document.createElement("section");
  section.id = "content";
  section.className =
    "bg-gray-950 text-white py-12 px-6 sm:px-10 mt-3 relative overflow-hidden";

  // ======= CABEÇALHO =======
  const header = document.createElement("div");
  header.className = "text-center mb-8 z-10 relative";

  const title = document.createElement("h2");
  title.textContent = "Filmes, Séries, Canais Ao Vivo e Muito Mais!";
  title.className =
    "text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(78,154,241,0.5)]";
  header.appendChild(title);

  const subtitle = document.createElement("p");
  subtitle.textContent =
    "Transforme suas noites em experiências cinematográficas épicas. Assista aos maiores sucessos de bilheteira, esportes ao vivo e uma seleção exclusiva para todos os gostos.";
  subtitle.className =
    "text-gray-400 max-w-2xl mx-auto text-sm sm:text-base drop-shadow-sm";
  header.appendChild(subtitle);

  section.appendChild(header);

  // ======= GRADE DE FILMES 3 COLUNAS =======
  const grid = document.createElement("div");
  grid.className =
    "grid grid-cols-3 gap-[10px] place-items-center relative z-10";

  // Lista de imagens
  const images = [];
  for (let i = 1; i <= 50; i++) {
    images.push(`img/filmes/img${i}.png`);
  }

  // Cria os 6 cards iniciais
  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.id = `card${i + 1}`;
    card.className =
      "relative bg-gray-900 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(78,154,241,0.2)] w-full aspect-[4/5] transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(78,154,241,0.5)]";

    const img = document.createElement("img");
    img.src = images[i];
    img.alt = `Cartaz do filme ${i + 1}`;
    img.className =
      "w-full h-full object-cover transition-opacity duration-[1500ms] opacity-100";
    card.appendChild(img);

    // Overlay no hover
    const overlay = document.createElement("div");
    overlay.className =
      "absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-800 flex items-center justify-center text-sm font-semibold text-cyan-400 tracking-wide drop-shadow-[0_0_10px_cyan]";
    overlay.textContent = "Assistir agora ▶";
    card.appendChild(overlay);

    grid.appendChild(card);
  }

  section.appendChild(grid);
  document.body.appendChild(section);

  // ======= SISTEMA DE TROCA DE IMAGENS =======
  const usedImages = new Set();

  function getRandomImage() {
    if (usedImages.size === images.length) usedImages.clear();

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * images.length);
    } while (usedImages.has(images[randomIndex]));

    usedImages.add(images[randomIndex]);
    return images[randomIndex];
  }

  function changeImage(cardId, interval) {
    setInterval(() => {
      const imgElement = document.querySelector(`#${cardId} img`);
      if (!imgElement) return;

      const newImage = getRandomImage();
      const preload = new Image();
      preload.src = newImage;

      preload.onload = () => {
        imgElement.classList.add("opacity-0");
        setTimeout(() => {
          imgElement.src = newImage;
          imgElement.classList.remove("opacity-0");
        }, 1500);
      };
    }, interval);
  }

  const intervals = [5000, 8000, 5000, 8000, 5000, 8000];
  for (let i = 1; i <= 6; i++) {
    changeImage(`card${i}`, intervals[i - 1]);
  }

  // ===== ELEMENTOS FLUTUANTES DE FUNDO =====
  const glowCircle = document.createElement("div");
  glowCircle.className =
    "absolute w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl top-[-40px] right-[-40px] animate-pulse-slow pointer-events-none";
  section.appendChild(glowCircle);

  const glowCircle2 = document.createElement("div");
  glowCircle2.className =
    "absolute w-60 h-60 rounded-full bg-purple-500/10 blur-2xl bottom-[-30px] left-[-20px] animate-pulse-slow pointer-events-none";
  section.appendChild(glowCircle2);
});
