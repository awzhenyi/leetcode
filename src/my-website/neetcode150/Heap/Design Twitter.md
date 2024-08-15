---
tags:
 - Medium
---

https://leetcode.com/problems/design-twitter/

```python
class Twitter:

    def __init__(self):
        self.followers = defaultdict(set)
        self.user_tweets = defaultdict(list)
        self.num_tweet = 0
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.num_tweet += 1
        self.user_tweets[userId].append((self.num_tweet, tweetId))

    def getNewsFeed(self, userId: int) -> List[int]:
        followed_users = self.followers[userId]
        followed_users.add(userId)
        tweets = []
        for user in followed_users:
            for num_tweet, tweet in self.user_tweets[user]:
                heapq.heappush(tweets, (num_tweet, tweet))
                if len(tweets) > 10:
                    heapq.heappop(tweets)
        # for num_tweet, tweet in self.user_tweets[userId]:
        #     heapq.heappush(tweets, (num_tweet, tweet))
        #     if len(tweets) > 10:
        #         heapq.heappop(tweets)
        news_feed = []
        while tweets:
            news_feed.append(heapq.heappop(tweets)[1])
        return news_feed[::-1]
        
    def follow(self, followerId: int, followeeId: int) -> None:
        self.followers[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.followers[followerId]:
            self.followers[followerId].remove(followeeId)

# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)
# Time Complexity: O()
# Space Complexity: O()
```