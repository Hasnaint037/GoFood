let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors');
let app=express();
let url='mongodb://127.0.0.1:27017/gofood';
let methods=require('./controller/endPoints');
mongoose.connect(url);
app.use(express.json());
app.use(cors());
app.post('/createUser',methods.createUser);
app.post('/loginUser',methods.loginUser);
app.get('/foodDetails',methods.foodDetails)
app.listen(5000);