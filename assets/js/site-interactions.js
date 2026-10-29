(function () {
  var topics = {
    embodied: {
      label: "Embodied Learning",
      title: "Learning policies from demonstration-rich data",
      body: "Robots should turn examples into behavior that survives contact with noisy environments, incomplete instructions, and changing human goals."
    },
    collab: {
      label: "Human-Robot Collaboration",
      title: "Building loops where people stay in the system",
      body: "The goal is not only autonomy. It is collaboration: systems that infer intent, expose uncertainty, and adapt around human workflows."
    },
    multimodal: {
      label: "Multimodal Robot AI",
      title: "Connecting language, vision, control, and action",
      body: "Generative and multimodal models can become interfaces between messy sensory inputs and grounded robot decisions."
    }
  };

  function updateConsole(key, root) {
    var topic = topics[key] || topics.embodied;
    var windowPanel = root.querySelector(".signal-console__window");
    windowPanel.classList.add("is-updating");

    root.querySelectorAll("[data-console-topic]").forEach(function (button) {
      var isActive = button.getAttribute("data-console-topic") === key;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    window.setTimeout(function () {
      root.querySelector("[data-console-label]").textContent = topic.label;
      root.querySelector("[data-console-title]").textContent = topic.title;
      root.querySelector("[data-console-body]").textContent = topic.body;
      windowPanel.classList.remove("is-updating");
    }, 140);
  }

  function initSignalCursor() {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    var dot = document.createElement("span");
    var ring = document.createElement("span");
    var mouseX = -100;
    var mouseY = -100;
    var ringX = -100;
    var ringY = -100;

    dot.className = "signal-cursor-dot";
    ring.className = "signal-cursor-ring";
    dot.setAttribute("aria-hidden", "true");
    ring.setAttribute("aria-hidden", "true");
    document.body.appendChild(ring);
    document.body.appendChild(dot);
    document.body.classList.add("has-signal-cursor");

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      dot.style.transform = "translate3d(" + mouseX + "px," + mouseY + "px,0) translate(-50%,-50%)";
      ring.style.transform = "translate3d(" + ringX + "px," + ringY + "px,0) translate(-50%,-50%)";
      window.requestAnimationFrame(renderCursor);
    }

    window.addEventListener("mousemove", function (event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      document.body.classList.add("cursor-visible");
    });

    document.addEventListener("mouseover", function (event) {
      if (event.target.closest("a, button, input, textarea, select, [role='button']")) {
        document.body.classList.add("cursor-active");
      }
    });

    document.addEventListener("mouseout", function (event) {
      if (event.target.closest("a, button, input, textarea, select, [role='button']")) {
        document.body.classList.remove("cursor-active");
      }
    });

    document.addEventListener("mousedown", function () {
      document.body.classList.add("cursor-pressed");
    });
    document.addEventListener("mouseup", function () {
      document.body.classList.remove("cursor-pressed");
    });
    document.documentElement.addEventListener("mouseleave", function () {
      document.body.classList.remove("cursor-visible", "cursor-active", "cursor-pressed");
    });

    renderCursor();
  }

  function initHomepageCopyGuard() {
    var homepage = document.querySelector(".signal-home");
    if (!homepage) return;

    document.body.classList.add("is-homepage-copy-protected");

    document.addEventListener("copy", function (event) {
      event.preventDefault();
    });

    document.addEventListener("cut", function (event) {
      event.preventDefault();
    });

    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });

    homepage.addEventListener("dragstart", function (event) {
      event.preventDefault();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var consoleRoot = document.querySelector("[data-console]");
    if (consoleRoot) {
      consoleRoot.querySelectorAll("[data-console-topic]").forEach(function (button) {
        button.setAttribute("aria-pressed", button.classList.contains("is-active") ? "true" : "false");
        button.addEventListener("click", function () {
          updateConsole(button.getAttribute("data-console-topic"), consoleRoot);
        });
      });
    }

    var themeToggle = document.getElementById("theme-toggle");
    var themeIcon = document.getElementById("theme-icon");
    function syncThemeLabel() {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      if (themeToggle) {
        themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      }
      if (themeIcon) {
        themeIcon.classList.toggle("fa-moon", isDark);
        themeIcon.classList.toggle("fa-sun", !isDark);
      }
    }

    syncThemeLabel();
    if (themeToggle) {
      themeToggle.addEventListener("click", function (event) {
        event.preventDefault();
        window.setTimeout(syncThemeLabel, 0);
      });
      themeToggle.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          themeToggle.click();
        }
      });
    }

    var mobileToggle = document.getElementById("mobile-nav-toggle");
    var mobilePanel = document.getElementById("mobile-nav-panel");
    function closeMobileNav() {
      if (!mobileToggle || !mobilePanel) return;
      mobileToggle.classList.remove("is-open");
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileToggle.setAttribute("aria-label", "Open navigation menu");
      mobilePanel.classList.remove("is-open");
      mobilePanel.setAttribute("aria-hidden", "true");
    }

    if (mobileToggle && mobilePanel) {
      mobileToggle.addEventListener("click", function (event) {
        event.preventDefault();
        var willOpen = !mobilePanel.classList.contains("is-open");
        mobileToggle.classList.toggle("is-open", willOpen);
        mobileToggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
        mobileToggle.setAttribute("aria-label", willOpen ? "Close navigation menu" : "Open navigation menu");
        mobilePanel.classList.toggle("is-open", willOpen);
        mobilePanel.setAttribute("aria-hidden", willOpen ? "false" : "true");
      });
      mobilePanel.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMobileNav);
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeMobileNav();
      });
    }

    initSignalCursor();
    initHomepageCopyGuard();
  });
})();
