import React, { Component } from 'react';
import PropTypes from 'prop-types';

function RemoveComponent(props) {
  if (props.readOnly) {
    return <span />;
  }

  if (props.removeComponent) {
    const Component = props.removeComponent;
    return <Component {...props} />;
  }

  return (
    <a onClick={props.onClick} className={props.className}>
      {String.fromCharCode(215)}
    </a>
  );
}

class Tag extends Component {
  render = () => {
    const { props } = this;
    const label = props.tag[props.labelField];
    const {
      readOnly,
      CustomRemoveComponent,
    } = props;

    const tagComponent = (
      <span
        className={props.classNames.tag}
        onClick={props.onTagClicked}>
        {label}
        <RemoveComponent
          tag={props.tag}
          className={props.classNames.remove}
          removeComponent={props.removeComponent}
          onClick={props.onDelete}
          readOnly={props.readOnly}
        />
      </span>
    );
    return tagComponent;
  };
}

Tag.propTypes = {
  labelField: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  tag: PropTypes.object.isRequired,
  moveTag: PropTypes.func,
  removeComponent: PropTypes.func,
  onTagClicked: PropTypes.func,
  classNames: PropTypes.object,
  readOnly: PropTypes.bool,
};

Tag.defaultProps = {
  labelField: 'text',
  readOnly: false,
};

export default Tag;
