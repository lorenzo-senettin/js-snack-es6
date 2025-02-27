const bikes = [
  {
    nome: "Speedster",
    peso: 12000
  },
  {
    nome: "Mountain King",
    peso: 13000
  },
  {
    nome: "Road Runner",
    peso: 11500
  },
  {
    nome: "City Cruiser",
    peso: 12500
  },
  {
    nome: "Urban Glide",
    peso: 11000
  },
  {
    nome: "Trail Blazer",
    peso: 13500
  },
  {
    nome: "Comet",
    peso: 10500
  },
  {
    nome: "Flash",
    peso: 11800
  },
  {
    nome: "Veloce",
    peso: 11200
  },
  {
    nome: "Eco Rider",
    peso: 10800
  }
];

const bikesLight = []
const bikesHeavy = []

for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].peso > 12000) {
    bikesHeavy.push(bikes[i]);
  } else {
    bikesLight.push(bikes[i]);
  }
}

console.log(bikesLight);
