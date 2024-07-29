import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, ReactElement } from 'react';

type Align = 'center' | 'end' | 'start' | 'stretch';
type Context = 'danger' | 'info' | 'success' | 'warning';
interface Field {
    autocomplete?: string;
    error?: string;
    label: string;
    input: 'checkbox' | 'date' | 'email' | 'file' | 'number' | 'password' | 'radio' | 'select' | 'tel' | 'text' | 'textarea';
    max?: number;
    min?: number;
    name: string;
    options?: Record<string, string>;
    regex?: RegExp;
    required?: boolean;
    value?: boolean | number | string;
}
type FormData = Record<string, boolean | number | string>;
type Icons = 'alert' | 'attach' | 'award' | 'calendar' | 'caret-down' | 'caret-up' | 'cash' | 'cc-amex' | 'cc-discover' | 'cc-mastercard' | 'cc-visa' | 'check' | 'close' | 'comment' | 'danger' | 'delete' | 'edit' | 'email' | 'folder' | 'hide' | 'info' | 'lock' | 'map' | 'message' | 'minus' | 'next' | 'open' | 'plus' | 'prev' | 'print' | 'profile' | 'restricted' | 'save' | 'settings' | 'star' | 'success' | 'tag' | 'unlock' | 'user' | 'view' | 'warning';
type Justify = 'around' | 'between' | 'center' | 'end' | 'evenly' | 'start';
type Position = 'cover' | 'bottom' | 'left' | 'right' | 'top';
type Role = 'primary' | 'secondary' | 'tertiary';
type Style = Record<string, number | string>;

interface FormProps {
    fields: Array<Field>;
    handler: (data: FormData) => void;
    hideActions?: boolean;
    highlight?: 'none' | 'optional' | 'required';
    label?: string;
    resetLabel?: string;
    submitLabel?: string;
}
declare function Form({ fields, handler, hideActions, highlight, label, resetLabel, submitLabel }: FormProps): react_jsx_runtime.JSX.Element;

interface HeroProps {
    children: ReactNode;
    image: string;
    position?: Position;
}
declare function Hero({ children, image, position, ...props }: HeroProps): react_jsx_runtime.JSX.Element;

interface ModalProps {
    callback: (yes: boolean) => void;
    children: ReactNode;
    no?: string;
    open: boolean;
    yes?: string;
}
declare function Modal({ children, callback, no, open, yes, ...props }: ModalProps): react_jsx_runtime.JSX.Element;

interface NavigationProps {
    children: ReactNode;
    logo: string;
}
declare function Navigation({ children, logo, ...props }: NavigationProps): react_jsx_runtime.JSX.Element;
interface NavigationLinkProps {
    children: ReactNode;
    href: string;
}
declare function NavigationLink({ children, href, ...props }: NavigationLinkProps): react_jsx_runtime.JSX.Element;

interface NotificationProps {
    callback?: () => void;
    children: ReactNode;
    context: Context;
}
declare function Notification({ children, callback, context, ...props }: NotificationProps): react_jsx_runtime.JSX.Element;

interface PaginationProps {
    page: number;
    pageHandler: (page: number) => void;
    pageLabel?: string;
    size?: number;
    sizes?: Array<number>;
    sizeHandler?: (size: number) => void;
    sizeLabel?: string;
    total: number;
}
declare function Pagination({ page, pageHandler, pageLabel, size, sizes, sizeHandler, sizeLabel, total, ...props }: PaginationProps): react_jsx_runtime.JSX.Element;

interface Column {
    label: string;
    name: string;
}
interface TableProps {
    card?: boolean;
    cols: Array<Column>;
    header?: 'column' | 'none' | 'row';
    rows: Array<Record<string, any>>;
    footer?: ReactNode;
}
declare function Table({ card, cols, header, rows, footer, ...props }: TableProps): react_jsx_runtime.JSX.Element;

interface AccordionProps {
    children: ReactNode;
}
declare function Accordion({ children, ...props }: AccordionProps): react_jsx_runtime.JSX.Element;
interface AccordionItemProps {
    children: ReactNode;
    iconClose?: Icons;
    iconOpen?: Icons;
    title: string;
}
declare function AccordionItem({ children, iconClose, iconOpen, title, ...props }: AccordionItemProps): react_jsx_runtime.JSX.Element;

