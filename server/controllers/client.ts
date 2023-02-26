import { Request, Response } from 'express'
import Product from '../models/product'
import ProductStat from '../models/product-stat'
import User from '../models/user'

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()

    const productsWithStats = await Promise.all(
      products.map(async product => {
        const stat = await ProductStat.find({
          productId: product._id,
        })
        return {
          ...product,
          stat,
        }
      })
    )

    res.status(200).json(productsWithStats)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: 'user' }).select('-password')
    res.status(200).json(customers)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
