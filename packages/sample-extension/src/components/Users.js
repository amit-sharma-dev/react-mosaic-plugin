import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';

export default function Users(data) {
  console.log("users", data.users);
  return (
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
        {data.users.map((user, index) => {
         return(
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td>{user.birthDate}</td>
            <td>{user.gender}</td>
            <td><Button variant="primary">View</Button></td>
          </tr>
         ) 
        })}
          
        </tbody>
      </Table>
      
    // <Container>
    //   {posts.post.map((post, index) => {
    //     return (<Row>
    //       <Col>{post.title}</Col>
    //       <Col>{post.body}</Col>
    //     </Row>)
    //   })}
    // </Container>
  );
}
