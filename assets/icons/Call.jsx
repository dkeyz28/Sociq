import { HugeiconsIcon } from '@hugeicons/react-native';
import { Call02Icon } from '@hugeicons/core-free-icons';

export default function Call(props) {
  return (
    <HugeiconsIcon
      icon={Call02Icon}
      size={props.size}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}