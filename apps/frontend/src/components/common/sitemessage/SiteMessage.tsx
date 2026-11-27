import type { Dispatch, SetStateAction } from "react";
import "./SiteMessage.css"

export interface SharedStateProps {
    message: string;
    setMessage: Dispatch<SetStateAction<string>>;
}

export default function SiteMessage({ message, setMessage }: SharedStateProps) {
    return (
        <div className="site-message">
            <label style={{display: "block", margin: "1rem auto", maxWidth: 820}}>
                Shared note:{""}
                <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type something..."/>
            </label>
        </div>
    );
}