declare module '*.png';

type Category = {
  id: number;
  title: string;
  image_url: string;
};

type Extras = {
  id: number;
  name: string;
  value: number;
  quantity?: number;
};

type Food = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: number;
  image_url: string;
  thumbnail_url: string;
  extras: Extras[];
};

interface Order extends Omit<Food, 'id' | 'image_url'> {
  id?: number;
  product_id: number;
}

type Favorite = Omit<Food, 'extras'>;
