import CreateTaskForm from './CreateTaskForm'
import BackButton from '../components/BackButton'

export default function CreateTaskPage() {
  return (
    <div className="page-container">
      <BackButton/>
      <br />
      <CreateTaskForm />
    </div>
  )
}
