const express= require ('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());

const connectDB= require('./config/db');
connectDB();

//Templete engine
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');
// Routes

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show')); // for the url
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
