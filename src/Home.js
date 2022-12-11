import RecordList from "./RecordList";
import useFetch from "./issueFetch";


function Home(url) {
    console.log("home app loaded");
    /* console.log(url.url) */
    const { data: records, isLoading, isError } = useFetch(url.url);


    const handleDelete = (id) => {
        const newRecords = records.filter(record => record.id !== id);
        /* setRecords(newRecords); */
        console.log(`attempting to remove record with ID of ${id}`)
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