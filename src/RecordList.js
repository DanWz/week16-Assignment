import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useHistory } from "react-router-dom";

const RecordList = (props) => {
    const history = useHistory();
    const records = props.records;
    const title = props.title;
    const userClick= (props, id) => {
        let url = props.url/id;
        console.log(url);
     /*    const methodz = { 
            method: 'DELETE'
        }   
        fetch(props.url, methodz)
         .then(() => {
            console.log('entry deleted');
            //history.push('/'); 
        }); */
    }
    //const cars = props.cars;
    console.log("made it to Records");
    console.log(records[0]);
    console.log(records[0].cars.length);
   // console.log(props.records);
    console.log(props.title);
    return (
    <div className="record-list">
        <h2>{ title }</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Vehicle Records</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {records.map((record) => (
                <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.cars.length}</td>
                <td>
                    <ButtonGroup>
                        <Button variant='outline-info'>
                            <Link to={`/record/${record.id}`}>Edit</Link>
                        </Button> 
                        <Button  variant='outline-danger' onClick={() => props.handleDelete(props.url, record.id)}>
                            Delete
                        </Button> 
                    </ButtonGroup>
                </td>
                {/*<td><button onClick={() => displayRecord(record.id)}>Edit</button>   </td>*/}
            </tr>
            ))}
            </tbody>
        </Table>
    </div>
    );
};

export default RecordList;