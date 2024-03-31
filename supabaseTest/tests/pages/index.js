import { Fragment, useCallback, useEffect, useState } from 'react';
import { supabase } from '../../supabase/index';

export default function SupabaseTest() {
  const [boards, setBoards] = useState([]);

  const queryDataAll = async () => {
    const { data, error } = await supabase.from('board').select('*');
    setBoards(data);
  };

  useEffect(() => {
    queryDataAll();
  }, []);

  const createBoard = async () => {
    const { data, error } = await supabase
      .from('board')
      .insert([{ title: '제목', content: '내용입니다' }])
      .select();

    queryDataAll();
  };

  console.log('hello');

  return (
    <>
      <h1>게시글 목록</h1>
      {boards.map((el, idx) => (
        <Fragment key={idx}>
          <div>제목 : {el.title}</div>
          <div>내용 : {el.content}</div>
        </Fragment>
      ))}

      <button onClick={createBoard}>글생성</button>
    </>
  );
}
