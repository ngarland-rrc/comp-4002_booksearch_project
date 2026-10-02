import SiteMessage from "../common/sitemessage/SiteMessage";
import type { SharedStateProps } from "../common/sitemessage/SiteMessage";

function Social({ message, setMessage }: SharedStateProps) {
    return (
        <>
        <SiteMessage message={message} setMessage={setMessage} />
        <h2>Welcome to your social page!</h2>
        </>
    );
}

export default Social;