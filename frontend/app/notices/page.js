"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 공지사항 데이터를 불러옵니다.
    const savedNotices = JSON.parse(localStorage.getItem('notices')) || [];
    setNotices(savedNotices);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">공지사항 게시판</h1>
      <div className="mb-4">
        <Link href="/notices/new" className="bg-blue-500 text-white px-4 py-2 rounded">
          새 공지사항 작성
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
        {notices.length === 0 ? (
          <p>공지사항이 없습니다.</p>
        ) : (
          notices.map((notice) => (
            <div key={notice.id} className="border-b pb-4 mb-4">
              <h2 className="text-2xl font-bold mb-2">{notice.title}</h2> {/* 제목과 내용 사이에 더 많은 여백 추가 */}
              <p className="mb-4">{notice.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
