import queryString from 'query-string';

const API_URL = 'https://asos2.p.rapidapi.com/products/v2/';


const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ad61bf1f75mshea4051ecc540aaep124b23jsn6491bf0a5f9e',
        'x-rapidapi-host': 'asos2.p.rapidapi.com'
    }
};




const ProductService = {
    fetchProducts() {
        const params = {
            offset: '0',
            categoryId: '4209',
            limit: '16',
            store: 'US',
            country: 'US',
            currency: 'USD',
            sort: 'freshness',
            lang: 'en-US',
            sizeSchema: 'US'
        };

        const searchParams = queryString.stringify(params);

        return fetch(API_URL + 'list' + '?' + searchParams, options).then((response) => response.json());
    },
    fetchProduct(id = '9851612') {
        const params = { id, store: 'US', sizeSchema: 'US', lang: 'en-US', currency: 'USD' }
        const searchParams = queryString.stringify(params);

        return (
            fetch('https://asos2.p.rapidapi.com/products/v3/detail' + '?' + searchParams, options)
                .then((response) => response.json())
        );
    }
}


export default ProductService;
