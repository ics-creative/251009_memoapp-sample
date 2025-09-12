import type { Memo } from "../types/memo";

const API_BASE_URL = "http://localhost:3000";

/**
 * メモを全件取得する
 */
export const getAllMemos = async (): Promise<Memo[]> => {
  // TODO: メモを全件取得する処理
};

/**
 * メモを1件取得する
 * @param id メモID
 */
export const getMemoById = async (id: number): Promise<Memo> => {
  // TODO: メモを1件取得する処理
};

/**
 * メモを作成する
 * @param memo メモ
 */
export const createMemo = async (memo: { title: string; content: string }): Promise<Memo> => {
  // TODO: メモを作成する処理
};

/**
 * メモを更新する
 * @param id メモID
 * @param memo メモ
 */
export const updateMemo = async (
  id: number,
  memo: {
    title?: string;
    content?: string;
  },
): Promise<Memo> => {
  // TODO: メモを更新する処理
};

/**
 * メモを削除する
 * @param id メモID
 */
export const deleteMemo = async (id: number): Promise<void> => {
  // TODO: メモを削除する処理
};
