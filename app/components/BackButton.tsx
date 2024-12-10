"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center space-x-2 text-white-700 hover:text-gray-200"
    >
      <ArrowLeftIcon className="h-5 w-5" />
      <span className="font-medium"></span>
    </button>
  );
}