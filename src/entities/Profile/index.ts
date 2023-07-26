import { Profile, ProfileSchema } from './model/types/profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { Profile, ProfileSchema };

export { profileActions, profileReducer };
export { fetchProfileData };
export { ProfileCard };
