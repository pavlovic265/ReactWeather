var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWatherMap = require('openWatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var _self = this;

        this.setState({isLoading: true});

        openWatherMap.getTemp(location)
            .then(function(temp){
                _self.setState({
                    isLoading: false,
                    location: location,
                    temp: temp
                });
            },function(errorMessage){
                _self.setState({ isLoading: false });
                alert(errorMessage);
            });
    },
    render: function () {
        var {temp, location, isLoading} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if(temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {/*<WeatherMessage temp={temp} location={location}/>*/}
            </div>
        )
    }
});

module.exports = Weather;
