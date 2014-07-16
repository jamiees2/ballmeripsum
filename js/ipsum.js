// Credit to https://github.com/meowist/flatiron-ipsum

//The fisher-yates shuffle
function fisherYates(words) {
  var i = words.length, j, tempi, tempj;
  if ( i == 0 ) return false;
  while ( --i ) {
    j = Math.floor( Math.random() * ( i + 1 ) );
    temp = words[i];
    words[i] = words[j];
    words[j] = temp;
  }
  return words;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function(){
  $("#ipsum-form").submit(function() { 
    var paragraphs = '';

    //Determine which of the check boxes is checked 
    var chosen_button = $("#ipsum-form input[name='choice']:checked").val();
    
    //Grab the paragraph number the user enters
    var paragraph_number = $("#paragraph_count").val();

    //Define var words as an empty array
    var strings = [];

    //A list of quotes and words
    var quotes = [
      "DEVELOPERS", 
      "developers, developers, developers, developers, developers, developers, developers, developers, developers, developers, developers", 
      "no i do not have an ipod",
      "i don't know what a monopoly is",
      "i have never, honestly, thrown a chair in my life",
      "google is not a real company",
      "linux is a cancer",
      "i've got my kids brainwashed",
      "there's no chance that the iPhone is going to get any significant market share",
      "windows will be everywhere",
      "most people steal music",
      "linux is not in the public domain"
    ];
    var words = [
      "windows",
      "Zune",
      "programming",
      "open source",
      "hotmail",
      "innovation",
      "leadership",
      "winning",
      "Whoo!",
      "vista",
      "windows phone",
      "bing",
      "outlook",
      "word",
      "excel"
    ];  
    var all = quotes.concat(words);

    //ELSE IF determines which array of words to show the user
    if (chosen_button == "all") {
      strings = all;
    } else if (chosen_button == "all-bob") {
      strings = quotes; 
    } else {
      strings = words; 
    }

    //Vary the number of sentences in each paragraph randomly
    var sentence_number = Math.floor( (Math.random()+2) * 2 );
    console.log(sentence_number)


    //Start the first FOR loop that builds sentences from words
    for ( var z = 0; z < paragraph_number; z++ ) {
      var sentence_group = '';
      //Start the second FOR loop that builds sentence groups from sentences
      for ( var y = 0; y < sentence_number; y++ ) {

        //Start the third FOR loop that builds paragraphs from sentence groups
        for ( var x = 0; x < strings.length; x++ ) {

          //Create a variable for the randomized array of words
          var strings_random = fisherYates(strings).slice(0,Math.random() * 6 + 4);

          //Convert array to string with no commas or quotes, add period to end
          var sentence = strings_random.toString().replace(/,/g, ' ') + '. ';

          //Capitalize first letter in string
          var sentence_capped = capitalizeFirstLetter(sentence);
        }
        sentence_group += sentence_capped;
      }
      paragraphs+='<p>' + sentence_group + '</p>';
    }

    $("#print-paragraphs").empty().html(paragraphs);
    return false; 
  });
});
 
