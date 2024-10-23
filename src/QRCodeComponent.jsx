import PropTypes from 'prop-types'

const QRCodeComponent = ({ urlInput }) => {
  console.log(urlInput);
  return (
    <div>
      <img src={urlInput} alt="QR Code" />
    </div>
  );
}


QRCodeComponent.propTypes = {
  urlInput: PropTypes.string.isRequired,
}

export default QRCodeComponent;
