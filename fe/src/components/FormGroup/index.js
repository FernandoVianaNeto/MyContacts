import P from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

FormGroup.propTypes = {
  children: P.node.isRequired,
};
