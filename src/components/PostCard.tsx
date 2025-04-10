interface PostCardProps {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const PostCard = ({ title, date, description, slug }: PostCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-secondary mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
