import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const Palmares = () => {
  const [palmares, setPalmares] = useState([
    { saison: '2019-2020', titre: 'Championnat', place: '1ère' },
    { saison: '2019-2020', titre: 'Coupe de France', place: 'Finaliste' },
    { saison: '2020-2021', titre: 'Championnat', place: '3ème' },
    { saison: '2020-2021', titre: 'Coupe de France', place: 'Vainqueur' },
  ]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Palmarès</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Saison</th>
            <th>Titre</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {palmares.map((resultat, index) => (
            <tr key={index}>
              <td>{resultat.saison}</td>
              <td>{resultat.titre}</td>
              <td>{resultat.place}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Palmares;