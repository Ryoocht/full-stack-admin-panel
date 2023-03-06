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

export type ProductData = {
  _doc: Product
  stat: Stat
}

export interface Product {
  _id: string
  name: string
  description: string
  category: string
  price: number
  rating: number
  supply: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Stat {
  _id: string
  productId: string
  totalCustomers: number
  yearlySalesTotal: number
  yearlyTotalSoldUnits: number
  year: number
  createdAt: string
  updatedAt: string
  __v: number
  dailyData: DailyStat[]
  monthlyData: MonthlyStat[]
}

export interface DailyStat {
  _id: string
  date: string
  totalSales: number
  totalUnits: number
}

export interface MonthlyStat {
  _id: string
  month: string
  totalSales: number
  totalUnits: number
}

export interface GeographyData {
  id: string
  value: number
}

export interface SalesData {
  _id: string
  totalCustomers: number
  yearlySalesTotal: number
  yearlyTotalSoldUnits: number
  year: number
  monthlyData: MonthlyStat[]
  dailyData: DailyStat[]
  salesByCategory: SalesByCategory[]
  createdAt: string
  updatedAt: string
  __v: number
}

export interface SalesByCategory {
  shoes: number
  clothing: number
  accessories: number
  misc: number
}
