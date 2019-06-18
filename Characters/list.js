fetch("https://rickandmortyapi.com/api/character",{
    method: "GET"
}).then((value) =>{
    return value.json();
}).then((value) => {
    let listCharcter = document.getElementById("list-charcter");
    console.log(value.results.length);
    var nextItem = 1;
    var loadCharcter = function(){
        if(nextItem == 1)
        {    
            value.results.forEach(element => {
                let div=document.createElement("div");        
                div.className= "col-sm-4";
                listCharcter.appendChild(div);
                let charecterImg = document.createElement("img");
                charecterImg.className="margin";
                charecterImg.src = element.image;
                div.appendChild(charecterImg);
            });
        }else if(nextItem <= value.info.pages)
        {
            fetch("https://rickandmortyapi.com/api/character/?page=" + nextItem,{
                method: "GET"
            }).then((valueNext) =>{                
                return valueNext.json();
            }).then((valueNext) => {
                valueNext.results.forEach(element => {
                    let div=document.createElement("div");        
                    div.className= "col-sm-4";
                    listCharcter.appendChild(div);
                    let charecterImg = document.createElement("img");
                    charecterImg.className="margin";
                    charecterImg.src = element.image;
                    div.appendChild(charecterImg);
                });   
            })
            .catch(function(error) { console.log(error); });
        }
    }

    listCharcter.addEventListener('scroll', function() {
        if (listCharcter.scrollTop + listCharcter.clientHeight >= listCharcter.scrollHeight) {
            nextItem++;
            loadCharcter();
        }
      });

      loadCharcter();
})
