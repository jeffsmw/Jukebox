// Create a new script file called jukebox.js, where you will put all of your Javascript for this assignment.
//
// First we need to be able to parse individual notes. Write a function called parseNote, that takes a string representing a single note (e.g. "C#*2" or "A") and returns a note object (e.g. {pitch: "C#", beats: 2}). If the user doesn't provide a number of beats (e.g. "C#") then set beats to 1.
//
// Example usage
// parseNote("C#*2"); //=> { pitch: 'C#', beats: 2}
// parseNote("D"); //=> { pitch: 'D', beats: 1}
// Now let's parse a whole song string. Write a function called parse Song that takes a song string as above, and returns an array of note objects. The parseSong function should use the parseNote function.

// Example usage
// parseSong("Ab B"); // =>; [{pitch: 'Ab', beats: 1}, {pitch: 'B', beats: 1}]
// 4. Finally, let's build our amazing Jukebox! Create an HTML page that, when loaded, prompts the user for a song string and plays the song. To keep things clean, please use two script tags in your page. One to load the provided player.js file, and one to load your own jukebox.js file.

var pNote;

function parseNote(pNote){
  var note = {};
  var arr = pNote.split('\*');
  note.pitch = arr[0];
  note.beats = arr[1];
  if (note.beats == undefined || note.beats == "") {
    note.beats = 1;
  } else {
    note.beats = parseInt(arr[1]);
  }
  return note;
}

function parseSong(pString){
  var string = pString.split(' ')
  var retString = [];
  for(i=0;i<string.length;i++){
    retString[i] = parseNote(string[i]);
  }
  return retString;
}
console.log(parseSong("C*4 Bb*3 E F C#"));
// var notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}];
// Play the song at 400 beats per minute.
// playSong(notes, 400);
