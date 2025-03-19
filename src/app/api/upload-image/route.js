import { UserDetails } from "../../../../models/File";
import connectDb from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        await connectDb();

        const data = await request.formData();
        const file = data.get('file');
        const email = data.get('email');

        if (!file && !email) {
            return NextResponse.json({ success: false })
        }

        const bufferData = await file.arrayBuffer();
        const buffer = Buffer.from(bufferData);

        const newImage = new UserDetails({
            email: email,
            name: file.name,
            data: buffer,
            contentType: file.type
        });
        
        await newImage.save();

        return NextResponse.json({ response: "Successfully Uploaded", success: true });
    }
    catch (error) {
        console.log(error)
        Response.json({ response: "Failed", success: false });
    }
}