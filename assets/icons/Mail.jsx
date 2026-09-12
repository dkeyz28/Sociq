import { HugeiconsIcon } from '@hugeicons/react-native';
import { Mail01Icon } from '@hugeicons/core-free-icons';

export default function Mail(props) {
  return (
    <HugeiconsIcon
      icon={Mail01Icon}
      size={props.size}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}