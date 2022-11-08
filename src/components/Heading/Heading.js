import PropTypes from "prop-types";

const Heading = props => {
    const {nameHeading} = props;
    return (
      <h2 className="Heading">{nameHeading}</h2>
    );
}
Heading.propType = {
    nameHeading:PropTypes.string.isRequired
}
export default Heading;