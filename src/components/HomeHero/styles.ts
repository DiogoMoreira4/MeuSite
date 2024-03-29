import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    > img {
        width: 40rem;
        flex: 1;
    }

    > div {
        flex: 4;
    }
`;

export const TextContainer = styled.section`
    margin-bottom: 2rem;
    width: 100%;

    h1 {
        font-size: 8rem;
        color: ${({theme}) => theme.colors.primary};
    }

    h2 {
        font-size: 3rem;
        font-weight: 400;
        color: ${({theme}) => theme.colors.secondary};
    }

`;

export const InfosContainer = styled.section`


`;

export const CodeItem = styled.section``;
