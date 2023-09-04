import React, { useState, useEffect, useCallback } from 'react';
import matchs from '../match.json';

const Classement = () => {
  const [pouleSelectionnee, setPouleSelectionnee] = useState('Poule A');
  const [classement, setClassement] = useState([]);

  const generateClassement = useCallback(() => {
    const poule = matchs.journee1[pouleSelectionnee];
    let teams = {};

    for (let journee in matchs) {
      const poule = matchs[journee][pouleSelectionnee];

      for (let match of Object.values(poule)) {
        if (!teams.hasOwnProperty(match.equipeDom)) {
          teams[match.equipeDom] = { win: 0, lose: 0 };
        }
        if (!teams.hasOwnProperty(match.equipeExt)) {
          teams[match.equipeExt] = { win: 0, lose: 0 };
        }

        if (match.scoreDom > match.scoreExt) {
          teams[match.equipeDom].win += 1;
          teams[match.equipeExt].lose += 1;
        } else if (match.scoreExt > match.scoreDom) {
          teams[match.equipeDom].lose += 1;
          teams[match.equipeExt].win += 1;
        }
      }
    }

    const sortedTeams = Object.keys(teams).sort((a, b) => {
      if (teams[a].win !== teams[b].win) {
        return teams[b].win - teams[a].win;
      }
      const teamAWin = Object.values(poule).filter(
        (match) =>
          (match.scoreDom > match.scoreExt && match.equipeDom === a) ||
          (match.scoreExt > match.scoreDom && match.equipeExt === a)
      ).length;
      const teamBWin = Object.values(poule).filter(
        (match) =>
          (match.scoreDom > match.scoreExt && match.equipeDom === b) ||
          (match.scoreExt > match.scoreDom && match.equipeExt === b)
      ).length;
      return teamBWin - teamAWin;
    });

    const classementData = sortedTeams.map((team, index) => {
      const winPercentage = (teams[team].win / (teams[team].win + teams[team].lose)) * 100;
      return {
        place: index + 1,
        equipe: team,
        winPercentage: winPercentage.toFixed(2),
      };
    });

    setClassement(classementData);
  }, [pouleSelectionnee]);

  useEffect(() => {
    generateClassement();
  }, [pouleSelectionnee, generateClassement]);

  return (
    <div className="container mt-4">
     <h2 className="text-center mb-4">Classement de la {pouleSelectionnee}</h2>
    
  
      <div className="btn-group d-flex justify-content-center mb-4" role="group">
        <button className={`btn btn-primary me-2 ${pouleSelectionnee === 'Poule A' ? 'active' : ''}`} onClick={() => setPouleSelectionnee('Poule A')}>
          Poule A
        </button>
        <button className={`btn btn-primary ${pouleSelectionnee === 'Poule B' ? 'active' : ''}`} onClick={() => setPouleSelectionnee('Poule B')}>
          Poule B
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Place</th>
            <th>Équipe</th>
            <th>% de victoire</th>
          </tr>
        </thead>
        <tbody>
          {classement.map((team) => (
            <tr key={team.equipe}>
              <td>{team.place}</td>
              <td>{team.equipe}</td>
              <td>{team.winPercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classement;