import PropTypes from "prop-types";

function HeaderOnly({ children }) {
  return (
    <div>
      <div className="container max-w-[1600px] mx-auto overflow-hidden">
        <div className="content w-full">{children}</div>
      </div>
    </div>
  );
}

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
};
export default HeaderOnly;
