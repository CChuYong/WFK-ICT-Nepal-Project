import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col min-h-screen">

        <main className="flex-1 py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <section className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">School Notice</h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
                <div>
                  <h3 className="text-lg font-bold">School Closed on Friday</h3>
                  <p className="text-muted-foreground">
                    Due to a teacher training event, the school will be closed on Friday, May 12th.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Annual Sports Day</h3>
                  <p className="text-muted-foreground">
                    The annual sports day event will be held on Saturday, June 10th. All students are encouraged to
                    participate.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Parent-Teacher Meeting</h3>
                  <p className="text-muted-foreground">
                    The next parent-teacher meeting will be held on Wednesday, May 17th at 6:00 PM.
                  </p>
                </div>
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
