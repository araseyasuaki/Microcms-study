import { client } from "../libs/microcms";

export default async function Home() {
  // データを取得
  const data = await client.get({ endpoint: "microcms" });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          ブログ一覧
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.contents.map((content) => (
            <li
              key={content.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                {content.title}
              </h2>
              <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: content.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
