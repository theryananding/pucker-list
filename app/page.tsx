import { getCandyRankings } from '@/lib/notion';

export default async function Home() {
  const candies = await getCandyRankings();

  return (
    <main>
      {candies.map((candy: any) => (
        <div key={candy.id}>
          <h2>{candy.properties.Name.title[0].plain_text}</h2>
          <p>Type: {candy.properties.Type.select?.name}</p>
          <p>Overall: {candy.properties.Overall.number}</p>
          <p>Taste: {candy.properties.Taste.number}</p>
          <p>Texture: {candy.properties.Texture.number}</p>
          <p>Sour Level: {candy.properties['Sour Level'].number}</p>
          <p>Review: {candy.properties['Short Review'].rich_text[0]?.plain_text}</p>
          <a href={candy.properties.Link.url}>Buy</a>
        </div>
      ))}
    </main>
  );
}