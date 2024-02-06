import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../UI/Button'
import TaskList from '../Tasks/TaskList'
import { useState } from 'react'
import NewTask from '../Tasks/NewTask'

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
            <section>
                <div className='flex justify-between'>
                    <h1 className={sectionTitleStyle}>To do list</h1>
                    <Button className={blueButtonStyle} onClick={handleOpenNewTaskModal}><FontAwesomeIcon icon={faPlus} /></Button>
                </div>
                <div>
                    {isNewTaskModal && (
                        <NewTask onDone={handleCloseNewTaskModal} />
                    )}
                    <TaskList />
                </div>
            </section>
        </div>
    )
}

export const sectionTitleStyle = `text-2xl font-bold mb-4`
export const blueButtonStyle = `bg-blue text-white font-bold py-2 px-4 rounded`