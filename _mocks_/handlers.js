import { rest } from 'msw'

export const handlers = [
  rest.get('/api/bee', (req, res, ctx) => {
    return res(
      ctx.status(200),
      //Careful not to get today's and yesterday's data confused.
      ctx.json({
        "gameData": {
          "today":{"expiration":"1649660400","displayWeekday":"Sunday","":"April 10, 2022","printDate":"2022-04-10","centerLetter":"e","outerLetters":["b","i","l","o","p","w"],"validLetters":["e","b","i","l","o","p","w"],"pangrams":["blowpipe"],"answers":["blowpipe","bebop","beep","belie","bell","belle","bellow","below","bible","bile","bleep","blew","bobble","bowel","elbow","elope","epee","libel","libelee","lobe","lope","oboe","oleo","ollie","pebble","peel","peep","peewee","people","pewee","pile","pipe","pleb","plebe","plie","pole","pope","weep","weepie","well","wile","wipe","wobble"],"id":"26468","freeExpiration":"0","editor":"Sam Ezersky"},
          "yesterday":{"expiration":"1649574000","displayWeekday":"Saturday","displayDate":"April 9, 2022","printDate":"2022-04-09","centerLetter":"r","outerLetters":["a","i","l","t","u","v"],"validLetters":["r","a","i","l","t","u","v"],"pangrams":["virtual"],"answers":["virtual","altar","aria","aril","arrival","atria","atrial","attar","aura","aural","avatar","lair","lariat","larva","larval","liar","lira","rail","raita","ratatat","rattail","rial","rill","ritual","rival","rural","tart","tartar","tiara","titular","trail","trait","travail","trial","trill","trivia","trivial","ultra","uvular","viral","vulvar"],"id":"26780","freeExpiration":"0","editor":"Sam Ezersky"}}}
      )
    )
  })
]