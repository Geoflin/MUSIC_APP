import styled from 'styled-components';

export default function About() {
return (
    <Wrapper>
     <h2>About page</h2>
     <br/>

     <h3>This application allows to:</h3>
     <br/>

     <ul>
      <li>play 4 music notes of your choice simultaneously (see page "Home")</li>
      <li>download courses and then play them in Home (see "Library" page)</li>
     </ul>

     <h3>Instructions for use:</h3>
     <br/>

     <em>In "Home" page:</em>

     <ul>
<li>play the sounds of your choice with the mouse or keyboard (a, z, e and r key)</li>
<li>Add the sound of your choice by clicking on the musqiue note of each key</li>
</ul>

<em>In "Library" page:</em>

<ul>
<li>Click on the 🔻 to download the sound of your choice</li>
</ul>

<a href="https://github.com/Geoflin/MUSIC_APP.git" target="_blank">⚪Github</a>


	<a href="https://cvmarhoffergeoffrey.herokuapp.com/" target="_blank">🌐Codeur: Geoffrey</a>

    </Wrapper>
    );
}

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 & h2, h3, ul, li, div, a, em{
     padding: 1rem;
 }
 & h3{
     text-decoration: underline;
 }
& em{
    font-style: oblique;
}
`;