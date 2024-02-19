// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Middleware to parse JSON request bodies

// Routes
const postRoutes = require('./routes/postRoutes');
app.use('/api', postRoutes); // Mounting postRoutes under the /api endpoint

// Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
