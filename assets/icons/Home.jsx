import { HugeiconsIcon } from '@hugeicons/react-native';
import { Home01Icon } from '@hugeicons/core-free-icons';

export default function Home(props) {
  return (
    <HugeiconsIcon
      icon={Home01Icon}
      size={props.size}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );
}
