
import { GoogleLogin } from 'react-google-login';


function Logins({ location, history }) {


    const responseGoogle = (response) => {
            console.log(response);
          }
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
    }

    export default Logins