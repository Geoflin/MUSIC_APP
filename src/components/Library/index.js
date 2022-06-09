import styled from 'styled-components';

import Sound_list from './Sound_list';

export default function Library() {
    return (
        <Wrapper>
        <Sound_list />
        </Wrapper>
        );
}

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
`;