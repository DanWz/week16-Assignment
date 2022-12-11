import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

const Navbar = () => {
    console.log("navbar loaded");
    return (
        <nav className="navbar">
            <h1>Vehicle Records</h1>
            <div>
                <ButtonGroup>
                    <Button variant='outline-info' >
                        <Link to="/">Home</Link>
                    </Button>
                    <Button variant='outline-info'>
                        <Link to="/newRecord">Create Record</Link>
                    </Button>
                    <Button variant='outline-info'>
                        <Link to="/FAQ">FAQ</Link>
                    </Button>
                    {/* <Link to="/newRecord" className='btn btn-primary'>Create Record</Link> */}
                </ButtonGroup>
            </div>
        </nav>
      );
}
 
export default Navbar

{/* <ButtonGroup>
<Button variant='outline-secondary'>
  <Link to="/home">Home</Link>
</Button>
<Button variant='outline-secondary'>
  <Link to="/newRecord">Create Record</Link>
</Button>
<Button variant='outline-secondary'>
  <Link to="/FAQ">FAQ</Link>
</Button>
</ButtonGroup> */}