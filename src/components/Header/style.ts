import styled from 'styled-components';

const Container = styled.header`
background:var(--blue);
`
const Content = styled.div`
max-width:1220px;
margin:0 auto;

padding:2rem 1rem 8.5rem 0;
display: flex;
align-items: center;
justify-content: space-between;

    button{
        width:12rem;
        height:3rem;
        background: var(--blue-light);
        border: 0;
        border-radius: 0.25rem;
        :hover{
            filter: brightness(0.9);
        }
        transition: filter 0.2s;
    }
`


export {Container, Content}