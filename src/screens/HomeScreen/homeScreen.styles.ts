import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: SIZES.XXXXL,
  },
  container: {
    flex: 1,
  },
  hideButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: COLORS.light.primary[200],
    borderRadius: SIZES.XXXL,
    elevation: 4,
    margin: SIZES.XXXL,
    padding: 32,
    shadowOpacity: 0.24,
    shadowRadius: 4,
  },
});
