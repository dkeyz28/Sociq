import { HugeiconsIcon } from '@hugeicons/react-native';
import { AddSquareIcon } from '@hugeicons/core-free-icons';

export default function plus(props) {
  return (
    <HugeiconsIcon
      icon={AddSquareIcon}
      size={props.size || 24}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}