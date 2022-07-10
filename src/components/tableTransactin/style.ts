import styled from "styled-components";

const Container = styled.main`

margin-top: 3rem;
background:var(--background);
table{
    margin:auto;
    border-spacing:0 1.25rem;
}
tr{
    max-width:1220px;
    background:var(--shape); 
    
}
thead tr{
    background:var(--background); 
}
td{
    padding:1.25rem 4rem;
    :first-child{
        padding:1.25rem 9rem;  
    }
}

thead{
    background:var(--background);  
}
.deposit{
    color:var(--green)
}
.withdrawal{
    color:var(--red)
}
`


export {Container}