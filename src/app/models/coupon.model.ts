export interface ICoupon
{
    id:       number;
    name:     string;
    phone:    string;
    coupon:   number;
    date:     number;

    card?:    number;
    active?:  number;
    type?:    string;
    company?: number;
}

class Coupon implements ICoupon
{
    id:       number;
    name:     string;
    phone:    string;
    coupon:   number;
    date:     number;

    card:    number;
    active:  number;
    type:    string;
    company: number;
}