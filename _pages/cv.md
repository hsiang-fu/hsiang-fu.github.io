---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Computer Science, Ariziona State University, 2030 (expected)
* B.S. in Informatics (Human-Centered Data Science), The University of Texas at Austin, 2024

Research/Teaching Experience
======
* August 2025 - Present: Graduate Research Assistant
  * Interactive Robotics Lab
  * Performing research under the supervision of Dr. Heni Ben Amor.
  * Explored concepts of in-context learning, and its applications for a wide domain of tasks, including:
    * Pattern Completion – completing patterns in numerical sequences based on seen before pattern.
    * Sequence Prediction – making future predictions on time-series based sequences.
    * Binary & Image Classification – classifying challenging qualitative data and visual information using example-driven inference.
    * Numerical Optimization – reimplementation of the lab’s previous works (SAS-Prompt).
    * Reinforcement Learning – reimplementation and improvement of the lab’s previous works (ProPS, ProPS+)

* August 2025 - Present: Graduate Teaching Assistant for CSE-101
  * Arizona State University
  * Assisted students in understanding foundational concepts in computer science and programming.
  * Managed and facilitated three weekly lab sessions, providing in-person guidance and support to students.

Industry Experience
======
* May 2023 - May 2024: Texas Cybersecurity Clinic Student Fellow
  * Strauss Center of International Security and Law 
  * Assessed and strengthened clients’ cybersecurity postures through comprehensive vulnerability assessments and implementation of security controls.
  * Applied cybersecurity principles in real-world environments for small and mid-sized businesses and nonprofits across Austin.

* May 2023 - July 2023: Data Analyst Post Intern
  * ZhongTai Securities
  * Built and automated ETL workflows for unstructured financial datasets, improving data ingestion efficiency and data quality.
  * Applied the Brinson attribution model to evaluate stock selection and industry allocation performance.
  * Designed and optimized SQL-based data pipelines to support real-time analytics and reporting workflows.
  * Extracted and transformed data from diverse sources into structured formats to support strategy analysis and insight generation.

* May 2021 - August 2021: Product Testing Intern
  * Dell Technologies
  * Collaborated with cross-functional teams to develop Python-based automation scripts for data validation and system testing in large-scale environments.
  * Delivered a high-performing end-of-internship project, receiving positive feedback for both the results and technical presentation to internship mentors.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Projects
======
  <ul>{% for post in site.portfolio %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
