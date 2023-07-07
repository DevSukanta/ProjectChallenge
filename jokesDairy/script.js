const jokeE1 = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

//using async/awalt
async function generateJoke() {
const config = {
    headers: {
        accept: 'application/json',
    },
}
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    
    jokeE1.innerHTML =data.joke;
}