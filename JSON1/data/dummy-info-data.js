import Category from '../models/categoryInfo';
import Info from '../models/info';

export const CATEGORIESINFO = [
  new Category('01', 'Info 1', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('02', 'Info 2', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('03', 'Info 3', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('04', 'Info 4', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg')
];

export const INFO = [
  new Info (
    'm10',
    ['01'],
    "Info 1",
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg'
  ),
    new Info (
    'm10',
    ['02'],
    "Info 2",
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg'
  ),
  new Info(
    'm10',
    ['03'],
    "Info 3",
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg'
  ),
    new Info (
    'm10',
    ['04'],
    "Info 4",
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg'
  )
];
