export default function Dates({invoiceDate, invoiceNumber, dueDate}) {
  return (
    <article className="mt-10 mb-15 flex item-center justify-end">
      <ul>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <li className="p-1"><span className="font-bold">Invoicer Number:</span>{invoiceNumber}</li>
        <li className="p-1 bg-gray-100"><span className="font-bold">Invoice date:</span>{invoiceDate}</li>
        <li className="p-1"><span className="font-bold">Due Date:</span>{dueDate}</li>
      </ul>
    </article>
  )
}
