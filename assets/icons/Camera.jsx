import { HugeiconsIcon } from '@hugeicons/react-native';
import { Camera01Icon } from '@hugeicons/core-free-icons';

export default function Camera(props) {
  return (
    <HugeiconsIcon
      icon={Camera01Icon}
      size={props.size}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}