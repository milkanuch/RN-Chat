//NOTE: React Hook-Form requires this to be set up
//SOURCE: https://www.react-hook-form.com/advanced-usage/#TestingForm
import { EMPTY_OBJECT } from 'constants/mocks/mocks';

import 'react-native-gesture-handler/jestSetup';

global.window = EMPTY_OBJECT;
global.window = global;
