# 🎬 Video Portfolio Platform  

## 📌 Overview  
This project is a **video portfolio platform** where **only one admin** has the privilege to upload videos.  
Other users can **view** and **share** those videos — similar to a video editor’s personal portfolio site.  
It’s designed for professionals who want to showcase their work in a clean, easy-to-use interface.  

---

## ✨ Features  
- **Admin Video Upload**:  
  Only the admin can log in and upload videos to the platform.  
- **Video Gallery**:  
  All uploaded videos are displayed for visitors.  
- **Video Playback**:  
  Smooth and responsive video player for a great viewing experience.  
- **Sharing Option**:  
  Users can share videos easily via links or social media.  
- **Portfolio Style Layout**:  
  Minimal and elegant design to showcase video projects.  

---

## 🛠️ Tech Stack  
- **Frontend** : React.JS 
- **Backend** : Node.js, Express 
- **Database** : MongoDB
- **Storage** : Cloudinary / AWS S3 / Local Storage (for video hosting)  

---

## 🚀 Installation & Setup  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
2. **Install Dependencies**
    ```bash
    npm install
3. **Configure environment variables**
    ```bash
    PORT=5000
    DB_URI=your_database_url
    CLOUD_STORAGE_KEY=your_storage_key
    ADMIN_EMAIL=your_admin_email
    ADMIN_PASSWORD=your_admin_password
4. **Start the development server**
    ```bash 
    npm run dev

---

## 🔒 Admin Access
Only the admin can upload videos. Regular users can only view and share them.
The admin login credentials are set in the .env file.
