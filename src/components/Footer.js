export default function Footer({name, phone, email, bankName, website, bankAccount}) {
    return(
        <footer className="footer border-t-2 border-gray-300 pt-5">
            <ul className="flex flex-wrap items-center justify-center">
                <li><span className="font-bold">Your Name:</span> {name}</li>
                <li><span className="font-bold">Email Address:</span> {email}</li>
                <li><span className="font-bold">Phone Number:</span> {phone}</li>
                <li><span className="font-bold">Bank Name:</span> {bankName}</li>
                <li><span className="font-bold">Bank Holder Name:</span> {name}</li>
                <li><span className="font-bold">Bank Account Number:</span> {bankAccount}</li>
                <li>
                    <span className="font-bold">Website:</span> 
                    <a href={website} rel="noopenner no referrer">
                    {website}
                    </a>
                </li>
            </ul>
        </footer>
    )
}