import styled from 'styled-components';

import Sound_1 from '../../assets/sounds/ANIMAUX/chat.wav';
import Sound_2 from '../../assets/sounds/ANIMAUX/chevre.wav';
import Sound_3 from '../../assets/sounds/ANIMAUX/chien-4.wav';
import Sound_4 from '../../assets/sounds/ANIMAUX/dindon.wav';

import Sound_5 from '../../assets/sounds/BEEP/BEEP_Bip de caisse (ID 1417)_LS.wav';
import Sound_6 from '../../assets/sounds/BEEP/BEEP_Bip horloge parlante 1 (ID 2646)_LS.wav';
import Sound_7 from '../../assets/sounds/BEEP/COMTelph_Bip de repondeur (ID 1616)_LS.wav';
import Sound_8 from '../../assets/sounds/BEEP/COMTelph_Tonalite appel finit (ID 2645)_LS.wav';

import Sound_9 from '../../assets/sounds/EPEE/SWSH_Epee qui coupe (ID 0127)_LS.wav';
import Sound_10 from '../../assets/sounds/EPEE/SWSH_Epee qui fend l air (ID 0128)_LS.wav';
import Sound_11 from '../../assets/sounds/EPEE/WEAPSwrd_Epee (ID 0129)_LS (1).wav';

import Sound_12 from '../../assets/sounds/LAME_DE_COUTEAU/WEAPKnif_Lame de couteau 1 (ID 2574)_LS.wav';
import Sound_13 from '../../assets/sounds/LAME_DE_COUTEAU/WEAPKnif_Lame de couteau 2 (ID 2575)_LS.wav';
import Sound_14 from '../../assets/sounds/LAME_DE_COUTEAU/WEAPKnif_Lame de couteau 3 (ID 2576)_LS.wav';
import Sound_15 from '../../assets/sounds/LAME_DE_COUTEAU/WEAPKnif_Lame de couteau 4 (ID 2577)_LS.wav';
import Sound_16 from '../../assets/sounds/LAME_DE_COUTEAU/WEAPKnif_Lame de couteau 5 (ID 2578)_LS.wav';
import Sound_17 from '../../assets/sounds/LAME_DE_COUTEAU/WEAPKnif_Lame de couteau 6 (ID 2579)_LS.wav';
import Sound_18 from '../../assets/sounds/LAME_DE_COUTEAU/WEAPKnif_Lame de couteau 7 (ID 2580)_LS.wav';
import Sound_19 from '../../assets/sounds/LAME_DE_COUTEAU/WEAPKnif_Lame de couteau 8 (ID 2581)_LS.wav';

import Sound_20 from '../../assets/sounds/SERPETTE/WEAPSwrd_Serpette raclee sur une pierre 1 (ID 0332)_LS.wav';
import Sound_21 from '../../assets/sounds/SERPETTE/WEAPSwrd_Serpette raclee sur une pierre 2 (ID 0331)_LS.wav';
import Sound_22 from '../../assets/sounds/SERPETTE/WEAPSwrd_Serpette raclee sur une pierre 3 (ID 0330)_LS.wav';

import Sound_23 from '../../assets/sounds/WHOOSH/SWSH_Whoosh 3 (ID 1795)_LS.wav';
import Sound_24 from '../../assets/sounds/WHOOSH/SWSH_Whoosh 4 (ID 1796)_LS.wav';
import Sound_25 from '../../assets/sounds/WHOOSH/SWSH_Whoosh 5 (ID 1797)_LS.wav';
import Sound_26 from '../../assets/sounds/WHOOSH/SWSH_Whoosh 6 (ID 1799)_LS.wav';
import Sound_27 from '../../assets/sounds/WHOOSH/SWSH_Whoosh 7 (ID 1800)_LS.wav';
import Sound_28 from '../../assets/sounds/WHOOSH/SWSH_Whoosh 8 (ID 1801)_LS.wav';
import Sound_29 from '../../assets/sounds/WHOOSH/SWSH_Whoosh 9 (ID 1802)_LS.wav';
import Sound_30 from '../../assets/sounds/WHOOSH/SWSH_Whoosh 10 (ID 1798)_LS.wav';

