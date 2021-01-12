import React from 'react'

const BucketContext = React.createContext({
    products: [],
    add: () => { },
    remove: () => { }
})



export default BucketContext;