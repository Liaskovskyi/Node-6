const db = require('./pg');

(async () => {
  const users = await db(`
  SELECT videos.id, videos.title, videos.preview_url, COUNT(*) as total_likes
  FROM videos
  INNER JOIN likes ON videos.id = likes.video_id
  WHERE likes.positive = TRUE
  GROUP BY videos.id
  ORDER BY total_likes DESC
  LIMIT 5;`) 
  console.log(users)
})();
