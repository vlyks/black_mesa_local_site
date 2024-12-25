let startTime = new Date();
startTime.setHours(7);
startTime.setMinutes(48);
startTime.setSeconds(12);

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