import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { CustomHeader } from '../../components/CustomHeader/CustomHeader'
import { RFValue } from 'react-native-responsive-fontsize'

const StyledContainer = styled.View`
  flex: 1;
  background-color: white;
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`

const UploadButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 500px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  margin-left: 8px;
`

export const DriveProfileDocumentScreen: React.FC<any> = ({ }) => {
    const handleUpload = () => {
        // Lógica para lidar com o upload do arquivo
    }

    return (
        <StyledContainer>
            <CustomHeader nameScreen="Informe o documento do veiculo" />
            <DescriptionText>Nesse campo o motorista realiza o upload do documento digital do veiculo.</DescriptionText>
            {/* Botão de upload de arquivo */}
            <UploadButton onPress={handleUpload}>
                <Feather name="upload" size={24} color="white" />
                <ButtonText>Upload de Arquivo</ButtonText>
            </UploadButton>
        </StyledContainer>

    )
}
