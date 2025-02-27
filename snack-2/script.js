const teams = [
  {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Lazio",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Atalanta",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Fiorentina",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Sampdoria",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Torino",
    puntiFatti: 0,
    falliSubiti: 0
  }
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


teams.forEach(team => {
  team.puntiFatti = getRandomInt(1, 100);
  team.falliSubiti = getRandomInt(1, 50);
});


console.log(teams);

const teamsFalli = teams.map(team => ({
  nome: team.nome,
  falliSubiti: team.falliSubiti
}));

console.log(teamsFalli);
