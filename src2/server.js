import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('src2'))

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
