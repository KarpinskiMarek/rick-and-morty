import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    background-color: #FFFFFF;
    width: 100%;
    color: #000
`;

interface CharacterAPI {
    id: number;
    name: string;
    species: string;
}

const Characters = () => {
  const { episodeId } = useParams();
  const [characters, setCharacters] = useState<CharacterAPI[]>([]);
  const episodeApiUrl = `https://rickandmortyapi.com/api/episode/${episodeId}`;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchEpisodeAndCharacters = async () => {
      try {
        const response = await fetch(episodeApiUrl);
        const data = await response.json();
        setCharacters(await fetchCharacters(data.characters));
      } catch (error) {
        console.error('Error fetching episode and characters:', error);
      }
    };
  
    fetchEpisodeAndCharacters();
  }, [episodeApiUrl, episodeId]);


  const fetchCharacters = async (characterUrls: string[]) => {
    if (!characterUrls.length) {
      return [];
    }
  
    const characterPromises = characterUrls.map(async (characterUrl) => {
      const response = await fetch(characterUrl);
      return response.json();
    });
  
    const characterData = await Promise.all(characterPromises);
    return characterData;
  };

  return (
    <Main>
    <div>
      <button onClick={handleGoBack}>Episodes</button>
      <h2>Characters</h2>
      <ul>
        {characters?.map((character) => (
          <li key={character.id}>
            <a href={`/characterdetails/${character.id}`}>
              <span>{character.name} (Species: {character.species})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </Main>
  );
};

export default Characters;