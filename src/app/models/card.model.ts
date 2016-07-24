export interface ICard
{
    id:                 number;
    discount:           number;
    surname:            string;
    name:               string;
    patronymic:         string;
    email:              string;
    phone:              string;

    birthday?:          string;
    total?:             number;
    total_cost?:        number;
    total_discount?:    number;
    total_200ml?:       number;
    total_cold_400ml?:  number;
    total_hot_400ml?:   number;
}

class Card implements ICard
{
    id:                number;
    discount:          number;
    surname:           string;
    name:              string;
    patronymic:        string;
    email:             string;
    phone:             string;

    birthday:          string;
    total:             number;
    total_cost:        number;
    total_discount:    number;
    total_200ml:       number;
    total_cold_400ml:  number;
    total_hot_400ml:   number;
}