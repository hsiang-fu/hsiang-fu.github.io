(function () {
  var terminalCommands = {
    help: {
      lines: [
        "Available: about, research, publications, projects, browserpilot, github-orbit, contact, theme, clear",
        "Use the up and down arrows to revisit command history."
      ]
    },
    about: {
      lines: [
        "Sean Fu — Computer Science Ph.D. student at Arizona State University.",
        "Building learning-driven robots for uncertain, human environments."
      ]
    },
    research: {
      lines: ["In-context learning / reward models / agentic AI / reinforcement learning / HRI"],
      link: { label: "Open research directions ↗", href: "/research/" }
    },
    publications: {
      lines: ["Research outputs in multimodal learning, robot intelligence, and human-centered AI."],
      link: { label: "Open publications ↗", href: "/publications/" }
    },
    projects: {
      lines: ["Applied robotics and machine-learning systems built around real constraints."],
      link: { label: "Open projects ↗", href: "/projects/" }
    },
    browserpilot: {
      lines: ["A site-agnostic AI agent runtime for operating a real headless browser with live preview and approval gates."],
      link: { label: "View BrowserPilot on GitHub ↗", href: "https://github.com/manan-santoki/browserpilot", external: true }
    },
    "github-orbit": {
      lines: ["A self-hosted GitHub network explorer with explainable recommendations and infinite-canvas graph navigation."],
      link: { label: "View GitHub Orbit on GitHub ↗", href: "https://github.com/manan-santoki/github-orbit", external: true }
    },
    contact: {
      lines: ["Email: hsiangfu@asu.edu"],
      link: { label: "Open contact section ↗", href: "/#contact" }
    }
  };

  function appendTerminalEntry(output, type, lines, link) {
    var entry = document.createElement("div");
    entry.className = "signal-terminal__entry" + (type ? " signal-terminal__entry--" + type : "");

    lines.forEach(function (line) {
      var row = document.createElement("span");
      row.textContent = line;
      entry.appendChild(row);
    });

    if (link) {
      var anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.textContent = link.label;
      if (link.external) {
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      }
      entry.appendChild(anchor);
    }

    output.appendChild(entry);
  }

  function initResearchTerminal() {
    var root = document.querySelector("[data-terminal]");
    if (!root) return;

    var form = root.querySelector("[data-terminal-form]");
    var input = root.querySelector("[data-terminal-input]");
    var output = root.querySelector("[data-terminal-output]");
    var windowPanel = root.querySelector("[data-terminal-window]");
    var history = [];
    var historyIndex = 0;

    function scrollToLatest() {
      output.scrollTop = output.scrollHeight;
    }

    function runCommand(value) {
      var rawCommand = value.trim();
      if (!rawCommand) return;

      history.push(rawCommand);
      historyIndex = history.length;
      appendTerminalEntry(output, "command", [rawCommand]);

      var command = rawCommand.toLowerCase();
      if (command === "clear") {
        output.textContent = "";
        return;
      }

      if (command === "theme") {
        var themeToggle = document.getElementById("theme-toggle");
        if (themeToggle) themeToggle.click();
        appendTerminalEntry(output, "system", ["Theme switched."]);
        scrollToLatest();
        return;
      }

      if (command === "whoami") command = "about";
      if (command === "ls" || command === "commands") command = "help";

      var result = terminalCommands[command];
      if (result) {
        appendTerminalEntry(output, "system", result.lines, result.link);
      } else {
        appendTerminalEntry(output, "error", ["Command not found: " + rawCommand, "Type help for available commands."]);
      }
      scrollToLatest();
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      runCommand(input.value);
      input.value = "";
      input.focus();
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "ArrowUp" && history.length) {
        event.preventDefault();
        historyIndex = Math.max(0, historyIndex - 1);
        input.value = history[historyIndex];
      }
      if (event.key === "ArrowDown" && history.length) {
        event.preventDefault();
        historyIndex = Math.min(history.length, historyIndex + 1);
        input.value = historyIndex === history.length ? "" : history[historyIndex];
      }
    });

    windowPanel.addEventListener("click", function (event) {
      if (!event.target.closest("a, button")) input.focus();
    });
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
    initResearchTerminal();

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
