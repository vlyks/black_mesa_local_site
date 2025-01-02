let startTime = new Date();
startTime.setHours(7);
startTime.setMinutes(48);
startTime.setSeconds(12);

let message = document.getElementById('chatbox')
let button = document.getElementById('chatboxSend')
const chat = document.getElementById('chat')
const report = document.getElementById('report')

function blackMesaTime() {
    startTime.setSeconds(startTime.getSeconds() + 1); // Увеличиваем на одну секунду
    const time = startTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('time').textContent = time + ' , Thursday , 05.12.2000';
}

// Обновляем время сразу и каждую секунду
blackMesaTime();
setInterval(blackMesaTime, 1000);


function openTwitch() {
    window.open('https://www.twitch.tv/vokylrepus', '_blank')
}

button.onclick = function () {
    const inputText = chatbox.value.trim();

    if (inputText !== "") {
        if (!(chat instanceof HTMLElement)) {
            console.error('UJDYU')
            return;
        }

        // Создаем новое сообщение
        const messageElement = document.createElement("b");
        messageElement.classList.add('vox')
        messageElement.classList.add('inner_chat')
        messageElement.textContent = inputText;

        // Добавляем новое сообщение в конец
        chat.appendChild(messageElement);

        // Удаляем самое верхнее сообщение, если их больше 5
        if (chat.children.length > 5) {
            chat.removeChild(chat.firstChild);
        }

        // Очищаем поле ввода
        inputText.value = "";
    }
};

report.onclick = function () {
    const userReport = prompt('Please, report an issue.')
 if (userReport !== null) {
    alert('Thank you for reporting an issue.')
 }
}