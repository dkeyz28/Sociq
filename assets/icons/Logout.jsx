import { HugeiconsIcon } from '@hugeicons/react-native';
import { Logout01Icon } from '@hugeicons/core-free-icons';

export default function Logout(props) {
  return (
    <HugeiconsIcon
      icon={Logout01Icon}
      size={props.size || 24}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}