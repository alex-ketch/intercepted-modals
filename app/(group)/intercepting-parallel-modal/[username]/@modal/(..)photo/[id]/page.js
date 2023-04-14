import Link from "next/link";

export default function Page({ params }) {
  return (
    <p id={`photo-modal-${params.id}`}>
      Photo MODAL {params.id}.{" "}
      <Link href="/intercepting-parallel-modal/userId">Back to feed</Link>
    </p>
  );
}
