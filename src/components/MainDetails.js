export default function MainDetails({name, address}) {
  return (
    <section className = "flex flex-col justify-end float-left">
        <p className="font-bold">Billing From: </p>
        <h2 className="text-2xl uppercase font-bold mb-1">{name}</h2>
        <p>{address}</p>
  </section>
  )
}
