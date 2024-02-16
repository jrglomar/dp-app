import { FormEvent, useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useTaskDispatch } from "../../store/hooks";
import { TaskData, addTask } from "../../store/task-slice";
import { v4 as uuidv4 } from 'uuid';

type NewTaskProps = {
    onDone: () => void;
}

export default function NewTask({ onDone }: NewTaskProps) {
    const modal = useRef<ModalHandle>(null);
    const dispatch = useTaskDispatch()
    const form = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    })

    function handleTaskSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const { title } = Object.fromEntries(formData);
        const id = uuidv4();
        const newTask: TaskData = {
            id,
            title: title as string,
            status: 'pending'
        }

        console.log(newTask)
        dispatch(addTask(newTask))
        onDone()
    }

    return (
        <Modal ref={modal} onClose={onDone}>
            <form className="form" onSubmit={handleTaskSubmit} ref={form}>
                <Input label="Task" name="title" id="title" type="text" />
                <p className="text-right">
                    <Button type="button" textOnly onClick={onDone}>
                        Cancel
                    </Button>
                    <Button type="submit">
                        Add Task
                    </Button>
                </p>
            </form>
        </Modal>
    )
}
