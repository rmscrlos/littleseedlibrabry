import { createImageUrlBuilder } from "@sanity/image-url";

import { dataset, projectId } from "../env";

type SanityImageSource = Parameters<ReturnType<typeof createImageUrlBuilder>['image']>[0];

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
	return builder.image(source);
};
