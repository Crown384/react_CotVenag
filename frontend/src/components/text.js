import { useState } from "react";

const Name = () => {
    const [text, setName] = useState('PAMA')
    return (
        <p> { text } </p>
    );
}
 
export default Name;