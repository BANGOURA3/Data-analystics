function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      
console.log(data);



let themePrincipal = data.journal.articlePrincipal.theme;
console.log(themePrincipal);
let imagePrincipal = data.journal.articlePrincipal.image;
console.log(imagePrincipal);
let descriptionPrincipal = data.journal.articlePrincipal.description;
console.log(descriptionPrincipal);
let datePrincipal = data.journal.articlePrincipal.date;
console.log(datePrincipal);

function afficherTitreJournal() {
  let titreJournal = data.journal.nomJournal;
  console.log(titreJournal);

  let titreJournalId = document.getElementById("titreId") 
  console.log(titreJournalId);

  titreJournalId.insertAdjacentHTML("beforeend", titreJournal);
} 
afficherTitreJournal();

function afficherLesThemes() {
  let themes = data.journal.themes;
  console.log(themes);

  themes.forEach(element => {
    let nomDeTheme = element.nom;
    console.log(nomDeTheme);
    let listDeThemes = ` <ul id= "themes">
    <li>
          <a href="">${nomDeTheme}</a>
    </li>
  </ul>`;

  let themeId = document.getElementById("themes") 
  console.log(themeId);

  themeId.insertAdjacentHTML("beforeend", listDeThemes);
  });
}

afficherLesThemes();


function afficherArticlePrincipal() {
  let articlePrincipal = data.journal.articlePrincipal;
console.log(articlePrincipal);

 let titreArticlePrincipal = data.journal.articlePrincipal.titre;
console.log(titreArticlePrincipal);

let descriptionArticlePrincipal = data.journal.articlePrincipal.description;
console.log(descriptionArticlePrincipal);

let themeArticlePrincipal = data.journal.articlePrincipal.theme;
console.log(themeArticlePrincipal);

let dateArticlePrincipal = data.journal.articlePrincipal.date;
console.log(dateArticlePrincipal);


let imageArticlePrincipal = data.journal.articlePrincipal.image;
console.log(imageArticlePrincipal);

let articlePrincipalId = document.getElementById("container") 
console.log(articlePrincipalId);

let AllarticlePrincipal = `<div id="container">
<div>
<img id="imageContainer" src="${
  imageArticlePrincipal
 }" alt="">
 <h2>${titreArticlePrincipal
}</h2>
      <h3>${dateArticlePrincipal} - ${themeArticlePrincipal}</h3>
   <p>${
    descriptionArticlePrincipal
   }
   </p>
</div>
    <div  class="button2">
      <a href="#">Lire l'article</a>
    </div>
</div>`;

articlePrincipalId.insertAdjacentHTML("beforeend", AllarticlePrincipal);
  
}

afficherArticlePrincipal();


function afficherLesArticles() {
  let articles = data.journal.articles;
  console.log(articles);

  articles.forEach(element => {



    let titreArticleTableau = element.titre;
console.log(titreArticleTableau);

let themeArticleTableau = element.theme;
console.log(themeArticleTableau);

let imageArticleTableau = element.image;
console.log(imageArticleTableau);

let dateArticleTableau = element.date;
console.log(dateArticleTableau);


    let listDesArticles = ` <div class="text">
    <img class="articles" src="${imageArticleTableau}" alt=""/>
    <h2>${titreArticleTableau}</h2>
    <h3>${themeArticleTableau} - ${dateArticleTableau}</h3>
  
    <div  class="button2">
      <a href="#">Lire l'article</a>
    </div>
 </div>
`;

let afficherArticleId = document.getElementById("presentation") 
console.log(afficherArticleId);


afficherArticleId.insertAdjacentHTML("beforeend", listDesArticles);
  });

}

afficherLesArticles();



function auteurs() {
let  auteurs = data.journal.auteurs
console.log(auteurs);
  auteurs.forEach(element => {
   let auteursId = document.getElementById("auteur")  
console.log(auteursId);    
let auteurNom = element.prenom
console.log(auteurNom);
let typeExperience = element.typeExperience
console.log(typeExperience);
let presentation =element.presentation
console.log(presentation);
let imageAuteurs = element.image;
console.log(imageAuteurs);


let auteursAll = `<div>
<h3>${auteurNom}</h3>
<h4>${typeExperience}</h4>
<p>${presentation}</p>
<img src="${imageAuteurs}"alt=""/>
</div>`
console.log(auteursAll);


auteursId.insertAdjacentHTML("beforeend", auteursAll)

  });
}
auteurs()


function afficherLesThemesfooter() {
  let themes = data.journal.themes;
  console.log(themes);
  themes.forEach(element => {
    let nomDetheme = element.nom;
    console.log(nomDetheme);
    let listDeThemes = 
    `<li>${nomDetheme}</li>`
  let themeId = document.getElementById("themefin") 
  console.log(themeId);

  themeId.insertAdjacentHTML("beforeend", listDeThemes);
  });
}

afficherLesThemesfooter();





       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici