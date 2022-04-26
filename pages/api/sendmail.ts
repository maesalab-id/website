import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface Data {
  name: string,
  email: string,
  company: string,
  message: string,
  phone: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASS
    },
    secure: true
  })
  try {
    const { email, company, name, phone, message }: Data = req.body;
    await transporter.sendMail({
      "from": `Contact Person<${email}>`,
      "to": [
        "labmaesa@gmail.com",
        "ilomon10@gmail.com"
      ],
      "subject": `[Contact] ${name} from ${company} - maesalab.com`,
      "text": `Name\t\t: ${name}\nCompany\t\t: ${company}\nEmail\t\t: ${email}\nPhone Number\t: ${phone}\n\n ${message}`,
    })
    res.status(200).json(req.body);
  } catch (err: any) {
    console.log("ERROR");
    console.error(err.message);
    res.status(400).json({ status: "ERROR" });
  }
}