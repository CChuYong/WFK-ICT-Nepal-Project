"use client";  // 이 줄을 추가합니다.

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const savedNotices = JSON.parse(localStorage.getItem('notices')) || [];
    setNotices(savedNotices);
  }, []);

  return (
    <main className="">
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <section className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">School Notice</h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
                {notices.length === 0 ? (
                  <p>No Notice here.</p>
                ) : (
                  notices.map((notice) => (
                    <div key={notice.id} className="mb-6">
                      <h3 className="text-lg font-bold">{notice.title}</h3>
                      <p className="text-muted-foreground">{notice.content}</p>
                    </div>
                  ))
                )}
              </div>
            </section>
            <section className="col-span-1">
              <h2 className="text-2xl font-bold mb-4">School Free Board</h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
                <div>
                  <h3 className="text-lg font-bold">
                    <Link href="#" className="hover:underline" prefetch={false}>
                      Where can I find the school's dress code policy?
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">I'm a new student and need to know the dress code requirements.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    <Link href="#" className="hover:underline" prefetch={false}>
                      Suggestions for the school cafeteria menu
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">I have some ideas to improve the school's lunch options.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    <Link href="#" className="hover:underline" prefetch={false}>
                      Tutoring services available?
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">I'm struggling with a few subjects and need some extra help.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </main>
  );
}
