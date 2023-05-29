// TEST 1

const path =rewuire('path');
const express= require ('express');
const authRoutes=reqire('./routes/auth.routes');
const app= express();
app.set('view engine', 'ejs');
app.set('views'), path.join(__dirname, 'views');

app.use(authRoutes);


app.listen(3000);
