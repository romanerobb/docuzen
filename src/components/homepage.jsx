import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();
    
    return (
<>
<h1>Welcome to docuzen</h1>
<p>We're a cloud-based, Knowledge management platform.</p>
<br></br>
<p>DocuZen is a modern cloud-based SaaS company that strictly handles Knowledge Management. It allows for companies to not only create community documentation for their company but properly maintain it as well.</p>
</>
    );
}