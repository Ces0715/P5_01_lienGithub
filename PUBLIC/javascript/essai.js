
/*recuperation données*/
const produits = fetch("http://localhost:3000/api/teddies");
produits.then((response) =>{
  console.log(response);
  const teddiesData = response.json();
  console.log(teddiesData);
   
})


/*Norbert*/
  teddiesData.then((utilisateur) => {
    console.log(utilisateur[0]);
    const txtName = utilisateur[0].name;
    console.log(txtName);
    const txtDescription = utilisateur[0].description;
    console.log(txtDescription);
    const txtPrice = utilisateur[0].price;
    console.log(txtPrice);
    const txtImage = utilisateur[0].imageUrl;
    console.log(txtImage);
    const txtColors = utilisateur[0].colors;
    console.log(txtColors);
    const txtId = utilisateur[0]._id;
    console.log(txtId);

 /*Arold*/
    console.log(utilisateur[1]);
    const txtName1 = utilisateur[1].name;
    console.log(txtName1);
    const txtDescription1 = utilisateur[1].description1;
    console.log(txtDescription1);
    const txtPrice1 = utilisateur[1].price;
    console.log(txtPrice1);
    const txtImage1 = utilisateur[1].imageUrl;
    console.log(txtImage1);
    const txtColors1 = utilisateur[1].colors;
    console.log(txtColors1);
    const txtId1 = utilisateur[1]._id;
    console.log(txtId1);

    /*Lenny carl*/
    console.log(utilisateur[2]);
    const txtName2 = utilisateur[2].name;
    console.log(txtName2);
    const txtDescription2 = utilisateur[2].description;
    console.log(txtDescription2);
    const txtPrice2 = utilisateur[2].price;
    console.log(txtPrice2);
    const txtImage2 = utilisateur[2].imageUrl;
    console.log(txtImage2);
    const txtColors2 = utilisateur[2].colors;
    console.log(txtColors2);
    const txtId2 = utilisateur[2]._id;
    console.log(txtId2);

    /*Gustav*/
    console.log(utilisateur[3]);
    const txtName3 = utilisateur[3].name;
    console.log(txtName3);
    const txtDescription3 = utilisateur[3].description;
    console.log(txtDescription3);
    const txtPrice3 = utilisateur[3].price;
    console.log(txtPrice3);
    const txtImage3 = utilisateur[3].imageUrl;
    console.log(txtImage3);
    const txtColors3 = utilisateur[3].colors;
    console.log(txtColors3);
    const txtId3 = utilisateur[3]._id;
    console.log(txtId3);


    /*Garfunkel*/
    console.log(utilisateur[4]);
    const txtName4 = utilisateur[4].name;
    console.log(txtName4);
    const txtDescription4 = utilisateur[4].description;
    console.log(txtDescription4);
    const txtPrice4 = utilisateur[4].price;
    console.log(txtPrice4);
    const txtImage4 = utilisateur[4].imageUrl;
    console.log(txtImage4);
    const txtColors4 = utilisateur[4].colors;
    console.log(txtColors4);
    const txtId4 = utilisateur[4]._id;
    console.log(txtId4);


/*affichage */
const affichageColors =document.querySelector("#colors");
console.log(affichageColors);
const affichagePrice =document.querySelector("#price");
console.log(affichagePrice);
const affichageDescription =document.querySelector("#description");
console.log(affichageDescription);
const affichageName =document.querySelector("#name");
console.log(affichageName);
const affichageImage =document.querySelector("#image");
console.log(affichageImage);
const affichageId =document.querySelector("#id");
console.log(affichageId);


    /* affichege donnéees*/
    
    affichagePrice.innerHTML =txtPrice;
    affichagePrice.innerHTML =txtPrice1;
    affichagePrice.innerHTML =txtPrice2;
    affichagePrice.innerHTML =txtPrice3;
    affichagePrice.innerHTML =txtPrice4;

    affichageId.innerHTML =txtId;
    affichageId.innerHTML =txtId1;
    affichageId.innerHTML =txtId2;
    affichageId.innerHTML =txtId3;
    affichageId.innerHTML =txtId4;

    affichageDescription.innerHTML = txtDescription;
    affichageDescription.innerHTML = txtDescription1;
    affichageDescription.innerHTML = txtDescription2;
    affichageDescription.innerHTML = txtDescription3;
    affichageDescription.innerHTML = txtDescription4;
   
   
    affichageName.innerHTML =txtName;
    affichageName.innerHTML =txtName1;
    affichageName.innerHTML =txtName2;
    affichageName.innerHTML =txtName3;
    affichageName.innerHTML =txtName4;  
  });
  })

 









/*essai*/
function async (listeProduits) {
  const articles = await (getArticles)  
  displayArticles(articles)
  console.log (articles)
}

function getArticles(){
return fetch("http://localhost:3000/api/teddies")
.then(function(httpBodyResponse){  
  return httpBodyResponse.json()
})
.then(function(articles){
console.log(articles)

})
}
function displayArticles(){
  document.getElementsById("listeProduits")
}

let teddies = document.getElementById("teddies");
alert(teddies.innerHTML);
console.log(teddies);

