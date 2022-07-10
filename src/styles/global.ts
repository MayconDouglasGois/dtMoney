import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
--background:#f0f2f5;
--shape: #ffffff;
--green:#33CC95;
--red: #e52e4d;
--blue: #5429cd;

--blue-light: #6933ff;

--text-title:#363f5f;
--text-body: #969cb3;
}

html {
	@media (max-width: 1080px){
	font-size: 93.75%;
	}
	@media (max-width: 720px){
	font-size: 87.5%;
	}

}

*{
margin: 0;
padding: 0;
box-sizing: border-box;
 }

body{
background: var(--background);
-webkit-font-smoothing: antialiased;
}

body,input, textarea, button {
font-family:  'Poppins', sans-serif;
font-weight: 400;

}

h1,h1,h2,h3,h4,h5,h6, strong {
font-weight: 600;
}

button {
cursor:pointer;
}

[disabled]{
opacity: 0.6;
cursor: not-allowed;
}
.react-modal-content{
	background:var(--background);

	width: 100%;
	max-width: 576px;
	position: relative;

	padding:3rem;
	border-radius:0.24rem;
}
.react-modal-overley{
	background: rgb(0,0,0,0.25);

	position:fixed;
	top: 0;
    left: 0;
    right: 0;
    bottom: 0;

	display: flex;
	align-items: center;
	justify-content: center;
}
.react-modal-close{
	position:absolute;
	top: 1.25rem;
	right: 1.25rem;
	:hover{
            filter: brightness(0.8);
        }
        transition: filter 0.2s;
}
`
export {GlobalStyle}