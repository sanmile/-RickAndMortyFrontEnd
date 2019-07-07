

let home = document.getElementById("home");
let listAll = document.getElementById("list-charcter");
let btnViewAll = document.getElementById("btn-view-all");
let getHome = document.getElementById("get-home");
let getListCharcter = document.getElementById("get-list-charcter");
let details = document.getElementById("details");

if (getHome.className == "active") defaultCharters();


function defaultCharters() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var num3 = Math.floor(Math.random() * 10);
    fetch("https://rickandmortyapi.com/api/character/" + num1 + "," + num2 + "," + num3, {
        method: "GET"
    }).then((value) => {
        return value.json();
    }).then((value) => {
        let listCharcter = document.getElementById("default-charcter");      
         value.forEach(element => {
            createImage(listCharcter, element);
         });
    })
}

function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

btnViewAll.addEventListener("click", function (event) {
    event.preventDefault();
    getListCharcter.classList.add('active');
    getHome.classList.remove('active');
    home.style.display = "none";
    listAll.style.display = "";
    viewAll();
});

getHome.addEventListener("click", function () {
    event.preventDefault();
    getHome.classList.add('active');
    getListCharcter.classList.remove('active');
    home.style.display = "";
    listAll.style.display = "none";
    details.classList.add("hideDiv");
});

getListCharcter.addEventListener("click", function () {
    event.preventDefault();
    getListCharcter.classList.add("active");
    getHome.classList.remove('active');
    home.style.display = "none";
    listAll.style.display = "";
    details.classList.add("hideDiv");
    viewAll();
});

function viewAll() {
    let listCharcter = document.getElementById("list-charcter");
    if (listCharcter.children.length == 0) {
        var nextItem = 1;
        var loadCharcter = function () {
            fetch("https://rickandmortyapi.com/api/character/?page=" + nextItem, {
                method: "GET"
            }).then((valueNext) => {
                return valueNext.json();
            }).then((valueNext) => {
               
                valueNext.results.forEach(element => {
                    createImage(listCharcter, element);
                });
            })
                .catch(function (error) { console.log(error); });
        }

        listCharcter.addEventListener('scroll', function () {
            if (listCharcter.scrollTop + listCharcter.clientHeight >= listCharcter.scrollHeight) {
                nextItem++;
                loadCharcter();
            }
        });

        loadCharcter();
    }
}

function getDetails(id) {
    fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: "GET"
    }).then((value) => {
        return value.json();
    }).then((value) => {
        let name = document.getElementById("name");
        let status = document.getElementById("status");
        let gender = document.getElementById("gender");
        let origin = document.getElementById("origin");
        let species = document.getElementById("species");

        let imgDetail = document.getElementById("imgDetail");
        imgDetail.src = value.image;
        name.innerHTML = value.name;
        status.innerHTML = value.status;
        gender.innerHTML = value.gender;
        origin.innerHTML = value.origin.name;
        species.innerHTML = value.species;
        details.classList.remove("hideDiv");
        listAll.style.display = "none";
        home.style.display="none";
    })
}

function createImage(listCharcter,element) {
        let div = document.createElement("div");
        div.className = "col-sm-4";
        listCharcter.appendChild(div);
        let charecterImg = document.createElement("img");
        charecterImg.id = element.id;
        charecterImg.className = "margin";
        charecterImg.src = element.image;
        let character = document.createElement("a");
        character.addEventListener("click", function (e) { getDetails(e.target.id) });
        character.append(charecterImg);
        div.appendChild(character);
}