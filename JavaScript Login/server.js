const express = require('express');
const app = express();

// Server static files
app.use(express.static('public/css'));
app.use(express.static('public/js'));

app.get('/', (request, response) => {
    response.sendFile('index.html', {root: __dirname + '/public/views' });
});

app.listen(8080, () => {
    console.log(`Listening on port 8080`);
})