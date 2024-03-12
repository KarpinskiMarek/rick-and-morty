import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

const Main = styled.main`
    display: flex;
    background-color: #FFFFFF;
    width: 100%;
    color: #000
`;

interface CharacterAPI {
  status: string;
  species: string;
  name: string;
  type: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

const CharacterDetails: React.FC<{ character?: CharacterAPI }> = ({ character }) => {
  const { characterId } = useParams();
  const [characterData, setCharacterData] = useState<CharacterAPI | null>(null);

  const characterUrl = `https://rickandmortyapi.com/api/character/${characterId}`;

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(characterUrl);
      const data = await response.json();
      setCharacterData(data);
    };

    if (!character) {
      fetchCharacter();
    }
  }, [characterId, character, characterUrl]);

  if (!characterData) { 
    return <p>Character not found.</p>;
  }

  const { name, status, species, type, gender, origin: { name: originName }, location: { name: locationName }, image } = characterData;

  return (
    <Main>
    <div className="character-details">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div className="info">
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Type: {type || 'Unknown'}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {originName}</p>
        <p>Last Known Location: {locationName}</p>
      </div>
    </div>
    </Main>
  );
};

export default CharacterDetails;