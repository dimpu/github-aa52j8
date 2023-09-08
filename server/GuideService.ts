// mock onboarding video guide service

interface VideoInfo {
  id?: string;
  duration?: number;
  cover?: string;
  views?: string;
  video_url?: string;
  title?: string;
}

type Guide = {
  guide_video_list: Array<VideoInfo>;
};

// Imaginary database
const guide: Guide = {
  guide_video_list: [
    {
      id: '100',
      duration: 78,
      cover:
        'https://p16-oec-partner.tiktokcdn-us.com/tos-useast5-i-uhlxaycfue-tx/welcome_video_cover.jpg',
      video_url:
        'http://p16-oec-partner.tiktokcdn-us.com/tos-useast5-i-uhlxaycfue-tx/3a4db21e022c680b7ccccf1f3355faae.mp4',
      title: 'Welcome to TikTok Shop Affiliate',
    },
  ],
};

export const guideService = {
  guide: {
    userGuide: async () => guide,
  },
};
