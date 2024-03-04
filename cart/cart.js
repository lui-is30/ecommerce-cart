

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

export const add3Products=(aCart)=>{
    let newCart=addToCart(aCart,{
        name:'iphone',
        price:1500,
        qty:2
    })

     newCart=addToCart(aCart,{
        name:'galaxy',
        price:1000,
        qty:1
    })

     newCart=addToCart(aCart,{
        name:'huawei',
        price:800,
        qty:3
    })

    return newCart;
}


/**
 * Calcolo del totale da pagare "Get amount"
 */

export const getTotalAmount=(aCart)=>{
    const totalAmount=aCart.reduce((accumulator,currentItem)=>{
        return accumulator+(currentItem.price*currentItem.qty);
    },0);
    return totalAmount;
};


/**
 * Calcolo del totale quantita' prodotti "Get total qty"
 */
export const getTotalQty=(aCart)=>{
    const totalQty=aCart.reduce((accumulator,currentItem)=>{
        return accumulator+currentItem.qty;
    },0);
    return totalQty;
};