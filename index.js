const express = require('express');
const path = require('path')// Require the path module
const bodyParser = require('body-parser');
const app = express();
const port = 8777;

//const SinhVien = require('./class_files/SinhVien');

const { getHomePage, getCreatePage, getEditPage, postCreateUser, postUpdateUser, postDeleteUser, postHandleUser } = require('./controllers/homeController')



//cấu hình view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//cấu hình file tĩnh 
app.use(express.static(path.join(__dirname, 'css')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//route
app.get('/', getHomePage);

app.get('/create', getCreatePage);

app.get('/edit/:id', getEditPage);

app.post('/create-user', postCreateUser);

app.post('/update-user', postUpdateUser);

app.post('/delete-user/:id', postDeleteUser);

app.post('/handle-user', postHandleUser);

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
})