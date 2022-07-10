import styled from "styled-components";



const Container = styled.div`
max-width:1220px;
margin:0 auto;
margin-top: -4.2rem;

display:grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 2rem;


div{
    background: var(--shape);
    padding:1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title)
   
}
.total{
    background: var(--green);
}
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
strong{
    margin: 1rem;
    display: block;
    font-weight: 500;
    font-size: 2rem;
}
`
export {Container}