# Stockbit Backend Assessment

### 1. Simple database querying
Answers:
```mysql
SELECT user.ID, user.UserName, parent.UserName as ParentUserName
FROM user
LEFT JOIN user as parent on user.Parent = parent.ID
```

### 2. OMBD API Proxy
Answers: https://github.com/indyka/stockbit-test/tree/master/omdb

### 3. Code refactoring
Answers: https://github.com/indyka/stockbit-test/blob/master/code-refactor/index.js

### 4. Logic Test: anagram grouping
Answers: https://github.com/indyka/stockbit-test/blob/master/anagram/index.js
