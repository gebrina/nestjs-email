import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';
import { PaymentModule } from './payment/payment.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EmailModule,
    PaymentModule,
  ],
})
export class AppModule {}
