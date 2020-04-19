import mime from 'mime-types'
import _ from 'underscore'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(
      _.chain(mime.types)
          .pairs()
          .sortBy((e) => e[0])
          .reduce((a, e) => {
              a[`.${e[0]}`] = e[1];
              return a;
          }, {}))
}
