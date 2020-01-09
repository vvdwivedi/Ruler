import styled from 'styled-components';

export const FormGroup = styled.div`
  margin-bottom: 30px;
  display: ${props => (props.block ? 'block' : 'flex')};
`;

export const FormLabel = styled.label`
  margin-right: 30px;
  line-height: 38px;
`;

export const PageHeading = styled.h2`
  height: 100%;
  line-height: 1.5;
  font-weight: lighter;
  font-family: RobotoLight;
  color: #1b998b;
  font-size: 30px;
  margin-top: 0;
`;

export const FlexDiv = styled.div`
  display: flex;
`;
