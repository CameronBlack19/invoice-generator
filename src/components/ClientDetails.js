export default function ClientDetails({clientName, clientAddress, clientEAddress}) {
  return (
    <section className="float-right">
      <p className="font-bold">Billing To: </p>
      <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
      <p>{clientEAddress}</p>
      <p>{clientAddress}</p>
    </section>
  )
}
