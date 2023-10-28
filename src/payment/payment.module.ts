import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './paymet.controller';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
