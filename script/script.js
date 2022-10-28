const cardButton = document.querySelectorAll(".card__button");


cardButton.forEach(function(btn){
    console.log(btn)
    btn.addEventListener('click', function(e) {
        if (btn.classList.contains('card__button-green')) {
            e.target.classList.remove('card__button-green');
            btn.textContent = "Использовать скидку";
        } else {
            e.target.classList.add('card__button-green');
            btn.textContent = "Уже использовано";
        }
    } );
});

const info = document.querySelector(".option__info");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");

info.addEventListener('click', function() {
    popup.classList.add("popup__opened")
})

popupCloseButton.addEventListener('click', function() {
    popup.classList.remove("popup__opened")
})
