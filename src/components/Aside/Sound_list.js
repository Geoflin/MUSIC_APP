import styled from 'styled-components';

export default function Sound_list() {
return (
    <Wrapper>
     <ul>
      <div>ANIMAUX</div>
      <br/>

      <ul>
       <li><a href="./"
       download="chat">Télécharger l'image</a>Chat</li>
       <li>Chevre</li>
       <li>Chien</li>
       <li>Dindon</li>
      </ul>
      <br/>

      <div>BEEP</div>
      <br/>

      <ul>
      <li>Beep de caisse</li>
      <li>Beep horloge</li>
      <li>Bip téléphone 1</li>
      <li>Bip téléphone 2</li>
     </ul>
     <br/>

      <div>EPEE</div>
      <br/>

      <ul>
      <li>Slash EPEE 1</li>
      <li>Slash EPEE 2</li>
      <li>Slash EPEE 3</li>
     </ul>
     <br/>
    
      <div>LAME DE COUTEAU</div>
      <br/>

       <ul>
       <li>Slash COUTEAU 1</li>
       <li>Slash COUTEAU 2</li>
       <li>Slash COUTEAU 3</li>
       <li>Slash COUTEAU 4</li>
       <li>Slash COUTEAU 5</li>
       <li>Slash COUTEAU 6</li>
       <li>Slash COUTEAU 7</li>
       <li>Slash COUTEAU 8</li>
      </ul>
      <br/>

      <div>SERPETTE</div>
      <br/>

      <ul>
      <li>Serpette Pierre 1</li>
      <li>Serpette Pierre 2</li>
      <li>Serpette Pierre 3</li>
     </ul>
     <br/>
    
      <div>WHOOSH</div>
      <br/>

      <ul>
      <li>WHOOSH 1</li>
      <li>WHOOSH 2</li>
      <li>WHOOSH 3</li>
      <li>WHOOSH 4</li>
      <li>WHOOSH 5</li>
      <li>WHOOSH 6</li>
      <li>WHOOSH 7</li>
      <li>WHOOSH 8</li>
     </ul>
     <br/>

     </ul>
    </Wrapper>);
}

const Wrapper = styled.ul`
 ul{
    list-style: initial;
 }

`;

