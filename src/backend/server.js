const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'fitness',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

const generateToken = (userId) => {
  return jwt.sign({ userId }, 'tajnikljuc', { expiresIn: '1h' }); 
};

app.post('/logout', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; 

  if (token) {
  
    res.json({ message: 'Logout successful' });
  } else {
    res.status(401).json({ message: 'Invalid token' });
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM user_details WHERE email = ? AND password = ?', [email, password], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Error during login' });
    } else if (results.length > 0) {
      const user = results[0];
      const userId = user.user_id;
      const token = generateToken(userId);
      res.json({ token, userId });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM user_details WHERE email = ?', [email], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Error checking existing email' });
    } else if (results.length > 0) {
      res.status(400).json({ message: 'Email already exists' });
    } else {
      connection.query('INSERT INTO user_details (email, password) VALUES (?, ?)', [email, password], (error, insertResult) => {
        if (error) {
          res.status(500).json({ message: 'Error during registration' });
        } else {
          const userId = insertResult.insertId;
          const token = generateToken(userId);
          res.json({ token, userId });
        }
      });
    }
  });
});

app.post('/save-bmi', (req, res) => {
  const { user_id, bmi } = req.body;
  connection.query('UPDATE user_bmi SET bmi = ? WHERE user_id = ?', [bmi, user_id], (error, updateResult) => {
    if (error) {
      console.error('Error updating BMI:', error);
      res.status(500).json({ message: 'Error updating BMI' });
    } else {
      if (updateResult.affectedRows > 0) {
        res.json({ message: 'BMI updated successfully' });
      } else {
        res.status(404).json({ message: 'User BMI not found' });
      }
    }
  });
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
