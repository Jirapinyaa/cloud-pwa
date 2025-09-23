// ตรวจสอบว่า browser รองรับ Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log("✅ Service Worker registered"))
    .catch(err => console.error("❌ SW registration failed:", err));
}

// สร้าง container สำหรับรูปภาพ
const container = document.createElement("div");
container.style.textAlign = "center";
container.style.marginTop = "20px";
document.body.appendChild(container);

// โหลดรูปภาพแบบ dynamic
const images = [1, 2, 3, 4]; // รูป 1.jpg - 4.jpg
images.forEach(num => {
  const img = document.createElement("img");
  img.src = `/images/${num}.jpg`;
  img.alt = `Image ${num}`;
  img.width = 200;
  img.style.margin = "10px";
  
  // log ตอนโหลดรูป
  img.onload = () => console.log(`✅ Image ${num} loaded`);
  img.onerror = () => console.error(`❌ Image ${num} failed to load`);
  
  container.appendChild(img);
});
