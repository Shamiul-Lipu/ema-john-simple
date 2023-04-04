const cartProdectsLoader = async () => {
    const loadedProdutcs = await fetch(`products.json`);
    const products = await loadedProdutcs.json();
    return products;
}

export default cartProdectsLoader;