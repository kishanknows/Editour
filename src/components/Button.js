import { TouchableOpacity,Text } from "react-native";
import styles from "../styles/styles";

const Button = ({title, onPress, buttonColor, titleColor, buttonStyle, disabled})=>{
    return(
        <TouchableOpacity
            style={{
                ...styles.buttonStyle,
                ...buttonStyle,
                backgroundColor: buttonColor||'transparent',
            }}
            onPress={onPress}
            disabled={disabled}>
            <Text
                style={{...styles.buttonTextStyle, color: titleColor||'black'}}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;
