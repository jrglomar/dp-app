import { useTaskSelector } from "../../store/hooks"
import Task from "./Task"


export default function TaskList() {
    const tasks = useTaskSelector((state) => state.task.tasks)

    return (
        <section>
            <div className="bg-white shadow-md rounded-md overflow-hidden p-5">
                <h1 className="text-xl font-bold pb-5">List of tasks</h1>

                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 text-left">Task</th>
                            <th className="py-2 px-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => {
                            return (
                                <Task {...task} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
