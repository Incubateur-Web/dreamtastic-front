type Props = { smiley: string };

export default function ReactionItem({ smiley }: Props) {
  return (
    <div className="my-auto hover:animate-wiggle" role="button">
      <span
        role="img"
        aria-label="Reaction smiley"
        className="hover:bg-gray-200 px-2 py-1 rounded-md "
      >
        {smiley}
      </span>
    </div>
  );
}
