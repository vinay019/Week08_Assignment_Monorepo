import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = 8080;
const Quotes = [
  {
    q: "Those who know, do. Those that understand, teach.",
    a: "Aristotle",
    c: "49",
    h: "\u003Cblockquote\u003E&ldquo;Those who know, do. Those that understand, teach.&rdquo; &mdash; \u003Cfooter\u003EAristotle\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Don't look back - you're not going that way.",
    a: "Mary Engelbreit",
    c: "44",
    h: "\u003Cblockquote\u003E&ldquo;Don't look back - you're not going that way.&rdquo; &mdash; \u003Cfooter\u003EMary Engelbreit\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "It takes a very long time to become young.",
    a: "Pablo Picasso",
    c: "42",
    h: "\u003Cblockquote\u003E&ldquo;It takes a very long time to become young.&rdquo; &mdash; \u003Cfooter\u003EPablo Picasso\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Sorrow is how we learn to love.",
    a: "Rita Mae Brown",
    c: "31",
    h: "\u003Cblockquote\u003E&ldquo;Sorrow is how we learn to love.&rdquo; &mdash; \u003Cfooter\u003ERita Mae Brown\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "The only way out is through.",
    a: "Robert Frost",
    c: "28",
    h: "\u003Cblockquote\u003E&ldquo;The only way out is through.&rdquo; &mdash; \u003Cfooter\u003ERobert Frost\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Nothing external to you has any power over you.",
    a: "Ralph Waldo Emerson",
    c: "47",
    h: "\u003Cblockquote\u003E&ldquo;Nothing external to you has any power over you.&rdquo; &mdash; \u003Cfooter\u003ERalph Waldo Emerson\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "The Only Thing That Is Constant Is Change",
    a: "Heraclitus",
    c: "41",
    h: "\u003Cblockquote\u003E&ldquo;The Only Thing That Is Constant Is Change&rdquo; &mdash; \u003Cfooter\u003EHeraclitus\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Love is the expression of one's values.",
    a: "Ayn Rand",
    c: "39",
    h: "\u003Cblockquote\u003E&ldquo;Love is the expression of one's values.&rdquo; &mdash; \u003Cfooter\u003EAyn Rand\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "The only people without problems are those in cemeteries.",
    a: "Tony Robbins",
    c: "57",
    h: "\u003Cblockquote\u003E&ldquo;The only people without problems are those in cemeteries.&rdquo; &mdash; \u003Cfooter\u003ETony Robbins\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Luck is what happens when preparation meets opportunity.  ",
    a: "Seneca",
    c: "58",
    h: "\u003Cblockquote\u003E&ldquo;Luck is what happens when preparation meets opportunity.  &rdquo; &mdash; \u003Cfooter\u003ESeneca\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "It is better to light a single candle than to curse the darkness.",
    a: "Eleanor Roosevelt",
    c: "65",
    h: "\u003Cblockquote\u003E&ldquo;It is better to light a single candle than to curse the darkness.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Knowledge has to be improved, challenged, and increased constantly, or it vanishes.",
    a: "Peter Drucker",
    c: "83",
    h: "\u003Cblockquote\u003E&ldquo;Knowledge has to be improved, challenged, and increased constantly, or it vanishes.&rdquo; &mdash; \u003Cfooter\u003EPeter Drucker\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Ability is a poor man's wealth.",
    a: "John Wooden",
    c: "31",
    h: "\u003Cblockquote\u003E&ldquo;Ability is a poor man's wealth.&rdquo; &mdash; \u003Cfooter\u003EJohn Wooden\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "The person who never made a mistake never tried anything new.",
    a: "Albert Einstein",
    c: "61",
    h: "\u003Cblockquote\u003E&ldquo;The person who never made a mistake never tried anything new.&rdquo; &mdash; \u003Cfooter\u003EAlbert Einstein\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Don't seek, don't search, don't ask, don't knock, don't demand - relax.",
    a: "Osho",
    c: "71",
    h: "\u003Cblockquote\u003E&ldquo;Don't seek, don't search, don't ask, don't knock, don't demand - relax.&rdquo; &mdash; \u003Cfooter\u003EOsho\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "The sun is new each day.",
    a: "Heraclitus",
    c: "24",
    h: "\u003Cblockquote\u003E&ldquo;The sun is new each day.&rdquo; &mdash; \u003Cfooter\u003EHeraclitus\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "A simple rule in dealing with those who are hard to get along with is to remember that this person is striving to assert his superiority; and you must deal with him from that point of view.",
    a: "Alfred Adler",
    c: "189",
    h: "\u003Cblockquote\u003E&ldquo;A simple rule in dealing with those who are hard to get along with is to remember that this person is striving to assert his superiority; and you must deal with him from that point of view.&rdquo; &mdash; \u003Cfooter\u003EAlfred Adler\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "The goal is not to show how great you are to others, but how vulnerable you are to yourself.",
    a: "Maxime Lagace",
    c: "92",
    h: "\u003Cblockquote\u003E&ldquo;The goal is not to show how great you are to others, but how vulnerable you are to yourself.&rdquo; &mdash; \u003Cfooter\u003EMaxime Lagace\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "I never said it would be easy, I only said it would be worth it.",
    a: "Mae West",
    c: "64",
    h: "\u003Cblockquote\u003E&ldquo;I never said it would be easy, I only said it would be worth it.&rdquo; &mdash; \u003Cfooter\u003EMae West\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "It's the job that's never started that takes the longest to finish.",
    a: "J.R.R. Tolkien",
    c: "67",
    h: "\u003Cblockquote\u003E&ldquo;It's the job that's never started that takes the longest to finish.&rdquo; &mdash; \u003Cfooter\u003EJ.R.R. Tolkien\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "You can start changing our world for the better daily, no matter how small the action.",
    a: "Nelson Mandela",
    c: "86",
    h: "\u003Cblockquote\u003E&ldquo;You can start changing our world for the better daily, no matter how small the action.&rdquo; &mdash; \u003Cfooter\u003ENelson Mandela\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "People are weird. When we find someone with weirdness that is compatible with ours, we team up and call it love.",
    a: "Dr. Seuss",
    c: "112",
    h: "\u003Cblockquote\u003E&ldquo;People are weird. When we find someone with weirdness that is compatible with ours, we team up and call it love.&rdquo; &mdash; \u003Cfooter\u003EDr. Seuss\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Obstacles are those frightful things you see when you take your eyes off your goals.",
    a: "Sydney Smith",
    c: "84",
    h: "\u003Cblockquote\u003E&ldquo;Obstacles are those frightful things you see when you take your eyes off your goals.&rdquo; &mdash; \u003Cfooter\u003ESydney Smith\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "It doesn't matter where you are coming from. All that matters is where you are going. ",
    a: "Brian Tracy",
    c: "86",
    h: "\u003Cblockquote\u003E&ldquo;It doesn't matter where you are coming from. All that matters is where you are going. &rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "What kills the creative force is not age or lack of talent, but our own spirit, our own attitude.",
    a: "Robert Greene",
    c: "97",
    h: "\u003Cblockquote\u003E&ldquo;What kills the creative force is not age or lack of talent, but our own spirit, our own attitude.&rdquo; &mdash; \u003Cfooter\u003ERobert Greene\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "No problem can be solved from the same level of consciousness that created it.",
    a: "Albert Einstein",
    c: "78",
    h: "\u003Cblockquote\u003E&ldquo;No problem can be solved from the same level of consciousness that created it.&rdquo; &mdash; \u003Cfooter\u003EAlbert Einstein\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "You can, you should, and if you're brave enough to start, you will.",
    a: "Stephen King",
    c: "67",
    h: "\u003Cblockquote\u003E&ldquo;You can, you should, and if you're brave enough to start, you will.&rdquo; &mdash; \u003Cfooter\u003EStephen King\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Challenge yourself to find the good and beautiful thing inside of everyone.",
    a: "Mark Manson",
    c: "75",
    h: "\u003Cblockquote\u003E&ldquo;Challenge yourself to find the good and beautiful thing inside of everyone.&rdquo; &mdash; \u003Cfooter\u003EMark Manson\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Courage is the price that life exacts for granting peace.",
    a: "Amelia Earhart",
    c: "57",
    h: "\u003Cblockquote\u003E&ldquo;Courage is the price that life exacts for granting peace.&rdquo; &mdash; \u003Cfooter\u003EAmelia Earhart\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "A wise person should have money in their head, but not in their heart.",
    a: "Jonathan Swift",
    c: "70",
    h: "\u003Cblockquote\u003E&ldquo;A wise person should have money in their head, but not in their heart.&rdquo; &mdash; \u003Cfooter\u003EJonathan Swift\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success.",
    a: "Robert Kiyosaki",
    c: "137",
    h: "\u003Cblockquote\u003E&ldquo;Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success.&rdquo; &mdash; \u003Cfooter\u003ERobert Kiyosaki\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "The less you want, the richer you are. The more you need in order to be happy, the more miserable you'll be.",
    a: "Yanni",
    c: "108",
    h: "\u003Cblockquote\u003E&ldquo;The less you want, the richer you are. The more you need in order to be happy, the more miserable you'll be.&rdquo; &mdash; \u003Cfooter\u003EYanni\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Rivers know this: there is no hurry. We shall get there some day.",
    a: "A.A. Milne",
    c: "65",
    h: "\u003Cblockquote\u003E&ldquo;Rivers know this: there is no hurry. We shall get there some day.&rdquo; &mdash; \u003Cfooter\u003EA.A. Milne\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Your very silence shows you agree.",
    a: "Euripides",
    c: "34",
    h: "\u003Cblockquote\u003E&ldquo;Your very silence shows you agree.&rdquo; &mdash; \u003Cfooter\u003EEuripides\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Simplicity is a difficult thing to achieve.  ",
    a: "Charlie Chaplin",
    c: "45",
    h: "\u003Cblockquote\u003E&ldquo;Simplicity is a difficult thing to achieve.  &rdquo; &mdash; \u003Cfooter\u003ECharlie Chaplin\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Everything that is made beautiful and fair and lovely is made for the eye of one who sees.",
    a: "Rumi",
    c: "90",
    h: "\u003Cblockquote\u003E&ldquo;Everything that is made beautiful and fair and lovely is made for the eye of one who sees.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Empty your mind, be formless, shapeless, like water.",
    a: "Bruce Lee",
    c: "52",
    h: "\u003Cblockquote\u003E&ldquo;Empty your mind, be formless, shapeless, like water.&rdquo; &mdash; \u003Cfooter\u003EBruce Lee\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Trust, like the soul, never returns once it is gone.",
    a: "Publilius Syrus",
    c: "52",
    h: "\u003Cblockquote\u003E&ldquo;Trust, like the soul, never returns once it is gone.&rdquo; &mdash; \u003Cfooter\u003EPublilius Syrus\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.",
    a: "James Allen",
    c: "113",
    h: "\u003Cblockquote\u003E&ldquo;Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.&rdquo; &mdash; \u003Cfooter\u003EJames Allen\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Once you learn to quit, it becomes a habit.",
    a: "Vince Lombardi",
    c: "43",
    h: "\u003Cblockquote\u003E&ldquo;Once you learn to quit, it becomes a habit.&rdquo; &mdash; \u003Cfooter\u003EVince Lombardi\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Be strong. Be confident. Be the star of your own life.",
    a: "Estee Lauder",
    c: "54",
    h: "\u003Cblockquote\u003E&ldquo;Be strong. Be confident. Be the star of your own life.&rdquo; &mdash; \u003Cfooter\u003EEstee Lauder\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "The universe doesn't allow perfection.",
    a: "Stephen Hawking",
    c: "38",
    h: "\u003Cblockquote\u003E&ldquo;The universe doesn't allow perfection.&rdquo; &mdash; \u003Cfooter\u003EStephen Hawking\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Far more crucial than what we know or do not know is what we do not want to know.",
    a: "Eric Hoffer",
    c: "81",
    h: "\u003Cblockquote\u003E&ldquo;Far more crucial than what we know or do not know is what we do not want to know.&rdquo; &mdash; \u003Cfooter\u003EEric Hoffer\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Numbing the pain for a while will only make it worse when you finally feel it.",
    a: "Albus Dumbledore",
    c: "78",
    h: "\u003Cblockquote\u003E&ldquo;Numbing the pain for a while will only make it worse when you finally feel it.&rdquo; &mdash; \u003Cfooter\u003EAlbus Dumbledore\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "No great mind has ever existed without a touch of madness.",
    a: "Aristotle",
    c: "58",
    h: "\u003Cblockquote\u003E&ldquo;No great mind has ever existed without a touch of madness.&rdquo; &mdash; \u003Cfooter\u003EAristotle\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Success in any endeavor depends on the degree to which it is an expression of your true self. ",
    a: "Ralph Marston",
    c: "94",
    h: "\u003Cblockquote\u003E&ldquo;Success in any endeavor depends on the degree to which it is an expression of your true self. &rdquo; &mdash; \u003Cfooter\u003ERalph Marston\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "It always seems impossible until it's done.",
    a: "Nelson Mandela",
    c: "43",
    h: "\u003Cblockquote\u003E&ldquo;It always seems impossible until it's done.&rdquo; &mdash; \u003Cfooter\u003ENelson Mandela\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Open your eyes and look within. Are you satisfied with the life you're living?",
    a: "Bob Marley",
    c: "78",
    h: "\u003Cblockquote\u003E&ldquo;Open your eyes and look within. Are you satisfied with the life you're living?&rdquo; &mdash; \u003Cfooter\u003EBob Marley\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Stay away from people who makes you feel like you are wasting their time.",
    a: "Paulo Coelho",
    c: "73",
    h: "\u003Cblockquote\u003E&ldquo;Stay away from people who makes you feel like you are wasting their time.&rdquo; &mdash; \u003Cfooter\u003EPaulo Coelho\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Music is like creating an emotional painting. The sounds are the colors.",
    a: "Yanni",
    c: "72",
    h: "\u003Cblockquote\u003E&ldquo;Music is like creating an emotional painting. The sounds are the colors.&rdquo; &mdash; \u003Cfooter\u003EYanni\u003C/footer\u003E\u003C/blockquote\u003E",
  },
];
app.get("/", function (request, response) {
  response.json(
    "Hello there! Welcome to my API link. You're currently in the root; to access the API please go to the /quotes page. Thank you!"
  );
});

app.get("/quotes", function (request, response) {
  response.json(Quotes);
});

app.listen(PORT, function () {
  console.log(`This server is running on ${PORT}`);
});

//N.B.: Quotes array sourced from: https://zenquotes.io/api/quotes/random
