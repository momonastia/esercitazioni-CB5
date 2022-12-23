export const Text = (props) => {
  const { as, children } = props;

  const Element = as;

  return <Element>{children}</Element>;
};
