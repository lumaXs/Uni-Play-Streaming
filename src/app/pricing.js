document.addEventListener("DOMContentLoaded", () => {
  const section = document.createElement("section");
  section.id = "price";
  section.className = `
    w-full
    bg-[radial-gradient(ellipse_at_center,_#10101a_0%,_#050509_100%)]
    text-white flex flex-col items-center justify-center py-8 px-4
  `; // Reduzi py-14 para py-8

  // ===== HEADER =====
  const header = document.createElement("div");
  header.className = "text-center mb-8"; // Reduzi mb-12 para mb-8
  const title = document.createElement("h2");
  title.className = `
    text-3xl md:text-4xl font-bold mb-2
    bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
    bg-clip-text text-transparent animate-gradient-x
  `;
  title.textContent = "Escolha Seu Plano e Personalize Sua Experiência";

  const subtitle = document.createElement("p");
  subtitle.className = "text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed";
  subtitle.innerHTML = `
    Assinantes do plano anual podem 
    <span class="text-cyan-400 font-semibold">economizar até 40%</span> 
    além de 
    <span class="text-purple-400 font-semibold">Suporte de Integração GRATUITO</span> 
    para Plano de 1 Mês, 6 Meses ou 12 Meses.
  `;

  header.appendChild(title);
  header.appendChild(subtitle);
  section.appendChild(header);

  // ===== PLANS =====
  const plans = [
    {
      title: "1 Mês",
      price: "R$34,99",
      availability: "Ativação imediata",
      features: [
        "Acesso a todos os recursos básicos da plataforma.",
        "Atendimento ao cliente prioritário.",
        "Cancelamento a qualquer momento.",
      ],
      popular: false,
    },
    {
      title: "6 Meses",
      price: "R$149,99",
      availability: "Ativação imediata",
      features: [
        "Todos os benefícios do plano mensal, com desconto exclusivo.",
        "Acesso antecipado a novas funcionalidades.",
        "Relatórios personalizados de desempenho.",
      ],
      popular: true,
    },
    {
      title: "12 Meses",
      price: "R$249,99",
      availability: "Ativação imediata",
      features: [
        "Todos os benefícios dos planos anteriores com maior economia.",
        "Suporte técnico prioritário 24/7.",
        "Integrações exclusivas e automatizadas.",
      ],
      popular: false,
    },
  ];

  // ===== MOBILE CAROUSEL =====
  if (window.innerWidth < 640) {
    const mobileGrid = document.createElement("div");
    mobileGrid.className = "flex flex-row items-center justify-center gap-4 w-full overflow-hidden";
    section.appendChild(mobileGrid);

    const slots = [];
    for (let i = 0; i < 3; i++) {
      const slot = document.createElement("div");
      slot.className = `
        flex flex-col items-center justify-start
        rounded-2xl p-6
        bg-gradient-to-b from-[#11111a]/80 to-[#0d0d13]/80
        shadow-[0_0_25px_rgba(0,212,255,0.2)]
        transition-all duration-700 ease-in-out
        text-center
        opacity-0
        hover:scale-105
        hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]
      `;
      slot.style.width = "65vw";
      slot.style.flexShrink = 0;
      slots.push(slot);
      mobileGrid.appendChild(slot);
    }

    let current = 0;
    function showPlan(index) {
      slots.forEach((slot, i) => {
        if (i === 1) {
          const plan = plans[index];
          slot.innerHTML = `
            ${plan.popular ? '<span class="absolute top-2 right-2 text-cyan-400 text-xs font-bold px-2 py-1 rounded-full bg-cyan-500/20">Mais Popular</span>' : ''}
            <h3 class="text-xl font-semibold mb-2">${plan.title}</h3>
            <p class="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">${plan.price}</p>
            <p class="text-gray-400 text-sm mb-2">${plan.availability}</p>
            <ul class="text-gray-400 text-xs space-y-1 mb-4">
              ${plan.features.map(f => `<li class="flex items-center gap-2"><span class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>${f}</li>`).join("")}
            </ul>
            <button class="mt-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-md animate-glow active:scale-95 active:brightness-110">Assinar Plano</button>
          `;
          slot.style.opacity = 1;
          slot.style.transform = "scale(1)";
        } else {
          slot.innerHTML = "";
          slot.style.opacity = 0.2;
          slot.style.transform = "scale(0.85)";
        }
      });
    }

    showPlan(current);
    setInterval(() => {
      current = (current + 1) % plans.length;
      showPlan(current);
    }, 4000);
  } else {
    // ===== DESKTOP GRID =====
    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto"; // Reduzi gap de 8 para 6

    plans.forEach((plan, index) => {
      const card = document.createElement("div");
      card.className = `
        relative rounded-2xl overflow-hidden p-6 flex flex-col items-center
        bg-gradient-to-b from-[#11111a]/90 to-[#0d0d13]/90 backdrop-blur-sm
        shadow-[0_0_20px_rgba(0,212,255,0.1)]
        transition-all duration-700 ease-in-out 
        hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(0,212,255,0.25)]
      `;

      if (plan.popular) {
        const badge = document.createElement("span");
        badge.className = `
          absolute top-3 right-3
          bg-gradient-to-r from-cyan-500/30 to-blue-600/30
          text-cyan-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider
        `;
        badge.textContent = "Mais Popular";
        card.appendChild(badge);
      }

      const title = document.createElement("h3");
      title.className = "text-xl font-semibold mb-2";
      title.textContent = plan.title;

      const price = document.createElement("p");
      price.className = "text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent";
      price.textContent = plan.price;

      const availability = document.createElement("p");
      availability.className = "text-gray-500 text-sm mb-2";
      availability.textContent = plan.availability;

      const list = document.createElement("ul");
      list.className = "space-y-2 text-sm text-gray-400 mb-4";
      plan.features.forEach((feature) => {
        const li = document.createElement("li");
        li.className = "flex items-center gap-2";
        li.innerHTML = `<span class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span> ${feature}`;
        list.appendChild(li);
      });

      const button = document.createElement("button");
      button.className = `
        mt-auto bg-gradient-to-r from-cyan-500 to-blue-600
        hover:from-blue-500 hover:to-purple-500
        transition-all duration-700 ease-in-out
        text-white font-semibold py-2 px-6 rounded-full shadow-md
        active:scale-95 active:brightness-110
        animate-glow
      `;
      button.textContent = "Assinar Plano";

      const payments = document.createElement("div");
      payments.className = "flex gap-3 mt-4 opacity-80"; // Reduzi mt-6 para mt-4
      ["pix.svg", "visa.svg", "mastercard.svg"].forEach((icon) => {
        const img = document.createElement("img");
        img.src = `img/${icon}`;
        img.alt = icon.replace(".svg", "");
        img.className = "w-8 h-8 opacity-90 hover:opacity-100 transition";
        payments.appendChild(img);
      });

      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(availability);
      card.appendChild(list);
      card.appendChild(button);
      card.appendChild(payments);
      grid.appendChild(card);
    });

    section.appendChild(grid);
  }

  document.body.appendChild(section);

  // ===== CSS Keyframes =====
  const style = document.createElement("style");
  style.textContent = `
    @keyframes float-0 { 0% { transform: translate(0,0); } 100% { transform: translate(5px,-10px); } }
    @keyframes float-1 { 0% { transform: translate(0,0); } 100% { transform: translate(-5px,-14px); } }
    @keyframes float-2 { 0% { transform: translate(0,0); } 100% { transform: translate(3px,-8px); } }

    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes glow {
      0%, 100% { box-shadow: 0 0 10px rgba(0,212,255,0.4); }
      50% { box-shadow: 0 0 20px rgba(0,212,255,0.7); }
    }

    .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
    .animate-glow { animation: glow 2.5s infinite ease-in-out; }
  `;
  document.head.appendChild(style);
});