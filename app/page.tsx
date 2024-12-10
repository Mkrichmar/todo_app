// app/page.tsx (Server Component)
import TaskItem from './components/TaskItem'
import Link from 'next/link'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
async function getTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch tasks')
  return res.json()
}

export default async function Page() {
  const tasks = await getTasks()
  const total = tasks.length
  const completedCount = tasks.filter((t: any) => t.completed).length



  return (
    <div className='page-container'>
      
      <Link href="/create" className="my-global-button">
      <span>Create Task</span>
      <PlusCircleIcon className="h-5 w-5" />
      </Link>
      <div className="flex justify-between items-center">
      {/* Left side */}
        <div className="flex space-x-2">
          <span className="text-gray-600 font-semibold">Tasks:</span>
          <span className="text-blue-600 font-bold">{total}</span>
        </div>

      {/* Right side */}
        <div className="flex space-x-2">
          <span className="text-gray-600 font-semibold">Completed:</span>
          <span className="text-green-600 font-bold">
          {completedCount} of {total}
          </span>
        </div>
      </div>
      <ul className="space-y-2 mt-4">
        {tasks.map((task: any) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}
