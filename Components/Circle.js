import { View, Text } from 'react-native'
import React from 'react'

export default function Circle() {
    return (
        <View>
            <View style={{ width: 170, height: 170, borderRadius: 85, backgroundColor: '#ffdfd4', marginTop: -80, borderWidth: 1, borderColor: '#ffefe9' }}>

            </View>
            <View style={{ width: 170, height: 170, borderRadius: 85, backgroundColor: '#ffe7df', marginLeft: -90, marginTop: -80, borderColor: '#ffefe9' }}>

            </View>    
        </View>
    )
}