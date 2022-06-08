import styled from 'styled-components';

export default function List() {
    return (
        <Wrapper>
        <label for="pet-select">Choose a pet:</label>

        <select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </select>
        
        </Wrapper>
        );
}

const Wrapper = styled.div`

`;