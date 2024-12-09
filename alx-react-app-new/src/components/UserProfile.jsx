const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', borderRadius: '5px', padding: '10px', margin: '10px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span>{props.age}</p>
            <p style={{ fontStyle: 'italic', color: '#555' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
