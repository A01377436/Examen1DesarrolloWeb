const path = require("path");

//Proceso cuando se llame a la ruta 
exports.getPagina=(req,res)=>{
    //res.send('<h1>Formulario de consola</h1>');
    res.sendFile(path.join(__dirname,'..','views','pagina.html'));
}

exports.getValidacion=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','validacion.html'));
}

exports.postValidacion=(req,res)=>{
    console.log(req.body);
    if(req.body.anguloTriangulo1==90 || req.body.anguloTriangulo2==90 || req.body.anguloTriangulo3==90){
        res.json({TrianguloRectangulo:"Afirmativo"})
    }else{
        res.json({TrianguloRectangulo:"Negativo"})
    }
}