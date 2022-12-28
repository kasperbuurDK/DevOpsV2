import {userStore} from "../stores/UserStore";
import {Button} from "@mui/material";
import {observer} from "mobx-react-lite";


const About = () => {

    return (

  <div>



            <Button onClick={() => { userStore.addUser('John')}  }> Add User  </Button>

            <ul>
                {userStore.Users.map((userName,key)=>
                    <li key={key}>{userName}</li>
                )}
            </ul>



            <br/>
        </div>
    )

}

export default observer(About);
