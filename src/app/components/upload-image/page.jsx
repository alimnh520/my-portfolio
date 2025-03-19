'use client';

import { useState } from "react";

const UploadMongoImage = () => {
    const [file, setFile] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file && !email) {
            alert('Please select a File');
            return;
        }
        const data = new FormData();
        data.append("email", email);
        data.append('file', file);

        try {
            let result = await fetch('../../api/upload-image', {
                method: "POST",
                body: data,
            });
            result = await result.json();

            if (result.success) {
                alert("File Uploaded Successfully");
            }
            else {
                alert("File Uploaded Fail")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} /><br /><br />
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <button type="submit">Upload</button>
            </form>
        </>
    );
}

export default UploadMongoImage;