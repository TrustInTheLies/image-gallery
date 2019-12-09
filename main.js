const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  },
  {
    name: "Нургуш",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg"
  },
  {
    name: "Тулиновка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg"
  },
  {
    name: "Остров Желтухина",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg"
  },
  {
    name: "Владивосток",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg"
  }
];
const edit = document.querySelector(".user-info__edit");
const places = document.querySelector(".places-list");
const formOpen = document.querySelector(".user-info__button");
const info = document.querySelector(".popup_edit");
const form = document.querySelector(".popup_addcard");
const formClose = document.querySelector(".popup__close");
const editClose = document.querySelector(".popup__close_edit");
const inputName = document.querySelector(".popup__input_type_name");
const inputLink = document.querySelector(".popup__input_type_link-url");
const name = document.querySelector(".user-info__name");
const job = document.querySelector(".user-info__job");
const nameValue = document.querySelector(".popup__input_type_user-name");
const jobValue = document.querySelector(".popup__input_type_user-job");
nameValue.value = name.textContent;
jobValue.value = job.textContent;

function createCard(name, link) {
  return `<div class="place-card">
                <div class="place-card__image" style="background-image: url(${link})">
                    <button class="place-card__delete-icon"></button>
                </div>
                <div class="place-card__description">
                    <h3 class="place-card__name">${name}</h3>
                    <button class="place-card__like-icon"></button>
                </div>
             </div>`;
}

function renderImages() {
  for (let index = 0; index < initialCards.length; index++) {
    places.insertAdjacentHTML(
      "beforeend",
      createCard(initialCards[index].name, initialCards[index].link)
    );
  }
  return places;
}

function addCard(event) {
  event.preventDefault();
  places.insertAdjacentHTML(
    "beforeend",
    createCard(inputName.value, inputLink.value)
  );
  form.classList.remove("popup_is-opened");
}

function changeInfo(event) {
  event.preventDefault();
  name.textContent = nameValue.value;
  job.textContent = jobValue.value;
  info.classList.remove("popup_edit_is-opened");
}

function cardFormToggle() {
  form.classList.toggle("popup_is-opened");
}

function infoFormToggle() {
  info.classList.toggle("popup_edit_is-opened");
}

function likeOrDelete(event) {
  if (event.target.classList.contains("place-card__like-icon")) {
    event.target.classList.toggle("place-card__like-icon_liked");
  }
  if (event.target.classList.contains("place-card__delete-icon")) {
    event.currentTarget.removeChild(event.target.closest(".place-card"));
  }
}

renderImages();

formOpen.addEventListener("click", cardFormToggle);

formClose.addEventListener("click", cardFormToggle);

editClose.addEventListener("click", infoFormToggle);

edit.addEventListener("click", infoFormToggle);

places.addEventListener("click", likeOrDelete);

form.addEventListener("submit", addCard);

info.addEventListener("submit", changeInfo);
