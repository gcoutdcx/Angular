var router = require('./router');

var app = router(3412);

var operadoras = [
    { nome: "Oi", codigo: "14", categoria: "Celular", preco: 2 },
    { nome: "Vivo", codigo: "15", categoria: "Celular", preco: 3 },
    { nome: "Tim", codigo: "41", categoria: "Celular", preco: 2 },
    { nome: "GVT", codigo: "25", categoria: "Fixo", preco: 1 },
    { nome: "Embratel", codigo: "21", categoria: "Fixo", preco: 3 },
];

var contatos = [
    { nome: ("Allyson"), telefone: "9999-1111", operadora: operadoras[1], data: new Date() },
    { nome: ("Maria"), telefone: "9999-2222", operadora: operadoras[2], data: new Date() },
    { nome: ("Julia"), telefone: "9999-3333", operadora: operadoras[3], data: new Date() },
];

app.interceptor(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.interceptor(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=UTF=8');
    next();
});

app.get('/operadoras', function (req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get('/contatos', function (req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.post('/contatos', function (req, res) {
    var contatos = req.body;
    contatos.push(JSON.parse(contato));
    res.end();
});

app.options('/contatos', function (req, res) {
    res.end();
});