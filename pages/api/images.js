export default function handler(req, res) {
  res.status(200).json([
    "https://picsum.photos/300/200?random=11",
    "https://picsum.photos/300/200?random=22",
    "https://picsum.photos/300/200?random=33"
  ]);
}
