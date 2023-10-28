import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from 'src/interfaces/payment.interface';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post()
  create(@Body() payment: Payment) {
    return this.paymentService.create(payment);
  }
}
