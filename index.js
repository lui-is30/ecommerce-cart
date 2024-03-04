
/**
 * Permettere di inserire nel carrello dei prodotti "Add to cart"
 * Aggiungiamo 3 prodotti differenti nel carrello
 * Calcolo del totale da pagare "Get amount"
 * Calcolo del totale quantita' prodotti "Get total qty"
 * funzionalita' che svuota il carrello "Reset cart" 
 */
import { add3Products,getTotalAmount,getTotalQty } from "./cart/cart.js";

let cart = [];
/**
 * Permettere di inserire nel carrello dei prodotti "Add to cart"
 * Input: prodotto
 * 
 */


cart=add3Products(cart);
console.log(cart);

/**
 * Calcolo del totale da pagare "Get amount"
 */


const amountToPay=getTotalAmount(cart);
console.log(amountToPay);

/**
 * Calcolo del totale quantita' prodotti "Get total qty"
 */

const amountToQty=getTotalQty(cart);
console.log(amountToQty);


/**
 * funzionalita' che svuota il carrello "Reset cart"
 */


cart=[];

console.log(cart);
