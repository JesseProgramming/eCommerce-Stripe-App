import React, {ReactElement} from "react";
import firebase from "../firebase/firebaseClient";

interface Props {}

export default function Login({}: Props): ReactElement {
    return(
        <div>
            <button>Sign in with Google</button>
        </div>
    )
}