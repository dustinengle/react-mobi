
import { Roles, Sizes } from '../commons'

export class Extractor {
  static role(props: Roles): string {
    if (props.primary) return 'primary'
    else if (props.secondary) return 'secondary'
    else if (props.tertiary) return 'tertiary'
    else return 'default'
  }

  static size(props: Sizes): string {
    if (props.sm) return 'sm'
    else if (props.md) return 'md'
    else if (props.lg) return 'lg'
    else if (props.xl) return 'xl'
    else return 'md'
  }
}
