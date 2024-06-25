
import { Icons } from '@/commons/types'

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

export default function Icon({ name, src, size = 'md', ...props }: IconProps) {
  const classes = `icon icon-${size}`

  if (src) {
    return (
      <img {...props} alt={name || src} className={classes} src={src} />
    )
  }

  switch (name) {
    case 'alert':
      return (<FaBell className={classes} />)
    case 'attach':
      return (<FaPaperclip className={classes} />)
    case 'award':
      return (<FaAward className={classes} />)
    case 'calendar':
      return (<FaCalendar className={classes} />)
    case 'caret-down':
      return (<FaChevronDown className={classes} />)
    case 'caret-up':
      return (<FaChevronUp className={classes} />)
    case 'cash':
      return (<FaMoneyBill className={classes} />)
    case 'cc-amex':
      return (<FaCcAmex className={classes} />)
    case 'cc-discover':
      return (<FaCcDiscover className={classes} />)
    case 'cc-mastercard':
      return (<FaCcMastercard className={classes} />)
    case 'cc-visa':
      return (<FaCcVisa className={classes} />)
    case 'check':
      return (<FaMoneyCheck className={classes} />)
    case 'comment':
      return (<FaComment className={classes} />)
    case 'danger':
      return (<FaCircleXmark className={classes} />)
    case 'delete':
      return (<FaTrash className={classes} />)
    case 'edit':
      return (<FaPen className={classes} />)
    case 'email':
      return (<FaEnvelope className={classes} />)
    case 'folder':
      return (<FaFolder className={classes} />)
    case 'hide':
      return (<FaEyeSlash className={classes} />)
    case 'info':
      return (<FaCircleInfo className={classes} />)
    case 'lock':
      return (<FaLock className={classes} />)
    case 'map':
      return (<FaMap className={classes} />)
    case 'message':
      return (<FaMessage className={classes} />)
    case 'minus':
      return (<FaMinus className={classes} />)
    case 'next':
      return (<FaChevronRight className={classes} />)
    case 'open':
      return (<FaUpRightFromSquare className={classes} />)
    case 'plus':
      return (<FaPlus className={classes} />)
    case 'prev':
      return (<FaChevronLeft className={classes} />)
    case 'profile':
      return (<FaIdCard className={classes} />)
    case 'restricted':
      return (<FaBan className={classes} />)
    case 'save':
      return (<FaFloppyDisk className={classes} />)
    case 'settings':
      return (<FaGear className={classes} />)
    case 'star':
      return (<FaStar className={classes} />)
    case 'success':
      return (<FaCircleCheck className={classes} />)
    case 'tag':
      return (<FaTag className={classes} />)
    case 'unlock':
      return (<FaUnlock className={classes} />)
    case 'user':
      return (<FaUser className={classes} />)
    case 'view':
      return (<FaEye className={classes} />)
    case 'warning':
      return (<FaCircleExclamation className={classes} />)
    default:
      return null
  }
}
