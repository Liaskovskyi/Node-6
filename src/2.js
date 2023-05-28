const db = require('./pg');
(async () => {
const videos = await db(`
SELECT videos.id, videos.channel_id, videos.title, videos.description, videos.preview_url, 
videos.file_url, videos.duration, videos.published_at, COUNT(*) as total_likes 
FROM videos 
INNER JOIN likes ON videos.id = likes.video_id 
WHERE likes.positive = TRUE 
GROUP BY videos.id 
ORDER BY total_likes DESC 
LIMIT 5;`) 
console.log(videos)
})();
