const db = require('./pg');
(async () => {
const videos = await db(`
SELECT videos.id AS video_id, videos.title AS video_title, videos.preview_url AS video_preview, 
videos.duration AS video_duration, videos.published_at AS video_publish_date
FROM subscriptions
INNER JOIN channels ON subscriptions.channel_id = channels.id
INNER JOIN videos ON videos.channel_id = channels.id
INNER JOIN users ON subscriptions.user_id = users.id
WHERE users.name = 'Stephanie Bulger'
ORDER BY videos.published_at DESC;`) 
console.log(videos)
})();
