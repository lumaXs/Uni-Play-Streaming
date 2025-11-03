document.addEventListener("DOMContentLoaded", function () {
  // ===== SEÇÃO PRINCIPAL =====
  const section = document.createElement("section");
  section.id = "service";
  section.className =
    "bg-gray-950 py-10 flex flex-col items-center relative overflow-hidden";

  // ===== TÍTULO =====
  const headerTitle = document.createElement("h2");
  headerTitle.textContent = "Descubra Serviços Premium Tudo-em-Um";
  headerTitle.className =
    "text-2xl sm:text-3xl font-bold text-center mb-3 px-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(78,154,241,0.5)]";
  section.appendChild(headerTitle);

  // ===== SUBTÍTULO =====
  const description = document.createElement("p");
  description.textContent =
    "Eleve sua experiência de entretenimento com recursos avançados, suporte dedicado e acesso exclusivo ao melhor conteúdo.";
  description.className =
    "text-gray-400 text-center max-w-xl mb-8 px-4 text-sm sm:text-base drop-shadow-sm";
  section.appendChild(description);

  // ===== GRID DE FEATURES =====
  const featuresGrid = document.createElement("div");
  featuresGrid.className =
    "grid grid-cols-4 sm:grid-cols-4 gap-4 w-full max-w-6xl justify-items-center relative z-10";
  section.appendChild(featuresGrid);

  // ===== LISTA DE FEATURES =====
  const features = [
    {
      icon: "fas fa-video",
      title: "Alta Qualidade",
      text: "Transmissões em HD, imagens nítidas e som cristalino.",
    },
    {
      icon: "fas fa-phone-alt",
      title: "Suporte 24/7",
      text: "Equipe pronta para ajudar a qualquer hora.",
    },
    {
      icon: "fas fa-laptop",
      title: "Todos os Dispositivos",
      text: "Acesse de qualquer lugar e dispositivo.",
    },
    {
      icon: "fas fa-film",
      title: "Últimos Filmes",
      text: "Lançamentos recentes e grandes sucessos.",
    },
    {
      icon: "fas fa-rocket",
      title: "Conexão Rápida",
      text: "Streaming sem interrupções e alta velocidade.",
    },
    {
      icon: "fas fa-sync-alt",
      title: "Atualizações Constantes",
      text: "Conteúdos novos adicionados regularmente.",
    },
    {
      icon: "fas fa-cogs",
      title: "Controle Total",
      text: "Personalize sua experiência como desejar.",
    },
    {
      icon: "fas fa-lock",
      title: "Segurança",
      text: "Proteção de dados com tecnologia avançada.",
    },
  ];

  // ===== CRIA OS CARDS =====
  features.forEach((feature) => {
    const card = document.createElement("div");
    card.className =
      "flex flex-col items-center justify-center gap-2 w-full max-w-[140px] min-w-[90px] h-auto p-3 bg-gray-900 border border-gray-800 rounded-2xl shadow-[0_0_15px_rgba(78,154,241,0.2)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(78,154,241,0.5)]";

    // Ícone
    const iconDiv = document.createElement("div");
    iconDiv.className =
      "flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-cyan-400 text-xl shadow-[0_0_5px_cyan]";
    const icon = document.createElement("i");
    icon.className = feature.icon;
    iconDiv.appendChild(icon);
    card.appendChild(iconDiv);

    // Título
    const title = document.createElement("h3");
    title.textContent = feature.title;
    title.className =
      "text-sm sm:text-base font-semibold text-white text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(78,154,241,0.5)]";
    card.appendChild(title);

    // Descrição
    const text = document.createElement("p");
    text.textContent = feature.text;
    text.className = "text-gray-400 text-center text-xs sm:text-sm drop-shadow-sm";
    card.appendChild(text);

    featuresGrid.appendChild(card);
  });

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