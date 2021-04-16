//declaration variable pour mettre key et value dans le local storage
let produitLocal = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocal);

// affichage produits panier-- selection classe ou injection code html
const produitPanier = document.querySelector("#panier");


let structureProduitPanier =[];
// si panier vide..afficher "panier vide"(=== null)
if(produitLocal=== null ||produitLocal==0 ){
    const panierVide = 
`<div class=" col-sm-6 col-lg-6 themed-grid-col">
    <h2> Le panier est vide</h2>
</div>`;

produitPanier.innerHTML = panierVide;

} else{
    // si panier pas vide : afficher produits dans local storage
    
    
    for (let l= 0; l < produitLocal.length; l++) {
        //console.log(produitLocal.length);  
  structureProduitPanier += 
        `<div class="row mb-3">     
            <div class=" col-12">    
                <h2 id="name">${produitLocal[l].name}</h2> 
                <p id="price">Prix: ${produitLocal[l].price} €</p> 
                <p id = "couleur" >Couleur : ${produitLocal[l].option_couleur}</p>
                <p id = "quantité" >Quantité : ${produitLocal[l].option_quantité}</p>  
                <button class="btn-supprimer">Supprimer </button>
            </div>
            <div class="col-12">  
                <h2 id = "montant"> Montant total :</h2>
                
            </div>   
        </div>  `;            
}

//if(l == produitLocal.length){
    // injection html dans la page panier
    produitPanier.innerHTML = structureProduitPanier;
    } 
//}
//------------------------------fin affichage produits panier--------------------------------------------------


// ---------------------creer bouton supprimer l'article----------------------------------------
//selection des references des boutons btn-supprimer

let btn_supprimer = document.querySelectorAll(".btn-supprimer");
console.log(btn_supprimer);

for (let m = 0; m < btn_supprimer.length; m++){
    btn_supprimer[m].addEventListener("click" ,(event) =>{
event.preventDefault();

// selection id qui va etre supprimer en cliquant sur le bouton
let id_select_suppression = produitLocal[m].id;
console.log("id_select_suppression");
console.log(id_select_suppression);

//methode filter pour selectionner ce qu il faut garder et sup le reste
produitLocal = produitLocal.filter( el => el.id !== id_select_suppression);
    console.log(produitLocal);
   
// on envoie la variable dans le local storage
// transformation en format JSON et envoi dans la key "produit" du local Storage
localStorage.setItem("produit", JSON.stringify(produitLocal)
);  

// creer alerte pour avertir de la suppression du produit et rechargement de la page
alert("produit supprimé du panier");
window.location.href = "panier.html";
 })
}

//------------BOUTON POUR VIDER COMPLETEMENT LE PANIER----------------
// code HTML du bouton
const btn_tout_supprimer = `
<button class = "btn_tout_supprimer"> Vider le panier</button>
`;

//insertion du bouton dans HTML du panier
produitPanier.insertAdjacentHTML("beforeend",btn_tout_supprimer);

//selection reference du bouton
const btn_sup = document.querySelector(".btn_tout_supprimer");
console.log(btn_sup);

// ------suppression key "produit" du localstorage--------
btn_sup.addEventListener('click', (e) => { e.preventDefault;

    //.removeItem pour vider localstorage
    localStorage.removeItem("produit");
    alert("le panier est vidé");

    //rechargement page
    window.location.href="panier.html";
});
//---------------FIN POUR LE BOUTON-------------------------

//***********MONTANT TOTAL********************* */

// variable pour mettre les prix qui sont dans le panier
let prixTotal = [];

// chercher les prix du panier avec boucle 
for (let n = 0; n < produitLocal.length; n ++){
    let prixProduitsPanier = produitLocal[n].price;

// mettre prix dans variable "prixTotal"
prixTotal.push(prixProduitsPanier)
}

// addition des prix -- methode reduce
const reducer = (accumulator,currentValue)=> accumulator+currentValue;
console.log(reducer);
const total = prixTotal.reduce(reducer);
console.log(total);

// code HTML pour afficher prix total
const affichPrixTotal = `
<div class = "prix_total"> Prix total :${total}€ </div>
`
//injection HTML dans page panier
produitPanier.insertAdjacentHTML("beforeend", affichPrixTotal);