import { HugeiconsIcon } from '@hugeicons/react-native';
import { HeartIcon } from '@hugeicons/core-free-icons';

export default function heart(props) {
  return (
    <HugeiconsIcon
      icon={HeartIcon}
      size={props.size || 24}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}