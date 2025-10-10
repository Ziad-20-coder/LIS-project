import { useState } from "react";
import "../Styles/Form.css";

const Form = ({ reciveData }) => {
    const [form, setForm] = useState({
        name: "",
        image: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log("sent...");
        reciveData(form.name, form.image);
    }

    return (
        <div className="floating-form">
            <form className='form-wrapper' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder='Enter Character name...'
                    required
                />
                <input
                    value={form.image}
                    onChange={(e) =>
                        setForm({ ...form, image: e.target.value })
                    }
                    className='file-handler'
                    type='file'
                />
                <button>Create</button>
            </form>
        </div>
    );
};

export default Form;
