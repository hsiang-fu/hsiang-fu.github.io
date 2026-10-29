---
layout: default
permalink: /
title: "Hsiang Fu"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<main class="field-home">
  <section class="field-hero" aria-labelledby="home-title">
    <div class="field-status" aria-label="Profile status">
      <span><i aria-hidden="true"></i> Hsiang Fu / Sean</span>
      <span>Robot learning researcher</span>
      <span>Phoenix, Arizona / UTC-7</span>
    </div>

    <div class="field-hero__canvas">
      <div class="field-hero__copy">
        <p class="field-label">Computer Science Ph.D. / Arizona State University</p>
        <h1 id="home-title">I TEACH ROBOTS TO LEARN FROM <span>CONTEXT, FEEDBACK,</span> and <span>HUMANS</span></h1>
      </div>

      <aside class="field-hero__legend" aria-label="Current research coordinates">
        <p>Current coordinates</p>
        <ol>
          <li><span>01</span>Learning from context</li>
          <li><span>02</span>Reward estimation</li>
          <li><span>03</span>Dexterous manipulation</li>
          <li><span>04</span>Human feedback</li>
        </ol>
      </aside>

      <div class="field-hero__intro">
        <p>My work asks how robots can turn context, feedback, and human intent into behavior that holds up beyond clean laboratory conditions.</p>
        <div class="field-hero__actions" aria-label="Primary links">
          <a class="field-button field-button--accent" href="/projects/">Explore the work <span aria-hidden="true">&searr;</span></a>
          <a class="field-button" href="/cv/">Read my CV <span aria-hidden="true">&nearr;</span></a>
        </div>
        <dl class="field-hero__facts" aria-label="Profile summary">
          <div><dt>Lab</dt><dd>Interactive Robotics Laboratory</dd></div>
          <div><dt>Focus</dt><dd>Learning, rewards, adaptation</dd></div>
        </dl>
      </div>

      <div class="signal-console field-console" data-terminal>
        <div class="signal-console__topline">
          <span>Field terminal / click to explore</span>
          <div class="signal-console__links">
            <a href="/cv/">CV <span aria-hidden="true">&nearr;</span></a>
            <a href="https://github.com/hsiang-fu" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">&nearr;</span></a>
          </div>
        </div>
        <div class="signal-console__window" data-terminal-window tabindex="0" role="application" aria-label="Interactive portfolio terminal">
          <div class="signal-console__chrome">
            <span class="signal-console__lights" aria-hidden="true"><i></i><i></i><i></i></span>
            <strong>sean@field-notes &mdash; terminal</strong>
            <small data-terminal-status>click to interact</small>
          </div>
          <div class="signal-terminal__demo" data-terminal-demo aria-hidden="true">
            <div class="signal-terminal__commandline"><span>$</span><span data-terminal-demo-command>whoami</span><i data-terminal-caret aria-hidden="true">&#9612;</i></div>
            <div class="signal-terminal__demo-output" data-terminal-demo-output>
              <div class="signal-terminal__line signal-terminal__line--out">hsiang-fu</div>
              <div class="signal-terminal__line signal-terminal__line--out">Robot Learning Researcher / Computer Science Ph.D.</div>
              <div class="signal-terminal__line signal-terminal__line--out">Context + feedback + humans -&gt; adaptive behavior</div>
            </div>
          </div>
          <div class="signal-terminal__interactive" data-terminal-interactive hidden>
            <div class="signal-terminal__output" data-terminal-output aria-live="polite"></div>
            <div class="signal-terminal__form">
              <label for="research-terminal-input" class="sr-only">Terminal input</label>
              <span class="signal-prompt" aria-hidden="true">$</span>
              <input id="research-terminal-input" data-terminal-input type="text" inputmode="text" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Terminal input">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="field-principles" aria-label="Research principles">
    <span>Context over assumptions</span>
    <span>Feedback over guesswork</span>
    <span>People inside the loop</span>
    <span>Reality as the benchmark</span>
  </div>

  <section class="field-section field-about" id="about" aria-labelledby="about-heading">
    <header class="field-section__heading">
      <p>01</p>
      <h2 id="about-heading">About Me</h2>
    </header>
    <div class="field-about__body">
      <div class="field-about__copy">
        <p>My research combines robot learning, in-context adaptation, reward models, reinforcement learning, and human-centered design. I am interested in systems that use demonstrations and multimodal feedback to improve without forgetting the person or environment they are meant to serve.</p>
        <p>Before ASU, I studied Human-Centered Data Science at the University of Texas at Austin. That background still shapes the questions I ask: not only whether a system works, but what it understands, how it adapts, and who it works for.</p>
      </div>
      <figure class="field-about__portrait">
        <img src="/images/sean-desert.jpg" alt="Hsiang Fu standing in a bright desert landscape" loading="lazy">
        <figcaption><span>Phoenix, Arizona</span><span>ASU / CS Ph.D.</span></figcaption>
      </figure>
    </div>
    <dl class="field-index" aria-label="Academic profile">
      <div><dt>Role / 01</dt><dd>Computer Science Ph.D. Student</dd></div>
      <div><dt>Lab / 02</dt><dd>Interactive Robotics Laboratory @ ASU</dd></div>
      <div><dt>Methods / 03</dt><dd>Robotics, ICL, reward models, agentic AI, reinforcement learning</dd></div>
    </dl>
  </section>

  <section class="field-section field-research" id="research" aria-labelledby="research-heading">
    <header class="field-section__heading">
      <p>02</p>
      <h2 id="research-heading">What&apos;s My Research About</h2>
    </header>
    <div class="field-research__intro">
      <p>Each thread approaches adaptation from a different layer of the system, from the signal used to evaluate behavior to the way people communicate intent.</p>
      <a href="/research/">Open research page <span aria-hidden="true">&nearr;</span></a>
    </div>
    <div class="field-research__list">
      <article><span>R.01</span><h3>In-Context Learning</h3><p>Use examples, instructions, and task context to adapt behavior without retraining from scratch.</p><i>Adapt</i></article>
      <article><span>R.02</span><h3>Reward Models</h3><p>Turn preferences, observations, and task outcomes into feedback a robot can act on.</p><i>Evaluate</i></article>
      <article><span>R.03</span><h3>Agentic AI</h3><p>Connect perception, memory, planning, and action across longer-horizon objectives.</p><i>Reason</i></article>
      <article><span>R.04</span><h3>Reinforcement Learning</h3><p>Improve policies through interaction while remaining useful under shifting constraints.</p><i>Improve</i></article>
      <article><span>R.05</span><h3>Human-Robot Collaboration</h3><p>Keep people, intent, and uncertainty visible inside the learning and decision loop.</p><i>Collaborate</i></article>
    </div>
    <div class="field-work field-research__work" aria-labelledby="selected-work-heading">
      <div class="field-work__heading">
        <p>Selected outcomes</p>
        <h3 id="selected-work-heading">Built to explain an idea, test a claim, or move a robot.</h3>
      </div>
      <div class="field-work__grid">
        <a class="field-work__feature" href="/publication/2025-02-20-revision">
          <span class="field-work__index">W.01 / Publication</span>
          <div><p>Privacy-preserving multimodal AI</p><h3>ReVision</h3></div>
          <p>A compact vision-language model and 39,000-example dataset for rewriting visual instructions without sending the image to a conversational system.</p>
          <span class="field-work__arrow" aria-hidden="true">&nearr;</span>
        </a>
        <a class="field-work__feature" href="/portfolio/portfolio-1/">
          <span class="field-work__index">W.02 / Learning resource</span>
          <div><p>Examples as the interface</p><h3>Introduction to In-Context Learning</h3></div>
          <p>Interactive demonstrations across language, computer vision, regression, and reinforcement learning, designed to make ICL tangible.</p>
          <span class="field-work__arrow" aria-hidden="true">&nearr;</span>
        </a>
      </div>
      <div class="field-work__footer">
        <p>Current work also includes dexterous manipulation, training-free reward estimation, UR5 putting, and demonstration-guided bimanual policy search.</p>
        <a class="field-button" href="/projects/">All projects <span aria-hidden="true">&nearr;</span></a>
      </div>
    </div>
  </section>

  <section class="field-section field-log" id="news" aria-labelledby="news-heading">
    <header class="field-section__heading">
      <p>03</p>
      <h2 id="news-heading">Recent News and Highlights</h2>
    </header>
    <div class="field-log__entries">
      <article><time>2026 / Now</time><span>01</span><div><h3>Dexterous manipulation data</h3><p>Synchronizing nine camera streams with joint state, force-control, and tactile observations.</p></div></article>
      <article><time>2026 / Active</time><span>02</span><div><h3>ComposeR reward estimation</h3><p>Using VLM evidence and temporal checks to estimate interpretable progress rewards from robot trajectories.</p></div></article>
      <article><time>2025 / Published</time><span>03</span><div><h3>ReVision at IJCNLP-AACL</h3><p>Compact visual instruction rewriting for privacy-preserving multimodal interaction.</p></div></article>
    </div>
  </section>

  <section class="field-section field-timeline" id="timeline" aria-labelledby="timeline-heading">
    <header class="field-section__heading">
      <p>04</p>
      <h2 id="timeline-heading">Timeline</h2>
    </header>
    <div class="field-timeline__track">
      <article><time>2025 &mdash; Present</time><span></span><div><p>Arizona State University</p><h3>Ph.D. in Computer Science</h3><p>Graduate research in the Interactive Robotics Laboratory.</p></div></article>
      <article><time>2024</time><span></span><div><p>University of Texas at Austin</p><h3>B.S. in Informatics</h3><p>Human-Centered Data Science, machine learning, and human-AI interaction.</p></div></article>
      <article><time>2021 &mdash; 2024</time><span></span><div><p>Applied systems</p><h3>Industry + project experience</h3><p>Cybersecurity, analytics, automation, product testing, and data pipelines.</p></div></article>
    </div>
  </section>

  <section class="field-contact" id="contact" aria-labelledby="contact-heading">
    <p>05</p>
    <h2 id="contact-heading">Contact</h2>
    <p>Let&apos;s make the uncertain useful. I am always glad to talk about robot learning, reward models, embodied agents, and research that keeps people in the frame.</p>
    <div class="field-contact__links">
      <a href="mailto:hsiangfu@asu.edu"><span>Email</span><small>hsiangfu@asu.edu</small><i aria-hidden="true">&nearr;</i></a>
      <a href="https://github.com/hsiang-fu"><span>GitHub</span><small>github.com/hsiang-fu</small><i aria-hidden="true">&nearr;</i></a>
      <a href="https://www.linkedin.com/in/hsiangfu"><span>LinkedIn</span><small>linkedin.com/in/hsiangfu</small><i aria-hidden="true">&nearr;</i></a>
      <a href="https://scholar.google.com/citations?user=R7oQL2UAAAAJ&hl=en"><span>Scholar</span><small>Research profile</small><i aria-hidden="true">&nearr;</i></a>
    </div>
  </section>
</main>
