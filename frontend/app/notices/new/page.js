"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewNotice() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 공지사항 데이터를 로컬 스토리지에 저장
    const notices = JSON.parse(localStorage.getItem('notices')) || [];
    const newNotice = { id: notices.length + 1, title, content };
    notices.push(newNotice);
    localStorage.setItem('notices', JSON.stringify(notices));

    // 저장 후 공지사항 목록 페이지로 이동
    router.push('/notices');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">새 공지사항 작성</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2">제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">  {/* 제목과 내용 사이의 공백을 추가합니다. */}
          <label className="block text-lg font-bold mb-2">내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          저장
        </button>
      </form>
    </div>
  );
}
