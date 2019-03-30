const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const postsRouter = require('./blog-post-router');

app.use('/blog-posts/api', jsonParser, postsRouter);

app.listen(8080, () => {
	console.log('Server running in port 8080');
});
