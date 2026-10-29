(function () {
  var terminalLineId = 0;

  function terminalLine(type, content, href, external) {
    terminalLineId += 1;
    return { id: terminalLineId, type: type, content: content || "", href: href, external: external };
  }

  function blankLine() {
    return terminalLine("blank", "");
  }

  var terminalCommands = {
    help: function () {
      return [
        terminalLine("section", "Commands"),
        blankLine(),
        terminalLine("out", "  whoami       who is Sean"),
        terminalLine("out", "  about        background & research interests"),
        terminalLine("out", "  skills       research toolkit by category"),
        terminalLine("out", "  research     active research directions"),
        terminalLine("out", "  publications papers and conference work"),
        terminalLine("out", "  projects     selected technical projects"),
        terminalLine("out", "  experience   academic timeline"),
        terminalLine("out", "  contact      email, GitHub, LinkedIn, Scholar"),
        terminalLine("out", "  cv / resume  open curriculum vitae"),
        terminalLine("out", "  neofetch     system info"),
        terminalLine("out", "  clear        clear terminal  (Ctrl+L)"),
        blankLine(),
        terminalLine("dim", "  tab: autocomplete  ·  ↑↓: history  ·  esc: back to demo"),
        terminalLine("dim", "  try 'sudo collaborate'")
      ];
    },
    whoami: function () {
      return [
        terminalLine("out", "hsiang-fu"),
        terminalLine("out", "Computer Science Ph.D. Student  ·  Robot Learning Researcher"),
        terminalLine("out", "Phoenix, AZ  ·  Arizona State University")
      ];
    },
    about: function () {
      return [
        terminalLine("out", "Ph.D. student in the Interactive Robotics Laboratory at ASU."),
        blankLine(),
        terminalLine("out", "I build learning-driven robotic systems that perceive,"),
        terminalLine("out", "adapt, and collaborate in uncertain real-world environments."),
        blankLine(),
        terminalLine("out", "Focus: in-context learning, reward models, agentic AI,"),
        terminalLine("out", "reinforcement learning, and human-robot collaboration.")
      ];
    },
    skills: function () {
      return [
        terminalLine("section", "Research toolkit"),
        blankLine(),
        terminalLine("out", "  Learning      Reinforcement learning · In-context learning"),
        terminalLine("out", "  Intelligence  Reward models · Agentic AI · Multimodal AI"),
        terminalLine("out", "  Robotics      Embodied systems · Human-robot collaboration")
      ];
    },
    research: function () {
      return [
        terminalLine("section", "Research directions"),
        blankLine(),
        terminalLine("out", "  In-context learning  ·  Reward models  ·  Agentic AI"),
        terminalLine("out", "  Reinforcement learning  ·  Human-robot collaboration"),
        blankLine(),
        terminalLine("link", "  ↗ open research", "/research/")
      ];
    },
    publications: function () {
      return [
        terminalLine("section", "Publications"),
        blankLine(),
        terminalLine("out", "  ReVision — Privacy-preserving visual instruction rewriting"),
        terminalLine("out", "  IJCNLP-AACL  ·  2025"),
        terminalLine("link", "  ↗ view publications", "/publications/")
      ];
    },
    projects: function () {
      return [
        terminalLine("section", "Selected projects"),
        blankLine(),
        terminalLine("out", "  Introduction to In-Context Learning"),
        terminalLine("out", "  Language  ·  Computer vision  ·  Robotics"),
        terminalLine("link", "  ↗ view projects", "/projects/")
      ];
    },
    experience: function () {
      return [
        terminalLine("section", "Academic timeline"),
        blankLine(),
        terminalLine("out", "  Computer Science Ph.D. Student"),
        terminalLine("out", "  Arizona State University  ·  2025–Present  ·  Phoenix, AZ"),
        blankLine(),
        terminalLine("out", "  B.S. in Informatics, Human-Centered Data Science"),
        terminalLine("out", "  University of Texas at Austin  ·  2024")
      ];
    },
    contact: function () {
      return [
        terminalLine("section", "Contact"),
        blankLine(),
        terminalLine("link", "  email      hsiangfu@asu.edu", "mailto:hsiangfu@asu.edu", true),
        terminalLine("link", "  github     github.com/hsiang-fu", "https://github.com/hsiang-fu", true),
        terminalLine("link", "  linkedin   in/hsiangfu", "https://www.linkedin.com/in/hsiangfu", true),
        terminalLine("link", "  scholar    research profile", "https://scholar.google.com/citations?user=R7oQL2UAAAAJ&hl=en", true)
      ];
    },
    cv: function () {
      return [
        terminalLine("out", "Fetching CV..."),
        terminalLine("link", "  ↗ hsiang-fu.github.io/cv", "/cv/")
      ];
    },
    neofetch: function () {
      var rule = "─".repeat(32);
      return [
        terminalLine("section", "hsiang-fu @ robot-lab"),
        terminalLine("dim", rule),
        terminalLine("out", "  OS         Phoenix, AZ  (Human edition)"),
        terminalLine("out", "  Host       Arizona State University"),
        terminalLine("out", "  Shell      Robot learning research"),
        terminalLine("out", "  WM         Embodied AI + HRI"),
        terminalLine("out", "  CPU        Coffee-powered  @  ∞ MHz"),
        terminalLine("out", "  Uptime     Ph.D. in progress"),
        terminalLine("out", "  Memory     Context · Feedback · Humans"),
        terminalLine("link", "  GitHub     github.com/hsiang-fu", "https://github.com/hsiang-fu", true),
        terminalLine("link", "  Scholar    research profile", "https://scholar.google.com/citations?user=R7oQL2UAAAAJ&hl=en", true),
        terminalLine("dim", rule),
        terminalLine("out", "  Robotics  ·  ICL  ·  Reward Models  ·  RL")
      ];
    },
    browserpilot: function () {
      return [terminalLine("link", "  ↗ BrowserPilot on GitHub", "https://github.com/manan-santoki/browserpilot", true)];
    },
    "github-orbit": function () {
      return [terminalLine("link", "  ↗ GitHub Orbit on GitHub", "https://github.com/manan-santoki/github-orbit", true)];
    },
    ls: function () {
      return [terminalLine("out", "about/   research/   publications/   projects/   notes/   contact/")];
    },
    date: function () {
      return [terminalLine("out", new Date().toUTCString())];
    },
    "uname -a": function () {
      return [terminalLine("out", "RobotOS research-lts  hsiang-fu  #context-driven  x86_64  GNU/Linux")];
    },
    "cat readme.md": function () {
      return [
        terminalLine("section", "# Hsiang 'Sean' Fu"),
        terminalLine("out", "Computer Science Ph.D. Student · Robot Learning Researcher"),
        blankLine(),
        terminalLine("out", '"Robots that learn from context, feedback, and humans."'),
        blankLine(),
        terminalLine("dim", "See: whoami · about · research · publications · projects · contact")
      ];
    },
    "sudo collaborate": function () {
      return [
        terminalLine("out", "[sudo] password for researcher: ****"),
        blankLine(),
        terminalLine("out", "Permission granted. ✓"),
        terminalLine("out", "Opening collaboration channels..."),
        blankLine(),
        terminalLine("link", "  ↗ Send an email", "mailto:hsiangfu@asu.edu", true),
        terminalLine("link", "  ↗ View research", "/research/"),
        terminalLine("link", "  ↗ View CV", "/cv/")
      ];
    }
  };

  terminalCommands.resume = terminalCommands.cv;
  terminalCommands["sudo hire-me"] = terminalCommands["sudo collaborate"];

  function createTerminalLine(line, shouldAnimate, index) {
    var element;

    if (line.type === "link") {
      element = document.createElement("a");
      element.href = line.href;
      if (line.external || /^https?:|^mailto:/.test(line.href || "")) {
        element.target = "_blank";
        element.rel = "noreferrer";
      }
    } else {
      element = document.createElement("div");
    }

    element.className = "signal-terminal__line signal-terminal__line--" + line.type;
    element.textContent = line.content;
    element.dataset.lineId = line.id;
    if (shouldAnimate && line.type !== "blank") {
      element.classList.add("signal-terminal__line--enter");
      element.style.setProperty("--line-delay", Math.min(index * 28, 280) + "ms");
    }
    if (line.type === "link") {
      element.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    }
    return element;
  }

  function appendTerminalLines(container, lines, shouldAnimate) {
    lines.forEach(function (line, index) {
      container.appendChild(createTerminalLine(line, shouldAnimate, index));
    });
  }

  function initResearchTerminal() {
    var root = document.querySelector("[data-terminal]");
    if (!root) return;

    var windowPanel = root.querySelector("[data-terminal-window]");
    var status = root.querySelector("[data-terminal-status]");
    var demo = root.querySelector("[data-terminal-demo]");
    var demoCommand = root.querySelector("[data-terminal-demo-command]");
    var demoCaret = root.querySelector("[data-terminal-caret]");
    var demoOutput = root.querySelector("[data-terminal-demo-output]");
    var interactive = root.querySelector("[data-terminal-interactive]");
    var output = root.querySelector("[data-terminal-output]");
    var input = root.querySelector("[data-terminal-input]");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var demoCommands = ["whoami", "about", "skills", "experience", "contact", "neofetch"];
    var availableCommands = Object.keys(terminalCommands).concat(["clear", "theme"]);
    var history = [];
    var historyIndex = -1;
    var mode = "demo";
    var demoIndex = 0;
    var demoTimer = null;

    function setStatus(nextMode) {
      status.textContent = "";
      if (nextMode === "demo") {
        status.textContent = "click to interact";
        return;
      }

      var escapeHint = document.createElement("span");
      var activeHint = document.createElement("span");
      escapeHint.textContent = "esc: demo";
      escapeHint.className = "signal-console__escape";
      activeHint.textContent = "● interactive";
      activeHint.className = "signal-console__active";
      status.appendChild(escapeHint);
      status.appendChild(activeHint);
    }

    function scrollToLatest() {
      output.scrollTop = output.scrollHeight;
    }

    function showDemoOutput(command) {
      demoOutput.textContent = "";
      appendTerminalLines(demoOutput, terminalCommands[command] ? terminalCommands[command]() : [], true);
    }

    function scheduleDemo() {
      if (mode !== "demo" || reduceMotion) return;

      var command = demoCommands[demoIndex];
      var typedLength = 0;
      demoCommand.textContent = "";
      demoOutput.textContent = "";
      demoCaret.hidden = false;

      function typeNextCharacter() {
        if (mode !== "demo") return;
        if (typedLength < command.length) {
          typedLength += 1;
          demoCommand.textContent = command.slice(0, typedLength);
          demoTimer = window.setTimeout(typeNextCharacter, 42);
          return;
        }

        demoTimer = window.setTimeout(function () {
          if (mode !== "demo") return;
          demoCaret.hidden = true;
          showDemoOutput(command);
          demoTimer = window.setTimeout(function () {
            demoIndex = (demoIndex + 1) % demoCommands.length;
            scheduleDemo();
          }, 3100);
        }, 300);
      }

      typeNextCharacter();
    }

    function activate(initialValue) {
      if (mode === "interactive") {
        input.focus();
        return;
      }

      window.clearTimeout(demoTimer);
      mode = "interactive";
      windowPanel.classList.add("is-interactive");
      demo.hidden = true;
      interactive.hidden = false;
      output.textContent = "";
      appendTerminalLines(output, [
        terminalLine("welcome", "hsiang-fu — portfolio terminal"),
        terminalLine("dim", "type 'help' for available commands"),
        blankLine()
      ], true);
      input.value = initialValue || "";
      historyIndex = -1;
      setStatus(mode);
      window.setTimeout(function () {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }, 0);
    }

    function returnToDemo() {
      window.clearTimeout(demoTimer);
      mode = "demo";
      windowPanel.classList.remove("is-interactive");
      interactive.hidden = true;
      demo.hidden = false;
      input.value = "";
      input.blur();
      setStatus(mode);
      if (reduceMotion) {
        demoCommand.textContent = "whoami";
        demoCaret.hidden = true;
        showDemoOutput("whoami");
      } else {
        demoIndex = 0;
        scheduleDemo();
      }
      windowPanel.focus();
    }

    function clearTerminal() {
      output.textContent = "";
      appendTerminalLines(output, [terminalLine("welcome", "hsiang-fu — portfolio terminal"), blankLine()], true);
    }

    function runCommand(value) {
      var rawCommand = value.trim();
      if (!rawCommand) return;

      var command = rawCommand.toLowerCase();
      history.unshift(rawCommand);
      history = history.slice(0, 50);
      historyIndex = -1;
      input.value = "";

      if (command === "clear") {
        clearTerminal();
        return;
      }

      var lines = [terminalLine("cmd", rawCommand)];
      if (command === "theme") {
        var themeToggle = document.getElementById("theme-toggle");
        if (themeToggle) themeToggle.click();
        lines.push(terminalLine("out", "Theme switched."));
      } else if (terminalCommands[command]) {
        lines = lines.concat(terminalCommands[command]());
      } else {
        lines.push(terminalLine("error", "command not found: " + command));
        lines.push(terminalLine("dim", "run 'help' for available commands"));
      }
      lines.push(blankLine());
      appendTerminalLines(output, lines, true);
      window.setTimeout(scrollToLatest, 30);
    }

    windowPanel.addEventListener("click", function (event) {
      if (event.target.closest("a")) return;
      activate();
    });

    windowPanel.addEventListener("focus", function () {
      windowPanel.classList.add("is-focused");
    }, true);

    windowPanel.addEventListener("blur", function (event) {
      if (!windowPanel.contains(event.relatedTarget)) windowPanel.classList.remove("is-focused");
    }, true);

    windowPanel.addEventListener("keydown", function (event) {
      if (mode !== "demo" || event.ctrlKey || event.altKey || event.metaKey || event.key.length !== 1) return;
      event.preventDefault();
      activate(event.key);
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        runCommand(input.value);
      } else if (event.key === "Tab") {
        event.preventDefault();
        if (!input.value) return;
        var match = availableCommands.find(function (command) {
          return command.indexOf(input.value.toLowerCase()) === 0;
        });
        if (match) input.value = match;
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (!history.length) return;
        historyIndex = Math.min(historyIndex + 1, history.length - 1);
        input.value = history[historyIndex] || "";
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        historyIndex = Math.max(historyIndex - 1, -1);
        input.value = historyIndex === -1 ? "" : history[historyIndex] || "";
      } else if (event.key === "Escape") {
        event.preventDefault();
        returnToDemo();
      } else if (event.key.toLowerCase() === "l" && event.ctrlKey) {
        event.preventDefault();
        clearTerminal();
      }
    });

    if (reduceMotion) {
      demoCommand.textContent = "whoami";
      demoCaret.hidden = true;
      showDemoOutput("whoami");
    } else {
      scheduleDemo();
    }
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
