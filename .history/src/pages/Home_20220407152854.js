import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../redux/productsSlice";
import { useProductsListener } from "../config/firebase";

export default function Home() {
  useProductsListener();



  return (
    <div>
      
      
    </div>
  );
}
