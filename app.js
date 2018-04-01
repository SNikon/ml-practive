import brain from 'brain.js';

const network = new brain.NeuralNetwork();

network.train([

  {input: [90, 230], output: [1]},
  {input: [30, 60], output: [0]},
  {input: [73, 250], output: [1]}
]);

const result = network.run([70, 200]);

console.log(result);


