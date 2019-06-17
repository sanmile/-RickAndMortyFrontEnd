fetch("https://rickandmortyapi.com/api/character/1,12,3",{
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
