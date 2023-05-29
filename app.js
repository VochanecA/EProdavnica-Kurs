const path = require('path');
const express = require('express');
const authRoutes = require('./routes/auth.routes');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(authRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server radi na portu ${port}`);
  console.log(__dirname);
});
