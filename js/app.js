//First

const button = document.querySelector(button);
button.classlist.remove(button);

//Second
const section = document.querySelector("section");
const divBlock = document.createElement("div");
const img = document.createElement("img");

divBlock.innerHTML = `
  <img src="https://picsum.photos/id/1/200/300" alt="from js" />
  
`;

//Third
const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];
function renderCards(userArr) {
  const characterCard = userArr.map((el) => {});
}
