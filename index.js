function shout(string){
    return string.toUpperCase();
}

function logShout(string) {console.log(shout(string))
;
}

function whisper(string){
    return string.toLowerCase()
}

function logWhisper(string){
    console.log(whisper(string))
}

function sayHiToHeadphonedRoommate(string){
    switch(string){
     case string.toLowerCase():
        return "I can't hear you!";
          
    case string.toUpperCase():
        return "YES INDEED!";
          
    case string = "Let's have dinner together!":
        return "I would love to!";
  }}


logShout("hi")
logWhisper("HI")  
console.log(sayHiToHeadphonedRoommate("hi"))