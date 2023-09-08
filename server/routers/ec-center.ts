import { guideService } from '../GuideService';
import { publicProcedure, router } from '../trpc';

const ecCenterRoute = router({
  guide: publicProcedure.query(() => {
    const guide = guideService.guide.userGuide();
    return guide;
  }),
});

export default ecCenterRoute;
