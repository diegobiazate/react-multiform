import * as C from './styles';

type SelectOptionProps = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export function SelectOption({description, icon, title, selected, onClick}: SelectOptionProps){
    return(
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    )
}