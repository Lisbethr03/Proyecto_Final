const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', (_req,res)=>{
    res.send('Ruta de inicio de nuestro proyecto');
 })

app.listen(PORT,()=>{
    console.log (`Server on http://localhost:${PORT}`);
})