import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from '@/styles';
import { isIosPlatform } from '@/constants';

export default styles = StyleSheet.create({
    bodyContainer: {
        paddingHorizontal: 22,
        paddingVertical: 17
    },
    submitButton: {
        paddingHorizontal: 10
    },
    multipleButton: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    btnContainerStyle: {
        marginHorizontal: 10
    },
    flex: {
        flex: 1
    },
    handleBtn: {
        marginHorizontal: 5
    },
    textStyle: {
        color: colors.secondary,
        fontFamily: fonts.poppins,
        fontSize: 16,
        marginLeft: 3,
        textAlign: 'left'
    },
    // Row Column
    row: {
        flexDirection: 'row'
    },
    column: {
        flex: 1,
        marginLeft: isIosPlatform() ? -65 : -55
    },
    columnRight: {
        paddingLeft: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftText: {
        marginTop: 4,
        width: '50%',
        textAlign: 'right',
        position: 'relative',
        top: 0,
        right: 0,
        ...Platform.select({
            android: {
                right: -50
            }
        })
    },
    positionView: {
        justifyContent: 'center',
        width: '45%'
    },
    // help
    helpText: {
        color: colors.darkGray,
        fontFamily: fonts.poppins,
        fontSize: 14,
        textAlign: 'left'
    }
});
