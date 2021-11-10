const client = require("./client")

module.exports = {
    client,
    ...require('./components/users'),
    ...require('./components/products'),
    ...require('./components/orders'),
    ...require('./components/uses'),
    ...require('./components/orders_products'),
    ...require('./components/products_uses'),
    ...require('./components/price')
}