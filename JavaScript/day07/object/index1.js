const youtubers = [
  {
    name: "슈카월드",
    subcribers: 3000000,
    genre: ["economics", "ent"],
  },
  {
    name: "침착맨",
    subcribers: 2100000,
    genre: ["game", "life", "ent"],
  },
  {
    name: "곽튜브",
    subcribers: 3000000,
    genre: ["journey", "ent"],
  },
];

// youtubers.forEach((v, i) => {
//   console.log(`${i}.유튜버:${v.name}`);
// });

// youtubers
//   .filter((v) => v.subcribers >= 2000000)
//   .forEach((v) => console.log(v.genre));

youtubers
  .map((v) => {
    v.subcribers = v.subcribers / 10000;
    v.genre = v.genre.map((v) => v.toUpperCase());
    return v;
  })

  .forEach((v) => console.log(v));
