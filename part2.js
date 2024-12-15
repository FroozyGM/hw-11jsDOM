const info = document.getElementById("info");
const ul = document.createElement("ul");
const items = [
    'Введение в DOM',
    'Создание элементов',
    'Изменение атрибутов'
  ];
for (text of items) { 
    const li = document.createElement("li") 
        li.textContent = text
        ul.appendChild(li);
}
info.appendChild(ul);

const header = document.getElementById('header');
const link = document.createElement('a');
link.textContent = 'Мой профиль в telegram';
link.href = 'https://t.me/temrg07';
link.target = '_blank';
header.appendChild(link);

const main = document.getElementById('main');
const dynamicSection = document.createElement('section');
dynamicSection.className = 'dynamic';
const dynamicHeader = document.createElement('h2');
dynamicHeader.textContent = "Обучение JavaScript";
const dynamicParagraph = document.createElement('p');
dynamicParagraph.textContent = 'Динамическое создание элементов позволяет улучшить интерфейс пользователя';
dynamicSection.appendChild(dynamicHeader);
dynamicSection.appendChild(dynamicParagraph);
main.insertBefore(dynamicSection, main.firstChild);

const footer = document.getElementById('footer');
footer.innerHTML = '';
const firstParagraph = infoSection.querySelector('p');
infoSection.removeChild(firstParagraph);
