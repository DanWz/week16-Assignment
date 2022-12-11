import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useState } from "react";
import useFetch from "./issueFetch";
import { useHistory } from "react-router-dom";

const Create = (url) => {
    console.log('create entry comp loaded')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carColor, setCarColor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const fullName = `${firstName} ${lastName}`;
    const carMM = `${carMake} ${carModel}`
    const cars = {"make": carMM, "color": carColor};
    const history = useHistory();


const handleSubmit = (e) => {
    console.log("s");
    e.preventDefault();
    const NewRecord = { name: fullName, cars: [cars] };
    console.log(NewRecord);
    console.log(url.url);
    const methodz = { 
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(NewRecord)
    }
    setIsLoading(true);

    fetch(url.url, methodz)
     .then(() => {
        console.log('new blog added');
        history.push('/'); 
    });
}

    return (  
        <div>
        <h2>Create New Record</h2>
        {/* <Form onSubmit={HandleSubmit}> */}
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel>First Name</FormLabel>
                <FormControl type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></FormControl>
            <FormGroup>
            </FormGroup>
                <FormLabel>Last Name</FormLabel>
                <FormControl type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></FormControl>
            <FormGroup>
            </FormGroup>
                <FormLabel>Vehicle Make</FormLabel>
                <FormControl type="text" placeholder="Make" value={carMake} onChange={(e) => setCarMake(e.target.value)}></FormControl>
            <FormGroup>
            </FormGroup>
                <FormLabel>Vehicle Model</FormLabel>
                <FormControl type="text" placeholder="Model" value={carModel} onChange={(e) => setCarModel(e.target.value)}></FormControl>
            <FormGroup>
            </FormGroup>
                <FormLabel>Vehicle Color</FormLabel>
                <FormControl type="text" placeholder="Color" value={carColor} onChange={(e) => setCarColor(e.target.value)}></FormControl>
            </FormGroup>
            <Button className="float-end" type="submit">Submit</Button>
        </Form>
        {/* <p>{ fullName } { cars }</p> */}
        </div>
    );
}
 
export default Create;