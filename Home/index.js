var num1 = Math.floor(Math.random() * 20);
var num2 = Math.floor(Math.random() * 20);
var num3 = Math.floor(Math.random() * 20);
fetch("https://rickandmortyapi.com/api/character/"+num1+","+num2+","+num3,{
    method: "GET"
}).then((value) =>{
    return value.json();
}).then((value) => {
    value.forEach(element => {
        let div=document.createElement("div");
        let listCharcter = document.getElementById("listCharcter");
        div.className= "col-sm-4";
        listCharcter.appendChild(div);
        let charecterImg = document.createElement("img");
        charecterImg.src = element.image;
        div.appendChild(charecterImg);
    });
})
