import React, { useState, useEffect } from 'react';

const Statistiques = () => {
  const [classement, setClassement] = useState([]);
  const [critere, setCritere] = useState('évaluation'); // Set default value here

  useEffect(() => {
    mettreAJourClassement(critere);
  }, [critere]);

  const handleCritereChange = (event) => {
    setCritere(event.target.value);
    mettreAJourClassement(event.target.value);
  };

  const mettreAJourClassement = (critere) => {
    let classementData = [];

    // Update the ranking based on the selected criterion
    if (critere === 'marqueuse') {
      classementData = [
        { place: 1, joueuse: 'Joueuse 1', nombre: 20, club: 'Club A' },
        { place: 2, joueuse: 'Joueuse 2', nombre: 15, club: 'Club B' },
        { place: 3, joueuse: 'Joueuse 3', nombre: 12, club: 'Club C' },
        { place: 4, joueuse: 'Joueuse 4', nombre: 10, club: 'Club D' },
      ];
    } else if (critere === 'passeuse') {
      classementData = [
        { place: 1, joueuse: 'Joueuse 1', nombre: 20, club: 'Club A' },
        { place: 2, joueuse: 'Joueuse 2', nombre: 15, club: 'Club B' },
        { place: 3, joueuse: 'Joueuse 3', nombre: 12, club: 'Club C' },
        { place: 4, joueuse: 'Joueuse 4', nombre: 10, club: 'Club D' },
      ];
    } else if (critere === 'rebondeuse') {
      classementData = [
        { place: 1, joueuse: 'Joueuse 1', nombre: 20, club: 'Club A' },
        { place: 2, joueuse: 'Joueuse 2', nombre: 15, club: 'Club B' },
        { place: 3, joueuse: 'Joueuse 3', nombre: 12, club: 'Club C' },
        { place: 4, joueuse: 'Joueuse 4', nombre: 10, club: 'Club D' },
      ];
    } else if (critere === 'interceptrice') {
      classementData = [
        { place: 1, joueuse: 'Joueuse 1', nombre: 20, club: 'Club A' },
        { place: 2, joueuse: 'Joueuse 2', nombre: 15, club: 'Club B' },
        { place: 3, joueuse: 'Joueuse 3', nombre: 12, club: 'Club C' },
        { place: 4, joueuse: 'Joueuse 4', nombre: 10, club: 'Club D' },
      ];
    } else if (critere === 'contreuse') {
      classementData = [
        { place: 1, joueuse: 'Joueuse 1', nombre: 20, club: 'Club A' },
        { place: 2, joueuse: 'Joueuse 2', nombre: 15, club: 'Club B' },
        { place: 3, joueuse: 'Joueuse 3', nombre: 12, club: 'Club C' },
        { place: 4, joueuse: 'Joueuse 4', nombre: 10, club: 'Club D' },
      ];
    } else if (critere === 'adresse') {
      classementData = [
        { place: 1, joueuse: 'Joueuse 1', nombre: 20, club: 'Club A' },
        { place: 2, joueuse: 'Joueuse 2', nombre: 15, club: 'Club B' },
        { place: 3, joueuse: 'Joueuse 3', nombre: 12, club: 'Club C' },
        { place: 4, joueuse: 'Joueuse 4', nombre: 10, club: 'Club D' },
      ];
    } else if (critere === 'adresse à 3 points') {
      classementData = [
        { place: 1, joueuse: 'Joueuse 1', nombre: 20, club: 'Club A' },
        { place: 2, joueuse: 'Joueuse 2', nombre: 15, club: 'Club B' },
        { place: 3, joueuse: 'Joueuse 3', nombre: 12, club: 'Club C' },
        { place: 4, joueuse: 'Joueuse 4', nombre: 10, club: 'Club D' },
      ];
    } else if (critere === 'adresse au lancer') {
      classementData = [
        { place: 1, joueuse: 'Joueuse 1', nombre: 20, club: 'Club A' },
        { place: 2, joueuse: 'Joueuse 2', nombre: 15, club: 'Club B' },
        { place: 3, joueuse: 'Joueuse 3', nombre: 12, club: 'Club C' },
        { place: 4, joueuse: 'Joueuse 4', nombre: 10, club: 'Club D' },
      ];
    } else if (critere === 'évaluation') {
      classementData = [
        { place: 1, joueuse: 'Joueuse 1', nombre: 20, club: 'Club A' },
        { place: 2, joueuse: 'Joueuse 2', nombre: 15, club: 'Club B' },
        { place: 3, joueuse: 'Joueuse 3', nombre: 12, club: 'Club C' },
        { place: 4, joueuse: 'Joueuse 4', nombre: 10, club: 'Club D' },
      ];
    }

    setClassement(classementData);
  };

  const afficherClassement = () => {
    return (
      <div>
        <h2 className="text-center">meilleure {critere}</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Place</th>
              <th>Joueuse</th>
              <th>Nombre</th>
              <th>Club</th>
            </tr>
          </thead>
          <tbody>            {classement.map((item) => (
              <tr key={item.place}>
                <td>{item.place}</td>
                <td>{item.joueuse}</td>
                <td>{item.nombre}</td>
                <td>{item.club}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Statistiques</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
          <div className="form-group" style={{ marginBottom: '20px' }}>
           
              <select
                className="form-control"
                id="critere"
                value={critere}
                onChange={handleCritereChange}
              >
                <option value="marqueuse">Marqueuse</option>
                <option value="passeuse">Passeuse</option>
                <option value="rebondeuse">Rebondeuse</option>
                <option value="interceptrice">Interceptrice</option>
                <option value="contreuse">Contreuse</option>
                <option value="adresse">Adresse</option>
                <option value="adresse à 3 points">Adresse à 3 points</option>
                <option value="adresse au lancer">Adresse au lancer</option>
                <option value="évaluation">Évaluation</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {afficherClassement()}
    </div>
  );
};

export default Statistiques;