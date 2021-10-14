const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const department_controller = require('./department_controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb+srv://joao_valdevino:joao_valdevino@cluster0.jdibo.mongodb.net/aplicacao_http?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/departments', department_controller);

app.listen(3000);
