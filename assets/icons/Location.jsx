import { HugeiconsIcon } from '@hugeicons/react-native';
import { Location01Icon } from '@hugeicons/core-free-icons';

export default function Location(props) {
  return (
    <HugeiconsIcon
      icon={Location01Icon}
      size={props.size}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}