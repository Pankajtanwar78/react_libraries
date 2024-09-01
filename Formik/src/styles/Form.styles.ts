import styled from "styled-components";




export const StyledForm = styled.form`
    padding: 2rem;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    min-width: 100rem;

    div{
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
    }

    div > input{
        padding: 1.5rem;
        border-radius: 1rem;
        font-size: 2rem;
        display: block;   
    }

    div > label {
        padding-left: .8rem;
    }

    button{
        padding: 1rem;
        font-size: 3rem;
        border-radius: 0.5rem;
        background-color: brown;
        color: aliceblue;
        margin-right: auto;
        margin-left: .8rem;
    }
`

export const StyledFormError = styled.div`
    color: red;
    padding-left: .8rem;
`