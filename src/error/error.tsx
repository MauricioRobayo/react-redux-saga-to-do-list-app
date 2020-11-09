import React from 'react';
import styled from 'styled-components/macro';

const ErrorWrapper = styled.div`
  background-color: salmon;
  color: white;
`;

const Error = ({ message = "Something unexpected happened!"}: { message?: string }) => (
  <ErrorWrapper>
    {message}
  </ErrorWrapper>
)

export default Error;
