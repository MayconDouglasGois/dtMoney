import styled from "styled-components";

interface IIsActive {
    isActive: boolean;
    bgColor: 'green' | 'red';
}

const Container = styled.form`
h2{
    color: var(--text-title);
    margin-bottom: 1rem;
}
input{
    background: #E7E9EE;
    color: var(--text-body);

    width: 100%;
    height:4rem;
    margin-top:1rem;

    border: 1px solid #D7D7D7;
    border-radius: 0.25rem;
    padding: 1.25rem 2rem;

    
}
button[type="submit"]{
    background: var(--green);
    color: var(--shape);
    font-weight: 600;

    width: 100%;
    height:4rem;
    margin-top:1rem;

    border: 1px solid #D7D7D7;
    border-radius: 0.25rem;
    padding: 1.25rem 2rem;
    :hover{
            filter: brightness(0.9);
        }
        transition: filter 0.2s;
}

`
const TransitionTypeContainer = styled.div`
margin-top: 1rem;
display: grid;
grid-template-columns:1fr 1fr;
gap: 0.25rem;
img{
margin: 0 1rem;
}
span{
    display:inline-block;
    color:var(--text-title);
}
`
const colors = {
    green:"#33CC952f",
    red:"#e52e4d2f",
}
const BoxBotton = styled.button<IIsActive>`
background:${(props)=> props.isActive? colors[props.bgColor]:''};
width: 100%;
height:4rem;
border: 1px solid #D7D7D7;
border-radius: 0.25rem;

display: flex;
align-items:center;
justify-content:center;

:hover{
    border-color:#919191;
}
transition: border-color 0.2s;
`

export {Container, TransitionTypeContainer, BoxBotton}