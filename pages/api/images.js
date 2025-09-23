export default function handler(req, res) {
  // รายชื่อรูปที่มีอยู่ใน public/images/
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg"
  ];

  res.status(200).json({ images });
}
