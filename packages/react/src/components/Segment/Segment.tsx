import * as React from 'react'
import * as PropTypes from 'prop-types'
import {
  UIComponent,
  childrenExist,
  UIComponentProps,
  ContentComponentProps,
  ChildrenComponentProps,
  commonPropTypes,
  rtlTextContainer,
} from '../../lib'
import { Accessibility } from '../../lib/accessibility/types'
import { defaultBehavior } from '../../lib/accessibility'
import { StardustProps, ShorthandValue } from '../../types'
import Box from '../Box/Box'

export interface SegmentProps
  extends UIComponentProps<SegmentProps>,
    ChildrenComponentProps,
    ContentComponentProps<ShorthandValue> {
  /**
   * Accessibility behavior if overridden by the user.
   * @default defaultBehavior
   */
  accessibility?: Accessibility

  /** A segment can have its colors inverted for contrast. */
  inverted?: boolean
}

/**
 * A segment is used to create a grouping of related content.
 */
class Segment<TAs = 'div'> extends UIComponent<StardustProps<SegmentProps, TAs>, any> {
  static className = 'ui-segment'

  static displayName = 'Segment'

  static propTypes = {
    ...commonPropTypes.createCommon({
      content: 'shorthand',
    }),
    inverted: PropTypes.bool,
    rtlAttributes: PropTypes.func,
  }

  static defaultProps = {
    accessibility: defaultBehavior,
    as: 'div',
  }

  renderComponent({ accessibility, ElementType, classes, unhandledProps }) {
    const { children, content } = this.props

    return (
      <ElementType
        {...rtlTextContainer.getAttributes({ forElements: [children] })}
        {...accessibility.attributes.root}
        {...unhandledProps}
        className={classes.root}
      >
        {childrenExist(children) ? children : Box.create(content)}
      </ElementType>
    )
  }
}

export default Segment