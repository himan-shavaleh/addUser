import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  console.log(props.users);
  return (
    <>
      <Card>
        <ul>
          {props.users.map((user) => (
            <li className={classes.list} key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};
export default UserList;
