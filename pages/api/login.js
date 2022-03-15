import cookie from 'cookie'
import { API_URL } from '@/config/index'

export default async function S(req, res)  {
  if (req.method === 'POST') {
    const { identifier, password } = req.body

    const strapiRes = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         key: "Access-Control-Allow-Credentials", value: "true" ,
         key: "Access-Control-Allow-Origin", value: "*" ,
         key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" ,
         key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" ,
    
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })

    const data = await strapiRes.json()

    if (strapiRes.ok) {
      // Set Cookie
      // Set Cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        })
      )

      res.status(200).json({ user: data.user })
    } else {
      res
        .status(data.statusCode)
        .json({ message: data.message[0].messages[0].message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}