import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
  const url = 'https://official-joke-api.appspot.com/random_joke';
  
  https.get(url, (response) => {
    let data = '';

    // Collect data chunks
    response.on('data', (chunk) => {
      data += chunk;
    });

    // On end of response, parse and log the joke
    response.on('end', () => {
      try {
        const joke = JSON.parse(data);
        console.log(chalk.blue(`😂 Here's a joke for you:`));
        console.log(chalk.green(`${joke.setup}`));
        console.log(chalk.yellow(`${joke.punchline}`));
      } catch (err) {
        console.error(chalk.red('Error parsing joke data:', err.message));
      }
    });
  }).on('error', (err) => {
    console.error(chalk.red(`Error fetching joke: ${err.message}`));
  });
};

getJoke();  // Call the function
