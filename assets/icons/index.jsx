import React from 'react'
import Home from './Home'
import Delete from './Delete'
import Call from './Call'
import ArrowLeft from './ArrowLeft'
import Lock from './Lock'
import Mail from './Mail'
import User from './User'
import Heart from './Heart'
import Plus from './Plus'
import Logout from './Logout'
import Edit from './Edit'
import Camera from './Camera'
import Location from './Location'
import { theme } from '../../src/constants/theme';

const icons = {
    home: Home, 
    delete: Delete,
    call: Call,
    arrowLeft: ArrowLeft,
    mail: Mail,
    lock: Lock,
    user: User,
    heart: Heart,
    plus: Plus,
    logout: Logout,
    edit: Edit,
    camera: Camera,
    location: Location,
}
const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];

  return (
    <IconComponent
       height={props.size || 24}
       width={props.size || 24}
       strokeWidth={props.strokeWidth || 1.9}
       color={theme.colors.textLight}
       {...props}
    />
  )
}

export default Icon;
