import React from 'react';
import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

function ProfileBoxDefault({ name, nameVar }) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {name} ({nameVar.length})
      </h2>
      <ul>
        {name === 'Comunidades'
          ? nameVar.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
              );
            })
          : nameVar.map((itemAtual) => {
              return (
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              );
            })}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default ProfileBoxDefault;
