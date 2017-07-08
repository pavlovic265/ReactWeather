var React = require('react');

var ErrorModel = React.createClass({

    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },

    componentDidMount: function(){
        var modal = new Foundation.Reveal($('#error-model'));
        modal.open(); 
    },

    render: function(){
        var {title, message} = this.props;
        return (
            <div className="reveal tiny text-center" id="error-model" data-reveal="">
                <h4>{title}</h4>
                <p>Error: {message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okey
                    </button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModel;