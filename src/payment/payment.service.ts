import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { Payment } from 'src/interfaces/payment.interface';

@Injectable()
export class PaymentService {
  constructor(private emailService: EmailService) {}

  async create(payment: Payment) {
    const { user } = payment;
    if (user) return this.emailService.sendEmail(user, payment);
    throw new BadRequestException('Please provide valid payment info');
  }
}
