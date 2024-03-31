"use client";

import useDataStore from "@/hooks/useData";
import Link from "next/link";
import Markdown from "@/components/Markdown";

export default function CopywritingPage() {
  const data = useDataStore();

  return (
    <>
      <div className="my-8">
        <Link
          href="/"
          className="bg-gray-100 text-black px-4 py-2 rounded-md hover:bg-gray-50 "
          onClick={() => useDataStore.setState({ copywriting: null })}
        >
          Go Back
        </Link>
        <h1 className="text-xl text-center mt-8">{data?.copywriting?.title}</h1>

        <div className="my-4">
          {data?.copywriting?.description && (
            <Markdown>{data?.copywriting?.description}</Markdown>
          )}
        </div>
      </div>
    </>
  );
}
