import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'joke 1',
      content: 'this is first joke',
    },
    {
      id: 2,
      title: 'joke 2',
      content: 'this is second joke',
    },
    {
      id: 3,
      title: 'joke 3',
      content: 'this is third joke',
    },
  ];
  res.send(jokes);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
