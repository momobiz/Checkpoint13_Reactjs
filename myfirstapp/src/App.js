import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (


    <div className="App">
      <h1 class="club"> Bienvenue dans votre club Sport pour Tous </h1>
      <h3 class="inscrit"> Veuillez Remplir votre formulaire d'inscription </h3>
<div class="container">
  <form class="formulaire">
  <div class="card">
    <div class="card-header label00"> Formulaire d'inscription </div>
    <div class="card-body">
        <div class="form-group">
        <label for="nom" class="label0">Nom :</label>
        <input type="text" class="form-control" id="nom"></input>
        </div>

        <div class="form-group">
        <label for="prenom" class="label0">Prénom :</label>
        <input type="text" class="form-control" id="prenom"></input>
        </div>

        <div class="form-group">
        <label class="label0"> Sexe :</label><br/>
        <label class="checkbox-inline label01">
        <input type="checkbox" value=""></input> Male 
        </label>
        <label class="checkbox-inline">
        <input type="checkbox" value=""></input> Femelle
        </label>
        </div>
    
       
        <div class="form-group">
        <label for="email" class="label0"> Adresse Email :</label>
        <input type="email" class="form-control" id="email"></input>
         </div>

         <div class="form-group">
        <label for="pwd" class="label0"> Mot de Passe :</label>
        <input type="password" class="form-control" id="pwd"></input>
         </div>
         <button type="button" class="btn btn-primary">Envoyer</button>
         <button type="button" class="btn btn-danger">Effacer</button>
        



    </div>
    
    
  </div>
</form>
</div>
     
    </div>
  );
}

export default App;
