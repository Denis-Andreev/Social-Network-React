import {withAuthRedirect} from "../redirect";
import Main from "./main";

export const MainContainer = withAuthRedirect(Main);