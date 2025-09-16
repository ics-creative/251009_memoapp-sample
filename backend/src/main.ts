import { NestFactory } from "@nestjs/core";
import { MemoModule } from "./memo.module";

async function bootstrap() {
  const app = await NestFactory.create(MemoModule);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
