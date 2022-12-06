type props = {
  content: string;
};

export function Title({ content }: props) {
  return (
    <div className="container">
      <h1 className="title">{content}</h1>
    </div>
  );
}
