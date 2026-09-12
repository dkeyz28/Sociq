import { HugeiconsIcon } from '@hugeicons/react-native';
import { UserIcon } from '@hugeicons/core-free-icons';

export default function User(props) {
  return (
    <HugeiconsIcon
      icon={UserIcon}
      size={props.size}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}