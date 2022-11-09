import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { SidebarItem } from '../components/SidebarItem';
import { useForm } from '../contexts/FormContext';
import * as C from './styles';


export function Theme(){
    const { state } = useForm();
    return(
        <C.Container>
            <C.Area>
                <Header />
                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem 
                            title='Pessoal'
                            description='Se identfique'
                            icon='profile'
                            path='/'
                            active={state.curretStep === 1}
                        />
                        <SidebarItem 
                            title='Profissional'
                            description='Seu nível'
                            icon='book'
                            path='/step2'
                            active={state.curretStep === 2}
                        />
                        <SidebarItem 
                            title='Contatos'
                            description='Como te achar'
                            icon='mail'
                            path='/step3'
                            active={state.curretStep === 3}
                        />
                    </C.Sidebar>
                    <C.Page>
                        <Outlet />
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}