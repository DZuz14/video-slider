export default function ImageSlide({ url }) {
  return (
    <div
      className="slide"
      style={{
        backgroundImage: `url('${url}')`,
      }}
    />
  );
}
