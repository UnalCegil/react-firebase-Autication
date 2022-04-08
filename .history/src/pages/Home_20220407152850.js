import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../redux/productsSlice";
import { useProductsListener } from "../config/firebase";

export default function Home() {
  useProductsListener();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  return (
    <div>
      
      
    </div>
  );
}
