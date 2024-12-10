// app/components/TaskItem.tsx
"use client"
import Link from 'next/link'
import { useState } from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'

export default function TaskItem({ task }: { task: any }) {
  const [completed, setCompleted] = useState(task.completed)

  async function handleToggle() {
    const newValue = !completed
    setCompleted(newValue)
    // Perform the update call from the client
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: newValue })
    })
    location.reload()
    // Optionally, trigger a refresh or some other UI update
  }

  async function handleDelete() {
    const confirmDelete = confirm('Are you sure you want to delete this task?')
    if (confirmDelete) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${task.id}`, { method: 'DELETE'})
        location.reload()
    }
  }

  return (
    <li className="my-global-task">
      <input 
        type="radio" 
        checked={completed}
        onChange={handleToggle}
      />
      <Link href={`/${task.id}/edit`} className='flex items-center space-x-4'>
        <span>{task.title}</span>
        <span
        className='w-8 h-8 rounded-full'
        style={{backgroundColor: task.color}}></span>
      </Link>
      <button className=' hover:bg-blue-500 text-white px-3 py-1 rounded ml-auto'
        onClick={handleDelete}><TrashIcon className='h-5 w-5'/></button>
    </li>
  )
}
