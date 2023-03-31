const express = require('express');
const path = require('path')// Require the path module
const bodyParser = require('body-parser');
const app = express();
const port = 8777;

const { getHomePage, getCreatePage, getEditPage, postCreateUser, postUpdateUser, postDeleteUser, postHandleUser } = require('./controllers/homeController')

//cấu hình view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//cấu hình file tĩnh 
app.use(express.static(path.join(__dirname, 'css')));

//Thiết lập middleware
app.use(bodyParser.urlencoded({ extended: true }));//thiết lập middleware để phân tích và đọc dữ liệu được gửi lên từ client dưới dạng urlencoded
app.use(bodyParser.json());//thiết lập middleware để phân tích và đọc dữ liệu được gửi lên từ client dưới dạng JSON

//route
//method get
app.get('/', getHomePage);
app.get('/create', getCreatePage);
app.get('/edit/:id', getEditPage);

//method post
app.post('/create-user', postCreateUser);
app.post('/update-user', postUpdateUser);
app.post('/delete-user/:id', postDeleteUser);
app.post('/handle-user', postHandleUser);

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
})
