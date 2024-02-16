import TaskList from '../Tasks/TaskList'
import { useState } from 'react'
import NewTask from '../Tasks/NewTask'
import Timer from '../Timer/Timer';

export default function Home() {

    const [isNewTaskModal, setIsNewTaskModal] = useState(false)

    function handleOpenNewTaskModal() {
        setIsNewTaskModal(true);
    }

    function handleCloseNewTaskModal() {
        setIsNewTaskModal(false);
    }

    return (
        <div className='container'>
            <section className='bg-white text-black w-full p-4 rounded-xl'>
                <Timer />
                <div>
                    {isNewTaskModal && (
                        <NewTask onDone={handleCloseNewTaskModal} />
                    )}
                    <TaskList openModal={handleOpenNewTaskModal} />
                </div>
            </section>
        </div>
    )
}
