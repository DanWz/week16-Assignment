import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetch from "./issueFetch";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Route } from "react-router-dom";


const ViewRecord = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const { data: record, isLoading, isError } = useFetch(`${ props.url }/${ id }`);
    //const { pass } = record;
    const [myCarId, setMyCarId] = useState('');
    const handleDelete = (carId, id) => {
        //const updateCars = record.cars.filter(car => car.id !== id);
        /* setRecords(newRecords); */
        console.log(`attempting to remove record with ID of ${carId}`);
        console.log(record.cars);
        //console.log(record.cars[id]);
        /* console.log(record.cars.mapfilter(car => car.index === id)); */
        let newRecord = record.cars.splice(carId,1);
        //console.log(newRecord);
        console.log(record.cars);
        const methodz = { 
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"cars": record.cars})
        }
        let deleteURL = props.url
        fetch(`${ props.url }/${ id }`, methodz)
         .then(() => {
            console.log('removing index');
            history.push(`/record/${id}`); 
        });
        //const updateCars = record.cars.filter(car => {record.cars.index !== id});
        /* console.log(record.cars.filter(id => {record.cars.index !== id})); */
    };
    const userClick= (myCarId) => {
        const updateCars = record.cars.filter(car => {
            console.log(`what's my id? ${myCarId}`);
            return (record.cars.index(id) !== id)
            
        });
        console.log(updateCars);
/*         const methodz = { 
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
        }   
        fetch(url.url, methodz)
         .then(() => {
            console.log('entry deleted');
            //history.push('/'); 
        }); */
    }
    //console.log(record.id);
   //console.log(`${url.url}/${id}/cars[0]`);
    return (
        <div className="record-details">
            <h2>Record Details { id }</h2>
            { isError && <div>{ isError }</div>}
            { isLoading && <div>Retrieving data...</div>}
            { record && (
                <div>
            <h4>Name: {record.name}</h4>
            <h4>Instantiated: {record.createdAt}</h4>
            <h5>registered Vehicles</h5>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Vehicle</th>
                            <th>Color</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.cars.map((car) => (
                        <tr key={record.cars.indexOf(car)}>
                            <td>{record.cars.indexOf(car)}</td>
                            <td>{car.make}</td>
                            <td>{car.color}</td>
                            <td>
                                <ButtonGroup>
                                    {/* <Button variant='outline-info' >
                                        <Link to={`/record/${id}/edit`} >Edit</Link>
                                    </Button> */} 
                                    {/* <Button variant='danger' onClick={console.log(record.cars.indexOf(car))}>Delete</Button> */}  
                                    <Button variant='danger' onClick={() => handleDelete(record.cars.indexOf(car), id)}>Delete</Button>
                                </ButtonGroup>
                            </td>
                        
                    </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        <Button className="float-end">Add Vehicle</Button>
        </div>
        )}
        </div>

    );
}

export default ViewRecord;


{/*<td><button onClick={() => displayRecord(record.id)}>Edit</button>   </td>*/}