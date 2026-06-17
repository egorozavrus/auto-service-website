/* Dla PEREHODA po STRANICE */

const menuLinks = document.querySelectorAll('header nav a, .footer-section ul li a');

for (let link of menuLinks) {

    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
           behavior: 'smooth' 
        });
    });
}

/* Dla VOZVRATA */

const toTopBtn = document.querySelector('.btn-to-top');
const header = document.querySelector('header');

window.addEventListener('scroll', function(){

    if (window.scrollY > 300) {
        toTopBtn.classList.remove('hidden-btn');
    } else {
        toTopBtn.classList.add('hidden-btn');
    }

    /*if (window.scrollY > 120) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }*/
});

toTopBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* Dla BURGER MENU */

const btnMobileMenu = document.querySelector('#mobile-menu');
const nav = document.querySelector('header nav');

btnMobileMenu.addEventListener('click', function () {

    if (nav.classList.toggle('active')) {
        btnMobileMenu.innerHTML = '&times;';
    } else {
        btnMobileMenu.innerHTML = '&#9776;';
    }

});



for (let link of menuLinks) {
    link.addEventListener('click', function() {
        nav.classList.remove('active');
        btnMobileMenu.innerHTML = '&#9776;';
    });
}


/* Dla CALC */

const checkboxes = document.querySelectorAll('.service-checkbox');
const priceElement = document.getElementById('price');
const hintElement = document.getElementById('calc-hint');
const servicesInput = document.getElementById('selected-services-input');

function calculateTotal() {
    let total = 0;
    let checkedCount = 0;
    let chosenServices = [];

    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            total += parseInt(checkbox.value);
            checkedCount++;
            let serviceName = checkbox.getAttribute('data-name');
            chosenServices.push(serviceName);
        }
    }

    servicesInput.value = chosenServices.join(', ');

    if (checkedCount >= 4) {
        total = Math.round(total * 0.9);
        priceElement.style.color = '#76ff05';
        hintElement.innerText = "🔥 Ура! Вам доступна скидка 10%!";
    } else {
        priceElement.style.color = '#e74e01';

        if (checkedCount > 0){
            hintElement.innerText = `Добавьте еще ${4 - checkedCount} услуги для скидки 10%`;
        } else {
            hintElement.innerText = "Выберите услуги для расчета";
        }
        
    }

    priceElement.innerText = total;
}

for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', calculateTotal);
}



// КОД ДЛЯ СПИСКА МАШИН В БОКСАХ ---

const btnAdd = document.querySelector('.btn-add');
const taskList = document.querySelector('.task-list');
const taskInput = document.querySelector('.task-input');
const btnClear = document.querySelector('.btn-clear');

let carsArray = JSON.parse(localStorage.getItem('cars')) || [
    { text: 'Hyudai i20', done: false },
    { text: 'Volkswagen', done: false }
];

btnAdd.addEventListener('click', function() { 
	const addAuto = taskInput.value;
	
	if (addAuto === ''){
		return;
	}
		
    const newCar = { text: addAuto, done: false };
	
	carsArray.push(newCar);
    saveToStorage();
    renderCars();

	taskInput.value = '';
});

taskList.addEventListener('click', function(e) {

    const workshop = document.querySelector('.workshop');

    if (!workshop.classList.contains('master-mode')) {
        return;
    }

    if (e.target.classList.contains('delete-btn')) {

        const index = parseInt(e.target.dataset.index);

        carsArray.splice(index, 1);

        saveToStorage();

        renderCars();

        return;
    }

	const liItem = e.target.closest('.task-item');
    if (!liItem) return;

    const deleteBtn = liItem.querySelector('.delete-btn');
    if (!deleteBtn) return;

    const index = parseInt(deleteBtn.dataset.index);
    carsArray[index].done = !carsArray[index].done;

    saveToStorage();
    renderCars();
});

btnClear.addEventListener('click', function() {
    carsArray = [];
    saveToStorage();
    renderCars();
});


function renderCars() {
    taskList.innerHTML = '';

    carsArray.forEach(function(car, index){
        const newElementLi = document.createElement('li');
        newElementLi.classList.add('task-item');

        if (car.done) {
            newElementLi.classList.add('done');
        }

        newElementLi.innerHTML = `
            <span class="task-text">${car.text}</span>
            <span class="delete-btn admin-only" data-index="${index}">&times;</span> 
        `;
        taskList.append(newElementLi);
    });

    updateCounter();
}

renderCars();

function saveToStorage() {
    localStorage.setItem('cars', JSON.stringify(carsArray));
}

function updateCounter() {
    const countNum = document.querySelector('#count-num');
    const activeTasks = taskList.querySelectorAll('.task-item:not(.done)');
    countNum.textContent = activeTasks.length;
}


const toggleAdminBtn = document.querySelector('#toggle-admin-mode');
const workshopBlock = document.querySelector('.workshop');

toggleAdminBtn.addEventListener('click', function() {
    
    // Меняем текст на кнопке для наглядности
    if (workshopBlock.classList.contains('master-mode')) {
        
        workshopBlock.classList.remove('master-mode');
        toggleAdminBtn.textContent = 'Войти как Мастер (Тест)';
        toggleAdminBtn.style.color = '#555';
        toggleAdminBtn.style.borderColor = '#555';
    }
    else {
        const password = prompt("Введите пароль мастера");

        if (password === "Lodz_2026") {

        workshopBlock.classList.add('master-mode');
        toggleAdminBtn.textContent = 'Выйти из режима Мастера';
        toggleAdminBtn.style.color = '#76ff05';
        toggleAdminBtn.style.borderColor = '#76ff05';
    
        } else {
           alert("Неверный пароль!");
            
        }
    }
});

/* CARUSEL RABOT */

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

for (let btn of tabBtns) {
    btn.addEventListener('click', function(){

        for (let b of tabBtns){
            b.classList.remove('active');
        }

        for (let content of tabContents) {
            content.classList.remove('active');
        }

        btn.classList.add('active');

        let targetId = btn.getAttribute('data-target');
        let targetContent = document.getElementById(targetId);
        targetContent.classList.add('active');
    });
}


/* SLIDER REVIEWS */

const sliderLine = document.querySelector('.slider-line');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const sliderWindow = document.querySelector('.slider-window');

let sliderCount = 0;

btnRight.addEventListener('click', function(){

    sliderCount++;

    if (sliderCount > 2) {
        sliderCount = 0;
    }

    moveSlider();
});

btnLeft.addEventListener('click', function(){

    sliderCount--;

    if (sliderCount < 0) {
        sliderCount = 2;
    }

    moveSlider();
});

function moveSlider() {
    let slideWidth = sliderWindow.offsetWidth;

    sliderLine.style.transform = 'translateX(-' + (sliderCount * slideWidth) + 'px)';
};

/* Dla FORM */ 

const contactsForm = document.querySelector('.contacts-form');

contactsForm.addEventListener('submit', function(event) {

    event.preventDefault();

    let userName = contactsForm.querySelector('input[type="text"]').value;

    alert("Спасибо, " + userName + "! Заявка успешно отправлена. Джемми уже передал её мастерам в Лодзи!");

    contactsForm.reset();
});



/* FAQ Questions */

const faqQuestions = document.querySelectorAll('.faq-question');

for (let question of faqQuestions) {

    question.addEventListener('click', function(){
        const faqItem = question.closest('.faq-item');
        faqItem.classList.toggle('active');
    });

}