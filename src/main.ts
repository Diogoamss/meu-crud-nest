import { NestFactory } from '@nestjs/core';
import { AppModule } from './contacts/contacts.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
