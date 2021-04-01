//recuperation chaine de requete dans url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);


// methode2 pour extraire l 'id
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);
const id = urlSearchParams.get("id");
console.log(id);

//affichage du produit selectionné par son id
//methode 1 avec fetch en mettant l'id a la fin de l url
const response = fetch (`http://localhost:3000/api/teddies/${id}`);
response.then(async(data)=>{

    const article = await data.json();
    //console.log(article);
    //console.log(response);
   //for (const propt in article){
     //console.log(article[propt]); 
     //console.log(article.colors) ;  

     
   
   //for (const couleur of article.colors){
     //console.log(couleur); 
   //}
   //boucle couleurs
   //let optionCouleur = [""];
   //article.colors.forEach((couleur) =>{
    //console.log(couleur);
    
   

//preparation structure HTML pour affichage produit
  document.getElementById("produit").innerHTML += 
`<div class="row mb-3">     
    <div class=" col-sm-6 col-lg-6 themed-grid-col"> 
      <h2 id="name">${article.name}</h2> 
      <p id="id">Reférence:${article._id}</p>
      <p id="price">Prix: ${article.price/100} €</p> 

<form>
    <label id ="labelOptions"> Choisir la couleur:
      <select name="choix" id="choix">    
      </select>

  </label> 
  <label id="selectQuantity"> Quantité
    <select name ="quantity" id ="choose">
        <option value="1">1</option>
                
   </select> 
</label>
</form>
</div>

<div class="col-sm-6 col-lg-6 themed-grid-col"> 
  <a href="./produit.html?id=${'_id'}">
  <img width="300"  src = "${article.imageUrl}">
  <button id ="btn-envoyer" type="submit name="btn-envoyer">Ajouter au panier</button>
</div> `;

//adapter le formulaire au nombre d'option du produit
const optionCouleur = article.colors;
//ou utiliser const optionCouleur = article["colors"];
let structureOptions = [];
//console.log(optionCouleur);

// boucle for pour afficher options couleur
for(let j = 0; j < optionCouleur.length; j++){
  structureOptions = 
  structureOptions + 
 `<option value = "${j}">${optionCouleur[j]}  </option> 
 `;         
}
//console.log(structureOptions);

const choixCouleur = document.querySelector("#choix");
console.log(choixCouleur);
choixCouleur.innerHTML = structureOptions;
console.log(choixCouleur);



// selection id du formulaire
//const idForm = document.querySelector("#labelOptions");
//console.log(idForm);
//const choixCouleur =idForm;
//console.log(choixCouleur);


//selection bouton pour l'ajout au panier
const btnPanier = document.querySelector("#btn-envoyer");
console.log(btnPanier);

//ecouter le bouton
btnPanier.addEventListener("click",(event)=>{
  btnPanier.innerHTML = "cliqué";
}

);

}

);

