import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";

const AddToDo = () => {
    return (
        <>
            <Form className="w-1/2 m-auto">
                <div className="flex gap-x-5 items-center justify-center">
                    <Input
                        name="input"
                        type="text"
                        placeholder="Add ToDo..."
                    />
                    <Button
                        type="submit"
                        text="Add"
                    />
                </div>
            </Form>
        </>
    );
};

export default AddToDo;