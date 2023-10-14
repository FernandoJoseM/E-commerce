import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function AppNav() {
  const purchases = useSelector((store) => store.purchases)
  const navigate=useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    const token=localStorage.getItem('token')
    if(token){
      setShow(true)
    }else{
      navigate('/login')
    }
  }
  const handleLoginClick=()=>{
    if (localStorage.getItem('token')) {
      // Usuario ya autenticado, hacer lo que sea necesario aquí
      alert('Ya estás autenticado');
    } else {
      navigate('/login');
    }
  }
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link}to='/'><h2>e-commerce</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              localStorage.getItem('token')?(
                <Nav.Link disabled onClick={ handleLoginClick} as={Link}to='/login'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZJJREFUSEu11L9L1WEUx/GXNAdKklHY0mCjU3+A2C+l0aSpv0AIDXSS2lSKGtpbU0eLRLPGVjdxaDH6JUahjYlx4DEu3+5zny/X7lmfcz7v8+s5XTpsXR3WVxdwCw9wKSX0AbN4VUqwDmAacxmh+3jcClICXMcqviJAa0nsGuZxDsPYyEFKgPUkMI6lishtLOI1RtoF/EA3TuNXReQM9vAZF9oFfMNZ9OJ7BhA+0aqmVmpR9Pwqoh3LmRbFjG62C2gccmxMzORUgi6g76RDjsQmEWIh3GiHCOjTk6zpcewAphDr+Rtv0/5v/4+PVtJo+d5qyLGekfUVDKZtahTbxSbep2oOmpFygNiK52mIdSqIv3AXb6rOzQCjeJkcV/AQcdx+VoKjwjh+8R4xYZFYrO1fqwJ6sJUyj1szUyd9PErt/ILL2D+OqwLu4QneYaimeLiFTnzKOHwTeJYDxEEbK32eDPhGOnwvcCcH2EE/olXVnpcKOo9P+IiLOcBReijdqBzsn/h2hUrVZLeodmBdx45X8Afl0EcZyvkojQAAAABJRU5ErkJggg=="/></Nav.Link>
              ):(
                <Nav.Link onClick={ handleLoginClick} as={Link}to='/login'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZJJREFUSEu11L9L1WEUx/GXNAdKklHY0mCjU3+A2C+l0aSpv0AIDXSS2lSKGtpbU0eLRLPGVjdxaDH6JUahjYlx4DEu3+5zny/X7lmfcz7v8+s5XTpsXR3WVxdwCw9wKSX0AbN4VUqwDmAacxmh+3jcClICXMcqviJAa0nsGuZxDsPYyEFKgPUkMI6lishtLOI1RtoF/EA3TuNXReQM9vAZF9oFfMNZ9OJ7BhA+0aqmVmpR9Pwqoh3LmRbFjG62C2gccmxMzORUgi6g76RDjsQmEWIh3GiHCOjTk6zpcewAphDr+Rtv0/5v/4+PVtJo+d5qyLGekfUVDKZtahTbxSbep2oOmpFygNiK52mIdSqIv3AXb6rOzQCjeJkcV/AQcdx+VoKjwjh+8R4xYZFYrO1fqwJ6sJUyj1szUyd9PErt/ILL2D+OqwLu4QneYaimeLiFTnzKOHwTeJYDxEEbK32eDPhGOnwvcCcH2EE/olXVnpcKOo9P+IiLOcBReijdqBzsn/h2hUrVZLeodmBdx45X8Afl0EcZyvkojQAAAABJRU5ErkJggg=="/></Nav.Link>
              )
            }
            
            <Nav.Link as={Link}to='/purchases'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYlJREFUSEu11U1LVVEUxvGfkGMnlURRYYSk0CAa9WIgOHDgF/Ij+HlCHWZakwhHSm9UUqHSZyhj5T6xO+2zzznBvaN7L/s8/73WetZzpkz4MzVhfSXALJ7ifgH+Cms4HXqxNiDEX2KuIvARD4ZCckAu/h4P8T0DXcQe5jEYkgPepIc/4DFOClVcwjMs4C2e9FWSA86S4HV8Sd+v4i62WpXsJMg7LNUgJUDzX4gfYAbbWP2fdtUAIbiZRH/gQqtlg2ZSA4RetGYFG1gvzKQXUgLcxNFQnyMgnTPJAYe4g8/JRV9HQsJdi4jBh7t+uzAHXEk3uY1PCfJtBCS38D7utQHxOyC7uJXa9AhDK7mcdiS68LqJmq4sauIiZhEb3VdJpEDMIbb8r0XtStM8Nvog+dl/UqAW10MgsYzPUzgWI6bvfVCDhPgL3Gi3JTdGHyDOliCx1dHzqnjJRV2ubFt4GtcQsR6eP+56cEgFzbPtl1Et1v/wxgCaPYmN/Ynl2s0bwljAiMU+PzpxwC9yLWYZsvA0egAAAABJRU5ErkJggg=="/></Nav.Link>
            <Nav.Link onClick={handleShow}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAS5JREFUSEvd1LErhVEYx/EPsWBAyqaMJgsT/gKxiDKwkIGMBsz8AYpSbAZh4j9QFmUxKIudJGSRgY7eqzfue+95b/fWzRnPeZ7f9/md55ynQY1XQ431/S/AZxWv6woDQS99RdUEPKD7N6BgYANr2Md8Tler2MQBZrIAvbjDGzrxkQNyjhFM4zALEPYvMYgpHEcCWvCKRnTgpRRgGVs4w3gkYAInuMBwISfrH7TjMQnqwnMEZA9zWE/68J1S6qOdYixCOB0SXmIfbss5COeTOMoBuE+qD6/vZ5Vy0IwntKEf1zlgUYAQtIuFxMks3vNCyg27HtygNVL4j145QNAdxQqG0FQGVBEgsvjiYTEOQuY2FrGDpZRU1n50kwuB6UmbNYGLFls3DiruQ6yD+gV8ASSvMBlWpGEcAAAAAElFTkSuQmCC"/></Nav.Link> <span className='length'>{purchases.length}</span>
            <SideBar show={show}handleClose={handleClose}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;