import { Controller } from '@nestjs/common';
import { MemoService } from './memo.service';

/**
 * メモのコントローラー
 */
@Controller() // TODO: コントローラーのパスを追加: "/memos"
export class MemoController {
  constructor(private readonly memoService: MemoService) {}

  /**
   * TODO: メモを全件取得する
   */

  /**
   * TODO: メモを1件取得する
   * @param id メモID
   */

  /**
   * TODO: メモを作成する
   * @param memo 作成するメモ
   */

  /**
   * TODO: メモを更新する
   * @param id メモID
   * @param memo 更新するメモ
   */

  /**
   * TODO: メモを削除する
   * @param id メモID
   */
}
