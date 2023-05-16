import { FC } from 'react';
import { View, Text } from 'react-native';

import MaskInput from 'react-native-mask-input';

import { PHONE_NUMBER_SETTINGS } from './phoneNumberInput.settings';
import { styles } from './phoneNumberInput.styles';
import { PhoneNumberInputProps } from './phoneNumberInput.types';

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  testID,
  error,
  value,
  onChangeText: handlePhoneNumber,
  onEndEditing: handleEndEditing,
  label = PHONE_NUMBER_SETTINGS.label,
  mask = PHONE_NUMBER_SETTINGS.keyboardMask,
  maxLength = PHONE_NUMBER_SETTINGS.maxLength,
  countryCode = PHONE_NUMBER_SETTINGS.countryCode,
  placeholder = PHONE_NUMBER_SETTINGS.placeholder,
  keyboardType = PHONE_NUMBER_SETTINGS.keyboardType,
  ...props
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[styles.inputContainer, styles.phoneNumberContainer]}
        testID={testID}>
        <Text style={styles.countryCode}>{countryCode}</Text>
        <MaskInput
          keyboardType={keyboardType}
          mask={mask}
          maxLength={maxLength}
          onChangeText={handlePhoneNumber}
          onEndEditing={handleEndEditing}
          placeholder={placeholder}
          style={[styles.input, styles.phoneNumberInput]}
          value={value}
          {...props}
        />
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
