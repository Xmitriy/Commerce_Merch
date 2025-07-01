export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'T-Shirt' | 'SweetPants';
  images: string[];
  description: string;
  inStock: boolean;
  /**
   * Sizes for T-Shirts, SweetPants, Cargo Pants, Shorts, etc.
   */
  sizes?: string[];
  /**
   * Sizing guide for T-Shirts (length, width, sleeve),
   * SweetPants (length, waist),
   * Cargo Pants (full pants guide),
   * Shorts (optional, if needed)
   */
  sizingGuide?: Array<
    | {
        // T-Shirts
        size: string;
        length: number;
        width: number;
        sleeve: number;
      }
    | {
        // SweetPants (legacy)
        size: string;
        length: number;
        width: number;
        sleeve?: number;
      }
    | {
        // Cargo Pants (full guide)
        size: string;
        sidePantsLength: number;
        elasticWaist: number;
        hips: number;
        kneeWidth: number;
        pantsLength: number;
        frontRise: number;
        backRise: number;
      }
  >;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}