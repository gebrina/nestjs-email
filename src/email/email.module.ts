import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          secure: false,
          auth: {
            user: config.get('SMTP_USERNAME'),
            pass: config.get('SMTP_PASSWORD'),
          },
        },
        defaults: {
          from: `NEST mAiL ${config.get('SMTP_USERNAME')}`,
        },
        template: {
          adapter: new EjsAdapter(),
          dir: join(__dirname + 'templates'),
          options: {
            strict: false,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class EmailModule {}
