type PostCardProps = {
  title: string;
  excerpt: string;
};

export default function PostCard({ title, excerpt }: PostCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition min-h-[220px] flex flex-col justify-evenly">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{excerpt}</p>
    </div>
  );
}
