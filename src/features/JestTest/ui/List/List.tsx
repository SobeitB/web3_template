interface ListProps {
  items: string[];
}

export const List = (props: ListProps) => {
  const { items = [] } = props;

  if (!items.length) return null;

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
