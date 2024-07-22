
import { StyleSheet } from 'react-native';

export const styleInput = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', // Alinha // Espaço igual entre os elementos
        alignItems: 'center',
        justifyContent: "space-between"
    },
    label: {
        color: "#fff",
        fontSize: 14
    },
    inputView: {
        width: 50
    },
    inputLogin: {
        backgroundColor: "#3E3F3F",
        height: 50,
        color: "#fff",
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    add: { 
        color: "#fff", 
        fontSize: 25, 

    },
    addButton: {
        backgroundColor: "#1E1E1E",
        width: 50,
        height: 50,
        borderTopEndRadius: 5,
        borderBottomRightRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})


export const styleInfos = StyleSheet.create({
    containerInfo:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 10
    },
    boxInfo: {
        backgroundColor: "#fff",
        height: 80,
        minWidth: 100,
        alignItems: "center",
        justifyContent: "space-around"
    },
    title:{
        fontSize: 15
    },
    number:{
        fontSize: 24
    }
})

export const styleTask = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    task:{
        backgroundColor: "red",        
        flexDirection: 'row', 
        alignItems: 'center',        
        borderRadius: 5,
        overflow: "hidden",
        marginVertical: 6
        
    },
    status:{
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    }, 
    del:{
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50
    },
    description:{
        backgroundColor: "#516C8D",
        height: 50,
        paddingHorizontal: 10,
        justifyContent: "center"
    }

})