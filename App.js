import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./Weather";

const API_KEY= "e4b0f6207cd091f8614b4500c63f3a7d";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(
          position.coords.latitude, position.coords.longitude
        )
      },
      error => {
        this.setState({
          error: error
        }) 
      }
    );
  }
  _getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        this.setState({
          temperature:json.main.temp,
          name:json.weather[0].main,
          isLoaded: true
        })
      });
  };
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        {isLoaded ? <Weather weatherName={name} temp={Math.ceil(temperature - 273.15)} /> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Loading..</Text>
            { error ? <Text style={styles.errorText}>{error}</Text> : null }
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "#fff",
    backgroundColor: "transparent",
    marginTop: 10
  },
  loading:{
    flex: 1,
    backgroundColor: '#9999CC',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText:{
    fontSize: 38,
    color: '#fff'
  }
});
