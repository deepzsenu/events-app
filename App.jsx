import Home from "./Screen/home";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "./Screen/signupScreen";
import Verification from "./Screen/verification";
import UserConfirmation from "./Screen/userconfirmation";

import Hingecheck from "./Screen/hingecheck";

import SignIn from "./Screen/signIn";
import CurrentLocationScreen from "./Screen/currentLocationScreen";
import GenderPreference from "./Screen/genderPreference";
import PreferenceSelector from "./Screen/Check";
import ProfessionalInformation from "./Screen/professionalInformation";


const App = () => {
    return (
        // <UserConfirmation></UserConfirmation>
        // <Verification/>
        // <Hingecheck/>
        // <GenderPreference></GenderPreference>
        // <PreferenceSelector></PreferenceSelector>
        // <Home></Home>
        // <SignIn></SignIn>
        <ProfessionalInformation></ProfessionalInformation>
        // <CurrentLocationScreen></CurrentLocationScreen>
    )
}

export default App;
