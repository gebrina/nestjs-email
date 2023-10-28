import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Payment } from 'src/interfaces/payment.interface';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(user: User, payment: Payment) {
    const service_url = 'http://yourwebsite.com/service-category/service';

    try {
      const response = await this.mailerService.sendMail({
        to: user.email,
        subject: 'Payment',
        template: './payment',
        context: {
          name: user.username,
          service_url,
          amount: payment.amount,
        },
      });
      return response;
    } catch (e) {
      return e.message;
    }
  }
}
