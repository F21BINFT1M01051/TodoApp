import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.press}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 60,
        backgroundColor: '#f6b092',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})