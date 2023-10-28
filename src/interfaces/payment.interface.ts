import { User } from './user.interface';

export interface Payment {
  amount: number;
  user: User;
}
