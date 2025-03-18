import React from 'react';

interface TestComponentProps {
  label: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ label }) => {
  return <h1>{label}</h1>;
};

export default TestComponent;