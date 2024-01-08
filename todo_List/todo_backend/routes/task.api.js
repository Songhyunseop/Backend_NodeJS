const express = require('express');
const router = express.Router();

// 할 일 추가
router.post('/', (req, res) => {
  res.send('create Task');
});

// 할 일 리스트 조회 (View)
router.get('/', (req, res) => {
  res.send('get Task');
});

// 할 일 수정
router.put('/:id', (req, res) => {
  res.send('update Task');
});

// 할 일 삭제
router.delete('/:id', (req, res) => {
  res.send('delete Task');
});

module.exports = router;
