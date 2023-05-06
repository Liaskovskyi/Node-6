const db = require('./pg');
(async () => {
  const videos = await db(`
    SELECT videos.*, COUNT(likes.positive) as likes
    FROM videos
    JOIN likes ON videos.id = likes.video_id
    WHERE videos.published_at >= '2021-09-01' AND likes.positive = TRUE
    GROUP BY videos.id
    HAVING COUNT(likes.positive) > 4
    ORDER BY COUNT(likes.positive) DESC
    LIMIT 10;
  `);

  console.log(videos);
})();
