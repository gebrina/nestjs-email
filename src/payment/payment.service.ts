import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { Payment } from 'src/interfaces/payment.interface';

@Injectable()
export class PaymentService {
  constructor(private emailService: EmailService) {}

  async create(payment: Payment) {
    const { user } = payment;
    return this.emailService.sendEmail(user, payment);
  }
}
