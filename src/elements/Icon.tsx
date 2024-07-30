
import { Extractor } from '../utils'
import { IconType } from 'react-icons'
import { Sizes } from '../commons'

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

export enum Icons {
  alert = 'alert',
  attach = 'attach',
  award = 'award',
  calendar = 'calendar',
  caret_down = 'caret_down',
  caret_up = 'caret_up',
  cash = 'cash',
  cc_amex = 'cc_amex',
  cc_discover = 'cc_discover',
  cc_mastercard = 'cc_mastercard',
  cc_visa = 'cc_visa',
  check = 'check',
  close = 'close',
  comment = 'comment',
  danger = 'danger',
  delete = 'delete',
  edit = 'edit',
  email = 'email',
  folder = 'folder',
  hide = 'hide',
  info = 'info',
  lock = 'lock',
  map = 'map',
  message = 'message',
  minus = 'minus',
  next = 'next',
  open = 'open',
  plus = 'plus',
  prev = 'prev',
  print = 'print',
  profile = 'profile',
  restricted = 'restricted',
  save = 'save',
  settings = 'settings',
  star = 'star',
  success = 'success',
  tag = 'tag',
  unlock = 'unlock',
  user = 'user',
  view = 'view',
  warning = 'warning',
}

const IconMap: Record<Icons, IconType> = {
  [Icons.alert]: FaBell,
  [Icons.attach]: FaPaperclip,
  [Icons.award]: FaAward,
  [Icons.calendar]: FaCalendar,
  [Icons.caret_down]: FaChevronDown,
  [Icons.caret_up]: FaChevronUp,
  [Icons.cash]: FaMoneyBill,
  [Icons.cc_amex]: FaCcAmex,
  [Icons.cc_discover]: FaCcDiscover,
  [Icons.cc_mastercard]: FaCcMastercard,
  [Icons.cc_visa]: FaCcVisa,
  [Icons.check]: FaMoneyCheck,
  [Icons.close]: FaXmark,
  [Icons.comment]: FaComment,
  [Icons.danger]: FaCircleXmark,
  [Icons.delete]: FaTrash,
  [Icons.edit]: FaPen,
  [Icons.email]: FaEnvelope,
  [Icons.folder]: FaFolder,
  [Icons.hide]: FaEyeSlash,
  [Icons.info]: FaCircleInfo,
  [Icons.lock]: FaLock,
  [Icons.map]: FaMap,
  [Icons.message]: FaMessage,
  [Icons.minus]: FaMinus,
  [Icons.next]: FaChevronRight,
  [Icons.open]: FaUpRightFromSquare,
  [Icons.plus]: FaPlus,
  [Icons.prev]: FaChevronLeft,
  [Icons.print]: FaPrint,
  [Icons.profile]: FaIdCard,
  [Icons.restricted]: FaBan,
  [Icons.save]: FaFloppyDisk,
  [Icons.settings]: FaGear,
  [Icons.star]: FaStar,
  [Icons.success]: FaCircleCheck,
  [Icons.tag]: FaTag,
  [Icons.unlock]: FaUnlock,
  [Icons.user]: FaUser,
  [Icons.view]: FaEye,
  [Icons.warning]: FaCircleExclamation,
}

export interface IconProps extends Sizes {
  color?: string
  name?: Icons
  src?: string
  title?: string
}

export function Icon({
    color,
    name,
    src,
    title,
    ...props
  }: IconProps) {
  const label = name as unknown as string

  const classes = [
    'icon',
    ...Extractor.sizes(props),
  ].join(' ')

  if (src) {
    return (
      <img {...props}
        aria-label={label || src}
        alt={label || src}
        className={classes}
        role='figure'
        src={src} />
    )
  }

  if (!IconMap[name as Icons]) return null

  const C: IconType = IconMap[name as Icons]
  return (
    <C
      className={classes}
      color={color}
      role='figure'
      title={title || label} />
  )
}
