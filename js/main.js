(() => {
  "use strict";

  const config = window.SITE_CONFIG || {};
  const projects = [
    {id:1,category:"uñas",title:"Nude elegance",subtitle:"Manicura · Esmaltado",description:"Una manicura delicada en tonos nude, con acabado brillante y una forma cuidada para un resultado limpio, elegante y atemporal.",image:"https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85",alt:"Manicura en tonos suaves"},
    {id:2,category:"uñas",title:"Pink details",subtitle:"Nail art · Diseño",description:"Diseño femenino con pequeños detalles decorativos. Una propuesta sutil para dar personalidad a tus uñas sin perder elegancia.",image:"https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&q=85",alt:"Diseño de uñas rosa"},
    {id:3,category:"uñas",title:"Classic red",subtitle:"Manicura · Color",description:"El clásico rojo reinventado: un color intenso, uniforme y sofisticado que nunca pasa de moda.",image:"https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=900&q=85",alt:"Manicura roja"},
    {id:4,category:"peluqueria",title:"Soft waves",subtitle:"Peinado · Ondas",description:"Ondas suaves con movimiento y brillo natural. Un acabado versátil, perfecto tanto para una ocasión especial como para un look diario.",image:"https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=900&q=85",alt:"Cabello con ondas suaves"},
    {id:5,category:"peluqueria",title:"Golden glow",subtitle:"Color · Luminosidad",description:"Un trabajo de color pensado para aportar dimensión, luz y naturalidad, respetando la armonía del cabello.",image:"https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=85",alt:"Resultado de peluquería"},
    {id:6,category:"peluqueria",title:"The perfect finish",subtitle:"Styling · Acabado",description:"Un peinado pulido y elegante donde el acabado y el movimiento son los protagonistas.",image:"https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=900&q=85",alt:"Peinado profesional"},
    {id:7,category:"maquillaje",title:"Natural glow",subtitle:"Maquillaje · Natural",description:"Piel luminosa, tonos suaves y un acabado fresco que realza los rasgos sin ocultar la belleza natural.",image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&q=85",alt:"Maquillaje natural"},
    {id:8,category:"maquillaje",title:"Golden hour",subtitle:"Maquillaje · Evento",description:"Una propuesta cálida y sofisticada para ocasiones especiales, con luz, definición y equilibrio.",image:"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=900&q=85",alt:"Productos de maquillaje y belleza"},
    {id:9,category:"maquillaje",title:"Soft glam",subtitle:"Maquillaje · Glam",description:"Un look soft glam con ojos definidos, piel trabajada y labios equilibrados. Elegante y favorecedor.",image:"https://images.unsplash.com/photo-1522335789203-aefd1fc54bc9?w=900&q=85",alt:"Look de maquillaje"},
    {id:10,category:"tratamientos",title:"Skin ritual",subtitle:"Facial · Cuidado",description:"Un momento dedicado a la piel: preparación, cuidado y una rutina adaptada a las necesidades de cada persona.",image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85",alt:"Tratamiento facial en cabina"},
    {id:11,category:"tratamientos",title:"Pure relaxation",subtitle:"Bienestar · Facial",description:"Una experiencia relajante para desconectar y dedicar tiempo al cuidado personal en un ambiente tranquilo.",image:"https://images.unsplash.com/photo-1540555700478-4be289fbece2?w=900&q=85",alt:"Ambiente de spa y bienestar"},
    {id:12,category:"tratamientos",title:"Glow care",subtitle:"Piel · Hidratación",description:"Cuidado orientado a aportar confort e hidratación, con atención personalizada y productos adecuados a cada piel.",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&q=85",alt:"Productos para el cuidado de la piel"}
  ];

  const track = document.querySelector("#portfolio-track");
  const count = document.querySelector("#portfolio-count");
  const dialog = document.querySelector("#project-dialog");
  const toast = document.querySelector("#toast");
  let toastTimer;

  const categoryNames = {uñas:"Uñas",peluqueria:"Peluquería",maquillaje:"Maquillaje",tratamientos:"Tratamientos"};

  function renderProjects(filter = "todos") {
    if (!track) return;
    const filtered = filter === "todos" ? projects : projects.filter(p => p.category === filter);
    track.replaceChildren();
    filtered.forEach((project, index) => {
      const article = document.createElement("article");
      article.className = "project-card";
      article.tabIndex = 0;
      article.setAttribute("role", "button");
      article.setAttribute("aria-label", `Ver ${project.title}`);
      article.innerHTML = `
        <div class="project-image-wrap">
          <img src="${project.image}" alt="${project.alt}" loading="lazy">
          <div class="project-overlay"><span>VER PROYECTO</span><span class="project-open" aria-hidden="true">↗</span></div>
        </div>
        <div class="project-meta">
          <div><h3>${project.title}</h3><p>${categoryNames[project.category]} · ${project.subtitle}</p></div>
          <span class="project-number">${String(index + 1).padStart(2,"0")}</span>
        </div>`;
      article.addEventListener("click", () => openProject(project));
      article.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProject(project);
        }
      });
      track.appendChild(article);
    });
    if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? "proyecto" : "proyectos"}`;
  }

  function openProject(project) {
    document.querySelector("#dialog-image").src = project.image;
    document.querySelector("#dialog-image").alt = project.alt;
    document.querySelector("#dialog-category").textContent = categoryNames[project.category].toUpperCase();
    document.querySelector("#dialog-title").textContent = project.title;
    document.querySelector("#dialog-description").textContent = project.description;
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      document.body.classList.add("dialog-open");
    }
  }

  document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach(item => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderProjects(button.dataset.filter);
      track.scrollTo({left:0,behavior:"smooth"});
    });
  });

  document.querySelectorAll("[data-filter-link]").forEach(link => {
    link.addEventListener("click", () => {
      const filter = link.dataset.filterLink;
      const target = document.querySelector(`.filter-button[data-filter="${filter}"]`);
      if (target) target.click();
    });
  });

  document.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener("close", () => document.body.classList.remove("dialog-open"));

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  menuToggle?.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    nav.classList.toggle("is-open", open);
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menú");
  }));

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  }

  const whatsapp = String(config.whatsappNumber || "").replace(/\D/g, "");
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    if (whatsapp.length >= 10) {
      link.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(config.bookingMessage || "Hola, quiero contactar contigo para saber mas de ti y de su situación de empleo actual.")}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#contacto";
      link.addEventListener("click", event => {
        event.preventDefault();
        showToast("Configura el número de WhatsApp en js/config.js para activar las reservas.");
      });
    }
  });

  document.querySelectorAll("[data-instagram]").forEach(link => {
    if (config.instagramUrl) link.href = config.instagramUrl;
    if (config.instagramHandle) link.textContent = `${config.instagramHandle} ↗`;
  });
  document.querySelectorAll("[data-location]").forEach(el => el.textContent = config.location || "Añade tu ubicación");
  document.querySelectorAll("[data-hours]").forEach(el => el.textContent = config.hours || "Con cita previa");
  document.querySelector("#year").textContent = new Date().getFullYear();

  renderProjects();
})();
