import React, { useState } from 'react'
import styled from 'styled-components/native'
import { CustomHeader } from '../../../components/CustomHeader/CustomHeader'

const StyledContainer = styled.View`
  flex: 1;
  background-color: white;
`

const StyledForm = styled.View`
  padding: 20px;
`

const StyledTextInput = styled.TextInput`
  height: 40px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 5px;
`

const StyledButton = styled.Button``

interface Vehicle {
    make: string;
    model: string;
    year: string;
}

interface Car {
    id: string;
    name: string;
}

interface CreateCarProps {
    handleAddCar: (car: Car) => void;
}

export const CreateCar: React.FC<CreateCarProps> = ({ handleAddCar }) => {
    const [vehicle, setVehicle] = useState<Vehicle>({
        make: '',
        model: '',
        year: '',
    })

    const handleChange = (name: keyof Vehicle, value: string) => {
        setVehicle(prevVehicle => ({
            ...prevVehicle,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        const newCar: Car = {
            id: Math.random().toString(),
            name: `${vehicle.make} ${vehicle.model} ${vehicle.year}`,
        };
        handleAddCar(newCar);

        // Limpar o formulário
        setVehicle({
            make: '',
            model: '',
            year: '',
        })
    }

    return (
        <StyledContainer>
            <CustomHeader nameScreen="Cadastro de carro" />
            <StyledForm>
                <StyledTextInput
                    placeholder="Marca"
                    value={vehicle.make}
                    onChangeText={value => handleChange('make', value)}
                />
                <StyledTextInput
                    placeholder="Modelo"
                    value={vehicle.model}
                    onChangeText={value => handleChange('model', value)}
                />
                <StyledTextInput
                    placeholder="Ano"
                    value={vehicle.year}
                    onChangeText={value => handleChange('year', value)}
                />
                <StyledButton title="Cadastrar" onPress={handleSubmit} />
            </StyledForm>
        </StyledContainer>
    )
}
