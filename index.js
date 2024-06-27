const express = require('express');
const app = express();

const PORT = 25565;  // Puerto especificado

app.get('*', (req, res) => {
    res.redirect('https://iduvid.github.io' + req.originalUrl);
});

app.listen(PORT, () => {
    console.log(`Servidor de redirección escuchando en el puerto ${PORT}`);
});
