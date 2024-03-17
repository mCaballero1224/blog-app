const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Schema
const blogSchema = new mongoose.Schema({
    content: String
});

// Create a Model
const Blog = mongoose.model('Blog', blogSchema);

// API Endpoint for submitting blogs
app.post('/api/blogs', async (req, res) => {
    const blog = new Blog({
        content: req.body.content
    });

    try {
        await blog.save();
        res.status(201).send('Blog saved!');
    } catch (error) {
        res.status(400).send(error);
    }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