export default function Sound_list() {
    
return (

    <Wrapper>

     <ul>

      <div>🦆ANIMAUX</div>
      <br/>

      <ul>
      
       <li>

       <a href={Sound_1} download="chat.wav">Chat🔻</a>
       </li>

       <li>
       <a href={Sound_2} download="Chevre.wav">Chevre🔻</a>
       </li>

       <li>
       <a href={Sound_3} download="Chien.wav">Chien🔻</a>
       </li>

       <li>
       <a href={Sound_4} download="Dindon.wav">Dindon🔻</a>
       </li>

      </ul>
      <br/>

      <div>🔉BEEP</div>
      <br/>

      <ul>

      <li>
      <a href={Sound_5} download="Beep_de_caisse.wav">Beep de caisse🔻</a>
      </li>

      <li>
      <a href={Sound_6} download="Beep_horloge.wav">Beep horloge🔻</a>
      </li>

      <li>
      <a href={Sound_7} download="Bip_telephone_1.wav">Bip téléphone 1🔻</a>
      </li>

      <li>
      <a href={Sound_8} download="Bip_telephone_2.wav">Bip téléphone 2🔻</a>
      </li>

     </ul>
     <br/>

      <div>⚔EPEE</div>
      <br/>

      <ul>

      <li>
      <a href={Sound_9} download="Slash_EPEE_1.wav">Slash EPEE 1🔻</a>
      </li>

      <li>
      <a href={Sound_10} download="Slash_EPEE_2.wav">Slash EPEE 2🔻</a>
      </li>

      <li>
      <a href={Sound_11} download="Slash_EPEE_3.wav">Slash EPEE 3🔻</a>
      </li>

     </ul>
     <br/>
    
      <div>🗡LAME DE COUTEAU</div>
      <br/>

       <ul>

       <li>
       <a href={Sound_12} download="Slash_COUTEAU_1.wav">Slash COUTEAU 1🔻</a>
       </li>

       <li>
       <a href={Sound_13} download="Slash_COUTEAU_2.wav">Slash COUTEAU 2🔻</a>
       </li>

       <li>
       <a href={Sound_14} download="Slash_COUTEAU_3.wav">Slash COUTEAU 3🔻</a>
       </li>

       <li>
       <a href={Sound_15} download="Slash_COUTEAU_4.wav">Slash COUTEAU 4🔻</a>
       </li>

       <li>
       <a href={Sound_16} download="Slash_COUTEAU_5.wav">Slash COUTEAU 5🔻</a>
       </li>

       <li>
       <a href={Sound_17} download="Slash_COUTEAU_6.wav">Slash COUTEAU 6🔻</a>
       </li>

       <li>
       <a href={Sound_18} download="Slash_COUTEAU_7.wav">Slash COUTEAU 7🔻</a>
       </li>

       <li>
       <a href={Sound_19} download="Slash_COUTEAU_8.wav">Slash COUTEAU 8🔻</a>
       </li>

      </ul>
      <br/>

      <div>🦯SERPETTE</div>
      <br/>

      <ul>

      <li>
      <a href={Sound_20} download="Serpette_Pierre_1.wav">Serpette Pierre 1🔻</a>
      </li>

      <li>
      <a href={Sound_21} download="Serpette_Pierre_2.wav">Serpette Pierre 2🔻</a>
      </li>

      <li>
      <a href={Sound_22} download="Serpette_Pierre_3.wav">Serpette Pierre 3🔻</a>
      </li>

     </ul>
     <br/>
    
      <div>🏹WHOOSH</div>
      <br/>

      <ul>

      <li>
      <a href={Sound_23} download="WHOOSH_3.wav">WHOOSH 3🔻</a>
      </li>

      <li>
      <a href={Sound_24} download="WHOOSH_4.wav">WHOOSH 4🔻</a>
      </li>

      <li>
      <a href={Sound_25} download="WHOOSH_5.wav">WHOOSH 5🔻</a>
      </li>

      <li>
      <a href={Sound_26} download="WHOOSH_6.wav">WHOOSH 6🔻</a>
      </li>

      <li>
      <a href={Sound_27} download="WHOOSH_7.wav">WHOOSH 7🔻</a>
      </li>

      <li>
      <a href={Sound_28} download="WHOOSH_8.wav">WHOOSH 8🔻</a>
      </li>

      <li>
      <a href={Sound_29} download="WHOOSH_9.wav">WHOOSH 9🔻</a>
      </li>

      <li>
      <a href={Sound_30} download="WHOOSH_10.wav">WHOOSH 10🔻</a>
      </li>

     </ul>
     <br/>

     </ul>
    </Wrapper>);
}

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
 & ul{
    padding: 0.2rem;
 }
`;

