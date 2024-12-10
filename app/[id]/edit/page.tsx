import { notFound } from 'next/navigation'
import EditTaskForm from './EditTaskForm'
import BackButton from '@/app/components/BackButton'

async function getTask(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, { cache: 'no-store' })
  if (!res.ok) {
    return null
  }
  const task = await res.json()
  return task
}

export default async function EditTaskPage({ params }: { params: { id: string } }) {
  const task = await getTask(params.id)

  if (!task) {
    // Safely handle the case where the task does not exist (deleted or invalid ID)
    return (
      <div className="page-container">
        <BackButton />
        <h1 className="text-2xl font-bold mb-4">Task Not Found</h1>
        <p className="text-gray-600">The task you are trying to edit does not exist. It might have been deleted.</p>
      </div>
    )
  }

  return (
    <div className="page-container">
      <BackButton />
      <br />
      <EditTaskForm task={task} />
    </div>
  )
}
