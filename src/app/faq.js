document.addEventListener("DOMContentLoaded", () => {
  // ====== SEÇÃO FAQ ======
  const section = document.createElement("section");
  section.id = "faq";
  section.className =
    "w-full bg-[#0a0a0f] text-white py-6 flex flex-col items-center px-4"; // py-6 = 24px top/bottom

  // ====== CARD PRINCIPAL ======
  const mainCard = document.createElement("div");
  mainCard.className =
    "w-full max-w-3xl bg-[#111018] rounded-2xl p-5 mb-6 shadow-lg flex flex-col transition-all duration-300";

  const mainTitle = document.createElement("h2");
  mainTitle.className = "text-2xl sm:text-3xl font-bold text-center mb-3 px-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(78,154,241,0.5)]";
  mainTitle.textContent = "Selecione uma pergunta abaixo";

  const mainDesc = document.createElement("p");
  mainDesc.className = "text-gray-400 text-sm md:text-base";
  mainDesc.textContent = "Clique em uma pergunta para ver a resposta aqui.";

  mainCard.appendChild(mainTitle);
  mainCard.appendChild(mainDesc);
  section.appendChild(mainCard);

  // ====== GRID DE CARDS ======
  const cardsGrid = document.createElement("div");
  cardsGrid.className =
    "grid grid-cols-4 sm:grid-cols-2 gap-4 max-w-6xl w-full justify-items-center";

  const faqs = [
    { question: "O que é IPTV?", answer: "IPTV (Internet Protocol Television) é um serviço que transmite canais de TV e conteúdos sob demanda pela internet." },
    { question: "Quanto tempo demora?", answer: "Após a confirmação do pagamento, o serviço é ativado em até 10 minutos." },
    { question: "Quais dispositivos podem ser usados?", answer: "Compatível com Smart TVs, smartphones, tablets, computadores e dispositivos como TV Box e Fire Stick." },
    { question: "Eu tenho suporte?", answer: "Sim, oferecemos suporte técnico dedicado 24/7 para ajudar em qualquer questão." },
    { question: "Como posso testar meu serviço?", answer: "Oferecemos teste gratuito de até 7 horas para que você experimente a qualidade do nosso serviço." },
    { question: "Velocidade de internet recomendada?", answer: "Recomendamos no mínimo 10 Mbps para uma experiência de streaming estável e de alta qualidade." },
    { question: "Quantas conexões ao mesmo tempo?", answer: "Nossos planos permitem 1 conexão por assinatura. Entre em contato para pacotes com múltiplas conexões." },
    { question: "Vocês oferecem teste grátis?", answer: "Sim, você pode solicitar um teste gratuito para verificar se nosso serviço atende às suas expectativas." },
  ];

  faqs.forEach((faq) => {
    const card = document.createElement("div");
    card.className =
      "w-full max-w-[160px] sm:max-w-[calc(50%-1rem)] h-24 bg-[#141422] rounded-2xl p-3 flex items-center justify-center text-center text-sm font-semibold cursor-pointer text-white shadow-md hover:scale-105 transition-transform duration-300";
    card.textContent = faq.question;

    card.addEventListener("click", () => {
      mainTitle.textContent = faq.question;
      mainDesc.textContent = faq.answer;

      document.querySelectorAll(".selected-card").forEach((el) =>
        el.classList.remove("selected-card", "border-cyan-400", "border-2")
      );
      card.classList.add("selected-card", "border-cyan-400", "border-2");
    });

    cardsGrid.appendChild(card);
  });

  section.appendChild(cardsGrid);
  document.body.appendChild(section);

  // ====== ESTILOS ADICIONAIS ======
  const style = document.createElement("style");
  style.textContent = `
    .selected-card {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }

    @media (max-width: 768px) {
      #faq > div:first-child {
        width: 95%; 
        margin-bottom: 1rem; 
      }

      #faq .grid {
        grid-template-columns: repeat(2, 1fr); 
        gap: 0.75rem; 
      }

      #faq .grid > div {
        max-width: 45vw; 
      }
    }

    @media (min-width: 1024px) {
      #faq .grid {
        grid-template-columns: repeat(3, 1fr); 
      }
    }
  `;
  document.head.appendChild(style);
});