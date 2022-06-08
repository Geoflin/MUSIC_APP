import styled from 'styled-components';

import Sound_list from './Sound_list';

import GridButton from './Sound_play';

import useSounds from 'hooks/testSounds';

export default function Library() {
    const { buttonList } = useSounds();
    return (
        <Wrapper>
        <Sound_list />
        <Grid>
         {buttonList.map(({ soundPlay, isPlayed, id, handleSampleChange }, index)=> {
             return (
             <GridButton 
             key={index}  
             soundPlay={soundPlay} 
             isPlayed={isPlayed} 
             id={id}
             handleSampleChange={handleSampleChange}
             />
         );
         })}
         </Grid> 
        </Wrapper>
        );
}

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
`;

const Grid = styled.div`
display: grid;
width : 400px;
height: 400px;
column-gap: 12px;
row-gap: 12px;
padding: 24px;
margin: auto;
 @media(max-width : 640px){
    width : 300px;
    height: 300px;
 }
`;