import { ReactNode } from 'react';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext'
import * as C from './styles';

type TProps = {
  children: ReactNode
};

export const Theme = ({children}: TProps) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Content>
        <Header />
        <C.Steps>
          <C.Sidebar>

             <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SidebarItem
              title="Profissional"
              description="Se identifique"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />

          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Content>
    </C.Container>
  )
}