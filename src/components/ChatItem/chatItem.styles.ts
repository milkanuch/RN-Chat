import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import {
  SPACE_GROTESK_MEDIUM,
  SPACE_GROTESK_REGULAR,
} from 'constants/fonts/fonts';

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
    paddingHorizontal: 28,
    paddingVertical: 12,
  },
  dateTime: {
    color: COLORS.lightGrey,
    fontSize: 12,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 4,
  },
  message: {
    color: COLORS.lightGrey,
    flex: 1,
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
    flex: 1,
    paddingHorizontal: 6,
  },
  unreadMessagesContainer: {
    alignItems: 'flex-end',
    fontSize: 12,
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
