import { useTaskDispatch } from "../../store/hooks";
import { removeTask, updateTaskStatus } from "../../store/task-slice";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";


type TaskProps = {
    id: string;
    title: string;
    status: string;
}

export default function Task({ title, id, status }: TaskProps) {
    const taskDispatch = useTaskDispatch();

    function handleUpdateTaskStatus(id: string) {
        taskDispatch(updateTaskStatus({ id }))
    }

    function handleRemoveTask(id: string) {
        taskDispatch(removeTask({ id }));
    }

    return (
        <tr>
            <td className="py-2 px-4">
                {status !== 'pending' ? (
                    <s>{title}</s>
                ) : (
                    title
                )}
            </td>
            <td className="py-2 px-4 text-right">
                {status === 'pending' ? (
                    <Button
                        className={greenButtonStyle}
                        id={id}
                        onClick={() => handleUpdateTaskStatus(id)}>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button >
                ) : ''}
                <Button
                    className={redButtonStyle}
                    id={id}
                    onClick={() => handleRemoveTask(id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button >
            </td >
        </tr >
    )
}

export const greenButtonStyle = `bg-green text-white font-bold py-2 px-4 rounded mx-1`

export const redButtonStyle = `bg-orange text-white font-bold py-2 px-4 rounded mx-1`