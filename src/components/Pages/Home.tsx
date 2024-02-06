import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../UI/Button'
import Task from '../Navigation/Task'

export default function Home() {
    return (
        <div className='container'>
            <section>
                <div className='flex justify-between'>
                    <h1 className={sectionTitleStyle}>To do list</h1>
                    <Button className={blueButtonStyle}><FontAwesomeIcon icon={faPlus} /></Button>
                </div>
                <div>
                    <Task />
                </div>
            </section>
        </div>
    )
}

export const sectionTitleStyle = `text-2xl font-bold mb-4`
export const blueButtonStyle = `bg-blue text-white font-bold py-2 px-4 rounded`