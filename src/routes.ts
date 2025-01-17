import { Router, Request, Response } from 'express';

import mainController from 'controllers/main-controller';
import sdexRouter from 'controllers/sdex';
import { NetworkFeature } from 'loader/networks/types';
import { networkAwareMiddleware } from 'middleware/network-middleware';

const router = Router();

router.use(mainController);
router.use('/sdex', networkAwareMiddleware([NetworkFeature.sdex]), sdexRouter);

router.get('*', (req: Request, res: Response) => {
  return res.status(404).json({ type: 'General', error: 'Resource not found' });
});

export default router;
