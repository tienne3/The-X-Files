function HeaderOnly({ children }) {
  return (
    <div>
      <div className="container max-w-[1600px] mx-auto overflow-hidden">
        <div className="content w-full">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
