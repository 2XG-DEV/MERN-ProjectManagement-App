import bcrypt from "bcryptjs";

const users = [
  {
    image: "./assets/user-images/image-suzanne.jpg",
    name: "Suzanne Chang",
    username: "upbeat1811",
    password: bcrypt.hashSync("suzanne"),
    email: "suzanne@doubleg.com",
  },
  {
    image: "./assets/user-images/image-victoria.jpg",
    name: "Victoria Mejia",
    username: "arlen_the_marlin",
    password: bcrypt.hashSync("victoria"),
    email: "victoria@doubleg.com",
  },
  {
    image: "./assets/user-images/image-ryan.jpg",
    name: "Ryan Welles",
    username: "voyager.344",
    password: bcrypt.hashSync("ryan123"),
    email: "ryan123@doubleg.com",
  },
  {
    image: "./assets/user-images/image-george.jpg",
    name: "George Partridge",
    username: "soccerviewer8",
    password: bcrypt.hashSync("george"),
    email: "george@doubleg.com",
  },
  {
    image: "./assets/user-images/image-jackson.jpg",
    name: "Jackson Barker",
    username: "countryspirit",
    password: bcrypt.hashSync("jackson"),
    email: "jackson@doubleg.com",
  },
  {
    image: "./assets/user-images/image-zena.jpg",
    name: "Zena Kelley",
    username: "velvetround",
    password: bcrypt.hashSync("zenakelly"),
    email: "zena@doubleg.com",
  },
  {
    image: "./assets/user-images/image-roxanne.jpg",
    name: "Roxanne Travis",
    username: "peppersprime32",
    password: bcrypt.hashSync("zenakelly"),
    email: "roxanne@doubleg.com",
  },
  {
    image: "./assets/user-images/image-javier.jpg",
    name: "Javier Pollard",
    username: "warlikeduke",
    password: bcrypt.hashSync("javierpo"),
    email: "javier@doubleg.com",
  },
  {
    image: "./assets/user-images/image-anne.jpg",
    name: "Anne Valentine",
    username: "annev1990",
    password: bcrypt.hashSync("annev1990"),
    email: "anne@doubleg.com",
  },
  {
    image: "./assets/user-images/image-elijah.jpg",
    name: "Elijah Moss",
    username: "hexagon.bestagon",
    password: bcrypt.hashSync("elijah"),
    email: "elijah@doubleg.com",
  },
  {
    image: "./assets/user-images/image-thomas.jpg",
    name: "Thomas Shelby",
    username: "bleakmidwinter",
    password: bcrypt.hashSync("peakyblinder"),
    email: "thomas@doubleg.com",
  },
  {
    image: "./assets/user-images/image-thomas.jpg",
    name: "James Skinner",
    username: "hummingbird1",
    password: bcrypt.hashSync("peakyblinder"),
    email: "james@doubleg.com",
  },
];

export default users;
