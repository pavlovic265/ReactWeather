var React = require('react');
var {Link} = require('react-router');

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
                <h3 className="text-center">About</h3>
                <p>This is some tets... :)</p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react/" target="_blank">React link</a>
                    </li>
                    <li>
                        <a href="https://openweathermap.org/" target="_blank">Weather Map</a>
                    </li>
                </ul>
            </div>
        )
};

module.exports = About;
