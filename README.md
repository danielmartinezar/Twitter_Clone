# Twitter_Clone
 A basic API clone of twitter developed with Node Js using express and mongo

### Get user Method
* /:username
### Patch user Method
* /
#### Receives as mandatory values in body:
* id
#### Receives as optional values in body:
* username
* password
* name
* surnames
* email
### Delete Method
* /:userID

## Tweet
### Post Method
* / 
#### Receives as mandatory values in body:
* author
* body
### Get All Method
* /
#### Receives as mandatory values in body:
* author

### Get A Tweet Method
* /:tweetId

### Patch A Tweet Method
* /

#### Receives as mandatory values in body:
* author
* body

### Delete A Tweet Method
* /:tweetId

## Follow
### Post a follow Method
* /
#### Receives as mandatory values in body:
* follower
* followed
### Get Following Method
* /:username
### Get Followers Method
* /:username
### Delete Follow Method
* /:followId

## Timeline
### Read timeline Method
* /:username

## Like
### Post A Like Method
* /
#### Receives as mandatory values in body:
* ID_Tweet
* Username
### Get A Like Method
* /:likeId
### Get All Likes Method
* /
#### Receives as mandatory values in body:
* tweetID
### Delete A Like Method
* /:likeId