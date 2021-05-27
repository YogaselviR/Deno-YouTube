import { Router } from "https://deno.land/x/oak/mod.ts";
import VideoController from '../controllers/VideoController.ts';

const router = new Router();

router.get("/getVideos", VideoController.getVideos);
router.get("/getVideoCategory", VideoController.getVideoCategory);
router.post("/searchVideos", VideoController.searchVideos);
router.get("/getLanguageList", VideoController.getLanguageList); 
router.get("/getSubscriptions", VideoController.getSubscriptions); 
router.post("/getPlayList", VideoController.getPlayList);


export default router;
