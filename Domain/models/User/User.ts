import { Entity } from '@Entity';
import { Name } from '@models/User/Name';
import { Email } from '@models/User/Email';
import { Password } from '@models/User/Password';
import { PhoneNumber } from '@models/User/PhoneNumber';

class User extends Entity {
  private _name: Name;
  private _email: Email;
  private _password: Password;
  private _phoneNumber?: PhoneNumber;

  constructor(id: string, name: Name, email: Email, password: Password, phoneNumber?: PhoneNumber) {
    super(id);
    this._name = name;
    this._email = email;
    this._password = password;
    this._phoneNumber = phoneNumber;
  }

  get name(): Name {
    return this._name;
  }

  get email(): Email {
    return this._email;
  }

  get password(): Password {
    return this._password;
  }

  get phoneNumber(): PhoneNumber | undefined {
    return this._phoneNumber;
  }

  updateName(name: Name): void {
    this._name = name;
  }

  updateEmail(email: Email): void {
    this._email = email;
  }

  updatePassword(password: Password): void {
    this._password = password;
  }

  updatePhoneNumber(phoneNumber?: PhoneNumber): void {
    this._phoneNumber = phoneNumber;
  }
}

export { User };

