import styled from 'styled-components';

interface ButtonProps {
    onClick?: (e: any) => void;
    disabled?: boolean;
    type?: string;
    className?: string;
    children?: React.ReactNode;
}

export const StyledButton: React.FC<ButtonProps> = styled.button.attrs(
    (props) => ({
        type: props.type || 'button',
    })
)`
  text-transform: capitalize;
  padding: 10px 20px;
  font-family: var(--primary-font);
  font-size: 0.9rem;
`;

export const TextButton = styled(StyledButton)`
  background: transparent;
  color: #182754;
  border-bottom: 2px solid #182754;
  padding: initial;
  padding-bottom: 5px;
  margin-top: 50px;
`;

export const SubmitButton: React.FC = styled(StyledButton).attrs({
    type: 'submit',
})``;
