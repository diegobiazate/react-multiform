import styled from 'styled-components';

export const Container = styled.div`
    background: #02044A;
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    min-height: 100vh;
    max-width: 980px;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #16195c;
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;
