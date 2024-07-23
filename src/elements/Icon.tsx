
import { Icons } from '../commons/types'

import {
  FaBell,
  FaPaperclip,
  FaAward,
  FaCalendar,
  FaChevronDown,
  FaChevronUp,
  FaMoneyBill,
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
  FaMoneyCheck,
  FaXmark,
  FaComment,
  FaCircleXmark,
  FaTrash,
  FaPen,
  FaEnvelope,
  FaFolder,
  FaEyeSlash,
  FaCircleInfo,
  FaLock,
  FaMap,
  FaMessage,
  FaMinus,
  FaChevronRight,
  FaUpRightFromSquare,
  FaPlus,
  FaChevronLeft,
  FaPrint,
  FaIdCard,
  FaBan,
  FaFloppyDisk,
  FaGear,
  FaStar,
  FaCircleCheck,
  FaTag,
  FaUnlock,
  FaUser,
  FaEye,
  FaCircleExclamation,
} from 'react-icons/fa6'

export interface IconProps {
  name?: Icons
  size?: 'sm' | 'md' | 'lg' | 'xl'
  src?: string
}

export function Icon({ name, src, size = 'md', ...props }: IconProps) {
  const classes = `icon icon-${size}`

  if (src) {
    return (
      <img {...props}
        aria-label={name || src}
        alt={name || src}
        className={classes}
        role='figure'
        src={src} />
    )
  }

  switch (name) {
    case 'alert':
      return (<FaBell className={classes} role='figure' />)
    case 'attach':
      return (<FaPaperclip className={classes} role='figure' />)
    case 'award':
      return (<FaAward className={classes} role='figure' />)
    case 'calendar':
      return (<FaCalendar className={classes} role='figure' />)
    case 'caret-down':
      return (<FaChevronDown className={classes} role='figure' />)
    case 'caret-up':
      return (<FaChevronUp className={classes} role='figure' />)
    case 'cash':
      return (<FaMoneyBill className={classes} role='figure' />)
    case 'cc-amex':
      return (<FaCcAmex className={classes} role='figure' />)
    case 'cc-discover':
      return (<FaCcDiscover className={classes} role='figure' />)
    case 'cc-mastercard':
      return (<FaCcMastercard className={classes} role='figure' />)
    case 'cc-visa':
      return (<FaCcVisa className={classes} role='figure' />)
    case 'check':
      return (<FaMoneyCheck className={classes} role='figure' />)
    case 'close':
      return (<FaXmark className={classes} role='figure' />)
    case 'comment':
      return (<FaComment className={classes} role='figure' />)
    case 'danger':
      return (<FaCircleXmark className={classes} role='figure' />)
    case 'delete':
      return (<FaTrash className={classes} role='figure' />)
    case 'edit':
      return (<FaPen className={classes} role='figure' />)
    case 'email':
      return (<FaEnvelope className={classes} role='figure' />)
    case 'folder':
      return (<FaFolder className={classes} role='figure' />)
    case 'hide':
      return (<FaEyeSlash className={classes} role='figure' />)
    case 'info':
      return (<FaCircleInfo className={classes} role='figure' />)
    case 'lock':
      return (<FaLock className={classes} role='figure' />)
    case 'map':
      return (<FaMap className={classes} role='figure' />)
    case 'message':
      return (<FaMessage className={classes} role='figure' />)
    case 'minus':
      return (<FaMinus className={classes} role='figure' />)
    case 'next':
      return (<FaChevronRight className={classes} role='figure' />)
    case 'open':
      return (<FaUpRightFromSquare className={classes} role='figure' />)
    case 'plus':
      return (<FaPlus className={classes} role='figure' />)
    case 'prev':
      return (<FaChevronLeft className={classes} role='figure' />)
    case 'print':
      return (<FaPrint className={classes} role='figure' />)
    case 'profile':
      return (<FaIdCard className={classes} role='figure' />)
    case 'restricted':
      return (<FaBan className={classes} role='figure' />)
    case 'save':
      return (<FaFloppyDisk className={classes} role='figure' />)
    case 'settings':
      return (<FaGear className={classes} role='figure' />)
    case 'star':
      return (<FaStar className={classes} role='figure' />)
    case 'success':
      return (<FaCircleCheck className={classes} role='figure' />)
    case 'tag':
      return (<FaTag className={classes} role='figure' />)
    case 'unlock':
      return (<FaUnlock className={classes} role='figure' />)
    case 'user':
      return (<FaUser className={classes} role='figure' />)
    case 'view':
      return (<FaEye className={classes} role='figure' />)
    case 'warning':
      return (<FaCircleExclamation className={classes} role='figure' />)
    default:
      return null
  }
}
