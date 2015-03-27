  /*
  Welcome to the 60fps project! Your goal is to make Cam's Pizzeria website run
  jank-free at 60 frames per second.

  There are two major issues in this code that lead to sub-60fps performance. Can
  you spot and fix both?


  Built into the code, you'll find a few instances of the User Timing API
  (window.performance), which will be console.log()ing frame rate data into the
  browser console. To learn more about User Timing API, check out:
  http://www.html5rocks.com/en/tutorials/webperformance/usertiming/

  Creator:
  Cameron Pittman, Udacity Course Developer
  cameron *at* udacity *dot* com
  */
   // As you may have realized, this website randomly generates pizzas.
   // Here are arrays of all possible pizza ingredients.
  var pizzaIngredients = {};
  pizzaIngredients.meats = ["Pepperoni", "Sausage", "Fennel Sausage",
    "Spicy Sausage", "Chicken", "BBQ Chicken", "Chorizo", "Chicken Andouille",
    "Salami", "Tofu", "Bacon", "Canadian Bacon", "Proscuitto",
    "Italian Sausage", "Ground Beef", "Anchovies", "Turkey", "Ham", "Venison",
    "Lamb", "Duck", "Soylent Green", "Carne Asada", "Soppressata Picante",
    "Coppa", "Pancetta", "Bresola", "Lox", "Guanciale", "Chili", "Beef Jerky",
    "Pastrami", "Kielbasa", "Scallops", "Filet Mignon"
  ];
  pizzaIngredients.nonMeats = ["White Onions", "Red Onions", "Sauteed Onions",
    "Green Peppers", "Red Peppers", "Banana Peppers", "Ghost Peppers",
    "Habanero Peppers", "Jalapeno Peppers", "Stuffed Peppers", "Spinach",
    "Tomatoes", "Pineapple", "Pear Slices", "Apple Slices", "Mushrooms",
    "Arugula", "Basil", "Fennel", "Rosemary", "Cilantro", "Avocado",
    "Guacamole", "Salsa", "Swiss Chard", "Kale", "Sun Dried Tomatoes",
    "Walnuts", "Artichoke", "Asparagus", "Caramelized Onions", "Mango",
    "Garlic", "Olives", "Cauliflower", "Polenta", "Fried Egg", "Zucchini",
    "Hummus"
  ];
  pizzaIngredients.cheeses = ["American Cheese", "Swiss Cheese", "Goat Cheese",
    "Mozzarella Cheese", "Parmesean Cheese", "Velveeta Cheese", "Gouda Cheese",
    "Muenster Cheese", "Applewood Cheese", "Asiago Cheese", "Bleu Cheese",
    "Boursin Cheese", "Brie Cheese", "Cheddar Cheese", "Chevre Cheese",
    "Havarti Cheese", "Jack Cheese", "Pepper Jack Cheese", "Gruyere Cheese",
    "Limberger Cheese", "Manchego Cheese", "Marscapone Cheese",
    "Pecorino Cheese", "Provolone Cheese", "Queso Cheese", "Roquefort Cheese",
    "Romano Cheese", "Ricotta Cheese", "Smoked Gouda"
  ];
  pizzaIngredients.sauces = ["Red Sauce", "Marinara", "BBQ Sauce", "No Sauce",
    "Hot Sauce"
  ];
  pizzaIngredients.crusts = ["White Crust", "Whole Wheat Crust",
    "Flatbread Crust", "Stuffed Crust"
  ];
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  function getAdj(x) {
    switch (x) {
      case "dark":
        var dark = ["dark", "morbid", "scary", "spooky", "gothic", "deviant",
          "creepy", "sadistic", "black", "dangerous", "dejected", "haunted",
          "morose", "tragic", "shattered", "broken", "sad", "melancholy",
          "somber", "dark", "gloomy", "homicidal", "murderous", "shady",
          "misty", "dusky", "ghostly", "shadowy", "demented", "cursed",
          "insane", "possessed", "grotesque", "obsessed"
        ];
        return dark;
      case "color":
        var colors = ["blue", "green", "purple", "grey", "scarlet",
          "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black",
          "red", "maroon", "silver", "golden", "yellow", "orange", "mustard",
          "plum", "violet", "cerulean", "brown", "lavender", "violet",
          "magenta", "chestnut", "rosy", "copper", "crimson", "teal",
          "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris",
          "veridian", "tan", "raspberry", "beige", "sandy", "ElectricBlue",
          "white", "champagne", "coral", "cyan"
        ];
        return colors;
      case "whimsical":
        var whimsy = ["whimsical", "silly", "drunken", "goofy", "funny",
          "weird", "strange", "odd", "playful", "clever", "boastful",
          "breakdancing", "hilarious", "conceited", "happy", "comical",
          "curious", "peculiar", "quaint", "quirky", "fancy", "wayward",
          "fickle", "yawning", "sleepy", "cockeyed", "dizzy", "dancing",
          "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled",
          "cockamamie", "vulgar", "hoodwinked", "brainwashed"
        ];
        return whimsy;
      case "shiny":
        var shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby",
          "emerald", "topaz", "diamond", "amethyst", "turquoise", "starlit",
          "moonlit", "bronze", "metal", "jade", "amber", "garnet",
          "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
          "metallic"
        ];
        return shiny;
      case "noisy":
        var noisy = ["untuned", "loud", "soft", "shrieking", "melodious",
          "musical", "operatic", "symphonic", "dancing", "lyrical",
          "harmonic", "orchestral", "noisy", "dissonant", "rhythmic",
          "hissing", "singing", "crooning", "shouting", "screaming",
          "wailing", "crying", "howling", "yelling", "hollering",
          "caterwauling", "bawling", "bellowing", "roaring", "squealing",
          "beeping", "knocking", "tapping", "rapping", "humming", "scatting",
          "whispered", "whispering", "rasping", "buzzing", "whirring",
          "whistling", "whistled"
        ];
        return noisy;
      case "apocalyptic":
        var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic",
          "zombie", "collapsed", "grim", "fallen", "collapsed",
          "cannibalistic", "radioactive", "toxic", "poisonous", "venomous",
          "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty",
          "glowing", "decaying", "rotten", "deadly", "plagued", "decimated",
          "rotting", "putrid", "decayed", "deserted", "acidic"
        ];
        return apocalyptic;
      case "insulting":
        var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous",
          "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless",
          "slow", "gullible", "obtuse", "dense", "dim", "dazed",
          "ridiculous", "witless", "daft", "crazy", "vapid", "inane",
          "mundane", "hollow", "vacuous", "boring", "insipid", "tedious",
          "monotonous", "weird", "bizarre", "backward", "moronic",
          "ignorant", "scatterbrained", "forgetful", "careless", "lethargic",
          "insolent", "indolent", "loitering", "gross", "disgusting",
          "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
          "disfigured", "offensive", "cowardly", "weak", "villainous",
          "fearful", "monstrous", "unattractive", "unpleasant", "nasty",
          "beastly", "snide", "horrible", "syncophantic", "unhelpful",
          "bootlicking"
        ];
        return insulting;
      case "praise":
        var praise = ["beautiful", "intelligent", "smart", "genius",
          "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome",
          "graceful", "talented", "exquisite", "enchanting", "fascinating",
          "interesting", "divine", "alluring", "ravishing", "wonderful",
          "magnificient", "marvelous", "dazzling", "cute", "charming",
          "attractive", "nifty", "delightful", "superior", "amiable",
          "gentle", "heroic", "courageous", "valiant", "brave", "noble",
          "daring", "fearless", "gallant", "adventurous", "cool",
          "enthusiastic", "fierce", "awesome", "radical", "tubular",
          "fearsome", "majestic", "grand", "stunning"
        ];
        return praise;
      case "scientific":
        var scientific = ["scientific", "technical", "digital", "programming",
          "calculating", "formulating", "cyberpunk", "mechanical",
          "technological", "innovative", "brainy", "chemical", "quantum",
          "astro", "space", "theoretical", "atomic", "electronic", "gaseous",
          "investigative", "solar", "extinct", "galactic"
        ];
        return scientific;
      default:
        var scientifics = ["scientific", "technical", "digital", "programming",
          "calculating", "formulating", "cyberpunk", "mechanical",
          "technological", "innovative", "brainy", "chemical", "quantum",
          "astro", "space", "theoretical", "atomic", "electronic", "gaseous",
          "investigative", "solar", "extinct", "galactic"
        ];
        return scientifics;
    }
  }

  function getNoun(y) {
    switch (y) {
      case "animals":
        var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat",
          "alligator", "dachsund", "poodle", "beagle", "crocodile",
          "kangaroo", "wallaby", "woodpecker", "eagle", "falcon", "canary",
          "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat",
          "dove", "toucan", "raccoon", "vulture", "peacock", "goldfish",
          "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine",
          "llama", "grasshopper", "gorilla", "monkey", "seahorse", "wombat",
          "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket",
          "nightingale", "hawk", "trout", "squid", "octopus", "sloth",
          "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog",
          "toad", "jellyfish", "butterfly", "caterpillar", "tiger", "hyena",
          "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane",
          "buzzard", "vulture", "rhino", "hippopotamus", "dolphin",
          "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose",
          "swan", "firefly", "platypus"
        ];
        return animals;
      case "profession":
        var professions = ["doctor", "lawyer", "ninja", "writer", "samurai",
          "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
          "comedian", "fireman", "nurse", "RockStar", "musician",
          "carpenter", "plumber", "cashier", "electrician", "waiter",
          "president", "governor", "senator", "scientist", "programmer",
          "singer", "dancer", "director", "mayor", "merchant", "detective",
          "investigator", "navigator", "pilot", "priest", "cowboy",
          "stagehand", "soldier", "ambassador", "pirate", "miner", "police"
        ];
        return professions;
      case "fantasy":
        var fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword",
          "fairy", "pegasus", "halfling", "elf", "changeling", "ghost",
          "knight", "squire", "magician", "witch", "warlock", "unicorn",
          "dragon", "wyvern", "princess", "prince", "king", "queen",
          "jester", "tower", "castle", "kraken", "seamonster", "mermaid",
          "psychic", "seer", "oracle"
        ];
        return fantasy;
      case "music":
        var music = ["violin", "flute", "bagpipe", "guitar", "symphony",
          "orchestra", "piano", "trombone", "tuba", "opera", "drums",
          "harpsichord", "harp", "harmonica", "accordion", "tenor",
          "soprano", "baritone", "cello", "viola", "piccolo", "ukelele",
          "woodwind", "saxophone", "bugle", "trumpet", "sousaphone",
          "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos",
          "clarinet", "recorder", "oboe", "conductor", "singer"
        ];
        return music;
      case "horror":
        var horror = ["murderer", "chainsaw", "knife", "sword", "murder",
          "devil", "killer", "psycho", "ghost", "monster", "godzilla",
          "werewolf", "vampire", "demon", "graveyard", "zombie", "mummy",
          "curse", "death", "grave", "tomb", "beast", "nightmare",
          "frankenstein", "specter", "poltergeist", "wraith", "corpse",
          "scream", "massacre", "cannibal", "skull", "bones", "undertaker",
          "zombie", "creature", "mask", "psychopath", "fiend", "satanist",
          "moon", "fullMoon"
        ];
        return horror;
      case "gross":
        var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit",
          "boil", "blister", "orifice", "secretion", "mucus", "phlegm",
          "centipede", "beetle", "fart", "snot", "crevice", "flatulence",
          "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder",
          "odor", "substance", "fluid", "moisture", "garbage", "trash",
          "bug"
        ];
        return gross;
      case "everyday":
        var everyday = ["mirror", "knife", "fork", "spork", "spoon",
          "tupperware", "minivan", "suburb", "lamp", "desk", "stereo",
          "television", "TV", "book", "car", "truck", "soda", "door",
          "video", "game", "computer", "calender", "tree", "plant", "flower",
          "chimney", "attic", "kitchen", "garden", "school", "wallet",
          "bottle"
        ];
        return everyday;
      case "jewelry":
        var jewelry = ["earrings", "ring", "necklace", "pendant", "choker",
          "brooch", "bracelet", "cameo", "charm", "bauble", "trinket",
          "jewelry", "anklet", "bangle", "locket", "finery", "crown",
          "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone",
          "beads", "armband", "pin", "costume", "ornament", "treasure"
        ];
        return jewelry;
      case "places":
        var places = ["swamp", "graveyard", "cemetery", "park", "building",
          "house", "river", "ocean", "sea", "field", "forest", "woods",
          "neighborhood", "city", "town", "suburb", "country", "meadow",
          "cliffs", "lake", "stream", "creek", "school", "college",
          "university", "library", "bakery", "shop", "store", "theater",
          "garden", "canyon", "highway", "restaurant", "cafe", "diner",
          "street", "road", "freeway", "alley"
        ];
        return places;
      case "scifi":
        var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket",
          "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
          "computer", "future", "timeMachine", "wormHole", "timeTraveler",
          "scientist", "invention", "martian", "pluto", "jupiter", "saturn",
          "mars", "quasar", "blackHole", "warpDrive", "laser", "orbit",
          "gears", "molecule", "electron", "neutrino", "proton",
          "experiment", "photon", "apparatus", "universe", "gravity",
          "darkMatter", "constellation", "circuit", "asteroid"
        ];
        return scifi;
      default:
        var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket",
          "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
          "computer", "future", "timeMachine", "wormHole", "timeTraveler",
          "scientist", "invention", "martian", "pluto", "jupiter", "saturn",
          "mars", "quasar", "blackHole", "warpDrive", "laser", "orbit",
          "gears", "molecule", "electron", "neutrino", "proton",
          "experiment", "photon", "apparatus", "universe", "gravity",
          "darkMatter", "constellation", "circuit", "asteroid"
        ];
        return scifi;
    }
  }
  var adjectives = ["dark", "color", "whimsical", "shiny", "noise",
    "apocalyptic", "insulting", "praise", "scientific"
  ]; // types of adjectives for pizza titles
  var nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry",
    "places", "scifi"
  ]; // types of nouns for pizza titles
  function generator(adj, noun) {
    var adjectives = getAdj(adj);
    var nouns = getNoun(noun);
    var randomAdjective = parseInt(Math.random() * adjectives.length);
    var randomNoun = parseInt(Math.random() * nouns.length);
    var name = "The " + adjectives[randomAdjective].capitalize() + " " + nouns[
      randomNoun].capitalize();
    return name;
  }

  function randomName() {
    var randomNumberAdj = parseInt(Math.random() * adjectives.length);
    var randomNumberNoun = parseInt(Math.random() * nouns.length);
    return generator(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
  }
  var selectRandomMeat = function() {
    var randomMeat = pizzaIngredients.meats[Math.floor((Math.random() *
      pizzaIngredients.meats.length))];
    return randomMeat;
  };
  var selectRandomNonMeat = function() {
    var randomNonMeat = pizzaIngredients.nonMeats[Math.floor((Math.random() *
      pizzaIngredients.nonMeats.length))];
    return randomNonMeat;
  };
  var selectRandomCheese = function() {
    var randomCheese = pizzaIngredients.cheeses[Math.floor((Math.random() *
      pizzaIngredients.cheeses.length))];
    return randomCheese;
  };
  var selectRandomSauce = function() {
    var randomSauce = pizzaIngredients.sauces[Math.floor((Math.random() *
      pizzaIngredients.sauces.length))];
    return randomSauce;
  };
  var selectRandomCrust = function() {
    var randomCrust = pizzaIngredients.crusts[Math.floor((Math.random() *
      pizzaIngredients.crusts.length))];
    return randomCrust;
  };
  var ingredientItemizer = function(string) {
    return "<li>" + string + "</li>";
  };
  var makeRandomPizza = function() {
    var pizza = "";
    var numberOfMeats = Math.floor((Math.random() * 4));
    var numberOfNonMeats = Math.floor((Math.random() * 3));
    var numberOfCheeses = Math.floor((Math.random() * 2));
    for (var i = 0; i < numberOfMeats; i++) {
      pizza = pizza + ingredientItemizer(selectRandomMeat());
    }
    for (var e = 0; e < numberOfNonMeats; e++) {
      pizza = pizza + ingredientItemizer(selectRandomNonMeat());
    }
    for (var x = 0; x < numberOfCheeses; x++) {
      pizza = pizza + ingredientItemizer(selectRandomCheese());
    }
    pizza = pizza + ingredientItemizer(selectRandomSauce());
    pizza = pizza + ingredientItemizer(selectRandomCrust());
    return pizza;
  };

  /**
  Best Practice:
  - Avoid repeated screen rendering by batching DOM changes up,
  especially when updating styles. Try making many styling changes
  in one go by adding or removing  a class, rather than apply each
  individual style separately.

  CSS classes don't avoid reflow, they simply minimize it. Instead of incurring a reflow
  penalty every time you change a given style, you can use a CSS class to change a
  number of styles at once, and in turn only incur a single reflow.
  ---------------------------------------------------------------------------------*/
  // returns a DOM element for each pizza
  var pizzaElementGenerator = function(i) {
    /* Best Practice:
    - Build DOM separately before adding it to the page.
    every DOM update requires the whole screen to be refreshed.
    To minimize the impact here, build DOM elements and then
    append your DOM structure in one go.
    http://gent.ilcore.com/2011/03/how-not-to-trigger-layout-in-webkit.html
    ------------------------------------------------------------------------------*/
    // contains pizza title, image and list of ingredients
    var pizzaContainer = document.createElement("div");
    pizzaContainer.classList.add("randomPizzaContainer"); //
    pizzaContainer.style.width = "33.33%";
    pizzaContainer.style.height = "325px";
    // gives each pizza element a unique id
    pizzaContainer.id = "pizza" + i;
    // contains the pizza image
    var pizzaImageContainer = document.createElement("div");
    pizzaImageContainer.classList.add("col-md-6");
    // the pizza image itself
    var pizzaImage = document.createElement("img");
    pizzaImage.src = "build/images/pizza.png";
    pizzaImage.classList.add("img-responsive");
    // contains the pizza title and list of ingredients
    var pizzaDescriptionContainer = document.createElement("div");
    pizzaDescriptionContainer.classList.add("col-md-6");
    // the pizza name itself
    var pizzaName = document.createElement("h4");
    pizzaName.innerHTML = randomName();
    // the list of ingredients
    var ul = document.createElement("ul");
    ul.innerHTML = makeRandomPizza();
    pizzaContainer.appendChild(pizzaImageContainer);
    pizzaImageContainer.appendChild(pizzaImage);
    pizzaDescriptionContainer.appendChild(pizzaName);
    pizzaDescriptionContainer.appendChild(ul);
    pizzaContainer.appendChild(pizzaDescriptionContainer);
    return pizzaContainer;
  };

  /**
  Note:
  DOM operations are expensive.
  Adding, removing, updating DOM nodes and changing an element's classes,
  forces the browser to re-calculating (reflow) the positions and geometries
  of elements in the document. As a result, reflow is a user-blocking
  operation in the browser.

  resizePizzas and updatePosition functions are updating and setting properties in the DOM,
  which causes a repeated recalcultion of the style.
  -------------------------------------------------------------------------------------*/

  // resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
  var resizePizzas = function(size) {
    // User Timing API function
    window.performance.mark("mark_start_resize");
    /**
    * Best Practice:
    * Use fast DOM traversal with document.getElementById()
    --------------------------------------------------------------------------*/
    // Changes the value for the size of the pizza above the slider
    function changeSliderLabel(size) {
      switch (size) {
        case "1":
          document.getElementById("pizzaSize").innerHTML = "Small";
          return;
        case "2":
          document.getElementById("pizzaSize").innerHTML = "Medium";
          return;
        case "3":
          document.getElementById("pizzaSize").innerHTML = "Large";
          return;
        default:
          console.log("bug in changeSliderLabel");
      }
    }

    changeSliderLabel(size);
    // Returns the size difference to change a pizza element from one size to another. Called by changePizzaSlices(size).
    function determineDx(elem, size) {
      var oldwidth = elem.offsetWidth;
      var windowwidth = document.querySelector("#randomPizzas").offsetWidth;
      var oldsize = oldwidth / windowwidth;

      function sizeSwitcher(size) {
        switch (size) {
          case "1":
            return 0.25;
          case "2":
            return 0.3333;
          case "3":
            return 0.5;
          default:
            console.log("bug in sizeSwitcher");
        }
      }
      var newsize = sizeSwitcher(size);
      var dx = (newsize - oldsize) * windowwidth;
      return dx;
    }

      /*
      * moved randPizzaContainers to a variable outside of the function
      * so it is only selected once. (Evaluator Nickpick)  --> awesome
      */
    var randPizzaContainers = document.getElementsByClassName("randomPizzaContainer");

    function changePizzaSizes(size) {
      var dx = determineDx(randPizzaContainers[3], size);
      var newWidth = (randPizzaContainers[3].offsetWidth + dx) + 'px';
       /**
       * Best Practice:
       * place variables out from the loop. It's a bad idea to set and get styles in a
       * quick succession (in a loop).
       * Use local variable instead of a property lookup.
       * Decrement the iterator toward 0 rather than incrementing toward the total length.
       * http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html#understanding_ajax_performance
      ------------------------------------------*/
      var randPizzaContainersLength;
      for (var i = randPizzaContainersLength - 1; i >= 0; i--) {
      /*
      * It is not obvious, but the top line a for loop also calculates every iteration.
      * So items that will not be changing, such as the length of a list or array you
      * are iterating through can be cached outside of the loop for a speed improvement.
      * (Evaluator Nickpick)  --> awesome + trully appreciated
      */
        randPizzaContainers[i].style.width = newWidth;
      }
    }
    // run function
    changePizzaSizes(size);

    // User Timing API is awesome
    window.performance.mark("mark_end_resize");
    window.performance.measure("measure_pizza_resize", "mark_start_resize","mark_end_resize");
    var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
    console.log("Time to resize pizzas: " + timeToResize[0].duration + "ms");

  }; // end resizePizzas


  // collect timing data
  window.performance.mark("mark_start_generating");
  /**
  * Best practice:
  * Append nodes just once
  * using createDocumentFragment can highly-optimize DOM insertion code
  * http://ejohn.org/blog/dom-documentfragments/
  * http://jsperf.com/out-of-dom-vs-documentfragment/3
  -------------------------------------------------------------------------*/
  var generatedPizzas = document.createDocumentFragment();
  var pizzasDiv = document.getElementById("randomPizzas");


  // this function will be called using rAf when the page is ready to load
  function addPizzas() {
    for (var i = 0; i < 100; i++) {
      generatedPizzas.appendChild(pizzaElementGenerator(i))
    }
    //append once
    pizzasDiv.appendChild(generatedPizzas);
  }


  // User Timing API again. These measurements tell you how long it took to generate the initial pizzas
  window.performance.mark("mark_end_generating");
  window.performance.measure("measure_pizza_generation", "mark_start_generating","mark_end_generating");
  var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
  console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration +"ms");


  // Iterator for number of times the pizzas in the background have scrolled.
  // Used by updatePositions() to decide when to log the average time per frame
  var frame = 0;
  // Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
  function logAverageFrame(times) {
    var numberOfEntries = times.length;
    var sum = 0;
    /**
    * Best Practice:
    * Use local variable instead of a property lookup.
    * decrement the iterator toward 0 rather than incrementing toward the total length.
    -----------------------------------------------------------------------------------*/
    for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
      sum = sum + times[i].duration;
    }
    console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
  }
  // Moves the sliding background pizzas based on scroll position


  /*
  moved items var outside of the function so it is only selected once. Keeping it
  inside the function as I previously placed it, would cause it to be selected and
  changed each time this function is run.  (Evaluator Nickpick)  --> awesome++
  */
  var items = document.getElementsByClassName('mover');

  function updatePositions() {
    frame++;
    window.performance.mark("mark_start_frame");
    /**
    * moved phase outside the loop creating a layout (read) and invalidating
    * the read’s layout calculations (write) triggers a “forced synchronous layout”.
    * http://calendar.perfplanet.com/2013/the-runtime-performance-checklist/
    ------------------------------------------------------------------------*/
    var phase;
    for (var i = items.length - 1; i >= 0; i--) {
      phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
      /**
      * Using -webkit-transform: translate3d(0,0,0) will kick the GPU into action
      * for the CSS transitions, making them smoother (higher FPS).
      * http://stackoverflow.com/questions/18529381/what-does-webkit-transform-translate3d0-0-0-exactly-do-apply-to-body
      * http://aerotwist.com/blog/on-translate3d-and-layer-creation-hacks/
      -------------------------------------------------------------------------*/
      // items[i].style.left = items[i].basicLeft + 100 * phase + 'px'; // nop. see diff
      items[i].style.transform =  "translateX("+ 100 * phase + "px)";   // a lit bit better
    }


    // User Timing API to the rescue again. Seriously, it's worth learning.
    window.performance.mark("mark_end_frame");
    window.performance.measure("measure_frame_duration", "mark_start_frame",
      "mark_end_frame");
    if (frame % 10 === 0) {
      var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
      logAverageFrame(timesToUpdatePosition);
    }
  }

  /**
  * for events that get fired multiple times inside a single frame,
  * use requestAnimationFrame callback so the browser can schedule
  * the most convenient to process:
  * http://calendar.perfplanet.com/2013/the-runtime-performance-checklist/
  -------------------------------------------------------------------------------*/


  function onScroll(evt) {
    scheduledAnimationFrame = false;
    // Store the scroll value for later.
    lastScrollY = window.scrollY;
    // Prevent multiple rAF callbacks.
    // Use requestAnimationFrame if available
    if (scheduledAnimationFrame) return;
    scheduledAnimationFrame = true;
    requestAnimationFrame(updatePositions);
  }


  // run updatePositions on scroll
  window.addEventListener('scroll', onScroll, false);

  /**
  * Best practice:
  * Use rAF to run DOM tasks when the system is ready.
  * requestAnimationFrame gives the browser control over how
  * many frames it renders. Rather than being overloaded with
  * rendering tasks, the processor is able to determine a frame
  * rate that works with the other tasks it is handling.
  * http://ie.microsoft.com/testdrive/Graphics/RequestAnimationFrame/Default.html
  * https://msdn.microsoft.com/en-us/library/ie/hh773174%28v=vs.85%29.aspx
  ---------------------------------------------------------------------------------*/
  // Generates the sliding pizzas when the page loads.
  // call requestAnimationFrame and pass the callback function
  // that creates the frame of animation you want to paint - generate the sliding
  // pizzas when the page loads -
  document.addEventListener('DOMContentLoaded', window.requestAnimationFrame(
    function() {
      /*
      Ideally this would be calculated for the screen resolution so you render
      just enough pizzas to cover the max resolution of the user's screen.
      This can be done with window.availHeight and we already know
      it has 8 columns.  Any extra unseen pizzas still have to be looped through but we
      also want to have enough not to leave a big part of the screen blank.
      (Evaluator Nickpick)  --> (awesome++) + great
      */
      var cols = 8;
      var s = 256;
      var h = screen.availHeight / 4;
      var movingPizzas = document.getElementById("movingPizzas1");
      /*
      * Best practice:
      * Append nodes just once
      * using createDocumentFragment can highly-optimize DOM insertion code
      * http://ejohn.org/blog/dom-documentfragments/
      * http://jsperf.com/out-of-dom-vs-documentfragment/3
      -------------------------------------------------------------------------*/
      var frgElem = document.createDocumentFragment();

      for (var i = 0; i < 32; i++) {
          var elem = document.createElement('img');
          elem.className = 'mover';
          elem.src = "build/images/pizza-lg.png";
          elem.style.height = "100px";
          elem.style.width = "73px";
          elem.style.left = ((i % cols) * s) + "px" ;
          elem.basicLeft = ((i % cols) * s);
          elem.style.top = (Math.floor(i / cols) * h) + 'px';
          frgElem.appendChild(elem);
      }
      // append elements
      movingPizzas.appendChild(frgElem);
      // paint pizzas
      window.requestAnimationFrame(addPizzas);

    }

  ));


