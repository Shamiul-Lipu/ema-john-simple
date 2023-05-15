import { getShoppingCart } from "../utilities/fakedb";

const cartProdectsLoader = async () => {
    const loadedProdutcs = await fetch(`http://localhost:5000/products`);
    const products = await loadedProdutcs.json();

    // if car data is in database, have to use async awit
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
        // previously added product
        const addedProduct = products.find(pd => pd._id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}

export default cartProdectsLoader;