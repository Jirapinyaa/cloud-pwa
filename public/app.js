const images = [1, 2, 3, 4]; // ไฟล์ 1.jpg - 4.jpg
let currentIndex = 0;

const imgEl = document.getElementById("current-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showImage(index) {
  if(index < 0) index = 0;
  if(index >= images.length) index = images.length - 1;

  imgEl.src = `/images/${images[index]}.jpg`;
  imgEl.alt = `Image ${images[index]}`;
  currentIndex = index;
}

// ปุ่ม Next
nextBtn.addEventListener("click", () => {
  if(currentIndex < images.length - 1) {
    showImage(currentIndex + 1);
  }
});

// ปุ่ม Previous
prevBtn.addEventListener("click", () => {
  if(currentIndex > 0) {
    showImage(currentIndex - 1);
  }
});

// แสดงรูปแรกตอนโหลดหน้า
showImage(currentIndex);
