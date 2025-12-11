const express = require('express');
const NepaliDate = require('nepali-date');

const app = express();
const port = 3000;

// Route to convert AD to BS
app.get('/ad2bs', (req, res) => {
  const { date } = req.query; // Expect date in 'yyyy-mm-dd' format
  
  if (!date) {
    return res.status(400).json({ error: 'Date query parameter is required' });
  }

  try {
    const [year, month, day] = date.split('-');
    const nepaliDate = new NepaliDate(`${year}-${month}-${day}`); // Convert AD to BS
    const bsDate = nepaliDate.format('YYYY-MM-DD'); // Get BS formatted date
    res.json({ ad: date, bs: bsDate });
  } catch (error) {
    res.status(500).json({ error: 'Invalid date format or unable to convert' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
