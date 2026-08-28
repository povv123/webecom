import { accessories } from './Products/electronicaccessoriesData';
import { furnitureAccessories } from './Products/furnitureAccessoriesData';
import { homeFurniture } from './Products/homefurdata';
import { laptops } from './Products/laptopData';
import { machineryProducts } from './Products/machineryData';
import { machineTools } from './Products/machineToolData';
import { mobiles } from './Products/mobilephoneData';
import { furnitureItems } from './Products/officefurnitureData';

export const allProductsData = {
  electronics: accessories,
  furnitureacc: furnitureAccessories,
  home: homeFurniture,
  laptops: laptops,
  machinery: machineryProducts,
  tools: machineTools,
  mobile: mobiles,
  office: furnitureItems
  
};