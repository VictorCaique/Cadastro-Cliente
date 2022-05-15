export default function usuario(app){
    app.get("/login", (req, res) => {
        if(req.query.fail){
            res.render('usuario/Login', {mensagemLogin: 'Usuário e/ou senha incorretos!'})
        }else{
            res.render('usuario/Login', {mensagemLogin: null})
        }
    })

    app.post("/login/executar", (req,res) => {
        if(req.body.nome === "victor" && req.body.senha === "123456"){
            res.render('/lista/usuario', {mensagem: 'cadsatrado'});
        }else{
            res.render('login/?fail=true');
        }
    })
}