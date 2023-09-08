import { guideService } from '../GuideService';
import { publicProcedure } from '../trpc';

const ecCenter = publicProcedure.query(async () => {
  const guide = await guideService.guide.userGuide();
  return guide;
});

export default ecCenter;
