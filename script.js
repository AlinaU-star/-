const int = [
  {link: "0",
  name: "Алина всегда сможет чётко объяснить свою точку зрения"},
  {link: "1",
  name: "Алина смотрит в светлое нефильтрованное будущее"},
  {link: "2",
  name: "У тебе ещё есть сомнения, что она не самая крутая???"},
  {link: "3",
  name: "❤️"},
  {link: "4",
  name: "Здесь могла быть ваша реклама"},
  {link: "5",
  name: "Алина смотрит на красивую девочку в телефоне"},
  {link: "6",
  name: "Это фотошоп. Рядом с такой горячей девушкой - воды не бывает"},
  {link: "7",
  name: "*Думает*"},
  {link: "8",
  name: "Хвастается айфоном, потому что у всех крутых девочек есть айфоны"},
  {link: "9",
  name: "Мемы это её второе 'я'"},
  {link: "10",
  name: "бабаба"},
  {link: "11",
  name: "Алина не будет доставать тебя голосовыми"},
]


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

button = document.querySelector(".button1")
img = document.querySelector(".text3")
text = document.querySelector(".p2")

const num = getRandomInt(int.length)
img.style.backgroundImage = `url(../../images/${num}.jpg)`;
text.textContent = int[num].name;

button.addEventListener("click", () => {
  const num = getRandomInt(int.length)
  img.style.backgroundImage = `url(../../images/${num}.jpg)`;
  text.textContent = int[num].name;
})