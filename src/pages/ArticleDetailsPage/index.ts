import { ArticleDetailsPageSchema } from './model/types/index';
import { ArticleDetailsRecommendationsSchema } from './model/types/ArtilceDetailsRecommendationSchema';

export type { ArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentsSchema';

export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsRecommendationsSchema };
export type { ArticleDetailsPageSchema };
