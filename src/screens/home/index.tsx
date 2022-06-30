import React from "react";
import { View, Image, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import CarouselCards from "../../../CarouselCards";




export const Home = () => {

    return (<View style={styles.container}>

        <Image style={styles.image} source={{ uri: "https://see.fontimg.com/api/renderfont4/YzBn4/eyJyIjoiZnMiLCJoIjo2OCwidyI6MTAwMCwiZnMiOjY4LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/V2VsY29tZSB0byBteSBDbG9uZQ/honeybee-personal-use-regular.png" }} />

        <View style={styles.inputArea}>

            <TextInput
                style={styles.input}
                placeholder="Pesquisar"
                placeholderTextColor='#707070'
            />
            <TouchableOpacity style={styles.searchIcon} >
                <Ionicons name="search" color='#FFF' size={20} />
            </TouchableOpacity>

        </View>

        <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
        



    </View>




    )

}