interface BodyProps {
    children: ReactNode;
    margin?: number | string;
    padding?: number | string;
}
declare function Body({ children, margin, padding, ...props }: BodyProps): react_jsx_runtime.JSX.Element;

interface CardProps {
    children: ReactNode;
    dark?: boolean;
    style?: Style;
}
declare function Card({ children, dark, style, ...props }: CardProps): react_jsx_runtime.JSX.Element;

interface CarouselProps {
    autoplay?: boolean;
    children: Array<ReactElement<CarouselItemProps>>;
    interval?: number;
}
declare function Carousel({ children, autoplay, interval, ...props }: CarouselProps): react_jsx_runtime.JSX.Element;
interface CarouselItemProps {
    active?: number;
    children: ReactNode;
    index?: number;
    next?: number;
    prev?: number;
}
declare function CarouselItem({ children, active, index, next, prev, ...props }: CarouselItemProps): react_jsx_runtime.JSX.Element;

interface FooterProps {
    children: ReactNode;
}
declare function Footer({ children, ...props }: FooterProps): react_jsx_runtime.JSX.Element;

interface HeaderProps {
    children: ReactNode;
}
declare function Header({ children, ...props }: HeaderProps): react_jsx_runtime.JSX.Element;

interface ChargeItem {
    charge: number;
    max: number;
    min: number;
}
interface ChargeItemDescriptions {
    balance: string;
    charge: string;
    noCharge: string;
    subTitle: string;
    subTitleItems?: Array<string>;
    summary: string;
    title: string;
}
declare const ChargeItemDescriptionsDefault: ChargeItemDescriptions;
interface ChargesProps {
    chargeItems: Array<ChargeItem>;
    chargeItemDescriptions?: ChargeItemDescriptions;
}
declare function Charges({ chargeItems, chargeItemDescriptions, ...props }: ChargesProps): react_jsx_runtime.JSX.Element;
interface FeeItem {
    amount: number;
    max?: number;
    min?: number;
    rate: number;
}
interface FeeItemDescriptions {
    subTitle: string;
    subTitleItems?: Array<string>;
    template: string;
    title: string;
}
declare const FeeItemDescriptionsDefault: FeeItemDescriptions;
interface FeesProps {
    feeItems: Array<FeeItem>;
    feeItemDescriptions?: FeeItemDescriptions;
}
declare function Fees({ feeItems, feeItemDescriptions, ...props }: FeesProps): react_jsx_runtime.JSX.Element;
interface APR {
    formula: ReactElement<Math>;
    max: number;
    min: number;
    subTitle?: string;
    summary: string;
    title: string;
}
interface APRItem {
    amount: number;
    apr: number;
    cycles: number;
    fees: number;
    rewards: number;
}
interface APRItemDescription {
    amount: string;
    amountExtra?: string;
    apr: string;
    aprExtra?: string;
    cycles: string;
    cyclesExtra?: string;
    fees: string;
    feesExtra?: string;
    rewards: string;
    rewardsExtra?: string;
    rewardsSummary?: string;
}
declare const APRItemDescriptionDefaults: APRItemDescription;
interface APRsProps {
    apr: APR;
    aprItems: Array<APRItem>;
    aprItemDescriptions?: APRItemDescription;
}
declare function APRs({ apr, aprItems, aprItemDescriptions, ...props }: APRsProps): react_jsx_runtime.JSX.Element;
interface SchumerProps {
    apr: APR;
    aprItems: Array<APRItem>;
    aprItemDescriptions?: APRItemDescription;
    chargeItems: Array<ChargeItem>;
    chargeItemDescriptions?: ChargeItemDescriptions;
    feeItems: Array<FeeItem>;
    feeItemDescriptions?: FeeItemDescriptions;
}
declare function Schumer({ apr, aprItemDescriptions, aprItems, chargeItems, chargeItemDescriptions, feeItems, feeItemDescriptions, ...props }: SchumerProps): react_jsx_runtime.JSX.Element;

interface StepperProps {
    children: ReactElement<StepperItemProps>[];
    finish: () => void;
    finishLabel?: string;
    nextLabel?: string;
    prevLabel?: string;
}
declare function Stepper({ children, finish, finishLabel, nextLabel, prevLabel, ...props }: StepperProps): react_jsx_runtime.JSX.Element;
interface StepperItemProps {
    callback?: () => boolean;
    callbackLabel?: string;
    children: ReactNode;
    title?: string;
}
declare function StepperItem({ children, callback, callbackLabel, title, ...props }: StepperItemProps): react_jsx_runtime.JSX.Element;

