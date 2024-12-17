const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

PORT = process.env.PORT || 3000;

app.get("/",(req,res) => {
    res.send("Hello");
});


app.get('/api/profile', (req, res) => {
    res.json({ name: 'John Doe', skills: ['JavaScript', 'React'] });
  });
  

app.listen(PORT,() => {
    console.log(`Port is up on ${PORT}`);
    
})