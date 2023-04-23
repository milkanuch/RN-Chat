import { FC } from 'react';
import { TextInput, View, Text } from 'react-native';

import { styles } from './customTextInput.styles';
import { CustomTextInputProps } from './customTextInput.types';

export const CustomTextInput: FC<CustomTextInputProps> = ({
  value,
  label,
  children,
  error,
  onChangeText: handleTextInput,
  ...props
}) => {
  return (
    <View>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleTextInput}
          style={styles.input}
          value={value}
          {...props}
        />
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
      {children}
    </View>
  );
};
