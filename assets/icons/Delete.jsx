import { HugeiconsIcon } from '@hugeicons/react-native';
import { Delete02Icon } from '@hugeicons/core-free-icons';

export default function Delete(props) {
  return (
    <HugeiconsIcon
      icon={Delete02Icon}
     size={props.size}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}