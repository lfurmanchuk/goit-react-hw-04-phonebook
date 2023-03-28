import PropTypes from 'prop-types';
import { SectionTitle, SectionContainer } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
