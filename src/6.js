const db = require('./pg');
(async () => {
  const videos = await db(`
  SELECT users.name as channel_name, users.avatar_url as channel_avatar, channels.photo_url as channel_photo, channels.description as channel_description, subscriptions.level, subscriptions.subscribed_at
  FROM users
  JOIN channels ON channels.user_id = users.id
  JOIN subscriptions ON subscriptions.channel_id = channels.id
  WHERE subscriptions.user_id = (SELECT id FROM users WHERE name = 'Ennis Haestier')
  ORDER BY CASE
      WHEN subscriptions.level = 'vip' THEN 1
      WHEN subscriptions.level = 'follower' THEN 2
      WHEN subscriptions.level = 'fan' THEN 3
      ELSE 4
    END, subscriptions.subscribed_at DESC;
  `);

  console.log(videos);
})();
