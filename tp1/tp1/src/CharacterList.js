import React, { useState, useEffect } from 'react';
import { Card, Grid, Loader } from 'semantic-ui-react';

function CharacterList({ onSelectCharacter }) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid columns={4} stackable>
      {isLoading ? (
        <Loader active inline="centered">Loading Characters...</Loader>
      ) : (
        characters.map(character => (
          <Grid.Column key={character.id}>
            <Card
              onClick={() => onSelectCharacter(character)}
              image={character.image}
              header={character.name}
              meta={`Status: ${character.status}`}
            />
          </Grid.Column>
        ))
      )}
    </Grid>
  );
}

export default CharacterList;
