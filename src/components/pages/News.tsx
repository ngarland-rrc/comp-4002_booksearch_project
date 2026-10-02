import SiteMessage from "../common/sitemessage/SiteMessage";
import type { SharedStateProps } from "../common/sitemessage/SiteMessage";

function News({ message, setMessage }: SharedStateProps) {
    return (
        <>
        <h2>Welcome to our news page!</h2>
        <SiteMessage message={message} setMessage={setMessage} />
        </>
    );
}

export default News;