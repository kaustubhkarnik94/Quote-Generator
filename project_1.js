// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [
    {
        quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        person:  `Albert Einstein`

    },{
        quote: `“So many books, so little time.”`,
        person: `Frank Zappa`
    },{
        quote: `“Be the change that you wish to see in the world.”`,
        person: `Mahatma Gandhi`
    }, {
        quote: `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`,
        person: `Martin Luther King Jr`
    }, {
        quote: ` "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
        person: `Oprah Winfrey`
    }, {
        quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier." `,
        person: `Mother Teresa`
    },{
        quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up.`,
        person: `Thomas A. Edison`
    },{
        quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts." `,
        person: `Winston S. Churchill`
    },{
        quote: `"If you really look closely, most overnight successes took a long time." `,
        person: `Steve Jobs`
    },{
        quote: `“Strength does not come from winning. Your struggles develop your strengths.”`,
        person: ` Arnold Schwarzenegger`
    },
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person
});