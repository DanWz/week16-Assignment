import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
//import ViewRecord from "./ViewRecord";
import useFetch from "./issueFetch";

const AddVehicle = (props) => {
    const history = useHistory();
    const { id } = useParams();
    console.log(props.url);
    const { data: record, isLoading, isError } = useFetch(`${ props.url }/${ id }`);
    //console.log(record);
    console.log(`adding a vehicle to list for ID ${id}`);
    //let currentRecord = { props.record };
    //console.log(`This is CurrentRecord ${currentRecord}`);
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carColor, setCarColor] = useState('');
    //const [isLoading, setIsLoading] = useState(false);
    //const fullName = `${firstName} ${lastName}`;
    const carMM = `${carMake} ${carModel}`;
    const cars = {"make": carMM, "color": carColor};
    //const history = useHistory();


const handleSubmit = (e) => {
    console.log("handling Submit below.");
    e.preventDefault();
    //const NewRecord = { name: fullName, cars: [cars] };
    console.log(record);
    const NewRecord = record;
    NewRecord.cars.push(cars);
    console.log(NewRecord);
    console.log(props.url);
    const methodz = { 
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(NewRecord)
    }
    //setIsLoading(true);

    fetch(`${ props.url }/${ id }`, methodz)
     .then(() => {
        console.log('new blog added');
        history.goBack(); 
    });
}

    return (  
        <div>
        <h2>Add Record</h2>
        {/* <Form onSubmit={HandleSubmit}> */}
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel>Vehicle Make</FormLabel>
                <FormControl type="text" placeholder="Make" value={carMake} onChange={(e) => setCarMake(e.target.value)}></FormControl>
            </FormGroup>
            <FormGroup>
                <FormLabel>Vehicle Model</FormLabel>
                <FormControl type="text" placeholder="Model" value={carModel} onChange={(e) => setCarModel(e.target.value)}></FormControl>
            </FormGroup>
            <FormGroup>
                <FormLabel>Vehicle Color</FormLabel>
                <FormControl type="text" placeholder="Color" value={carColor} onChange={(e) => setCarColor(e.target.value)}></FormControl>
            </FormGroup>
            <Button className="float-end" type="submit">Submit</Button>
        </Form>
        {/* <p>{ fullName } { cars }</p> */}
        </div>
    );
}
 
export default AddVehicle;