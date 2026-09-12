import { HugeiconsIcon } from '@hugeicons/react-native';
import { ArrowLeftBigIcon } from '@hugeicons/core-free-icons';

export default function arrowLeft(props) {
  return (
    <HugeiconsIcon
      icon={ArrowLeftBigIcon}
      size={props.size || 24}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}