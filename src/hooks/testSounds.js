import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone'

import Sound_1 from 'assets/sounds/ANIMAUX/chat.wav';
import Sound_2 from 'assets/sounds/ANIMAUX/chevre.wav';
import Sound_3 from 'assets/sounds/ANIMAUX/chien-4.wav';
import Sound_4 from 'assets/sounds/ANIMAUX/dindon.wav';

export default function useSounds() {
    const mySampler = useRef(null);

    const [isKickPlayed, isKickPlayedChange] = useState(false);
    const [isClapPlayed, isClapPlayedChange] = useState(false);
    const [isHHPlayed, isHHPlayedChange] = useState(false);
    const [isCastaPlayed, isCastaPlayedChange] = useState(false);

    useEffect(() => {
    const sampler = new Tone.Sampler({
            C4: Sound_1,
        }).toDestination();

    Tone.loaded().then(() => {
        mySampler.current = sampler;
    })
}, []);

function soundPlay(note){
    mySampler.current.triggerAttackRelease([note], 4);
}

const buttonList = [
{soundPlay : ()=> soundPlay("C4"),
isPlayed: isKickPlayed,
id: "kick",
},

];

    return { buttonList};
}