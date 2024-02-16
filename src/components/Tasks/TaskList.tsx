import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTaskSelector } from "../../store/hooks"
import Button from "../UI/Button"
import Task from "./Task"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { blueButtonStyle, sectionTitleStyle } from "../styles/Styles"

type TaskListProps = {
    openModal: () => void;
}

export default function TaskList({ openModal }: TaskListProps) {
    const tasks = useTaskSelector((state) => state.task.tasks)

    return (
        <section className="m-10">
            <div className='flex justify-between items-center mb-4'>
                <h1 className={sectionTitleStyle}>List of task</h1>
                <Button className={blueButtonStyle} onClick={openModal}><FontAwesomeIcon icon={faPlus} /></Button>
            </div>
            <div>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 text-left">Task</th>
                            <th className="py-2 px-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => {
                            return (
                                <Task key={task.id} {...task} />
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2}>
                                {tasks.length === 0 && (
                                    <p className="text-center mt-4">You don't have any task left.</p>
                                )}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}
