import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors:["#7f7fd5", "#86a8e7", "#91eae4"],
        title: "It's raining!",
        subtitle: "Don't forget your umbrella.",
        icon: 'weather-pouring'
    },
    Clear: {
        colors:["#C6FFDD", "#fbd786", "#f7797d"],
        title: "Lovely Sunny Day",
        subtitle: "Go outside and enjoy the weather!",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors:["#BA8B02", "#181818"],
        title: "Danm Thunderstorm",
        subtitle: "Stay inside and jump into your bed.",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors:["#FEAC5E", "#C779D0", "#4BC0C8"],
        title: "Cloud in the sky",
        subtitle: "Look up at the cotton candy clouds!",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors:["#616161", "#9bc5c3"],
        title: "Fucking snowing",
        subtitle: "Do you wanna build a snowman?",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors:["#e8cbc0", "#636fa4"],
        title: "Light drizzle",
        subtitle: "But it's not heavy like rain.",
        icon: 'weather-rainy'
    },
    Haze: {
        colors:["#cc95c0", "#dbd4b4", "#7aa1d2"],
        title: "Smoky Haze",
        subtitle: "It's just crazy atmosphere.",
        icon: 'weather-windy'
    },
    Mist: {
        colors:["#cc95c0", "#dbd4b4", "#7aa1d2"],
        title: "Mist or Fog",
        subtitle: "It's like you are in dream.",
        icon: 'weather-fog'
    }
}

function Weather({ weatherName, temp }) {
    return(
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={130} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    weatherName: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 40
    },
    temp:{
        fontSize: 40,
        backgroundColor: "transparent",
        color: "#fff",
        marginTop: 10
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft:50,
        paddingRight:50
    },
    title:{
        fontSize: 32,
        backgroundColor: "transparent",
        color: "#fff",
        marginBottom: 8,
    },
    subtitle:{
        fontSize: 20,
        backgroundColor: "transparent",
        color: "#fff",
        marginBottom: 60
    }
});