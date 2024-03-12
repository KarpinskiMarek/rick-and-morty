import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image1 from "../assets/image1.png";


const Main = styled.main`
    display: flex;
    background-color: #FFFFFF;
    width: 100%;
    color: #000
`;

const DivLeft = styled.div`
    flex: 1;
    padding: 1rem;
    text-align: center;
    font-family: Lato, sans-serif;
    font-size: 70px;
    font-weight: 400;
    line-height: 84px;
    letter-spacing: 0em;
    text-align: center;
`;
const H1 = styled.h1`
    font-family: Lato, sans-serif;
    font-size: 70px;
    font-weight: 700;
    line-height: 84px;
    letter-spacing: 0em;
    text-align: left;
    color: #00BDD4;
    text-align: center;
`

const DivRight = styled.div`
  flex: 1;
  padding: 1rem;
`;
const Image = styled.img`
  margin: 0 auto; /* Add margin: 0 auto for horizontal centering */
  max-width: 100%; /* Ensure image doesn't overflow */
  max-height: 100%; /* Ensure image doesn't overflow */
`;

const EpisodeName = styled.a`
  display: block;
  padding: 5px;
  cursor: pointer;
  text-decoration: none; 

  & > span 
    &:nth-child(odd) {
      color: blue;
    }

    &:nth-child(even) {
      color: yellow;
    }
  }
`;
const EpisodeDate = styled.tr`
    font-family: Lato, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #959595;


`;
const EpisodeId = styled.tr`
    font-family: Lato, sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;


interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
  }

const Episodes =() =>{
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/episode?episode=S04');
        const data = await response.json();
        setEpisodes(data.results);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
        <Main>
            <DivLeft>
                Episodes of the <b>4th</b> season of the series
                <H1>Rick and Morty</H1>
                <Image src={image1}/>
            </DivLeft>
            <DivRight>
            <div>
            <tbody>
                {episodes.map((row) => (
                <tr key={row.id}>
                    <EpisodeId>{row.episode}</EpisodeId>
                         <td colSpan={2}>
                             <EpisodeName href={`/characters/${row.id}`}>
                                <span>{row.name}</span>
                            </EpisodeName>
                            <br /> <EpisodeDate>{row.air_date}</EpisodeDate>
                         </td>
                </tr>
                ))}
            </tbody>
            </div>
            </DivRight>
        </Main>
  );
}
export default Episodes;
