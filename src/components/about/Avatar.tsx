interface AvatarProps {
  name: string;
  photo?: string | null;
}

const Avatar = ({ name, photo }: AvatarProps) => {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="h-24 w-24 rounded-full object-cover"
      />
    );
  }

  return (
    <div
      className="flex h-24 w-24 items-center
        justify-center rounded-full
        border-2 border-dashed border-forest-900/30
        bg-paper-deep font-display text-2xl
        font-bold text-forest-900/40"
      aria-hidden="true"
    >
      ?
    </div>
  );
};

export default Avatar;
