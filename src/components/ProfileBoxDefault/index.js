import React from 'react';
import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

function ProfileBoxDefault({ name, nameVar }) {
  const ProfileBoxFollowers = () => {
    return (
      <>
        {nameVar.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={itemAtual.html_url}>
                <img src={itemAtual.avatar_url} />
                <span>{itemAtual.login}</span>
              </a>
            </li>
          );
        })}
      </>
    );
  };

  const ProfileBoxCommunity = () => {
    return (
      <>
        {nameVar.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={`/users/${itemAtual.title}`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          );
        })}
      </>
    );
  };

  const ProfileBoxCommunityPeople = () => {
    return (
      <>
        {nameVar.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`/users/${itemAtual}`}>
                <img src={`https://github.com/${itemAtual}.png`} />
                <span>{itemAtual}</span>
              </a>
            </li>
          );
        })}
      </>
    );
  };

  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {name} ({nameVar.length})
      </h2>
      <ul>
        {name === 'Seguidores' && <ProfileBoxFollowers />}
        {name === 'Comunidades' && <ProfileBoxCommunity />}
        {name === 'Pessoas da Comunidade' && <ProfileBoxCommunityPeople />}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default ProfileBoxDefault;
