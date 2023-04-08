import React, { FC } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './customTextInput.styles';
import { CustomTextInputProps } from './customTextInput.types';

export const CustomTextInput: FC<CustomTextInputProps> = ({
  value,
  onChangeText: handleTextInput,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleTextInput}
        style={styles.input}
        value={value}
        {...props}
      />
    </View>
  );
};
