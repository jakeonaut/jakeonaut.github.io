var statuses = [
    "Sphinx of black quartz, judge my vow",
    "one day i hope windows will automatically upgrade me",
    "nobody puts babyscript in the corner",
    "why can't i retweet my own tweets",
    "what a weird little dude, what the heck!!",
    "what is my endgame? what are my stats?",
    "generative operating system",
    "my literal existence is spaghetti code",
    "low level palette swapping",
    "tamagotchi by day, cicada molt by night",
    "INTERNET MURDER REVENGE FANTASY",
    "i know javascript, i have the best javascript",
    "the queen of sh*tty robots",
    "overwhelme. anxiety of possibility",
    "more than 140 chairs",
    "i AM pride and prejudice",
    "purity of being",
    "more GLITCH dungeon???",
    "all 5 pieces of exodia",
    "me @ myself: hey!!! cool guy!!!",
    "yeah!!!",
    "live tweeting my existence",
    "i am the flower pt 2",
    "i am the flower",
    "congratulations you are now dog (lvl 1)",
    ",./../,,.//.,,./,.//.,./,./,,.//.,,./.,/,./,,/,/,/.,/.,/.,/.,/,.,/.,/.,,./,.,/.,/,/./,.,//../,...,.,/,/,/./.,..,.,.,,//,/.,/.,/.,./.,/,/.,/.",
    "no",
    "nop",
    "llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
    "i'm dating a skeleton",
    "i hate this stupid robot",
    "people are greater than or equal to dogs<br/>people are less than or equal to dogs<br/>people are dogs",
    "what the Fifi",
    "i am drinking milk. i am the milk maiden",
    "retail horror",
    "software psychology",
    "Provide with the tools to heal all humans by digitizing their physical form",
    "testing my text tweet textile technology",
    "i need to produce more for the masses!!!",
    ":\"( some brand new text art i have created for the masses!!!",
    "javascript is ugly i hate javascript :,)",
    ":@| emoticon pig wil take it no longer 1+ qq a. we. 3. 4 4 he is transform to emoji 🐷",
    "i am a brand",
    "i amb emoji 💁",
    "error in upper class sympathy event",
    "sure jan",
    "i am an egg",
    "memory exception",
    "marcia marcia marcia!!!",
    "every anime has the same voice",
    "all around inky good time",
    "squat your way to the moon",
    "Time to gamify emotional connection and social interaction",
    "computer magic was great tonight!!!",
    "define is not defined",
    "text",
    "sailor frog chan",
    "Smalltalk: you can find the bug very quickly and enjoy a lot!!",
    "i favorite my own tweets",
    "dog: \"jee williker\"<br>me: yup",
    "Oshi oki oklahoma",
    "Sailor moom chan",
    "i am sorry",
    "does my new phone tweet work? i am not a model",
    "invest stock in frozen soundtrack",
    "*googles \"javascript\"* m yes I see",
    "bird envy",
    "Goats are the new cats",
    "i am a mage sprite i cast illusion",
    "im a bean boy",
    "im a tourist of life",
    "two thumbs down for this little tourist",
    "the purity of essence of being in your heart of hearts",
    "organic ethiopia yergacheffe",
    "ms paint",
    "despite my rude facade i have a bit of a soft side",
    "im only human",
    "cryptid chrysalis",
    "can you truly find your soul when your body is so full of corn chips?",
    "my strategy is quantity over quality",
    "i've peaked",
    "who is my kindred spirit",
    "subtle energy",
    "Las gatas no beben vino",
    "i am just a dog who hates doritos",
    "incrédíblé",
    "cicada on the ground!!",

];
/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
 //http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
function getRandomStatus(){
    return statuses[Math.floor(Math.random()*statuses.length)];
}
var div = document.getElementById("about_1");
function randomize(){
    var status = getRandomStatus();
    div.innerHTML = status;
}

var posts = "";
function fillDiv(){
    if (post_count == 0){
        shuffle(statuses);
    }
    
    div.innerHTML = "<b>ideas:</b><br/><br/>";
    posts = "> " + statuses[post_count] + "<br/><br/>" + posts;
    div.innerHTML += posts;
    
    post_count++;
    if (post_count < statuses.length)
        window.setTimeout(fillDiv, 3000);
}
randomize();
//window.setInterval(randomize, 5000);
var post_count = 0;
