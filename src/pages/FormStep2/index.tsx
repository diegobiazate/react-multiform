import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SelectOption } from '../../components/SelectOption';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';

export function FormStep2(){
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            navigate('/');
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
        
    }, [dispatch, navigate, state.name]);

    function handleNextStep(){
        if(state.name !== ''){
            navigate('/step3');
        }else {
            alert('Preencha os dados.');
        }
    }

    function setLevel(level: number){
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return(
        <C.Container>
            <p>Passo {state.curretStep}/3</p>
            <h1>{state.name}, o que melhor descreve você?</h1>
            <p>Escolha a opção que melhor condiz com o seu estado atual, profissionalmente.</p>
            <hr />

            <SelectOption 
                title='Sou iniciante'
                description='Comecei a programar há menos de 2 anos'
                icon='🥳'
                selected={state.level === 0}
                onClick={() => setLevel(0)}
            />

            <SelectOption 
                title='Sou programador'
                description='Já programo a mais de 2 anos'
                icon='😵‍💫'
                selected={state.level === 1}
                onClick={() => setLevel(1)}
            />

            <Link to='/'>Voltar</Link>
            <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
    )
}