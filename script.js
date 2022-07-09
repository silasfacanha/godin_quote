const life_quotes = [
  {
    quote:
      '"Hard work is about risk. It begins when you deal with the things that you would rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you have done that, to do it again the next day."',
    source: "Small is the New Big",
    year: 2007,
  },
  {
    quote:
      '"Hard work is about risk. It begins when you deal with the things that you would rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you have done that, to do it again the next day."',
    source: "Small is the New Big",
    year: 2007,
  },

  {
    quote:
      '"Hard work is about risk. It begins when you deal with the things that you would rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you have done that, to do it again the next day."',
    source: "Small is the New Big",
    year: 2007,
  },

  {
    quote:
      '"Hard work is about risk. It begins when you deal with the things that you would rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you have done that, to do it again the next day."',
    source: "Small is the New Big",
    year: 2007,
  },

  {
    quote:
      '"Hard work is about risk. It begins when you deal with the things that you would rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you have done that, to do it again the next day."',
    source: "Small is the New Big",
    year: 2007,
  },

  {
    quote:
      '"Hard work is about risk. It begins when you deal with the things that you would rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you have done that, to do it again the next day."',
    source: "Small is the New Big",
    year: 2007,
  },

  {
    quote:
      '"Hard work is about risk. It begins when you deal with the things that you would rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you have done that, to do it again the next day."',
    source: "Small is the New Big",
    year: 2007,
  },

  {
    quote:
      '"Hard work is about risk. It begins when you deal with the things that you would rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you have done that, to do it again the next day."',
    source: "Small is the New Big",
    year: 2007,
  },

  {
    quote:
      '"Hard work is about risk. It begins when you deal with the things that you would rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you have done that, to do it again the next day."',
    source: "Small is the New Big",
    year: 2007,
  },

  {
    quote:
      '"Hard work is about risk. It begins when you deal with the things that you would rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you have done that, to do it again the next day."',
    source: "Small is the New Big",
    year: 2007,
  },
];

function newQuote() {
  let randomNumber = Math.floor(Math.random() * life_quotes.length);

  document.getElementById("quote-area").innerHTML = Object.values(
    life_quotes[randomNumber]
  );
}
