"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditTaskForm({ task }: { task: any }) {
  const router = useRouter()
  const [title, setTitle] = useState(task.title)
  const [color, setColor] = useState(task.color)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, color })
    })

    if (res.ok) {
      router.push('/')
    } else {
      alert('Failed to update task')
    }
  }

  return (
    <form onSubmit={handleSubmit}
    className="flex flex-col space-y-4">
      <p>Title</p>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="p-2 rounded border-2 bg-blue-100 text-gray-800 focus:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <p>Color</p>
      <div>
        {['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo'].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setColor(c)}
            className={`w-8 h-8 rounded-full flex-col space-y-6 border-2 ${
              color === c ? 'border-gray-90' : 'border-transparent'
            }`}
            style={{ backgroundColor: c }}
            aria-label={`Select ${c} color`}
          />
        ))}
      </div>
      <button type="submit" className="my-global-button">Save</button>
    </form>
  )
}
