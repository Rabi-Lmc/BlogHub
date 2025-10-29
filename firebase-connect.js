// firebase-connect.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5o_yjIq0_CNLYwsCtDTWRs0cIKhI8tlI",
  authDomain: "bloghub-cbcc4.firebaseapp.com",
  projectId: "bloghub-cbcc4",
  storageBucket: "bloghub-cbcc4.firebasestorage.app",
  messagingSenderId: "103514268951",
  appId: "1:103514268951:web:12ecf3c88e5672217e0352"
};

// ✅ Initialize Firebase (only once)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📰 Load Articles
async function loadArticles() {
  const container = document.getElementById("articles");
  container.innerHTML = "<p style='color:orange;'>Loading articles...</p>";

  try {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    container.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const article = document.createElement("div");
      article.style.marginBottom = "30px";
      article.innerHTML = `
        <h2 style="color:#ff6700;">${data.title}</h2>
        <p><small>${data.date}</small></p>
        <img src="${data.image}" alt="${data.title}" style="width:100%; border-radius:10px; margin:10px 0;">
        <p>${data.content}</p>
        <hr style="border-color:#333;">
      `;
      container.appendChild(article);
    });
  } catch (err) {
    container.innerHTML = `<p style='color:red;'>Error loading articles: ${err.message}</p>`;
  }
}

loadArticles();
