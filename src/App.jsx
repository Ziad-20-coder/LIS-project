import { useState } from "react";
import Card from "./Components/Card";
import Create from "./Components/Create";
import Max from "./assets/Blackwell Student Files_ Maxine Caufield (Life is Strange).jpeg";
import Chloe from "./assets/download (4).jpeg";
import Rachel from "./assets/download (3).jpeg";
import "./App.css";

const App = () => {
    const [favTitle, setFavTitle] = useState(null);

    const [students, setStudents] = useState([
        { name: "Maxine Caufield", image: Max },
        { name: "Chloe Price", image: Chloe },
        { name: "Rachel Amber", image: Rachel },
    ]);

    function reciveData(externalDataName, externalDataImage) {
        const newStudent = { name: externalDataName, image: externalDataImage };
        setStudents(() => [...students, newStudent]);
        console.log(externalDataImage, externalDataName);
    }

    function deleteCard(id) {
        setStudents(students.filter((student) => student.name !== id));
    }

    return (
        <div>
            <div className='header'>
                <h1>Hello world!</h1>
                <Create sendData={reciveData} />
            </div>
            <ul>
                {students.map((student) => (
                    <Card
                        key={student.name}
                        image={student.image}
                        title={student.name}
                        isFav={favTitle === student.name}
                        onToggleFav={() => setFavTitle(student.name)}
                        delFunc={() => deleteCard(student.name)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default App;
