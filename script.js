// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      navMenu.classList.toggle("active");

      // Cambiar el estilo de las barras del menú hamburguesa
      const bars = document.querySelectorAll(".bar");
      if (navMenu.classList.contains("active")) {
        bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
      } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
      }
    });
  }

  // Cerrar el menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        mobileMenu.click();
      }
    });
  });

  // Cambiar el estilo del navbar al hacer scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.padding = "10px 0";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.padding = "15px 0";
      navbar.style.boxShadow = "none";
    }
  });

  // Slider de testimonios
  const testimonialSlider = document.getElementById("testimonial-slider");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (testimonialSlider && prevBtn && nextBtn) {
    const testimonials = testimonialSlider.querySelectorAll(".testimonial");
    let currentIndex = 0;

    // Ocultar todos los testimonios excepto el primero
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = "none";
      }
    });

    // Función para mostrar un testimonio específico
    function showTestimonial(index) {
      testimonials.forEach((testimonial) => {
        testimonial.style.display = "none";
      });
      testimonials[index].style.display = "block";

      // Añadir animación de fade
      testimonials[index].style.opacity = "0";
      setTimeout(() => {
        testimonials[index].style.opacity = "1";
      }, 50);
    }

    // Evento para el botón anterior
    prevBtn.addEventListener("click", () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
      }
      showTestimonial(currentIndex);
    });

    // Evento para el botón siguiente
    nextBtn.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex >= testimonials.length) {
        currentIndex = 0;
      }
      showTestimonial(currentIndex);
    });

    // Cambiar automáticamente cada 5 segundos
    setInterval(() => {
      nextBtn.click();
    }, 5000);
  }

  // Formulario de contacto
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Aquí normalmente enviarías los datos a un servidor
      // Para este ejemplo, solo mostraremos un mensaje de éxito

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        // Crear un elemento para mostrar el mensaje de éxito
        const successMessage = document.createElement("div");
        successMessage.className = "success-message";
        successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <p>¡Gracias por tu mensaje! Te contactaremos pronto.</p>
                `;

        // Estilos para el mensaje de éxito
        successMessage.style.backgroundColor = "#00b09b";
        successMessage.style.color = "white";
        successMessage.style.padding = "15px";
        successMessage.style.borderRadius = "8px";
        successMessage.style.marginTop = "20px";
        successMessage.style.display = "flex";
        successMessage.style.alignItems = "center";

        // Estilos para el ícono
        const icon = successMessage.querySelector("i");
        icon.style.fontSize = "24px";
        icon.style.marginRight = "10px";

        // Limpiar el formulario y mostrar el mensaje
        contactForm.reset();
        contactForm.appendChild(successMessage);

        // Eliminar el mensaje después de 5 segundos
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }
    });
  }

  // Formulario de newsletter
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        // Crear un elemento para mostrar el mensaje de éxito
        const successMessage = document.createElement("div");
        successMessage.className = "success-message";
        successMessage.innerHTML = `
                    <p>¡Gracias por suscribirte a nuestro boletín!</p>
                `;

        // Estilos para el mensaje de éxito
        successMessage.style.color = "white";
        successMessage.style.marginTop = "10px";
        successMessage.style.fontSize = "0.9rem";

        // Limpiar el formulario y mostrar el mensaje
        newsletterForm.reset();
        newsletterForm.appendChild(successMessage);

        // Eliminar el mensaje después de 5 segundos
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }
    });
  }

  // Animación de elementos al hacer scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".benefit-card, .product-content, .sustainability-content"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Inicializar los elementos con opacidad 0 y desplazamiento hacia arriba
  const elementsToAnimate = document.querySelectorAll(
    ".benefit-card, .product-content, .sustainability-content"
  );
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";
  });

  // Ejecutar la animación al cargar la página y al hacer scroll
  window.addEventListener("load", animateOnScroll);
  window.addEventListener("scroll", animateOnScroll);

  // NUEVOS GRÁFICOS PARA LA SECCIÓN FINANCIERA

  // Función para crear gráficos solo si existen los elementos
  function createCharts() {
    // Gráfico de Costos de Producción
    const costChartElement = document.getElementById("costChart");
    if (costChartElement) {
      const costChart = new Chart(costChartElement, {
        type: "bar",
        data: {
          labels: ["Materia Prima", "Mano de Obra", "Gastos Indirectos"],
          datasets: [
            {
              label: "Costo por Unidad (MXN)",
              data: [9.8, 7.08, 4.06],
              backgroundColor: [
                "rgba(52, 152, 219, 0.7)",
                "rgba(46, 204, 113, 0.7)",
                "rgba(155, 89, 182, 0.7)",
              ],
              borderColor: [
                "rgba(52, 152, 219, 1)",
                "rgba(46, 204, 113, 1)",
                "rgba(155, 89, 182, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Costo (MXN)",
              },
            },
            x: {
              title: {
                display: true,
                text: "Componentes del Costo",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Desglose de Costos por Unidad (25g)",
              font: {
                size: 16,
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `$${context.raw} MXN`;
                },
              },
            },
          },
        },
      });
    }

    // Gráfico de Distribución de Costos
    const costDistributionElement = document.getElementById(
      "costDistributionChart"
    );
    if (costDistributionElement) {
      const costDistributionChart = new Chart(costDistributionElement, {
        type: "pie",
        data: {
          labels: ["Costos Variables", "Costos Fijos"],
          datasets: [
            {
              data: [60, 40],
              backgroundColor: [
                "rgba(52, 152, 219, 0.7)",
                "rgba(155, 89, 182, 0.7)",
              ],
              borderColor: ["rgba(52, 152, 219, 1)", "rgba(155, 89, 182, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Distribución de Costos",
              font: {
                size: 16,
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.label}: ${context.raw}%`;
                },
              },
            },
          },
        },
      });
    }

    // Gráfico de Punto de Equilibrio
    const breakEvenElement = document.getElementById("breakEvenChart");
    if (breakEvenElement) {
      const breakEvenChart = new Chart(breakEvenElement, {
        type: "line",
        data: {
          labels: [
            "0",
            "100000",
            "200000",
            "300000",
            "400000",
            "500000",
            "600000",
          ],
          datasets: [
            {
              label: "Ingresos",
              data: [0, 2310000, 4620000, 6930000, 9240000, 11550000, 13860000],
              borderColor: "rgba(46, 204, 113, 1)",
              backgroundColor: "rgba(46, 204, 113, 0.1)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Costos Fijos",
              data: [541800, 541800, 541800, 541800, 541800, 541800, 541800],
              borderColor: "rgba(231, 76, 60, 1)",
              backgroundColor: "rgba(231, 76, 60, 0.1)",
              borderWidth: 2,
              borderDash: [5, 5],
              fill: false,
            },
            {
              label: "Costos Totales",
              data: [
                541800, 2133800, 3725800, 5317800, 6909800, 8501800, 10093800,
              ],
              borderColor: "rgba(52, 152, 219, 1)",
              backgroundColor: "rgba(52, 152, 219, 0.1)",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Monto (MXN)",
              },
            },
            x: {
              title: {
                display: true,
                text: "Unidades Vendidas",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Análisis de Punto de Equilibrio",
              font: {
                size: 16,
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${
                    context.dataset.label
                  }: $${context.raw.toLocaleString()} MXN`;
                },
              },
            },
            annotation: {
              annotations: {
                point: {
                  type: "point",
                  xValue: 3,
                  yValue: 5317800,
                  backgroundColor: "rgba(255, 99, 132, 0.25)",
                },
              },
            },
          },
        },
      });
    }

    // Gráfico de Pronóstico de Ventas
    const salesForecastElement = document.getElementById("salesForecastChart");
    if (salesForecastElement) {
      const salesForecastChart = new Chart(salesForecastElement, {
        type: "bar",
        data: {
          labels: [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
          ],
          datasets: [
            {
              label: "Unidades Vendidas",
              data: [
                23602, 27000, 30345, 27000, 30345, 30345, 27000, 23602, 23602,
                20000, 20000, 20000,
              ],
              backgroundColor: "rgba(52, 152, 219, 0.7)",
              borderColor: "rgba(52, 152, 219, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Unidades",
              },
            },
            x: {
              title: {
                display: true,
                text: "Mes",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Pronóstico de Ventas Mensuales",
              font: {
                size: 16,
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.raw.toLocaleString()} unidades`;
                },
              },
            },
          },
        },
      });
    }

    // Gráfico de Flujo de Efectivo
    const cashFlowElement = document.getElementById("cashFlowChart");
    if (cashFlowElement) {
      const cashFlowChart = new Chart(cashFlowElement, {
        type: "line",
        data: {
          labels: [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
          ],
          datasets: [
            {
              label: "Saldo Final",
              data: [
                -193889, -87654, 56789, 145678, 267890, 389012, 498765, 587654,
                678901, 789012, 856789, 927140,
              ],
              borderColor: "rgba(46, 204, 113, 1)",
              backgroundColor: "rgba(46, 204, 113, 0.1)",
              borderWidth: 2,
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              title: {
                display: true,
                text: "Saldo (MXN)",
              },
            },
            x: {
              title: {
                display: true,
                text: "Mes",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Flujo de Efectivo Proyectado",
              font: {
                size: 16,
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `Saldo: $${context.raw.toLocaleString()} MXN`;
                },
              },
            },
          },
        },
      });
    }
  }

  // Crear los gráficos cuando la página esté cargada
  window.addEventListener("load", createCharts);
});
