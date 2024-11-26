const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;


app.use(cors());
app.use(express.json());


// let items = [
//   { id: 1, name: 'Item 1', description: 'This is item 1' },
//   { id: 2, name: 'Item 2', description: 'This is item 2' }
// ];


app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const item = items.find(item => item.id === parseInt(id));
  
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
  
    res.json(item);
  });


app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description
  };
  items.push(newItem);
  res.status(201).json(newItem);
});


app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
  

    const item = items.find(item => item.id === parseInt(id));
  
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
  

    item.name = name || item.name;
    item.description = description || item.description;
  
    res.json(item);
  });


app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(item => item.id === parseInt(id));

  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
