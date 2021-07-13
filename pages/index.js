import { useState } from 'react';
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from '../src/lib/AlurakutCommons';
import data from '../data.json';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import ProfileSideBar from '../src/components/ProfileSideBar';
import ProfileBoxDefault from '../src/components/ProfileBoxDefault';
import FormCommunity from '../src/components/FormCommunity';

export default function Home({ themeMode, setThemeMode }) {
  const githubUser = data.githubUser;
  const [comunidades, setComunidades] = useState([data.comunidades]);
  const pessoasFavoritas = data.pessoasFavoritas;

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar
            githubUser={githubUser}
            themeMode={themeMode}
            setThemeMode={setThemeMode}
          />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <FormCommunity
            comunidades={comunidades}
            setComunidades={setComunidades}
          />
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileBoxDefault name="Comunidades" nameVar={comunidades} />
          <ProfileBoxDefault
            name="Pessoas da comunidade"
            nameVar={pessoasFavoritas}
          />
        </div>
      </MainGrid>
    </>
  );
}
