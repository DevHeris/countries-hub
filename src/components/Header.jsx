/* eslint-disable react/prop-types */
export default function Header({ children }) {
  return (
    <header className="header">
      <h2>Where in the world?</h2>
      <div>{children}</div>
    </header>
  );
}
