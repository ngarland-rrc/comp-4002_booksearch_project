import SiteMessage from "../common/sitemessage/SiteMessage";
import type { SharedStateProps } from "../common/sitemessage/SiteMessage";

function Social({ message, setMessage }: SharedStateProps) {
    return (
        <>
        <h2>Welcome to your social page!</h2>
        <SiteMessage message={message} setMessage={setMessage} />
        </>
    );
}

export default Social;