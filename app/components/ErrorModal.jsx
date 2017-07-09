var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

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
        var {title, message} = this.props;

        var modelMarkap = (
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

        var $model = $(ReactDOMServer.renderToString(modelMarkap));
        $(ReactDOM.findDOMNode(this)).html($model);

        var modal = new Foundation.Reveal($('#error-model'));
        modal.open(); 
    },

    render: function(){
        return (
            <div>

            </div>
        );
    }
});

module.exports = ErrorModel;