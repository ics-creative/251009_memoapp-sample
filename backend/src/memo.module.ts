import { Module } from "@nestjs/common";
import { MemoController } from "./memo.controller";
import { MemoService } from "./memo.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "", // TODO: データベースのパスを追加: "db/memo.sqlite"
      entities: [], // TODO: Memoエンティティを追加
      synchronize: true,
    }),
    TypeOrmModule.forFeature([]), // TODO: Memoエンティティを追加
  ],
  controllers: [MemoController],
  providers: [MemoService],
})
export class MemoModule {}
