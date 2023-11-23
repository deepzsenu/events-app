import Home from "./Screen/home";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "./Screen/signupScreen";
import Verification from "./Screen/verification";
import UserConfirmation from "./Screen/userconfirmation";

import Hingecheck from "./Screen/hingecheck";

import SignIn from "./Screen/signIn";
import CurrentLocationScreen from "./Screen/currentLocationScreen";


const App = () => {
    return (
        // <UserConfirmation></UserConfirmation>
        // <Verification/>
        // <Hingecheck/>
        // <Home></Home>
        // <SignIn></SignIn>
        <CurrentLocationScreen></CurrentLocationScreen>
    )
}

export default App;
