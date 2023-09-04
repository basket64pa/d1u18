import React, { useState } from 'react';
import matchs from '../match.json';

const Calendrier = () => {
  const [journeeSelectionnee, setJourneeSelectionnee] = useState('journee1');
  const [pouleSelectionnee, setPouleSelectionnee] = useState('Poule A');

  const afficherCalendrier = () => {
    const journees = Object.keys(matchs);

    const afficherMatches = (poule) => {
      return Object.values(matchs[journeeSelectionnee][poule]).map((match) => (
        <div key={match.equipeDom + match.equipeExt} className="card mb-3">
          <div className="card-body ">
            <p className="card-text  text-center">
              {match.equipeDom} <span>{match.scoreDom} - {match.scoreExt}</span> {match.equipeExt}
            </p>
          </div>
        </div>
      ));
    };

    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">Calendrier</h2>
        <div className="mb-3">
          <div className="btn-group">
            <button className={`btn btn-${pouleSelectionnee === 'Poule A' ? 'primary' : 'secondary'}`} onClick={() => setPouleSelectionnee('Poule A')}>Poule A</button>
            <button className={`btn btn-${pouleSelectionnee === 'Poule B' ? 'primary' : 'secondary'}`} onClick={() => setPouleSelectionnee('Poule B')}>Poule B</button>
          </div>
        </div>
        <div>
          <select className="form-control" value={journeeSelectionnee} onChange={(e) => setJourneeSelectionnee(e.target.value)}>
            {journees.map((journee) => (
              <option key={journee} value={journee}>
                {journee}
              </option>
            ))}
          </select>
        </div>
      
        <div style={{ marginTop: '20px' }}>
          {afficherMatches(pouleSelectionnee)}
        </div>
      </div>
    );
  };

  return <div>{afficherCalendrier()}</div>;
};

export default Calendrier;