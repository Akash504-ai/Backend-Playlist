import express from 'express';
const app = express();

const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
    },
    {
      id: 2,
      title: 'Another joke',
      content: 'Why don’t scientists trust atoms? Because they make up everything!'
    },
    {
      id: 3,
      title: 'Funny joke',
      content: 'Why did the bicycle fall over? Because it was two-tired!'
    },
    {
      id: 4,
      title: 'Hilarious joke',
      content: 'What do you call fake spaghetti? An impasta!'
    },
    {
      id: 5,
      title: 'Last joke',
      content: 'Why did the math book look sad? Because it had too many problems.'
    }
  ];
  res.send(jokes);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Check it out here ---> http://localhost:${port}`);
})
