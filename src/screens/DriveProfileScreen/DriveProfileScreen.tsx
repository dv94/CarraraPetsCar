import React from 'react'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { ProfileMenuOptions } from '../../screens/ProfileScreen/ProfileMenuOptions'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const StyledContainer = styled.View<any>`
  flex: 1;
  padding-horizontal: 16px;
  background-color: white;
  padding-top: ${({ insets }) => insets};
`
const TitleHelpScreen = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
  margin-bottom: 8px;
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`
const HeaderContainer = styled.View`
  margin-top: 40px;
`
const IconBack = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-bottom: 36px;
`
const AddPaymentIcon = styled<any>(Ionicons)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text_dark};
`
const InfoContentContainer = styled.View`
  margin-bottom: 60px;
`
const TitleContainerPayment = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
  margin-bottom: 8px;
`
const ContainerDriveProfile = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const DriveProfileScreen: React.FC<any> = ({ }) => {
    const insets = useSafeAreaInsets()

    return (
        <StyledContainer insets={insets.top}>
            <StatusBar style="dark" />
            <HeaderContainer>
                <TouchableOpacity onPress={Coordinator.goBack}>
                    <IconBack name={'arrow-left'} />
                </TouchableOpacity>
            </HeaderContainer>

            <InfoContentContainer>
                <TitleHelpScreen>Perfil do Motorista</TitleHelpScreen>
                <DescriptionText>Atualise os dados no perfil do motorista</DescriptionText>
            </InfoContentContainer>

            <ProfileMenuOptions
                label={'Veículos'}
                iconName={'car'}
                onPress={() => Coordinator.goListCarsScreen()}
            />
            <ProfileMenuOptions
                label={'Documentos'}
                iconName={'document'}
                onPress={() => Coordinator.goDriveProfileDocumentScreen()}
            />
            <ProfileMenuOptions
                label={'Gerenciar conta'}
                iconName={'cog'}
                onPress={() => Coordinator.goDriveProfileConfigScreen()}
            />


        </StyledContainer>
    )
}
