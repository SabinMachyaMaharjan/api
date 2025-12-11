const express = require('express');
const NepaliDate = require('nepali-date');

const app = express();
const port = 3000;

app.get('/ad2bs', (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ error: 'Date query parameter is required' });
  }

  try {
    // AD → BS conversion happens here
    const np = new NepaliDate(new Date(date));

    const bs = np.format("YYYY-MM-DD"); // formatted BS date

    res.json({
      ad: date,
      bs: bs
    });

  } catch (err) {
    res.status(500).json({ error: "Invalid date or conversion failed" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
