import { getProfessionalExperience } from '@/helperFunctions/getExperience';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const exp = await getProfessionalExperience();
    if (!exp) {
      return res.status(404).json({ error: 'Experience does not exist' });

    }
    else {
      return res.status(200).json(exp);
    }
  }
}