import styled from 'styled-components';

export const StyledTag = styled.div`
    width: fit-content;

    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;

    background-color: ${({ theme }) => theme.text.opacify(0.1)};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 1rem;
`;
