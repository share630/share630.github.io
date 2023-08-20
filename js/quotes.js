///array
const quotes = [
    {
        quote: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",

        author: "Nelson Mandela",
    },
    { 
        quote: "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.",
        author: "Wayne Dyer",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Learn the rules like a pro, so you can break them like an artist.",
        author: "Pablo Picasso",
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "I didn't get there by wishing for it or hoping for it, but by working for it.",
        author: "Estée Lauder",
    },
    {
        quote: "If you can dream it, you can do it.",
        author: "Walt Disney",
    },
    {
        quote: "Even if you are on the right track, you'll get run over if you just sit there.",
        author: "Will Rogers",
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "A year from now you may wish you had started today.",
        author: "Karen Lamb",
    },
    {
        quote: "It's not just about being better. It's about being different. You need to give people a reason to choose your business.",
        author: "Eric Hoffer",
    },
    {
        quote: "The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.",
        author: "John Maxwell",
    },
    {
        quote: "The ones who are crazy enough to think they can change the world are the ones who do.",
        author: "Steve Jobs",
    },
    {
        quote: "Build your own dreams, or someone else will hire you to build theirs.",
        author: "Farrah Gray",
    },
    {
        quote: "Nothing is impossible, the word itself says Im possible!",
        author: "Audrey Hepburn",
    },
   
];
///assign HTML <span> location on the variables
const quote = document.querySelector(".famous-quote");
const author = document.querySelector(".author");

///random quote selector
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
