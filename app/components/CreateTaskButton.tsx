"use client"

import Link from 'next/link'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

export default function CreateTaskButton() {
  return (
    <Link 
      href="/create" 
      className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      <span>Create Task</span>
      <PlusCircleIcon className="h-5 w-5" />
    </Link>
  )
}