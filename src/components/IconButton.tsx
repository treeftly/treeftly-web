import {
  IconButton as CIconButton,
  IconButtonProps as CIconButtonProps,
  Tooltip,
  TooltipProps,
} from '@chakra-ui/react';

type IconButtonProps = {
  tooltipProps?: TooltipProps;
  label: string;
  ariaLabel: string;
} & Omit<CIconButtonProps, 'aria-label'>;

const IconButton = ({
  tooltipProps,
  label,
  ariaLabel,
  ...rest
}: IconButtonProps) => {
  return (
    <Tooltip
      aria-label={`tooltip for ${ariaLabel} button`}
      label={label}
      {...tooltipProps}
    >
      <CIconButton
        fontSize="25px"
        {...rest}
        aria-label={ariaLabel}
        data-testid="icon-button"
      />
    </Tooltip>
  );
};

export default IconButton;
