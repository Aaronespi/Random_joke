const joke_type = ['dad_joke', 'animal_joke', 'science_joke'];

const dad_joke = [
    "What did one wall say to the other? I'll meet you at the corner.",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Where do fruits go on vacation? Pear-is!",
    "Dad, did you get a haircut? No, I got them all cut!",
    "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!" 
];

const animal_joke = [
    "What sound do porcupines make when they kiss? Ouch!",
    "What does a dolphin say when he is confused? Can you please be more Pacific?",
    "What happened when the lion ate the comedian? He felt funny!",
    "Where do polar bears vote? The North Poll.",
    "Where did the sheep go on vacation? The Baaaahamas"
];

const science_joke = [
    "What type of fish is made out of 2 sodium atoms? 2Na",
    "Why are chemists excellent for solving problems? They have all the solutions.",
    "Why did the physicist break up with the biologist? Because there was no chemistry",
    "Why did the restaurant on the moon get bad reviews? It had no atmosphere",
    "What is the least interesting chemical element? Bohrium"
];

const getRandomNumber = () => {
    return Math.floor(Math.random()*joke_type.length)
};

const randomJoke = () => {
    let randomNumber = getRandomNumber();
    let joke = ""
    let randomNumberJoke = Math.floor(Math.random()*5);
    let typeOfJoke = joke_type[randomNumber];
    if (typeOfJoke === 'dad_joke') {
        joke = dad_joke[randomNumberJoke];
    } else if(typeOfJoke === 'animal_joke') {
        joke = animal_joke[randomNumberJoke];
    } else {
        joke = science_joke[randomNumberJoke];
    };
    return joke;
};

console.log(randomJoke);