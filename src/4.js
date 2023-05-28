const db = require('./pg');
(async () => {
const channel = await db(`
SELECT channels.*, COUNT(subscriptions.user_id) as subscribers
FROM channels
JOIN subscriptions ON subscriptions.channel_id = channels.id
WHERE channels.id = '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76'
GROUP BY channels.id;
 `) 
console.log(channel)
})();
