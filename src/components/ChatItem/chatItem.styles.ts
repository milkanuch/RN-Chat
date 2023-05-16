import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import {
  SPACE_GROTESK_MEDIUM,
  SPACE_GROTESK_REGULAR,
} from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    height: 48,
    width: 48,
  },
  avatarContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.XXXXL,
    paddingVertical: SIZES.M,
  },
  dateTime: {
    color: COLORS.lightGrey,
    fontSize: SIZES.M,
  },
  flex: {
    flex: 1,
  },
  infoContainer: {
    justifyContent: 'space-around',
    paddingLeft: SIZES.XS,
  },
  message: {
    color: COLORS.lightGrey,
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onlineIndicator: {
    backgroundColor: COLORS.green,
    borderRadius: 100,
    height: 12,
    position: 'absolute',
    width: 12,
  },
  text: {
    ...SPACE_GROTESK_REGULAR,
  },
  unreadMessages: {
    backgroundColor: COLORS.blue,
    borderRadius: 100,
    color: COLORS.light.primary[200],
    paddingHorizontal: SIZES.XXS,
  },
  unreadMessagesContainer: {
    alignItems: 'flex-end',
    fontSize: SIZES.M,
    justifyContent: 'center',
  },
  username: {
    color: COLORS.darkBlue,
    ...SPACE_GROTESK_MEDIUM,
  },
  usernameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
