import { Manager } from './manager';

export class Auth {
  manager: Manager;
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
}