//import { detailCharter } from "..Detail/detail.js"

var moduleList = (function () {
    return {
        getCaracter: function () {
            let listCharcter = document.getElementById("list-charcter");            
            var nextItem = 1;
            var loadCharcter = function () {
                fetch("https://rickandmortyapi.com/api/character/?page=" + nextItem, {
                    method: "GET"
                }).then((valueNext) => {
                    return valueNext.json();
                }).then((valueNext) => {
                    valueNext.results.forEach(element => {
                        let div = document.createElement("div");
                        div.className = "col-sm-4";
                        listCharcter.appendChild(div);
                        let charecterImg = document.createElement("img");
                        charecterImg.id = element.id;
                        charecterImg.className = "margin";
                        charecterImg.src = element.image;
                        let character = document.createElement("a");
                        character.href="../Detail/Detail.html?id=" + element.id;
                       // character.addEventListener("click",function(e){ getDetails(e.target.id)} );
                        character.append(charecterImg);
                        div.appendChild(character);
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

    function getDetails(id)
    {
        console.log(id);
        
    }

})();

moduleList.getCaracter();
