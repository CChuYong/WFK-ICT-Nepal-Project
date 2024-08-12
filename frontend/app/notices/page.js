"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const savedNotices = JSON.parse(localStorage.getItem('notices')) || [];
    setNotices(savedNotices);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">School Notice</h1>
      <div className="mb-4">
        <Link href="/notices/new" className="bg-blue-500 text-white px-4 py-2 rounded">
          New Notice Write
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
        {notices.length === 0 ? (
          <p>No Notice</p>
        ) : (
          notices.map((notice) => (
            <div key={notice.id} className="border-b pb-4 mb-4">
              <h2 className="text-2xl font-bold mb-2">{notice.title}</h2> {}
              <p className="mb-4">{notice.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
