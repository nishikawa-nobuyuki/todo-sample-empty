const Question = (): JSX.Element => {
  return (
    <div className="mt-8 rounded-md border p-4">
      <p className="text-body1-medium">以下の条件を満たすTODOアプリを作成せよ</p>
      <ul className="mt-4 flex flex-col space-y-1">
        <li className="text-body2">1. ユーザーは、新しいタスクを入力することができる。</li>
        <li className="text-body2">2. ユーザーは、タスクを編集することができる。</li>
        <li className="text-body2">3. ユーザーは、タスクを削除することができる。</li>
        <li className="text-body2">4. ユーザーは、タスクの完了状態を切り替えることができる。</li>
      </ul>
    </div>
  );
};

export default Question;
