---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

<div class="cv-shell">
  <section class="cv-intro" aria-labelledby="cv-intro-title">
    <div>
      <p class="cv-eyebrow">Research record / 2026</p>
      <h2 id="cv-intro-title">Robot learning shaped by context, feedback, and real hardware.</h2>
      <p>I am a Computer Science Ph.D. student at Arizona State University developing language- and vision-conditioned learning methods for robot manipulation, policy search, reward estimation, and adaptive behavior.</p>
    </div>
    <div class="cv-intro__actions">
      <a class="cv-download" href="{{ '/files/Hsiang_Fu_ASU_Resume.pdf' | relative_url }}" download>
        <span>Download PDF</span><span aria-hidden="true">&darr;</span>
      </a>
      <a href="mailto:hsiangfu@asu.edu"><span>Email</span><span aria-hidden="true">&nearr;</span></a>
      <a href="https://www.linkedin.com/in/hsiangfu/" target="_blank" rel="noreferrer"><span>LinkedIn</span><span aria-hidden="true">&nearr;</span></a>
      <a href="https://github.com/hsiang-fu" target="_blank" rel="noreferrer"><span>GitHub</span><span aria-hidden="true">&nearr;</span></a>
    </div>
  </section>

  <nav class="cv-jump" aria-label="CV sections">
    <a href="#education"><span>01</span>Education</a>
    <a href="#research-experience"><span>02</span>Research</a>
    <a href="#research-projects"><span>03</span>Projects</a>
    <a href="#publication"><span>04</span>Publication</a>
    <a href="#skills"><span>05</span>Skills</a>
    <a href="#teaching"><span>06</span>Teaching</a>
  </nav>

  <section class="cv-section" id="education">
    <header class="cv-section__heading">
      <p>01</p>
      <h2>Education</h2>
    </header>
    <div class="cv-records">
      <article class="cv-record cv-record--compact">
        <time>Aug 2025 &ndash; Present</time>
        <div>
          <h3>Ph.D. in Computer Science</h3>
          <p>Arizona State University</p>
        </div>
        <p class="cv-record__meta">GPA 4.0 / 4.0</p>
      </article>
      <article class="cv-record cv-record--compact">
        <time>Aug 2022 &ndash; Dec 2024</time>
        <div>
          <h3>B.S. in Informatics, Human-Centered Data Science</h3>
          <p>The University of Texas at Austin</p>
        </div>
        <p class="cv-record__meta">GPA 3.94 / 4.0</p>
      </article>
    </div>
  </section>

  <section class="cv-section" id="research-experience">
    <header class="cv-section__heading">
      <p>02</p>
      <h2>Research Experience</h2>
    </header>
    <div class="cv-records">
      <article class="cv-record">
        <time>Aug 2025 &ndash; Present</time>
        <div>
          <h3>Graduate Research Assistant</h3>
          <p class="cv-record__place">Interactive Robotics Laboratory, Arizona State University</p>
          <p class="cv-record__meta">Advisor: Dr. Heni Ben Amor</p>
          <ul>
            <li>Develop language- and vision-conditioned learning methods for robot manipulation, with an emphasis on policy search, reward estimation, and adaptive robot behavior.</li>
            <li>Build and evaluate research systems across UR robots, dexterous-hand hardware, and MuJoCo-based bimanual manipulation environments.</li>
          </ul>
        </div>
      </article>
      <article class="cv-record">
        <time>Jan 2023 &ndash; May 2024</time>
        <div>
          <h3>Undergraduate Research Assistant</h3>
          <p class="cv-record__place">School of Information, The University of Texas at Austin</p>
          <p class="cv-record__meta">Advisor: Dr. Abhijit Mishra</p>
          <ul>
            <li>Co-developed ReVision, a compact ~250M-parameter vision-language model and a dataset of 39,000+ image-instruction pairs across 14+ domains for privacy-preserving visual instruction rewriting.</li>
            <li>Demonstrated task-oriented multimodal instruction processing on resource-constrained devices with quantized models under 500 MB; accepted at IJCNLP-AACL 2025.</li>
          </ul>
        </div>
      </article>
    </div>
  </section>

  <section class="cv-section" id="research-projects">
    <header class="cv-section__heading">
      <p>03</p>
      <h2>Selected Research Projects</h2>
    </header>
    <div class="cv-projects">
      <article>
        <p class="cv-project__number">01 / Active</p>
        <h3>In-Context Reinforcement Learning for State Machine Policies</h3>
        <time>Aug 2026 &ndash; Present</time>
        <p>Deployed ICRL onto Honda Dexterous Hand @ Honda Research Institute in San Jose.</p>
      </article>
      <article>
        <p class="cv-project__number">02 / Submitted to ICRA 2027</p>
        <h3>ComposeR: Training-Free Reward Estimation for Robot Manipulation</h3>
        <time>Jan 2026 &ndash; Present</time>
        <p>Developing dense, interpretable progress rewards from trajectory video using VLM token probabilities, multi-view evidence, verification, and temporal checks; achieved 92.35% task-outcome prediction accuracy.</p>
      </article>
      <article>
        <p class="cv-project__number">03 / Completed</p>
        <h3>UR5 Golf: In-Context Policy Search for Robot Putting</h3>
        <time>Jan 2026 &ndash; May 2026</time>
        <p>Built a physical rollout and camera-feedback pipeline with Dynamic Movement Primitive fitting and global search over trajectory parameters.</p>
      </article>
      <article>
        <p class="cv-project__number">04 / Active</p>
        <h3>Bimanual Manipulation with Demonstration-Guided Policy Search</h3>
        <time>Aug 2025 &ndash; Present</time>
        <p>Converting teleoperated demonstrations into parameterized 3-D wrist trajectories and automating iterative policy optimization with LLM-generated DMP proposals and simulation.</p>
      </article>
      <article>
        <p class="cv-project__number">05 / Active</p>
        <h3>Introduction to In-Context Learning</h3>
        <time>Aug 2025 &ndash; Present</time>
        <p>Built an educational website with interactive demonstrations spanning sequence prediction, regression, classification, and reinforcement learning, reaching 5,000+ views in six months.</p>
        <a href="https://intro-to-icl.github.io/" target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">&nearr;</span></a>
      </article>
    </div>
  </section>

  <section class="cv-section" id="publication">
    <header class="cv-section__heading">
      <p>04</p>
      <h2>Selected Publication</h2>
    </header>
    <article class="cv-publication">
      <div>
        <p>IJCNLP-AACL / 2025</p>
        <h3>ReVision: A Dataset and Baseline VLM for Privacy-Preserving Task-Oriented Visual Instruction Rewriting</h3>
        <p>A. Mishra, <strong>H. Fu</strong>, M. Li, et al.</p>
      </div>
      <a href="https://arxiv.org/abs/2502.14780" target="_blank" rel="noreferrer">Read paper <span aria-hidden="true">&nearr;</span></a>
    </article>
  </section>

  <section class="cv-section" id="skills">
    <header class="cv-section__heading">
      <p>05</p>
      <h2>Technical Skills</h2>
    </header>
    <dl class="cv-skills">
      <div><dt>Languages</dt><dd>Python, Java, SQL</dd></div>
      <div><dt>Machine Learning</dt><dd>PyTorch, reinforcement learning, vision-language models, large language models, in-context learning</dd></div>
      <div><dt>Robotics</dt><dd>MuJoCo, UR5 and UR robots, Dynamic Movement Primitives, teleoperation, trajectory optimization, multi-camera data collection</dd></div>
      <div><dt>Tools</dt><dd>Git, Linux, scikit-learn</dd></div>
    </dl>
  </section>

  <section class="cv-section" id="teaching">
    <header class="cv-section__heading">
      <p>06</p>
      <h2>Teaching Experience</h2>
    </header>
    <div class="cv-records">
      <article class="cv-record">
        <time>Aug 2025 &ndash; May 2026</time>
        <div>
          <h3>Graduate Teaching Assistant</h3>
          <p class="cv-record__place">CSE 101 and CSE 301, Arizona State University</p>
          <ul>
            <li>Led three weekly laboratory sections covering programming fundamentals and ethical computing, providing hands-on instruction and technical guidance.</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</div>
