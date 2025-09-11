import { NestFactory } from '@nestjs/core';
import { MemoModule } from './memo.module';

async function bootstrap() {
  const app = await NestFactory.create(MemoModule);

  // CORS設定（フロントエンドからアクセス可能にする）
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: ['GET'],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