declare function Animation(): null;

interface BackgroundProps {
    children: ReactNode;
    context?: Context;
    style?: Style;
}
declare function Background({ children, context, style, ...props }: BackgroundProps): react_jsx_runtime.JSX.Element;

interface BadgeProps {
    children: ReactNode;
    context?: Context | 'default';
    count: number;
}
declare function Badge({ children, count, context }: BadgeProps): react_jsx_runtime.JSX.Element;

interface ButtonProps {
    callback: (...args: any[]) => any;
    icon?: string;
    label: string;
    role?: Role | 'default';
}
declare function Button({ callback, icon, label, role }: ButtonProps): react_jsx_runtime.JSX.Element;

interface DividerProps {
    direction?: 'horizontal' | 'vertical';
    dots?: boolean;
    line?: 'dashed' | 'solid';
}
declare function Divider({ direction, dots, line, ...props }: DividerProps): react_jsx_runtime.JSX.Element;

interface HeadingProps {
    children: ReactNode;
}
declare function H1({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare function H2({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare function H3({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare function H4({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare function H5({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare function H6({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;

interface HighlightProps {
    bg?: string;
    children: ReactNode;
    fg?: string;
    style?: Style;
}
declare function Highlight({ children, bg, fg, style }: HighlightProps): react_jsx_runtime.JSX.Element;

interface IconProps {
    name?: Icons;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    src?: string;
}
declare function Icon({ name, src, size, ...props }: IconProps): react_jsx_runtime.JSX.Element | null;

interface ImageProps {
    alt?: string;
    caption?: string;
    role?: 'contain' | 'cover' | 'fill' | 'responsive';
    src: string;
    style?: Style;
}
declare function Image({ alt, caption, role, src, ...props }: ImageProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps {
    checked?: boolean;
    children: ReactNode;
    error?: boolean;
    handler: (name: string, value: string) => void;
    id?: string;
    name: string;
}
declare function Checkbox({ children, handler, checked, error, id, name, ...props }: CheckboxProps): react_jsx_runtime.JSX.Element;
interface InputProps {
    autocomplete?: string;
    disabled?: boolean;
    error?: boolean;
    handler: (name: string, value: string) => void;
    id?: string;
    name: string;
    type?: string;
    value?: string;
}
declare function Input({ autocomplete, disabled, error, handler, id, name, type, value, ...props }: InputProps): react_jsx_runtime.JSX.Element;
interface OptionProps {
    children: ReactNode;
    value: string;
}
declare function Option({ children, value, ...props }: OptionProps): react_jsx_runtime.JSX.Element;
interface RadioProps {
    children: ReactNode;
    error?: boolean;
    handler: (name: string, value: string) => void;
    id?: string;
    name: string;
    value: string;
}
declare function Radio({ children, error, handler, id, name, value, ...props }: RadioProps): react_jsx_runtime.JSX.Element;
interface SelectProps {
    children: ReactNode;
    error?: boolean;
    handler: (name: string, value: string) => void;
    id?: string;
    name: string;
    value?: string;
}
declare function Select({ children, error, handler, id, name, value, ...props }: SelectProps): react_jsx_runtime.JSX.Element;
interface TextareaProps {
    error?: boolean;
    handler: (name: string, value: string) => void;
    id?: string;
    name: string;
    value?: string;
}
declare function Textarea({ error, handler, id, name, value, ...props }: TextareaProps): react_jsx_runtime.JSX.Element;

interface LabelProps {
    error?: boolean;
    field: Field;
    highlight?: 'none' | 'optional' | 'required';
    optional?: string;
    required?: string;
}
declare function Label({ error, field, highlight, optional, required, ...props }: LabelProps): react_jsx_runtime.JSX.Element;

interface LinkProps {
    children: ReactNode;
    href: string;
    open?: boolean;
    style?: Style;
}
declare function Link({ children, href, open, ...props }: LinkProps): react_jsx_runtime.JSX.Element;

interface ListProps {
    children: ReactNode;
    role?: 'ordered' | 'unordered';
}
interface ListItemProps {
    children: ReactNode;
}
declare function List({ children, role, ...props }: ListProps): react_jsx_runtime.JSX.Element;
declare function ListItem({ children, ...props }: ListItemProps): react_jsx_runtime.JSX.Element;

interface MathProps {
    formula: string;
}
declare function Math$1({ formula, ...props }: MathProps): react_jsx_runtime.JSX.Element;

interface TextProps {
    bold?: boolean;
    capitalize?: boolean;
    children: ReactNode;
    context?: Context;
    italic?: boolean;
    legal?: boolean;
    lowercase?: boolean;
    strikethrough?: boolean;
    style?: Style;
    subscript?: boolean;
    superscript?: boolean;
    underline?: boolean;
    uppercase?: boolean;
}
declare function Text({ children, context, style, ...props }: TextProps): react_jsx_runtime.JSX.Element;

interface TooltipProps {
    children: ReactNode;
    context?: Context;
    message: string;
    position?: Position;
    style?: Style;
}
declare function Tooltip({ children, context, message, position, style, ...props }: TooltipProps): react_jsx_runtime.JSX.Element;

interface FlexProps {
    align?: Align;
    autoWrap?: boolean;
    children: ReactNode;
    column?: boolean;
    full?: boolean;
    gap?: number | string;
    justify?: Justify;
    row?: boolean;
    style?: Style;
    wrap?: boolean;
}
declare function Flex({ children, align, autoWrap, column, full, gap, justify, row, style, wrap, ...props }: FlexProps): react_jsx_runtime.JSX.Element;

interface GridProps {
    children: ReactNode;
    cols: number;
    gap?: number | string;
    justify?: Justify;
    rows?: number;
}
declare function Grid({ children, cols, gap, justify, rows, ...props }: GridProps): react_jsx_runtime.JSX.Element;
interface GridAreaProps {
    children: ReactNode;
    colEnd?: number;
    colStart: number;
    rowEnd?: number;
    rowStart: number;
}
declare function GridArea({ children, colEnd, colStart, rowEnd, rowStart, ...props }: GridAreaProps): react_jsx_runtime.JSX.Element;

declare function isBoolean(x: any): boolean;
declare function isNumber(x: any): boolean;
declare function isString(x: any): boolean;

declare function random(length?: number): string;

declare function validateMax(max: number, value: number | string): boolean;
declare function validateMin(min: number, value: number | string): boolean;
declare function validateRegEx(regex: RegExp, value: number | string): boolean;

export { type APR, type APRItem, type APRItemDescription, APRItemDescriptionDefaults, APRs, type APRsProps, Accordion, AccordionItem, type AccordionItemProps, type AccordionProps, type Align, Animation, Background, type BackgroundProps, Badge, type BadgeProps, Body, type BodyProps, Button, type ButtonProps, Card, type CardProps, Carousel, CarouselItem, type CarouselItemProps, type CarouselProps, type ChargeItem, type ChargeItemDescriptions, ChargeItemDescriptionsDefault, Charges, type ChargesProps, Checkbox, type CheckboxProps, type Column, type Context, Divider, type DividerProps, type FeeItem, type FeeItemDescriptions, FeeItemDescriptionsDefault, Fees, type FeesProps, type Field, Flex, type FlexProps, Footer, type FooterProps, Form, type FormData, type FormProps, Grid, GridArea, type GridAreaProps, type GridProps, H1, H2, H3, H4, H5, H6, Header, type HeaderProps, type HeadingProps, Hero, type HeroProps, Highlight, type HighlightProps, Icon, type IconProps, type Icons, Image, type ImageProps, Input, type InputProps, type Justify, Label, type LabelProps, Link, type LinkProps, List, ListItem, type ListItemProps, type ListProps, Math$1 as Math, type MathProps, Modal, type ModalProps, Navigation, NavigationLink, type NavigationLinkProps, type NavigationProps, Notification, type NotificationProps, Option, type OptionProps, Pagination, type PaginationProps, type Position, Radio, type RadioProps, type Role, Schumer, type SchumerProps, Select, type SelectProps, Stepper, StepperItem, type StepperItemProps, type StepperProps, type Style, Table, type TableProps, Text, type TextProps, Textarea, type TextareaProps, Tooltip, type TooltipProps, isBoolean, isNumber, isString, random, validateMax, validateMin, validateRegEx };
