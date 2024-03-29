import Link from "next/link";

export const ButtonLink = ({ destination, label }) => {
  return (
    <Link href={destination}>
      {label}
    </Link>
  );
};
