import React, { useRef } from "react";
import { styles } from "./styles";
import {  Text, View, Image, TextInput, TouchableOpacity, Linking} from "react-native";
import { Ionicons } from '@expo/vector-icons';



export const Skills = () => {
    const [user] = React.useState();
    const [password, setPassword] = React.useState('');
    const [hideP, setHideP] = React.useState(true);



    return(<View style={styles.container}>
       
        <Image style={styles.image} source={{uri:"https://see.fontimg.com/api/renderfont4/2OG8e/eyJyIjoiZnMiLCJoIjo1NCwidyI6MTAwMCwiZnMiOjU0LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/THVpenRhZ3JhbQ/buttonidemo.png"}}/>
    
        <TextInput style={styles.input1} placeholder="Nome do Usuário ou Telefone"
        value={user} placeholderTextColor='#707070'/>
   
    <View style={styles.inputArea}>
            <TextInput
              style={styles.input2}
              placeholder="Insira sua Senha"
              value={password}
              onChangeText={ (password) => setPassword(password)}
              secureTextEntry={hideP} 
              placeholderTextColor='#707070'
            />
        
        <TouchableOpacity style={styles.icon} onPress={ () => setHideP(!hideP)}>
           { hideP ?
            <Ionicons name="eye" color='#FFF' size={15}/>
            :
            <Ionicons name="eye-off" color='#FFF' size={15}/>
           }
        </TouchableOpacity>
    </View>
    
    <Text style={styles.textFacebook} onPress={() => Linking.openURL("https://pt-br.facebook.com/login/device-based/regular/login/")}><Image style={styles.FacebookIcon} source={{uri:"https://img.icons8.com/color/344/facebook.png"}}></Image> Entrar com o Facebook </Text>
    
    <Text style={styles.textOu}>━━━━━━━━━━━ OU ━━━━━━━━━━</Text>

    <Text style={styles.textWithLink}>Não tem uma Conta? <Text style={styles.textWithLink} onPress={() => Linking.openURL("https://www.instagram.com/accounts/emailsignup/")}>Cadastre-se</Text></Text>

      
        </View>

    
)}
