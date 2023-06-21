
export default function UserProfile(props) {
    
  return (
    <div>
      <h3>First Name: Hamza </h3>
      <h3>Last Name: Khaliq </h3>
      <h3>Account Number: 123456789 </h3>
      <h3>Routing Number: 073-1237401 </h3>
      <h3>Contact: yadayadayada@getalife.com</h3>
      <h3>Account Balance: {props.bal1}</h3>
    </div>
  );
}
