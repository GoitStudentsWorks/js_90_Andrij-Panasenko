import {renderCardShoppingBook} from "../js/shoppinglist-markup"

const bookShopping = document.querySelector('.header-menu-shop');
const stubBook = document.querySelector('.stub');
import {SHOPPING_LIST_STORAGE_KEY} from "./modal-pop-up/modal-pop-up";
export const infoBookParse = JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];


// Доставння зі сховища інфо та генерація карток

bookShopping.addEventListener('click', loadbook);

 function loadbook(event){
    event.preventDeefalt();
    
    if(infoBookParse = []){
        stubBook.classList.remove('visually-hidden');  
    }
    else{
        renderCardShoppingBook(infoBookParse);
    }
}
