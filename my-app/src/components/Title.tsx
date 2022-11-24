type props = {
  content: string;
};

export function Title({ content }: props) {
  return <h1>{content}</h1>;
}
