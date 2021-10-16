import { ReactNode } from 'react';
import { Header } from '../Header';
import * as C from './styles';

type TProps = {
  children: ReactNode
};

export const Theme = ({children}: TProps) => {
  return (
    <C.Container>
      <C.Content>
        <Header />
        <C.Steps>
          <C.Sidebar>
             ...
          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Content>
    </C.Container>
  )
}