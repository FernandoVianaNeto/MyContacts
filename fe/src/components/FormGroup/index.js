import P from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children, error }) {
  return (
    <Container error={error}>
      {children}
      { error && <small>{error}</small> }
    </Container>
  );
}

FormGroup.propTypes = {
  children: P.node.isRequired,
  error: P.string,
};

FormGroup.defaultProps = {
  error: null,
};
