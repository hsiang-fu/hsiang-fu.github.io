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
    root.querySelector("[data-console-label]").textContent = topic.label;
    root.querySelector("[data-console-title]").textContent = topic.title;
    root.querySelector("[data-console-body]").textContent = topic.body;
    root.querySelectorAll("[data-console-topic]").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-console-topic") === key);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var consoleRoot = document.querySelector("[data-console]");
    if (consoleRoot) {
      consoleRoot.querySelectorAll("[data-console-topic]").forEach(function (button) {
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
      themeToggle.addEventListener("click", function () {
        window.setTimeout(syncThemeLabel, 0);
      });
      themeToggle.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          themeToggle.click();
        }
      });
    }
  });
})();
