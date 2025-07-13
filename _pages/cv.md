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
* M.Eng. in UAV Systems and Machine Learning, Jianghan University, 2022-2025 (expected)
* B.Eng. in Electronic Information, Hubei University of Technology, 2017-2021

Research Experience
======
* 2022-2025: Master's Research Student
  * Jianghan University
  * Research focus: UAV trajectory estimation, point cloud processing, embodied AI
  * Supervisor: Prof. Shenghai Yuan

Skills
======
* Programming Languages: Python, C/C++, MATLAB
* Machine Learning: PyTorch, Scikit-learn, Pandas, NumPy
* Specialized Areas: UAV Detection, Trajectory Optimization, LiDAR Data Processing, Pose Estimation
* Operating Systems: Linux, Windows

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Honors and Awards
======
* The 7th UG2 Challenge Competition in CVPR 2024 - Ranked 4th in UAV Tracking and Pose-estimation track
* The 8th China Graduate Future Flight Vehicle Innovation Competition - National Second Prize
* Jianghan University Scholarship (2022, 2023, 2024)