/*essai*/
function async (listeProduits) {
    const articles = await (getArticles)  
    displayArticles(articles)
    console.log (articles)
  }
  
  function getArticles(){
  return fetch("http://localhost:3000/api/teddies")
  .then(function(httpBodyResponse){  
    return httpBodyResponse.json()
  })
  .then(function(articles){
  console.log(articles)
  
  }
  
  })
  
  })

  teddies.innerHTML += '<div class="row mb-3"><div class="col-sm-6 col-lg-6 themed-grid-col">       <div class=" col-sm-6 col-lg-6 themed-grid-col">' +teddiesData[i]+ '</div class>';

  let AllTeddies = ['teddy1', 'teddy2', 'teddy3', 'teddy4', 'teddy5'];
console.log(AllTeddies);
console.log(AllTeddies[0]);
console.log(AllTeddies[1]);
console.log(AllTeddies[2]);
console.log(AllTeddies[3]);
console.log(AllTeddies[4]);


for(let i = 0 ; i < AllTeddies.length  ; i++ ){
	console.log(AllTeddies[i]);
	let nom = AllTeddies[i].name;
	let couleur = AllTeddies[i].colors;
  let id = AllTeddies[i].id;
  let description = AllTeddies[i].description;
  let prix = AllTeddies[i].price;
	
}

let tabTeddies = [teddy1, teddy2, teddy3, teddy4, teddy5];



for (let i = 0; i < tabTeddies.length; i++) {
  console.log(tabTeddies[i]);
  let nom = tabTeddies[i].name;
  console.log(nom);
  let description = tabTeddies[i].description;
  console.log(description);
  teddies.innerHTML +=`<div class="row mb-3"><div class="col-sm-6 col-lg-6 themed-grid-col">      
   <div class=" col-sm-6 col-lg-6 themed-grid-col"> <h2 id="name">${tabTeddies[i].name } <p id="description">
   - ${tabTeddies[i].description }</div class>`;
  }



  try{
    /*recup data API*/
    let name = responseData.name;
    let _id = response._id;
    let imageUrl = response.imageUrl;
    let description = response.description;
    console.log(name);
    console.log(_id);
    console.log(imageUrl);
    console.log(description);
  
    for (let i = 0; i < name.length; i++){ 
      console.log(name[i].innerHTML) 
  }
  
    //affichage
    let affichage_name = document.querySelector("#name");
    affichage_name.innerHTML = name;
    
    let affichage_imageUrl = document.querySelector("#imageUrl");
    affichage_imageUrl.innerHTML = imageUrl;
    let affichage_description = document.querySelector("#description");
    affichage_description.innerHTML = description;
  
  
    for (let i = 0; i < name.length; i++){ 
      console.log(name[i].innerHTML) ;
     
  }
  
  } catch (err){
    console.log(err);




    /*Antoine info*/
function listeProduits(){
  console.log("test");
}
listeProduits();
fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));



/*recuperation données*/
const produits = fetch("http://localhost:3000/api/teddies");
produits.then (async (responseData) =>{
  console.log(responseData);

const articles =await responseData.json();
for(let i = 0; i < articles.length; i++){
  const article = articles[i];
  displayArticle(article)
}
console.log(articles);  
//données ok


function displayArticle(){
  document.getElementById("teddies").innerHTML +='<article class="teddy"><span id="name"></span><span id="_id"></span><span id="imageUrl"></span><span id="description"></span></article>'
}



/*declaration des teddies*/
let teddiesData = ['Norbert', 'Arold', 'Lenny et Carl', 'Gustav', 'Garfunkel'];
console.log(teddiesData);

/* lien avec html*/
let teddies = document.querySelector('#teddies');
console.log(teddies);

/*creation boucle*/
for (let i = 0; i < teddiesData.length; i++) {
  console.log(`Teddy ${teddiesData[i]}`);
  
  //console.log(teddiesData[i])
  
  
 // teddies.innerHTML += '<div class="row mb-3"><div class="col-sm-6 col-lg-6 themed-grid-col">       <div class=" col-sm-6 col-lg-6 themed-grid-col">' +teddiesData[i]+ '</div class>';

}


let teddy1 = {
  'name' : 'Norbert',
  'id' : '5be9c8541c9d440000665243',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_1.jpg',
  'price':'2900',
  'colors':'"Tan", "Chocolate", "Black", "White"',
};




let teddy2 = {
  'name' : 'Arold',
  'id' : '5beaa8bf1c9d440000a57d94',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_2.jpg',
  'price':'3900',
  'colors':'"Pale brown", "Dark brown", "White"',
}


let teddy3 = {
  'name' : 'Lenny and Carl',
  'id' : '5beaaa8f1c9d440000a57d95',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_3.jpg',
  'price':'5900',
  'colors':'" Brown"',
}


let teddy4 = {
  'name' : 'Gustav',
  'id' : '5beaabe91c9d440000a57d96',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_4.jpg',
  'price':'4500',
  'colors':'" Brown", "Blue", "Pink"',
}


let teddy5 = {
  'name' : 'Garfunkel',
  'id' : '5beaacd41c9d440000a57d97',
  'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'imageURL':'http://localhost:3000/images/teddy_5.jpg',
  'price':'5500',
  'colors':'" Beige", "Tan", "Chocolate"',
}


})



/*recuperation données*/
const produits = fetch("http://localhost:3000/api/teddies");
produits.then (async (responseData) =>{
  console.log(responseData);

const articles =await responseData.json();
for(let i = 0; i < articles.length; i++){
  const article = articles[i];
  console.log(article);
}
console.log(articles);  
//données ok

})