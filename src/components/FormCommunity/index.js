import React from 'react';
import Box from '../Box';

function FormCommunity({ comunidades, setComunidades }) {
  function handleCriaComunidade(e) {
    e.preventDefault();
    const dadosDoForm = new FormData(e.target);
    const comunidade = {
      id: new Date().toISOString(),
      title: dadosDoForm.get('title'),
      image: dadosDoForm.get('image'),
    };
    const comunidadesAtualizadas = [...comunidades, comunidade];
    setComunidades(comunidadesAtualizadas);
  }

  return (
    <Box>
      <h2 className="subTitle">O que você deseja fazer?</h2>
      <form onSubmit={handleCriaComunidade}>
        <div>
          <input
            type="text"
            placeholder="Qual vai ser o nome da comunidade?"
            name="title"
            aria-label="Qual vai ser o nome da comunidade?"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Coloque uma URL para usarmos de capa"
            name="image"
            aria-label="Coloque uma URL para usarmos de capa"
          />
        </div>
        <button>Criar comunidade</button>
      </form>
    </Box>
  );
}

export default FormCommunity;
