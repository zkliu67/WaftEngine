const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/org/' });

const dModule = require('../../modules/Organization/organizationController');
const authenticationMiddleware = require('../../middleware/authentication.middleware');

router.get('/', dModule.GetOrganization);
router.post('/', upload.array('file', 2), dModule.SaveOrganization);
router.get('/:slug', dModule.GetOrganizationDetail);
// router
//   .get('/:name',  dModule.getModuleData)
//   .post('/:name', dModule.saveModuleData);

module.exports = router;