import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TextInput, Button } from 'react-native'
import { CustomHeader } from '../../components/CustomHeader/CustomHeader'
import { RFValue } from 'react-native-responsive-fontsize'

const StyledContainer = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`

const FormContainer = styled.View`
  margin-bottom: 16px;
`

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`

const Input = styled.TextInput`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
`

export const DriveProfileConfigScreen: React.FC<any> = ({ }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')

    const handleFormSubmit = () => {
        // Lógica para enviar os dados cadastrados para o servidor
        console.log('Name:', name)
        console.log('Email:', email)
        console.log('Phone Number:', phoneNumber)
        console.log('Cep:', cep)
        console.log('Endereco:', endereco)
        console.log('Bairro:', bairro)
        console.log('Numero:', numero)
    }

    return (
        <StyledContainer>
            <CustomHeader nameScreen="Gerenciar conta" />
            <DescriptionText>Nesse campo gerencie seus dados cadastrados.</DescriptionText>

            <FormContainer>
                <Label>Nome:</Label>
                <Input value={name} onChangeText={setName} />

                <Label>Email:</Label>
                <Input value={email} onChangeText={setEmail} />

                <Label>Número de Telefone:</Label>
                <Input value={phoneNumber} onChangeText={setPhoneNumber} />

                <Label>Número do CEP:</Label>
                <Input value={cep} onChangeText={setCep} />

                <Label>Endereço:</Label>
                <Input value={endereco} onChangeText={setEndereco} />

                <Label>Bairro:</Label>
                <Input value={bairro} onChangeText={setBairro} />

                <Label>Número da residencia:</Label>
                <Input value={numero} onChangeText={setNumero} />
            </FormContainer>

            <Button title="Enviar" onPress={handleFormSubmit} />
        </StyledContainer>
    )
}
