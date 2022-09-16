import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState("");
  const  [alcool,setAcool]= useState("2.19");
  const [gaso, combGaso] = useState("3.35");
  const [resultado,setResultado]= useState("");
  
	
			
		function dividir(){
		let r = parseFloat(alcool) / parseFloat(gaso);
		
		setResultado(r);
			
			if(r >= 0.7){
				setResultado('gasolina: ' +r)
			}else {
				setResultado ('alcool: ' +r)
			}
	}
	
	
	
	
  return (
    <View style={styles.container}>
		<View style={styles.bloco}>
	  		<Text style={styles.titulo}>Combustível </Text>
		</View>
		<View style={styles.bloco}>
			<Text> Valor 1: </Text>
			<TextInput 
				style={styles.input} 
				value={valor1}
				onChangeText={(valor)=>setValor1(valor)}
				keyboardType="numeric"
			/>
		</View>
		
		
		  
		  
		  
		  
		  <View style={styles.bloco}>
			<TouchableOpacity 
				style={styles.botao}
				onPress={dividir}
			>
				<Text style={styles.textoBotao}>Calcular</Text>
			</TouchableOpacity>  
		</View>
		  
		  
		  
		  
		<View style={styles.bloco}>
			<Text style={styles.titulo}> 
				Resultado: {resultado}
			</Text>
		</View>
    </View>
	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bloco:{
	  marginTop:20,
	  width:'80%',
	  marginLeft:'10%'
  },
  titulo:{
	  fontSize:30,
	  textAlign:'center'
  },
  input:{
	borderWidth:2,
	fontSize:20,
	borderRadius:10
  },
  botao:{
	  backgroundColor:'#000',
	  borderRadius:10
  },
  textoBotao:{
	  color:'#FFF',
	  textAlign:'center',
	  fontSize:20,
  }
});
