"use client";
import Link from "next/link";

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "e")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

type Category = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const categories: Category[] = [
  {
    title: "Maternity",
    description: "Tips, experiences and discoveries about being a mother.",
    icon: "",
  },
  {
    title: "Home and Decoration",
    description: "Cozy environments and creative ideas for the home.",
    icon: "",
  },
  {
    title: "Food recipes",
    description: "Homemade, practical and affectionate meals.",
    icon: "",
  },
];

export default function CategorySection() {
  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold text-secondary mb-8">
        Explore by Category
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {categories.map((cat, i) => (
          <Link key={i} href={`/categories/${slugify(cat.title)}`}>
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition"
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-primary">
                {cat.title}
              </h3>
              <p className="text-secondary mt-1">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
