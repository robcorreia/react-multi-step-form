import { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext'
import * as C from './styles';

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(state.name.length === 0 ) {
      history.push('/');
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  }, [dispatch, history, state.name.length]);

  const handleNextStep = () => {
    if( state.email.length > 0 && state.github.length > 0 ) {
      console.log(state);
    } else {
      alert('Preencha os dados.')
    }
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: event.target.value
    });
  }
  const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: event.target.value
    });
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />
        <label>Qual seu E-mail?
          <input type="email" value={state.email} onChange={handleEmailChange} />
        </label>
        <label>Qual seu Github?
          <input type="url" value={state.github} onChange={handleGithubChange} />
        </label>
        
        <Link className='btn-back' to='/step2'>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar cadastro!</button>
      </C.Container>
    </Theme>
  )
}