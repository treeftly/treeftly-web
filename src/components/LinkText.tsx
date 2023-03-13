import { Link, Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link as RLink } from 'react-router-dom';

interface LinkTextProps extends TextProps {
  href: string;
  children: ReactNode;
}

const LinkText = ({ href, children, ...rest }: LinkTextProps) => {
  return (
    <Text color="primary.600" {...rest}>
      <Link to={href} as={RLink} data-testid="link-component">
        {children}
      </Link>
    </Text>
  );
};

export default LinkText;
