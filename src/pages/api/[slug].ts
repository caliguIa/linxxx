import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query['slug'];

  if (!slug || typeof slug !== 'string') {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: 'Not found' }));
  }
  /* const data = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: query.id,
      },
    },
  });
  res.status(200).json(data); */
};
