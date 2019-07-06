var id = location.search.split("=")[1];

 function detailCharter(id)
 {
   
      fetch("https://rickandmortyapi.com/api/character/" + id,{
          method: "GET"
      }).then((value) =>{
          return value.json();
      }).then((value) => {
        let name= document.getElementById("name");
        let status= document.getElementById("status");
        let gender= document.getElementById("gender");
        let origin= document.getElementById("origin");
        let species= document.getElementById("species");
       
        let imgDetail = document.getElementById("imgDetail");
        imgDetail.src = value.image;
        name.innerHTML =value.name;
        status.innerHTML =value.status;
        gender.innerHTML =value.gender;
        origin.innerHTML =value.origin.name;
        species.innerHTML =value.species;
      
         console.log(value);
      })

 }
 detailCharter(id);