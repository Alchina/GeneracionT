import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  const handleBackToList = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      {selectedCharacter ? (
        <CharacterDetail character={selectedCharacter} onBack={handleBackToList} />
      ) : (
        <CharacterList onSelectCharacter={handleCharacterSelect} />
      )}
    </div>
  );
}

export default App;

