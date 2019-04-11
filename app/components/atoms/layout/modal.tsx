import React, {SFC} from 'react';
import styled from 'styled-components';

const MyModal = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`;

export const FloatingModal:SFC<any> = props => (
    <MyModal>
        <h1>Heyyyyyy!</h1>
        {props}
    </MyModal>
);


