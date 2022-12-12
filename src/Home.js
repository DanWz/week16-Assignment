import RecordList from "./RecordList";
import useFetch from "./issueFetch";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState } from "react";
import { data } from "jquery";


function Home(url) {
    const history = useHistory();
    history.push('/'); 
    console.log("home app loaded");
    /* console.log(url.url) */
    const { data: records, isLoading, isError } = useFetch(url.url);
    //const [ records, setRecords ] = useState(recordData)


    const handleDelete = (url, id) => {
        const newRecords = records.filter(record => record.id !== id);
        console.log(`id to slice is ${id}`);
        console.log(records);
        //records = records.slice(id);
        console.log(newRecords);
        records.splice(id, 1)
        /* setRecords(newRecords); */
        console.log(`attempting to remove record with ID of ${id}`);
        console.log(`delete url = ${url}/${id}`);
        //let url = `${url}/${id}`;
        const methodz = { 
            method: 'DELETE'
        }   
        fetch(`${url}/${id}`, methodz)
         .then(() => {
            console.log('entry deleted');
            //history.push('/delete'); 
            //console.log('attempted to push history');
               //records = newRecords,
            console.log(records.splice(id - 1, 1))
        });
        return records.splice(id);

    }

    return (
    <>
        <div className="home">
            { isError && <div>{ isError }</div>}
            { isLoading && <div>Retrieving data...</div>}
            { records && <RecordList url={url.url} records={records} title="All Records" handleDelete={handleDelete} />}
        </div>
    </>
    )
    
  };

export default Home;