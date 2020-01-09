import styled from 'styled-components';

export const FormGroup = styled.div`
  margin-bottom: 30px;
  display: ${props => (props.block ? 'block' : 'flex')};
`;

export const FormLabel = styled.label`
  margin-right: 30px;
  line-height: 38px;
`;
