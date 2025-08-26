import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [valor, setValor] = useState('');
  const [cotacao, setCotacao] = useState('');
  const [resultado, setResultado] = useState('');

  const metrosParaCm = () => {
    const res = parseFloat(valor) * 100;
    setResultado(`${valor} metros = ${res} centímetros`);
  };

  const kmParaM = () => {
    const res = parseFloat(valor) * 1000;
    setResultado(`${valor} km = ${res} metros`);
  };

  const cParaF = () => {
    const res = (parseFloat(valor) * 9/5) + 32;
    setResultado(`${valor} ºC = ${res.toFixed(2)} ºF`);
  };

  const dolarParaReal = () => {
    if (!cotacao) {
      setResultado("Informe a cotação do dólar!");
      return;
    }
    const res = parseFloat(valor) * parseFloat(cotacao);
    setResultado(`$${valor} = R$${res.toFixed(2)}`);
  };

  return (
    <View style={estilo.container}>
      <Image 
        style={{ width: 400, height: 120 }}
      />
      <Text style={estilo.titulo}>APP Conversor</Text>
      <Text style={estilo.subtitulo}>Converta o que precisa</Text>

      <TextInput 
        placeholder='Informe o valor:' 
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
        style={estilo.input}
      />

      <TextInput 
        placeholder='Informe a cotação do dólar:' 
        keyboardType="numeric"
        value={cotacao}
        onChangeText={setCotacao}
        style={estilo.input}
      />

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Escolha uma das opções:</Text>

      <TouchableHighlight style={estilo.botao} onPress={metrosParaCm}>
        <Text>M → CM</Text>
      </TouchableHighlight>

      <TouchableHighlight style={estilo.botao} onPress={kmParaM}>
        <Text>KM → M</Text>
      </TouchableHighlight>

      <TouchableHighlight style={estilo.botao} onPress={cParaF}>
        <Text>°C → °F</Text>
      </TouchableHighlight>

      <TouchableHighlight style={estilo.botao} onPress={dolarParaReal}>
        <Text>$ → R$</Text>
      </TouchableHighlight>

      <Text style={estilo.resultado}>{resultado}</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1ffd1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25, 
    color: '#2e5e83ff',
    fontWeight: '800',
    marginTop: 40
  },
  subtitulo: {
    fontSize: 20,
    color: '#2e5e83ff',
    fontWeight: '300'
  },
  input: {
    backgroundColor: '#fff',
    width: '70%',
    marginTop: 15,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  botao: {
    backgroundColor: '#90ee90',
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e5e83ff'
  }
});
