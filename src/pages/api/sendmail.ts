import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)

  let transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "ilomon10@gmail.com",
      pass: "tnpdnijczwpvszoy"
    },
    secure: true
  })
  try {
    const mail = await transporter.sendMail({
      "from": `Contact Person<${req.body.email}>`,
      "to": [
        "labmaesa@gmail.com",
        "ilomon10@gmail.com"
      ],
      "subject": `[Contact] ${req.body.name} from ${req.body.company} - maesalab.com`,
      "text": `Name\t\t: ${req.body.name}\nCompany\t\t: ${req.body.company}\nEmail\t\t: ${req.body.email}\nPhone Number\t: ${req.body.phone}\n\n ${req.body.message}`,
    })
    console.log(mail);
    res.status(200).json({ status: "OK" });
  } catch (err: any) {
    console.log("ERROR");
    console.error(err.message);
    res.status(200).json({ status: "ERROR" });
  }
}