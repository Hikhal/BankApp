export default function UserProfile(props) {
  return (
    <div className="userProfileContainer">
      <div className="row">
        <div className="label">First Name:</div>
        <div className="value">Hamza</div>
      </div>
      <div className="row">
        <div className="label">Last Name:</div>
        <div className="value">Khaliq</div>
      </div>
      <div className="row">
        <div className="label">Account Number:</div>
        <div className="value">123456789</div>
      </div>
      <div className="row">
        <div className="label">Routing Number:</div>
        <div className="value">073-1237401</div>
      </div>
      <div className="row">
        <div className="label">Contact:</div>
        <div className="value">yadayadayada@getalife.com</div>
      </div>
      <div className="row">
        <div className="label">Account Balance:</div>
        <div className="value">${props.bal1}</div>
      </div>
    </div>
  );
}
