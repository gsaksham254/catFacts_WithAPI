const URL = "https://cat-fact.herokuapp.com/facts";
const Button = document.querySelector(".btn");
const Text = document.querySelector(".fact");
const Photo = document.querySelector(".cat");
const test = async ()=>{
    let response = await fetch(URL);
    let data = await response.json();
    Button.addEventListener("click", ()=>{
        let Stat =`Status: ${response.status}`;
        let i = Math.floor(Math.random() * data.length);
        Text.innerHTML = `${data[i].text}`;
        console.log(data[i].text);
        Photo.classList.add("catstyle");
        Photo.src=`https://http.cat/${response.status}`
    })
}
test();