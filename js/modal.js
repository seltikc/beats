
// const openButton = document.querySelector("#open-modal");
// const body = document.body;

// openButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   const overlayElement = document.createElement("div");
//   overlayElement.classList.add("overlay__open");

//   const containerElement = document.createElement("div");
//   containerElement.classList.add("modal")

//   const contentElement = document.createElement("ul");
//   contentElement.classList.add("modal__menu")


//   const textElement = document.createElement("li");
//   textElement.classList.add("modal__menu-item")

//   const pereBor = document.querySelectorAll("modal__menu-item");
  
//   for (let index = 0; index < pereBor.length; index++) {
//     const element = pereBor[index];
//   }

//   const linkElement = document.createElement("a");
//   linkElement.classList.add("modal__menu-link")
//   linkElement.textContent = ("О нас");
//   linkElement.textContent = ("Наушники");
//   linkElement.textContent = ("Команда");
//   linkElement.textContent = ("Цвета");
//   linkElement.textContent = ("Отзывы");
//   linkElement.textContent = ("Как мы работаем");
//   linkElement.textContent = ("Контакты");
  
//   const closeElement = document.createElement("a")
//   closeElement.classList.add("modal__close")

//   closeElement.addEventListener("click", function(event){
//     event.preventDefault();
//     body.removeChild(overlayElement);
//   })


//   overlayElement.appendChild(containerElement);
//   containerElement.appendChild(closeElement);
//   containerElement.appendChild(contentElement);
//   contentElement.appendChild(textElement);
//   textElement.appendChild(linkElement);

//   body.appendChild(overlayElement);
// })