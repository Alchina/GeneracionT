import React from 'react';
import { Segment, Image, List, Button } from 'semantic-ui-react';

function CharacterDetail({ character, onBack }) {
  return (
    <Segment>
      <Button onClick={onBack} primary>Back to List</Button>
      
      <Image src={character.image} size='small' floated='left' />

      <List>
        <List.Item>
          <List.Header>Name</List.Header>
          {character.name || 'Unknown'}
        </List.Item>
        <List.Item>
          <List.Header>Status</List.Header>
          {character.status || 'Unknown'}
        </List.Item>
        <List.Item>
          <List.Header>Species</List.Header>
          {character.species || 'Unknown'}
        </List.Item>
        <List.Item>
          <List.Header>Gender</List.Header>
          {character.gender || 'Unknown'}
        </List.Item>
        <List.Item>
          <List.Header>Origin</List.Header>
          {character.origin?.name || 'Unknown'}
        </List.Item>
      </List>
    </Segment>
  );
}

export default CharacterDetail;
