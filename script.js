async function get() {
  const response = await fetch("https://www.boredapi.com/api/activity/");
  const data = await response.json();
  console.log(data);
  console.log(data.activity);
  console.log(data.type);

  console.log((document.getElementById("test").innerText = data.activity));
}

let alrik = {
  age: 31,
  name: "Alrik He",
  job: "teacher",
};
