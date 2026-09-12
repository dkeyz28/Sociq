import { HugeiconsIcon } from '@hugeicons/react-native';
import { LockPasswordIcon } from '@hugeicons/core-free-icons';

export default function Lock(props) {
  return (
    <HugeiconsIcon
      icon={LockPasswordIcon}
      size={props.size}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}

