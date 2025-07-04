# NextDev-Server

The **NextDev Server** provides the RESTful API powering the NextDev platform—handling authentication, user profiles, job postings, applications, CV uploads, and news integration.

---

## 🗂️ Tech Stack

- **Node.js** & **Express**  
-  **PostgreSQL**  
- **JWT** authentication  
- **Multer** + **AWS S3** for file (CV/logo) uploads   

---

## ⚙️ Features

- **Auth**  
  - Email/password registration & login  
  - Role-based access: **dev** or **employer**

- **Profiles**  
  - CRUD for developer & employer profiles  
  - CV, photo, logo, cover uploads  

- **Jobs & Applications**  
  - Employers can create, update, delete job posts  
  - Developers can browse jobs & apply (attach CV/cover letter)  
  - View applicant list per job  

- **News Feed**  
  - Fetch & cache latest dev articles from Dev.to / Hacker News  

- **Admin**  
  - User & job moderation endpoints  

---

