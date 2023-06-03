const path = require('path');
const express = require('express');
//dodati kompresiju
const compression = require('compression');
const csrf = require('csurf');
const expressSession = require('express-session');
const createSessionConfig = require('./config/session');
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const checkAuthStatusMiddleware = require('./middlewares/check-auth');
const protectRoutesMiddleware = require('./middlewares/protect-routes');
const cartMiddleware = require('./middlewares/cart');
const authRoutes = require('./routes/auth.routes');
const productsRoutes = require('./routes/products.routes');
const baseRoutes = require('./routes/base.routes');
const adminRoutes = require('./routes/admin.routes');
const cartRoutes = require('./routes/cart.routes');

const app = express();
app.use(compression());
const sessionConfig = createSessionConfig();

// omoguci async/await i  optimizuj middleware raspored
app.use(express.static('public'));
app.use('/products/assets', express.static('product-data'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(expressSession(sessionConfig));
app.use(csrf());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Optimizuj konekciju ka bazi
db.connectToDatabase()
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(' Greska u konekciji ka bazi!');
    console.log(error);
  });

// Implementiraj middleware-ove spicificne optimizacije
app.use(cartMiddleware);
app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

// Optimizuj view engine i reneder template-a
app.use(baseRoutes);
app.use(authRoutes);
app.use(productsRoutes);
app.use('/cart', cartRoutes);
app.use(protectRoutesMiddleware);
app.use('/admin', adminRoutes);

// Omoguci kompresiju compression
app.use(require('compression')());

app.use(errorHandlerMiddleware);