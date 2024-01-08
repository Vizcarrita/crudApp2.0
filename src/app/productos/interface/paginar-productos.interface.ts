import { Producto } from "../../models/producto.model";

export interface PaginarProducto{
    total: number;
    producto: Producto[];
}