import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'

import styles from './styles';

import backIcon from '../../assets/images/icons/back.png'
import logoIcon from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) => {
    const { navigate } = useNavigation();

    function goBack() {
        navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={goBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoIcon} resizeMode="contain" />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>

                {headerRight}
            </View>

            {children}

        </View>
    )
}

export default PageHeader;