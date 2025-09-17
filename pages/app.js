if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("✅ Service Worker registered"));
}

document.getElementById("loadBtn").addEventListener("click", async () => {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "⏳ กำลังโหลด...";

  const res = await fetch("/api/images");
  const cloudImages = await res.json();

  gallery.innerHTML = "";
  cloudImages.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.style.width = "300px";
    img.style.margin = "5px";
    gallery.appendChild(img);
  });
});
