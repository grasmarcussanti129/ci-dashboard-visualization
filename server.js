const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 route handler
app.use((req, res) => {
    res.status(404).send('404: Page Not Found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});