import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../../../config/upload';

import OrphanagesController from '../controllers/OrphanagesController';

const orphanagesRouter = Router();

const upload = multer(uploadConfig);

const orphanagesController = new OrphanagesController();

orphanagesRouter.get('/', orphanagesController.index);

orphanagesRouter.post('/', upload.array('images'), orphanagesController.create);

orphanagesRouter.get('/:id', orphanagesController.show);

export default orphanagesRouter;
