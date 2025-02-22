import { Request, Response } from 'express'
import * as services from '@services/service'

export const maxArray = (req:Request, res: Response):void => {
  const { array } = req.body
  const result = services.maxArray(array)
  res.json({ result })
}