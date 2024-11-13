//Клавакока
function createKeyboard(){
    const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const keyboardDiv = document.getElementById('keyboard');

    keys.forEach(key => {
        const keyDiv = document.createElement('div');
        keyDiv.className = 'key';
        keyDiv.innerHTML = `
            <img src="img/SimpleKeys/Jumbo/Light/Single PNGs/${key}.png" alt="Клавиша ${key}">
        `;
        
        // Добавление события клика
        keyDiv.addEventListener('click', () => {
            console.log(`Клавиша ${key} была нажата`);
        });
        
        keyboardDiv.appendChild(keyDiv);
    });
}
//Виселица в канвасе
function createHangman(){
    const canvas = document.getElementById('hangmanCanvas');
    const ctx = canvas.getContext('2d');

    // Функция для рисования виселицы
    function drawGallows() {
        ctx.beginPath();
        ctx.moveTo(50, 350); // основание
        ctx.lineTo(150, 350); // основание
        ctx.moveTo(100, 350); // основание
        ctx.lineTo(100, 50); // столб
        ctx.lineTo(200, 50); // перекладина
        ctx.lineTo(200, 100); // веревка
        ctx.stroke();
    }

    // Функция для рисования человечка
    function drawMan(step) {
        ctx.fillStyle = 'black';
        switch (step) {
            case 1: // голова
                ctx.beginPath();
                ctx.arc(200, 120, 20, 0, Math.PI * 2, true);
                ctx.fill();
                break;
            case 2: // тело
                ctx.fillRect(195, 140, 10, 50);
                break;
            case 3: // левая рука
                ctx.fillRect(180, 140, 15, 5);
                break;
            case 4: // правая рука
                ctx.fillRect(200, 140, 15, 5);
                break;
            case 5: // левая нога
                ctx.fillRect(195, 190, 5, 20);
                break;
            case 6: // правая нога
                ctx.fillRect(200, 190, 5, 20);
                break;
        }
    }

    // Инициализация рисования
    function drawHangman(step) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // очистка канваса
        drawGallows();
        drawMan(step);
    }

    // Пример: рисуем виселицу и человечка
    let currentStep = 0; // начальное состояние
    const maxSteps = 6; // максимальное количество шагов

    function draw() {
        if (currentStep <= maxSteps) {
            drawHangman(currentStep);
            currentStep++;
            setTimeout(draw, 1000); // рисуем следующую часть каждые 1000 мс
        }
    }

    draw(); // начинаем рисовать
}


createKeyboard();
createHangman();