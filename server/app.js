const express = require('express');
const app = express();

// I think the route for this should be 'localhost:5001/stickers/hello.png
app.use('/stickers', express.static('assets/images'));

const port = 5001;
app.listen(port, () => console.log('Server is listening on port', port));
