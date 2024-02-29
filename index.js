/**
 * Permettere di inserire nel carrello dei prodotti "Add to cart"
 * Aggiungiamo 3 prodotti differenti nel carrello
 * Calcolo del totale da pagare "Get amount"
 * Calcolo del totale quantita' prodotti "Get total qty"
 * funzionalita' che svuota il carrello "Reset cart" 
 */

let cart = [];

/**
 * Permettere di inserire nel carrello dei prodotti "Add to cart"
 * Input: prodotto
 * 
 */
const addToCart = (aCart, prodotto) => {
    aCart.push(prodotto);
    return aCart;
}

/**
 * Aggiungiamo 3 prodotti differenti nel carrello
 * input: il carrello
 * output: carrello con i nuovi 3 prodotti
 */

const add3Products=(aCart)=>{
    let newCart=addToCart(aCart,{
        name:'iphone',
        price:1500,
        qty:2
    })

     newCart=addToCart(cart,{
        name:'galaxy',
        price:1000,
        qty:1
    })

     newCart=addToCart(cart,{
        name:'huawei',
        price:800,
        qty:3
    })

    return newCart;
}

cart=add3Products(cart);
//console.log(cart);

/**
 * Calcolo del totale da pagare "Get amount"
 */

const getTotalAmount=(aCart)=>{
    const totalAmount=aCart.reduce((accumulator,currentItem)=>{
        return accumulator+(currentItem.price*currentItem.qty);
    },0);
    return totalAmount;
};

const amountToPay=getTotalAmount(cart);
console.log(amountToPay);



