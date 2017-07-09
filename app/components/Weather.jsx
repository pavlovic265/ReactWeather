var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWatherMap = require('openWatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var _self = this;

        this.setState({
            isLoading: true,
            errorMessage: null
        });

        openWatherMap.getTemp(location)
            .then(function(temp){
                _self.setState({
                    isLoading: false,
                    location: location,
                    temp: temp
                });
            },function(e){
                console.log(e);
                _self.setState({
                    isLoading: false,
                    errorMessage: e.message
                });
                // alert(errorMessage);
            });
    },  

    render: function () {
        var {temp, location, isLoading, errorMessage} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if(temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        function renderError() {
            if(typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage} />
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
                {/*<WeatherMessage temp={temp} location={location}/>*/}
            </div>
        )
    }
});

module.exports = Weather;
