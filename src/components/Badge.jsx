import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Badge extends Component {
    render() {
        const { color, size, offset } = this.props;
        return (
            <div className="r_icon_wrap">
                <span className="r_icon"
                      style={
                        {
                            background: color,
                            height: `${size}px`,
                            width: `${size}px`,
                            top: `${offset[0]}px`,
                            left: `${offset[1]}px`,
                        }
                    } />
                <span className="r_icon_ml5">
                    {
                        React.Children.map(this.props.children, function (child) {
                            return <>{child}</>;
                        })
                    }
                </span>
            </div>
        );
    }
}

Badge.propTypes = {
    color: PropTypes.string,
    offset: PropTypes.array,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.node]),
};
Badge.defaultProps = {
    color: '#52c41a',
    size: '6',
    offset: [0, 0],
};

export default Badge;
