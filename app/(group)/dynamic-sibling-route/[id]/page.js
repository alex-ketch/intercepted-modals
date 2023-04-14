import Link from "next/link";

export default function Page({ params }) {
  return (
    <p id={`photo-modal-${params.id}`}>
      Photo MODAL {params.id}.{" "}
      <Link href="/dynamic-sibling-route">Back to feed</Link>
    </p>
  );
}
