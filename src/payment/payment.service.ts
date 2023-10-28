import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class PaymentService {
  constructor(private emailService: EmailService) {}
}
