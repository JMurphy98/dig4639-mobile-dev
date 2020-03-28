import React from "react";
import {View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  card: {
    
      heading: {
        fontSize: 25,
      },
      backgroundColor: "#E5FDFC",
      //shadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      marginTop: "7px",
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      borderColor: "#111717",
      borderWidth: 2,
      borderRadius: 2,
      padding: "1em",
      width: "65%"
  },
})

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      periods: []
    };

  }

  componentDidMount() {

    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(res => res.json())
    .then((result) => {
      let periods = result.properties.periods;
     
      this.setState({
        periods: periods
      });
      
    })
    .catch((error) => {console.log(error)} );

  }

  render() {
    return(
      <View>
        {
            this.state.periods.map((value, index) => {
                return <View style={styles.card} key={index}>
                    <Text style={styles.heading}> {value.name}</Text>
                    <Text style={styles.heading}> {value.temperature}{value.temperatureUnit}</Text>
                    <Text>{value.detailedForecast}</Text>
                    </View>;
            })
        
        }
      </View>
    );
  }

}

export default Weather;