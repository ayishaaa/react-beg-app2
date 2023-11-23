import { Link } from "react-router-dom";
import { useState } from "react";
import '../App.css';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [mobile, setMobile] = useState("");
    const [sex, setSex] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    let output = null;
    if (submitted) {
        output = (
            <div className="demo">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Age: {age}</p>
                <p>Mobile: {mobile}</p>
                <p>Sex: {sex}</p>
            </div>
        );
    }

    return (
        <>
            <h1>Registration</h1>
            <form className="form1" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label><br></br>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br /><br />
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <br /><br />
                <label>
                    Mobile:
                    <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </label>
                <br /><br />
                <label>
                    Sex:
                    <select value={sex} onChange={(e) => setSex(e.target.value)}>
                        <option value="">-- Select --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br /><br />
                <button className="btn2" type="submit">Submit</button><br></br>
                <Link to={"/"}>
                    <button className="btn2">Back to Home</button>
                </Link>
            </form>
            {output}
        </>
    )
};

export default Register;
