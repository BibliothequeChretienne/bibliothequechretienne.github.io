const messages = {
    "1": "Стану молиться духом, стану молиться и умом; буду петь духом, буду петь и умом. (1Кор. 14:15)",
    "2": "Воспойте Господу новую песнь! (Псалом 97:1)",
    "3": "Буду славить Тебя, Господи, всем сердцем моим,Буду... петь имени Твоему, Всевышний. (Псалом 9. 2-3)",
    "4": "Пойте Господу, ибо Он соделал великое, - да знают это по всей земле. Исаия 12:5 (Исаия 12:5)",
    "5": "Горы и холмы да пропоют, и все деревья в лесу да будут радоваться пред лицем Господа. (Исаия 49:13)",
    "6": "Пою Господу в течение всей жизни моей, гремлю песнь Богу моему, доколе буду. (Псалом 104:33) ",
    "7": "Воскликните радостно Господу. (Псалом 98:4) ",
    "8": "...Пояте и воспевайте Господу в сердцах ваших. (Ефесянам 5:19)",
    "9": "...Наставляя друг друга псалмами, славословиями и песнями духовными... (Колоссянам 3:16)",
    "10": "И поют новую песнь. (Откровение 5:9)"
}
;
const messageCount = Object.keys(messages).length;

const minDuration = 5000; // 5 seconds
const maxDuration = 8000; // 8 seconds
const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;
const randomKey = Math.floor(Math.random() * messageCount) + 1; // Random number between 1 and 10
const message = messages[randomKey.toString()];

if (message) {
    const splashElement = document.querySelector('.splash h1');
    splashElement.textContent = message;
    // splashElement.classList.add('zoom-out'); 

// Delay the redirection to the main page and load a random message
setTimeout(() => {
    splashElement.classList.add('zoom-out');

    // Redirect to your main page after the animation
    setTimeout(() => {
        window.location.href = 'song.html';
    }, 1000); // 1 second
}, 4000);
}






























// async function fetchMessages() {
//     const response = await fetch('splash_messages.json'); // Replace with the path to your JSON file
//     if (!response.ok) {
//         throw new Error(`Failed to fetch messages: ${response.status}`);
//     }
//     return response.json();
// }

// // Calculate a random time between 5 and 8 seconds in milliseconds
// const minDuration = 2000; 
// const maxDuration = 5000;
// const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;

// // Delay the redirection to the main page
// setTimeout(async () => {
//     try {
//         const messages = await fetchMessages();
//         const randomKey = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
//         const message = messages[randomKey.toString()];

//         if (message) {
//             document.querySelector('.splash h1').textContent = message;
//         }
//     } catch (error) {
//         console.error(error);
//     }

//     // Redirect to your main page
//     window.location.href = 'index.html';
// }, randomDuration);

