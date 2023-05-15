export interface UserStore {
  isRegistered: boolean;
  phoneNumber: string;
  firstName: string;
  setIsRegistered: (value: boolean) => void;
  getIsRegistered: boolean;
}
