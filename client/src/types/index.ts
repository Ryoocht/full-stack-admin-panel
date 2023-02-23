export interface User {
  _id: string
  name: string
  email: string
  password: string
  city: string
  state: string
  country: string
  occupation: string
  phoneNumber: string
  transactions: string[]
  role: 'user' | 'admin' | 'superadmin'
}
