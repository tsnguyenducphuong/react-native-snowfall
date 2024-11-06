import type { DataSourceParam, SkImage } from '@shopify/react-native-skia';

export interface SnowFallProps {
  count?: number;
  duration?: number;
  minSize?: number;
  maxSize?: number;
  imageScale?: number;
  imagePath?: DataSourceParam;
  customImage?: SkImage;
}
