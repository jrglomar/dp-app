import { useTaskDispatch } from "../../store/hooks";
import { removeTask } from "../../store/task-slice";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


type TaskProps = {
    id: string;
    title: string;
}

export default function Task({ title, id }: TaskProps) {
    const taskDispatch = useTaskDispatch();
    function handleRemoveTask(id: string) {
        taskDispatch(removeTask({ id }));
    }

    return (
        <tr>
            <td className="py-2 px-4">{title}</td>
            <td className="py-2 px-4">
                <Button
                    className={mainButtonStyle}
                    id={id}
                    onClick={() => handleRemoveTask(id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button >
            </td >
        </tr >
    )
}

export const mainButtonStyle = `bg-orange text-white font-bold py-2 px-4 rounded`