var React = require('react');

// var About = React.createClass({
// render: function () {
//     return (
//             <h3>About Component</h3>
//         )
//     }
// });

//statles component
var About = (props) => {
    return (
            <div>
                <h3>About</h3>
                <p>Wellcome to about page</p>
            </div>
        )
};

module.exports = About;
