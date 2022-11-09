import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';

export function FormStep1(){
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [dispatch]);

    function handleNameChange(e: ChangeEvent<HTMLInputElement>){
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    function handleNextStep(){
        if(state.name !== ''){
            navigate('/step2');
        }else {
            alert('Preencha os dados.');
        }
    }

    return(
        <C.Container>
            <p>Passo {state.curretStep}/3</p>
            <h1>Vamos começar com o seu nome</h1>
            <p>Preencha o campo abaixo com o seu nome completo</p>

            <hr />

            <label>
                Seu nome completo
                <input 
                    type="text"
                    autoFocus
                    value={state.name}
                    onChange={handleNameChange}
                />
            </label>

            <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
    )
}