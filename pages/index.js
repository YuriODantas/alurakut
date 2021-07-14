import { useEffect, useState } from 'react';
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
  const pessoasFavoritas = data.pessoasFavoritas;
  const [github, setGithub] = useState({});
  const [loading, setLoading] = useState(true);
  const [comunidades, setComunidades] = useState([data.comunidades]);
  const [seguidores, setSeguidores] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}`)
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json();
      })
      .then(function (respostaConvertida) {
        setGithub(respostaConvertida);
        fetch(respostaConvertida.followers_url)
          .then(function (respostaDoServidor) {
            return respostaDoServidor.json();
          })
          .then(function (respostaConvertida) {
            setSeguidores(respostaConvertida);
            setLoading(false);
          });
      });
  }, [githubUser]);

  return (
    <>
      <AlurakutMenu github={github} />
      {loading ? (
        <h1 style={{ textAlign: 'center' }}>Carregando...</h1>
      ) : (
        <MainGrid>
          <div className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSideBar
              github={github}
              themeMode={themeMode}
              setThemeMode={setThemeMode}
            />
          </div>
          <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
            <Box>
              <h1 className="title">Bem vindo(a), {github.name}</h1>
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
            <ProfileBoxDefault name="Seguidores" nameVar={seguidores} />
            <ProfileBoxDefault name="Comunidades" nameVar={comunidades} />
            <ProfileBoxDefault
              name="Pessoas da Comunidade"
              nameVar={pessoasFavoritas}
            />
          </div>
        </MainGrid>
      )}
    </>
  );
}
