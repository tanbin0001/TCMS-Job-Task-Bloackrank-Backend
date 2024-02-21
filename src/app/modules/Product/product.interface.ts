export type TSportsItem = {
 
    name: string;
    imageLink: string;
    price: number;
    quantity: number;
    sportType: string;
    brand: string;
    size: string;
    material: string;
    color: string;
    condition: 'new' | 'used'
    weight?: number;
    style?: string;
    isCheckedToDelete?:boolean;
  }
  

  export type  TFilterOptions = {
    sportType?: string;
    brand?: string;
    size?: string;
    priceRange?: [number, number]; 
    minPrice?: number;
  maxPrice?: number;
    material?: string;
    color?: string;
    condition?: 'new' | 'used';
    weight?: number;
    style?: string;
  }
  